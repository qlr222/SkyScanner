/*!
 * NAVER Maps API v3 - 3.1.6 - 2018-10-02
 *
 * Copyright(c) 2018, NAVER corp, Team mantle
 */
! function(t, e) {
    var n = t.document,
        i = {},
        o = null;
    ! function() {
        var t = function() {};
        t.prototype = {
            constructor: t,
            __export: function() {
                return i
            }
        }, o = new t
    }(), o.onJSContentLoaded = null, o.jsContentLoaded = !1;
    var s = "3.1.6",
        r = null,
        a = null,
        h = /openapi\.map\.naver\.com\/openapi\/v3\/maps\.js\b/,
        l = (t.location.href + "").replace(/\s+/g, "");
    ! function() {
        for (var t = n.getElementsByTagName("script"), e = "", i = t.length - 1; i >= 0 && (e = t[i].src || "", !h.test(e)); i--) e = "";
        if (t = null, e = (e || "").split("?")[1]) {
            e = e.split("&");
            for (var o = e.length - 1; o >= 0; o--) 0 === e[o].indexOf("clientId=") ? r = e[o].replace("clientId=", "") : 0 === e[o].indexOf("ncpClientId=") && (a = e[o].replace("ncpClientId=", ""));
            var s = {
                getHostname: function(t) {
                    var e = t.split("/"),
                        n = t.indexOf("://") > -1 ? e[2] : e[0];
                    return n.split(":")[0].split("?")[0]
                },
                getUrlParams: function(t) {
                    for (var e, n = (t.split("?")[1] || "").split("&"), i = {}, o = 0, s = n.length; o < s; o++) e = n[o].split("="), i[e[0]] = e[1];
                    return i
                },
                patterns: ["webcache.googleusercontent.com"],
                handlers: {
                    webcache_googleusercontent_com: function(t) {
                        var e = s.getUrlParams(t),
                            n = t;
                        return e.q && (n = e.q.split(":").slice(2).join(":")), n
                    }
                },
                getRealUrl: function(t) {
                    for (var e, n = s.getHostname(t), i = s.patterns, o = t, r = 0, a = i.length; r < a; r++)
                        if (e = i[r], n.indexOf(e) > -1) {
                            var h = s.handlers[e.replace(/\./g, "_")] || function() {};
                            o = h(t) || t;
                            break
                        } return o
                }
            };
            l = s.getRealUrl(l)
        }
    }();
    var c = !1,
        u = function(e) {
            if (bt) return void(c && (c = !1));
            Et++;
            var n = function() {
                    Et--, bt = !1, Mt.push(function() {
                        e && e.destroy && e.destroy(!0)
                    }), t.setTimeout(function() {
                        Et <= 0 && wt()
                    }, 100)
                },
                o = function(t, e) {
                    i.console.info([t, "  * Error Code / Error Message: " + e, "  * Client ID: " + (r ? r : a), "  * URI: " + encodeURI(R)], {
                        header: "background:#f00;color:#fff;display:block;"
                    })
                };
            if (!r && !a) return void n();
            var s = (new Date).getTime(),
                h = (N ? "https" : "http") + "://openapi.map.naver.com/v1/validatev3" + (r ? "?clientId=" + r : "") + (a ? "?ncpClientId=" + a : "") + "&uri=" + encodeURIComponent(l) + "&time=" + s;
            c ? (Et--, Mt.push(function() {
                e && e.destroy && e.destroy(!0)
            }), t.setTimeout(function() {
                Et <= 0 && !bt && wt()
            }, 100)) : (i.jsonp(h, {
                callback: function(t) {
                    t && t.result ? (Et--, bt = !0, Mt.length = 0) : (t.error.errorMessage ? o("\ub124\uc774\ubc84 \uc9c0\ub3c4 Open API \uc778\uc99d\uc774 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8 \uc544\uc774\ub514\uc640 \uc6f9 \uc11c\ube44\uc2a4 URL\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.", t.error.errorCode + " / " + t.error.errorMessage) : t.error.message && o("\ub124\uc774\ubc84 \uc9c0\ub3c4 Open API \uc778\uc99d\uc774 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8 \uc544\uc774\ub514\uc640 \uc6f9 \uc11c\ube44\uc2a4 URL\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.", t.error.errorCode + " / " + t.error.message), n())
                },
                error: function() {
                    o("\uc7a0\uc2dc \ud6c4\uc5d0 \ub2e4\uc2dc \uc694\uccad\ud574 \uc8fc\uc138\uc694.", "500 / Internal Server Error (\ub0b4\ubd80 \uc11c\ubc84 \uc624\ub958)"), n()
                }
            }), c = !0)
        };
    i.OPENAPI_CLIENT_ID = r, i.NCP_CLIENT_ID = a;
    var p, d, f, g = {
            onetile: "196",
            dv: "1809.003"
        },
        _ = n.documentElement,
        m = {
            CENTER: 0,
            TOP_LEFT: 1,
            TOP_CENTER: 2,
            TOP_RIGHT: 3,
            LEFT_CENTER: 4,
            LEFT_TOP: 5,
            LEFT_BOTTOM: 6,
            RIGHT_TOP: 7,
            RIGHT_CENTER: 8,
            RIGHT_BOTTOM: 9,
            BOTTOM_LEFT: 10,
            BOTTOM_CENTER: 11,
            BOTTOM_RIGHT: 12
        },
        y = {
            LARGE: 1,
            SMALL: 2,
            BUTTON: 1,
            DROPDOWN: 2
        },
        v = 37,
        T = 38,
        x = 39,
        b = 40,
        E = {
            BACKWARD_CLOSED_ARROW: 1,
            BACKWARD_OPEN_ARROW: 2,
            CIRCLE: 3,
            FORWARD_CLOSED_ARROW: 4,
            FORWARD_OPEN_ARROW: 5
        },
        M = {
            CIRCLE: "circle",
            PATH: "path",
            CLOSED_PATH: "closedPath"
        },
        S = {
            OPEN_ARROW: 1,
            BLOCK_ARROW: 2,
            CIRCLE: 3,
            DIAMOND: 4
        },
        P = {
            BOUNCE: 1,
            DROP: 2
        },
        w = ["A", "AREA", "BUTTON", "EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"],
        O = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick", "dragstart", "drag", "dragend", "touchstart", "touchmove", "touchend", "pinchstart", "pinch", "pinchend", "tap", "longtap", "twofingertap", "keydown", "keyup"],
        C = function() {
            At.mobile ? (p = ["touchstart", "touchend", "click"], d = p.concat(["touchmove"]), f = p, GROUND_DOMEVENTS = p, D = 8) : (p = ["click", "mousedown", "mouseup", "contextmenu"], d = p.concat(["mousemove", "mouseout", "mouseover"]), f = At.browser.safari && 5.1 === At.browser.version ? p.concat(["mouseover", "mouseout"]) : p.concat(["mouseenter", "mouseleave"]), GROUND_DOMEVENTS = p, D = 5, At.touchablePC && (D = 8, d = d.concat("touchstart"), f = f.concat("touchstart")))
        },
        I = {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            contextmenu: "rightclick"
        },
        k = 4,
        A = 100,
        z = 250,
        D = 5,
        B = 5,
        R = ((t.location.host + "").split(":")[0], t.location.href + ""),
        N = 0 === t.location.protocol.indexOf("https"),
        V = R.indexOf("mantle_debug=true") > -1,
        Z = Math.floor(t.devicePixelRatio || 1) > 1 ? 2 : 1,
        F = N ? "https://ssl.pstatic.net/static" : "http://static.naver.net",
        U = F + "/maps/mantle/" + Z + "x",
        X = U + "/dot.gif",
        j = 'Helvetica,AppleSDGothicNeo-Light,nanumgothic,NanumGothic,"\ub098\ub214\uace0\ub515",Dotum,"\ub3cb\uc6c0",sans-serif',
        Y = "margin:0;padding:0;border:solid 0 transparent;display:block;box-sizing:content-box !important;",
        W = "margin:0;padding:0;border:solid 0 transparent;display:inline-block;box-sizing:content-box !important;",
        G = "position:absolute;top:0;left:0;z-index:0;" + Y,
        K = G + "width:0;height:0;overflow:visible;",
        H = "max-width:none !important;max-height:none !important;min-width:0 !important;min-height:0 !important;",
        q = "-webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none; user-drag: none;",
        J = "-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;",
        Q = 1,
        $ = {
            mousedown: !0,
            mouseup: !0,
            mousemove: !0,
            touchstart: !0,
            touchmove: !0,
            touchend: !0,
            dblclick: !0,
            doubletap: !0,
            longtap: !0
        },
        tt = {
            image: 1,
            circle: 2,
            path: 3,
            closedPath: 4,
            html: 5
        },
        et = {
            coords: [11, 0, 9, 0, 6, 1, 4, 2, 2, 4, 0, 8, 0, 12, 1, 14, 2, 16, 5, 19, 5, 20, 6, 23, 8, 26, 9, 30, 9, 34, 13, 34, 13, 30, 14, 26, 16, 23, 17, 20, 17, 19, 20, 16, 21, 14, 22, 12, 22, 12, 22, 8, 20, 4, 18, 2, 16, 1, 13, 0],
            type: "poly"
        },
        nt = "__BEGIN_DISPATCH__",
        it = "__STOP_DISPATCH__",
        ot = "__sbinit",
        st = "__ALL_STOPPED",
        rt = "__",
        at = "_STOPPED",
        ht = "\xa9 NAVER Corp.",
        lt = "__SILENTLY__",
        ct = 1,
        ut = 2,
        pt = ["naver:cadastral"],
        dt = "Point",
        ft = "LineString",
        gt = "Polygon",
        _t = "MultiPoint",
        mt = "MultiLineString",
        yt = "MultiPolygon",
        vt = "GeometryCollection",
        Tt = "Feature",
        xt = "FeatureCollection",
        bt = !1,
        Et = 0,
        Mt = [],
        St = null,
        Pt = function() {},
        wt = function() {
            if (0 !== Mt.length) {
                for (var e = 0, n = Mt.length; e < n; e++) Mt[e]();
                Mt.length = 0, t.clearTimeout(St), St = t.setTimeout(function() {
                    t.N === t.naver.maps && (t.N = null), i = null, t.naver.maps = null, Pt()
                }, 1e3)
            }
        },
        Lt = {
            noop: function() {},
            isDefined: function(t) {
                return t !== e
            },
            isNumber: function(t) {
                return "number" == typeof t
            },
            isString: function(t) {
                return "string" == typeof t
            },
            isFunction: function(t) {
                return "function" == typeof t
            },
            isNull: function(t) {
                return null === t
            },
            isElement: function(t) {
                return !(!t || 1 != t.nodeType)
            },
            hasValue: function(t) {
                return Lt.isDefined(t) && null !== t && "" !== t
            },
            isArray: function() {
                return Array.isArray ? function(t) {
                    return Array.isArray(t)
                } : function(t) {
                    return t && t instanceof Array && t.constructor === Array
                }
            }(),
            isEmptyObject: function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            },
            nearRange: function(t, e, n) {
                return Math.max(Math.min(t, n), e)
            },
            forEach: function(t, e) {
                if (!t || !e) return t;
                if (Lt.isArray(t))
                    for (var n = 0, i = t.length; n < i && !e(t[n], n, t); n++);
                else
                    for (var o in t)
                        if (t.hasOwnProperty(o) && e(t[o], o, t)) break;
                return t
            },
            getIndexOfElement: function() {
                return Array.prototype.indexOf ? function(t, e, n) {
                    return t.indexOf(e, n)
                } : function(t, e, n) {
                    var i = t.length || 0,
                        o = "number" == typeof n && n < 0 ? i + n : n || 0;
                    if (i <= 0) return -1;
                    for (o < 0 && (o = 0); o < i;) {
                        if (o in t && t[o] === e) return o;
                        o++
                    }
                    return -1
                }
            }(),
            keys: function(t) {
                if (!t || "object" != typeof t) return [];
                if (Object.keys) return Object.keys(t);
                var e = [];
                return i.forEach(t, function(t, n) {
                    e.push(n)
                }), e
            },
            extend: function(t) {
                var e, n, i = !1;
                for ("boolean" == typeof t && (i = t, t = arguments[1]), n = 1; n < arguments.length; n++) e = arguments[n], Lt.forEach(e, function(e, n) {
                    switch (typeof e) {
                        case "object":
                            i && e ? e.clone ? t[n] = e.clone() : Lt.isArray(e) ? t[n] = It([], e) : t[n] = It({}, e) : t[n] = e;
                            break;
                        case "undefined":
                            break;
                        default:
                            t[n] = e
                    }
                });
                return t
            },
            equals: function(t, n) {
                var i = typeof t,
                    o = typeof n;
                if (i !== o) return !1;
                if ("object" !== i) return t === n;
                if (t === n) return !0;
                if (t.equals) return t.equals(n);
                if ("object" !== o) return !1;
                var s = Lt.keys(t),
                    r = Lt.keys(n);
                if (s.length !== r.length) return !1;
                for (var a in t)
                    if (t.hasOwnProperty(a)) {
                        var h = t[a],
                            l = n ? n[a] : e;
                        if ("object" != typeof h) {
                            if (h !== l) return !1
                        } else if (h.equals) {
                            if (h.equals(l) === !1) return !1
                        } else if (Lt.equals(h, l) === !1) return !1
                    } return !0
            },
            bind: function() {
                return Function.prototype.bind ? function(t, e) {
                    for (var n = [], i = 1, o = arguments.length; i < o; i++) n.push(arguments[i]);
                    return t.bind.apply(t, n)
                } : function(t, e) {
                    for (var n = [], i = 2, o = arguments.length; i < o; i++) n.push(arguments[i]);
                    return function() {
                        for (var i = [], o = 0, s = arguments.length; o < s; o++) i[o] = arguments[o];
                        return t.apply(e, n.concat(i))
                    }
                }
            }(),
            capitalize: function() {
                var t = {};
                return function(e) {
                    return t[e] || (t[e] = e.substring(0, 1).toUpperCase() + e.substring(1)), t[e]
                }
            }(),
            toNumber: function(t) {
                return parseFloat(t) || 0
            }
        };
    Lt.extend(i, Lt), Lt.BLANK_IMAGE = X, i.calcFitZoomAndCenter = function(t, e, n, o, s, r) {
        function a(t, e, n) {
            return t.width >= e && t.height >= n
        }
        var h = n.fromCoordToPoint(e.getMin()),
            l = n.fromCoordToPoint(e.getMax()),
            c = Bt.bounds(h, l);
        h = c.getMin(), l = c.getMax();
        for (var u = l.x - h.x, p = l.y - h.y, d = Dt(u / 2 + h.x, p / 2 + h.y), f = r || 0; a(t, u, p) && !(f > o);) f++, u *= 2, p *= 2;
        return f--, f = i.nearRange(f, s, o), {
            zoom: f,
            center: n.fromPointToCoord(d),
            centerPoint: d
        }
    }, i.calcAnchorPosition = function(t, e) {
        if (e instanceof Dt) return e;
        if (i.isFunction(e)) return e(t.width, t.height);
        var n = t.width,
            o = t.height,
            s = n / 2,
            r = o / 2,
            a = null;
        switch (e) {
            case m.CENTER:
                a = Dt(s, r);
                break;
            case m.TOP_LEFT:
            case m.LEFT_TOP:
                a = Dt();
                break;
            case m.TOP_CENTER:
                a = Dt(s, 0);
                break;
            case m.TOP_RIGHT:
            case m.RIGHT_TOP:
                a = Dt(n, 0);
                break;
            case m.LEFT_CENTER:
                a = Dt(0, r);
                break;
            case m.LEFT_BOTTOM:
            case m.BOTTOM_LEFT:
                a = Dt(0, o);
                break;
            case m.RIGHT_CENTER:
                a = Dt(n, r);
                break;
            case m.RIGHT_BOTTOM:
            case m.BOTTOM_RIGHT:
                a = Dt(n, o);
                break;
            case m.BOTTOM_CENTER:
                a = Dt(s, o);
                break;
            default:
                a = Dt(s, o)
        }
        return a
    }, i.round = Math.round, i.floor = Math.floor, i.ceil = Math.ceil, i.trbl = function(t) {
        return t = It({
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t), t.top = parseFloat(t.top), t.right = parseFloat(t.right), t.bottom = parseFloat(t.bottom), t.left = parseFloat(t.left), t
    }, i.trbl_isZero = function(t) {
        return 0 === t.top && 0 === t.right && 0 === t.bottom && 0 === t.left
    }, i.trbl_abs = function(t) {
        return t.top = Math.abs(t.top), t.right = Math.abs(t.right), t.bottom = Math.abs(t.bottom), t.left = Math.abs(t.left), t
    }, i.getLiteralType = function(t) {
        var e = {
            Point: ["x", "y"],
            LatLng: ["lat", "lng"],
            PointBounds: ["minX", "minY", "maxX", "maxY"],
            LatLngBounds: ["west", "south", "east", "north"]
        };
        if (i.isArray(t)) return 2 === t.length ? i.Point : 4 === t.length ? i.PointBounds : 3 === t.length ? i.Point : null;
        for (var n in e)
            if (e.hasOwnProperty(n) && i.isObjectLiteral(t, e[n])) return i[n];
        return null
    }, i.isObjectLiteral = function(t, e) {
        if (!t || "object" != typeof t) return !1;
        for (var n = !0, i = 0, o = e.length; i < o; i++)
            if (!(e[i] in t)) {
                n = !1;
                break
            } return n
    }, i.box = function(t) {
        if (t instanceof i.Point || t instanceof i.PointBounds || t instanceof i.Size) return t;
        for (var e, n = [], o = 0, s = arguments.length; o < s; o++) {
            if ("function" == typeof arguments[o]) {
                e = arguments[o];
                break
            }
            n.push(arguments[o])
        }
        return e || (e = i.getLiteralType.apply(this, n)), e && e.apply(e, n)
    }, i.boxToIcon = function(t) {
        if (!t) return {
            url: U + "/marker-default.png",
            size: i.Size(22, 33),
            scaledSize: i.Size(22, 33),
            origin: i.Point(0, 0),
            anchor: i.Point(11, 33),
            type: "image"
        };
        if ("string" == typeof t) return {
            url: t,
            type: "image"
        };
        var e = i.extend({}, t);
        if (e.size && (e.size = i.box(e.size, Vt)), e.scaledSize && (e.scaledSize = i.box(e.scaledSize, Vt)), e.origin && (e.origin = i.box(e.origin, Dt)), e.anchor && "number" != typeof e.anchor && (e.anchor = i.box(e.anchor, Dt)), i.isString(e.url)) e.type = "image";
        else if (e.path || e.style) {
            var n = [
                [Dt(0, 12), Dt(12, 0), Dt(24, 12)],
                [Dt(0, 0), Dt(12, 12), Dt(24, 0)]
            ];
            switch (e.path) {
                case E.CIRCLE:
                    e.style = M.CIRCLE;
                    break;
                case E.BACKWARD_CLOSED_ARROW:
                case E.FORWARD_CLOSED_ARROW:
                    e.path = n[e.path % 2], e.style = M.CLOSED_PATH;
                    break;
                case E.BACKWARD_OPEN_ARROW:
                case E.FORWARD_OPEN_ARROW:
                    e.path = n[(e.path - 1) % 2], e.style = M.PATH;
                    break;
                default:
                    i.isArray(e.path) && (e.path = i.boxToPath(e.path))
            }
            var o;
            e.style === M.CLOSED_PATH ? (o = i.DrawingUtil.getBounds(e.path), e.minBoundPoint = o.min, e.maxBoundPoint = o.max, e.paths = [e.path]) : e.style === M.PATH ? (o = i.DrawingUtil.getBounds(e.path), e.minBoundPoint = o.min, e.maxBoundPoint = o.max) : e.style === M.CIRCLE && (e.path = null, e.radius = e.radius || 10, e.center = {
                x: e.radius,
                y: e.radius
            }), e.type = e.style
        } else e.content && (e.type = "html");
        return e
    }, i.boxToPath = function(t) {
        var e = [];
        return i.forEach(t, function(t) {
            e.push(i.box(t))
        }), e
    }, i.now = function() {
        return Date.now ? function() {
            return Date.now()
        } : function() {
            return (new Date).getTime()
        }
    }(), i.guid = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0,
                n = "x" == t ? e : 3 & e | 8;
            return n.toString(16)
        }).toUpperCase()
    }, i.jsonp = function(e, o) {
        var s = It({
                charset: "utf-8",
                callbackname: "callback",
                callback: null,
                data: {}
            }, o),
            r = Zt.createElement("script"),
            a = n.getElementsByTagName("head")[0],
            h = n.body;
        r.type = "text/javascript", r.charset = s.charset, a ? a.appendChild(r) : h && h.appendChild(r);
        var l = i.jsonp.id++,
            c = "__naver_maps_callback__" + l,
            u = function() {
                t.setTimeout(function() {
                    try {
                        Zt.removeElement(r)
                    } catch (e) {}
                    t[c] = null
                }, 10)
            },
            p = function(t) {
                r.onreadystatechange && (r.onreadystatechange = null), s.callback && s.callback(t), u()
            },
            d = function() {
                s.error && s.error(), u()
            };
        t[c] = function(t) {
            try {
                p(t)
            } catch (e) {}
        }, "onreadystatechange" in r ? r.onreadystatechange = function() {
            "loaded" === r.readyState && (t[c] ? d() : u(), r.onreadystatechange = null)
        } : (r.onload = function() {
            r.onload = null, r.onerror = null
        }, r.onerror = function() {
            d(), r.onload = null, r.onerror = null
        }), o && (e += (e.indexOf("?") === -1 ? "?" : "&") + s.callbackname + "=" + c), s.data && i.forEach(s.data, function(t, n) {
            e += ["&", n, "=", t].join("")
        }), r.src = e
    }, i.jsonp.id = 0;
    var Ot = i.noop,
        Ct = i.bind,
        It = i.extend;
    i.glSupported = function() {
        return !1
    };
    var kt = function() {
        var t = i.Agent.browser.msie;
        i.console = {
            header: t ? " NAVER Maps JavaScript API v3 \n\n" : "%c NAVER Maps JavaScript API v3 %c\n\n",
            headerStyle: t ? "" : "background: #2db400; color: white; display: block;",
            msgStyle: t ? "" : "background: #fff; color: #334231; display: inline;",
            once: function() {
                var e = {};
                return function(n, o) {
                    if (!e[n]) try {
                        var s = It({
                            header: i.console.headerStyle,
                            msg: i.console.msgStyle
                        }, o || {});
                        t && (s.header = "", s.msg = ""), console.info(i.console.header + n, s.header, s.msg), e[n] = 1
                    } catch (r) {}
                }
            }(),
            info: function(e, n) {
                try {
                    var o = It({
                        header: i.console.headerStyle,
                        msg: i.console.msgStyle
                    }, n || {});
                    t && (o.header = "", o.msg = ""), console.info(i.console.header + e, o.header, o.msg)
                } catch (s) {}
            }
        }
    };
    ! function() {
        function e(t) {
            var e, n;
            return (e = /(webkit)[ \/]([\w.]+)/.exec(t)) ? ((n = /chrome\/([\w.]+)/.exec(t)) ? (e[2] = n[1], e[3] = "chrome") : (n = /version\/([\w.]+)/.exec(t)) && (e[2] = n[1], /safari\/([\w.]+)/.exec(t) && (e[3] = "safari")), t.indexOf(" edge") > -1 && (e[3] = "edge"), t.indexOf("naver(") > -1 && (e[3] = "naver"), e) : (e = /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(t)) ? e : (e = /(msie) ([\w.]+)/.exec(t)) ? e : (e = /(mozilla)(?:.*? rv:([\w.]+))?/.exec(t)) ? (n = /rv:([\w.]+)/.exec(t), e[2] = n[1], t.indexOf("trident") > -1 && (e[1] = "msie"), e) : []
        }
        for (var o = navigator.userAgent.toLowerCase(), s = e(o), r = {}, a = !1, h = ["ipad", "ipod", "iphone"], l = ["android", "nokia", "webos", "opera mini", "blackberry"].concat(h), c = 0; c < l.length; c++)
            if (o.indexOf(l[c]) > -1) {
                a = l[c];
                break
            } for (c = 0; c < h.length; c++)
            if (a === h[c]) {
                a = "iOS";
                break
            } if (r[s[1]] = !0, r.version = parseFloat(s[2]), r.msie) {
            var u = /trident\/([\w.]+)/.exec(o);
            u && u[1] && (r.trident = parseFloat(u[1])), (n.documentMode && n.documentMode <= 8 || r.version <= 8) && (r.csszoom = !0)
        }
        if (s[3] && (r[s[3]] = !0), "android" !== a || r.chrome || r.naver || !r.webkit || (r.android = !0), i.Agent = {
                browser: r,
                devicePixelRatio: t.devicePixelRatio || 1,
                mobile: a
            }, "android" === a) {
            var p = o.match(/android\s([0-9\.]*)/);
            p && p[1] && (i.Agent.version = p[1])
        }
        var d = !1,
            f = !1,
            g = !1;
        if (a) {
            if ("iOS" === a) f = !0;
            else if ("android" === a) {
                var _ = parseFloat(i.Agent.version);
                _ >= 4.1 && (f = !0, _ < 4.2 && (d = !0))
            }
        } else f = !0, r.chrome ? (g = !0, f = !1) : r.msie && r.version < 10 ? f = !1 : r.safari && 5.1 === r.version && (f = !1);
        !a && ("ontouchstart" in t || navigator.maxTouchPoints) && (i.Agent.touchablePC = !0), i.Agent.usingGPU = f, i.Agent.restrictiveGPU = d, i.Agent.poorGPU = g
    }();
    var At = i.Agent;
    Lt.Agent = At, C(), kt();
    var zt = function(t, e, n, i) {
        var o = function() {},
            s = [],
            r = {},
            a = {};
        e && (o.prototype = e.prototype, a = new o), Lt.isArray(n) ? (s = n, r = i) : r = n || {};
        for (var h = 0, l = s.length; h < l; h++) Lt.forEach(s[h], function(t, e) {
            if (a[e]) throw new Error("property '" + e + "' is already exist.");
            a[e] = t
        });
        return Lt.forEach(r, function(t, e) {
            a[e] = t
        }), a.constructor = t, t.prototype = a, t
    };
    zt.getMembers = function(t) {
            var e = {};
            return Lt.forEach(t.prototype, function(t, n) {
                "constructor" !== n && (e[n] = t)
            }), e
        }, Lt.ClassExtend = zt, i.easing = {
            linear: function(t, e, n) {
                return t * n + e
            },
            easeInQuad: function(t, e, n) {
                return n * t * t + e
            },
            easeOutQuad: function(t, e, n) {
                return -n * t * (t - 2) + e
            },
            easeInCubic: function(t, e, n) {
                return n * t * t * t + e
            },
            easeOutCubic: function(t, e, n) {
                return n * ((t -= 1) * t * t + 1) + e
            },
            easeOutBounce: function(t, e, n) {
                return t < 1 / 2.75 ? n * (7.5625 * t * t) + e : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
            }
        }, i.TransitionQueue = function() {
            var t = [],
                e = null;
            return {
                getQueue: function() {
                    return t
                },
                addJob: function(e) {
                    return 1 === t.push(e) && this._run(), e
                },
                pop: function() {
                    var e = t.pop();
                    return 0 === t.length && this._stop(), e
                },
                removeJob: function(e) {
                    var n = i.getIndexOfElement(t, e);
                    return n > -1 && t.splice(n, 1), 0 === t.length && this._stop(), n > -1 ? e : null
                },
                _run: function() {
                    e || (this._fProcess || (this._fProcess = Ct(this._process, this)), e = i.requestAnimationFrame(this._fProcess))
                },
                _process: function() {
                    var n, o = t.length;
                    if (o > 0) {
                        for (o -= 1; o >= 0; o--) n = t[o], n && n();
                        e = i.requestAnimationFrame(this._fProcess)
                    } else e = null, this._stop()
                },
                _stop: function() {
                    !e || t.length > 0 || (i.cancelAnimationFrame(e), e = null, t.length = 0, t = [])
                }
            }
        }(), i.Transition = function(t) {
            this.relations = [], this.options = It({
                start: Ot,
                progress: Ot,
                complete: Ot,
                stop: Ot,
                step: 0,
                duration: 0,
                easing: i.easing.linear
            }, t)
        }, i.Transition.prototype = {
            constructor: i.Transition,
            isRunning: function() {
                return this._animLoop !== e
            },
            _getEasing: function(t) {
                return i.isFunction(t) ? t : i.easing[t]
            },
            run: function(t, e, n) {
                n = n || {};
                var o = this.options,
                    s = this._getEasing(n.easing || o.easing),
                    r = n.duration || o.duration,
                    a = i.now(),
                    h = o.step,
                    l = n.infinity || !1,
                    c = a,
                    u = {
                        from: t,
                        to: e,
                        easing: s,
                        progress: {}
                    },
                    p = this;
                this.stop(), o.start(), Ut.trigger(p, "start"), this._animLoop = function() {
                    var n = i.now(),
                        d = n - a,
                        f = d / r;
                    if (!(n - c < h)) return c = n, d >= r ? u.progress = e : i.forEach(t, function(t, n) {
                        u.progress[n] = s(f, t, e[n] - t)
                    }), u.factor = f, d < r ? (o.progress(u), Ut.trigger(p, "progress", u)) : (o.progress(u), Ut.trigger(p, "progress", u), l || (p.stop(), o.complete(), Ut.trigger(p, "complete")), void 0)
                }, i.TransitionQueue.addJob(this._animLoop)
            },
            stop: function() {
                this.isRunning() && (i.TransitionQueue.removeJob(this._animLoop), this._animLoop = null, delete this._animLoop, this.options.stop(), Ut.trigger(this, "stop"))
            },
            addListener: function(t, n) {
                if ("string" != typeof t && n === e) {
                    var o = t,
                        s = [],
                        r = this;
                    return i.forEach(o, function(t, e) {
                        s.push(Ut.addListener(r, e, t))
                    }), this.relations = this.relations.concat(s), s
                }
                var a = Ut.addListener(this, t, n);
                return this.relations.push(a), a
            },
            removeListener: function(t) {
                var e = i.getIndexOfElement(this.relations, t);
                e > -1 && this.relations.splice(e, 1), Ut.removeListener(t)
            },
            clearListeners: function() {
                for (var t = 0, e = this.relations.length; t < e; t++) Ut.removeListener(this.relations[t]);
                this.relations.length = 0, this.relations = []
            }
        },
        function() {
            for (var e = 0, n = ["webkit", "moz"], o = 0; o < n.length && !t.requestAnimationFrame; ++o) t.requestAnimationFrame = t[n[o] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[n[o] + "CancelAnimationFrame"] || t[n[o] + "CancelRequestAnimationFrame"];
            i.requestAnimationFrame = function(n, o) {
                var s = i.now(),
                    r = Math.max(0, 16 - (s - e)),
                    a = t.setTimeout(function() {
                        n(s + r)
                    }, r);
                return e = s + r, a
            }, i.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }, t.requestAnimationFrame || (t.requestAnimationFrame = i.requestAnimationFrame), t.cancelAnimationFrame || (t.cancelAnimationFrame = i.cancelAnimationFrame)
        }(), i.Point = function(t, e) {
            if (!(this instanceof i.Point)) return new i.Point(t, e);
            var n = this._unbox(t, e);
            this.x = n[0], this.y = n[1]
        }, i.Point.prototype = {
            constructor: i.Point,
            _unbox: function(t, e) {
                var n, o, s = t,
                    r = s && i.getLiteralType(s);
                if (i.isArray(s)) n = s[0], o = s[1];
                else if (r) {
                    if (r !== Dt) throw new Error("not a PointLiteral");
                    n = s.x, o = s.y
                } else n = "number" == typeof t ? t : parseFloat(t), o = "number" == typeof e ? e : parseFloat(e);
                return [n || 0, o || 0]
            },
            clone: function() {
                return new i.Point(this.x, this.y)
            },
            toString: function() {
                return "(" + this.x + "," + this.y + ")"
            },
            equals: function(t) {
                return t = i.box(t, Dt), this.x == t.x && this.y == t.y
            },
            add: function(t, e) {
                return t = i.box(t, e, Dt), this.x += t.x, this.y += t.y, this
            },
            sub: function(t, e) {
                return t = i.box(t, e, Dt), this.x -= t.x, this.y -= t.y, this
            },
            mul: function(t, e) {
                return t = i.box(t, e, Dt), this.x *= t.x, this.y *= t.y, this
            },
            div: function(t, e) {
                return t = i.box(t, e, Dt), this.x /= t.x, this.y /= t.y, this
            },
            round: function() {
                return this.x = i.round(this.x), this.y = i.round(this.y), this
            },
            floor: function() {
                return this.x = i.floor(this.x), this.y = i.floor(this.y), this
            },
            ceil: function() {
                return this.x = i.ceil(this.x), this.y = i.ceil(this.y), this
            },
            toArray: function() {
                return [this.x, this.y]
            }
        };
    var Dt = i.Point;
    i.PointBounds = function(t, e) {
        if (!(this instanceof Bt)) return new Bt(t, e);
        var n = this._unbox(t, e);
        this._min = n[0], this._max = n[1]
    }, i.PointBounds.prototype = {
        constructor: i.PointBounds,
        _unbox: function(t, e) {
            var n, o, s = e ? null : t;
            if (s)
                if (i.isArray(s)) n = new Dt(s[0], s[1]), o = new Dt(s[2], s[3]);
                else {
                    if (i.getLiteralType(s) !== Bt) throw new Error("not a PointBoundsLiteral");
                    n = new Dt(s.minX, s.minY), o = new Dt(s.maxX, s.maxY)
                }
            else n = new Dt(t), o = new Dt(e);
            return [n || t, o || e]
        },
        clone: function() {
            return new Bt(this._min.clone(), this._max.clone())
        },
        toString: function() {
            return "(" + this._min + "," + this._max + ")"
        },
        hasPoint: function(t) {
            t = i.box(t, Dt);
            var e = t.x,
                n = t.y,
                o = this.minX(),
                s = this.maxX(),
                r = n >= this.minY() && n <= this.maxY();
            return r && (r = e >= o && e <= s), r
        },
        hasBounds: function(t) {
            t = i.box(t, Bt);
            var e = t.getMin(),
                n = t.getMax();
            return !(!this.hasPoint(e) || !this.hasPoint(n))
        },
        intersects: function(t) {
            t = i.box(t, Bt);
            var e = this.minX(),
                n = this.maxX(),
                o = t.minX(),
                s = t.maxX();
            return this.minY() <= t.maxY() && this.maxY() >= t.minY() && e <= s && n >= o
        },
        getCenter: function() {
            var t = this.minX() + Math.abs(this.maxX() - this.minX()) / 2,
                e = this.minY() + Math.abs(this.maxY() - this.minY()) / 2;
            return Dt(t, e)
        },
        equals: function(t) {
            return t = i.box(t, Bt), this.getMin().equals(t.getMin()) && this.getMax().equals(t.getMax())
        },
        getMin: function() {
            return this._min
        },
        getMax: function() {
            return this._max
        },
        minX: function() {
            return this._min.x
        },
        minY: function() {
            return this._min.y
        },
        maxX: function() {
            return this._max.x
        },
        maxY: function() {
            return this._max.y
        },
        extend: function(t) {
            t = i.box(t, Dt);
            var e, n, o = this._min,
                s = this._max;
            return e = t, n = t, o.x = Math.min(e.x, o.x), o.y = Math.min(e.y, o.y), s.x = Math.max(n.x, s.x), s.y = Math.max(n.y, s.y), this
        },
        union: function(t) {
            t = i.box(t, Bt);
            var e = Math.min(this.minY(), t.minY()),
                n = Math.max(this.maxY(), t.maxY()),
                o = Math.min(this.minX(), t.minX()),
                s = Math.max(this.maxX(), t.maxX());
            return new Bt(Dt(o, e), Dt(s, n))
        },
        toArray: function() {
            return [this.getMin().toArray(), this.getMax().toArray()]
        }
    }, i.PointBounds.bounds = function() {
        if (arguments.length < 2) return null;
        for (var t = [], e = 0, n = arguments.length; e < n; e++) t[e] = i.box(arguments[e], Dt);
        for (var o, s, r, a, h = [], l = [], c = 0, u = t.length; c < u; c++) h.push(t[c].x), l.push(t[c].y);
        return o = Math.min.apply(Math, h), r = Math.max.apply(Math, h), s = Math.min.apply(Math, l), a = Math.max.apply(Math, l), Bt(Dt(o, s), Dt(r, a))
    };
    var Bt = i.PointBounds;
    i.LatLng = function(t, e) {
        if (!(this instanceof i.LatLng)) return new i.LatLng(t, e);
        var n = this._unbox(t, e);
        this._lat = this.y = n[1], this._lng = this.x = n[0]
    }, zt(i.LatLng, i.Point, {
        _unbox: function(t, e) {
            var n, o, s = t,
                r = i.getLiteralType(s);
            return i.isArray(s) ? (n = s[0], o = s[1]) : r ? r === Rt ? (n = s.lng, o = s.lat) : r === Dt && (n = s.x, o = s.y) : (n = "number" == typeof e ? e : parseFloat(e), o = "number" == typeof t ? t : parseFloat(t)), [n || 0, o || 0]
        },
        lat: function() {
            return this._lat
        },
        lng: function() {
            return this._lng
        },
        clone: function() {
            return new i.LatLng(this._lat, this._lng)
        },
        equals: function(t, n) {
            t = i.box(t, Rt);
            var o = Math.max(Math.abs(this.lat() - t.y), Math.abs(this.lng() - t.x));
            return o <= (n === e ? 1e-9 : n)
        },
        destinationPoint: function(t, e) {
            var n = i.Math.fromDegreesToRadians,
                o = i.Math.fromRadiansToDegrees;
            e /= 6378137, t = n(t);
            var s = n(this.lat()),
                r = n(this.lng()),
                a = Math.asin(Math.sin(s) * Math.cos(e) + Math.cos(s) * Math.sin(e) * Math.cos(t)),
                h = Math.atan2(Math.sin(t) * Math.sin(e) * Math.cos(s), Math.cos(e) - Math.sin(s) * Math.sin(a)) + r;
            return isNaN(a) || isNaN(h) ? null : new i.LatLng(o(a), o(h))
        },
        toPoint: function() {
            return new i.Point(this.lng(), this.lat())
        },
        add: Ot,
        sub: Ot,
        mul: Ot,
        div: Ot,
        round: Ot,
        floor: Ot,
        ceil: Ot
    });
    var Rt = i.LatLng;
    Rt.prototype.toString = function() {
        return "(lat:" + this._lat + ",lng:" + this._lng + ")"
    }, i.LatLngBounds = function(t, e) {
        if (!(this instanceof Nt)) return new Nt(t, e);
        var n = this._unbox(t, e);
        this._sw = this._min = n[0], this._ne = this._max = n[1]
    }, zt(i.LatLngBounds, i.PointBounds, {
        _unbox: function(t, e) {
            var n, o, s = e ? null : t,
                r = s && i.getLiteralType(s);
            return s ? i.isArray(s) ? (n = new Rt(s[1], s[0]), o = new Rt(s[3], s[2])) : r && (r === Nt ? (n = new Rt(s.south, s.west), o = new Rt(s.north, s.east)) : r == Bt && (n = new Rt(s.minY, s.minX), o = new Rt(s.maxY, s.maxX))) : (n = new Rt(t), o = new Rt(e)), [n || t, o || e]
        },
        clone: function() {
            return new Nt(this._sw.clone(), this._ne.clone())
        },
        hasPoint: function(t) {
            t = i.box(t, Rt);
            var e = t.x,
                n = t.y,
                o = this.minX(),
                s = this.maxX(),
                r = n >= this.minY() && n <= this.maxY();
            return r && (r = o <= s ? e >= o && e <= s : e >= s && e <= o), r
        },
        hasLatLng: function(t) {
            return t = i.box(t, Rt), this.hasPoint(t)
        },
        intersects: function(t) {
            t = i.box(t, Nt);
            var e = this.minX(),
                n = this.maxX(),
                o = n < e ? n + 360 : n,
                s = t.minX(),
                r = t.maxX(),
                a = r < s ? r + 360 : r;
            return this.minY() <= t.maxY() && this.maxY() >= t.minY() && e <= a && o >= s
        },
        getCenter: function() {
            var t = this.minY() + Math.abs(this.maxY() - this.minY()) / 2,
                e = this.minX() + Math.abs((this.minX() > this.maxX() ? 360 : 0) + this.maxX() - this.minX()) / 2;
            return i.LatLng(t, e)
        },
        equals: function(t) {
            return t = i.box(t, Nt), this.getMin().equals(t.getMin()) && this.getMax().equals(t.getMax())
        },
        getSW: function() {
            return this.getMin()
        },
        getNE: function() {
            return this.getMax()
        },
        minX: function() {
            return this._sw.lng()
        },
        minY: function() {
            return this._sw.lat()
        },
        maxX: function() {
            return this._ne.lng()
        },
        maxY: function() {
            return this._ne.lat()
        },
        south: function() {
            return this.minY()
        },
        west: function() {
            return this.minX()
        },
        north: function() {
            return this.maxY()
        },
        east: function() {
            return this.maxX()
        },
        extend: function(t) {
            t = i.box(t, Rt);
            var e, n, o = this._sw,
                s = this._ne;
            return e = t, n = t, o._lat = Math.min(e.y, o.y), o._lng = Math.min(e.x, o.x), s._lat = Math.max(n.y, s.y), s._lng = Math.max(n.x, s.x), this
        },
        union: function(t) {
            t = i.box(t, Nt);
            var e, n, o = Math.min(this.minY(), t.minY()),
                s = Math.max(this.maxY(), t.maxY()),
                r = function(t, e) {
                    var n = Math.abs(e.maxX() - t.minX());
                    return t.minX() > 0 && e.maxX() < 0 && (n += 360), n
                };
            return r(this, t) < r(t, this) ? (e = t.minX(), n = this.maxX()) : (e = this.minX(), n = t.maxX()), new i.LatLngBounds(i.LatLng(o, e), i.LatLng(s, n))
        },
        toPointBounds: function() {
            return new i.PointBounds(this.getMin().toPoint(), this.getMax().toPoint())
        }
    }), i.LatLngBounds.bounds = function() {
        if (arguments.length < 2) return null;
        for (var t = [], e = 0, n = arguments.length; e < n; e++) t[e] = i.box(arguments[e], Rt);
        for (var o, s, r, a, h = [], l = [], c = 0, u = t.length; c < u; c++) h.push(t[c].lat()), l.push(t[c].lng());
        return o = Math.min.apply(Math, h), r = Math.max.apply(Math, h), s = Math.min.apply(Math, l), a = Math.max.apply(Math, l), Nt(Rt(o, s), Rt(r, a))
    };
    var Nt = i.LatLngBounds;
    i.Size = function(t, e) {
        if (!(this instanceof i.Size)) return new i.Size(t, e);
        var n = ["width", "height"];
        i.isArray(t) ? (e = t[1], t = t[0]) : i.isObjectLiteral(t, n) ? (e = t.height, t = t.width) : ("number" != typeof t && (t = parseFloat(t)), "number" != typeof e && (e = parseFloat(e))), this.width = t || 0, this.height = e || 0
    }, i.Size.prototype = {
        constructor: i.Size,
        clone: function() {
            return new i.Size(this.width, this.height)
        },
        toString: function() {
            return "(w:" + this.width + ",h:" + this.height + ")"
        },
        equals: function(t) {
            return t = i.box(t, Vt), this.width == t.width && this.height == t.height
        },
        add: function(t, e) {
            return t = i.box(t, e, Vt), this.width += t.width, this.height += t.height, this
        },
        sub: function(t, e) {
            return t = i.box(t, e, Vt), this.width -= t.width, this.height -= t.height, this
        },
        mul: function(t, e) {
            return t = i.box(t, e, Vt), this.width *= t.width, this.height *= t.height, this
        },
        div: function(t, e) {
            return t = i.box(t, e, Vt), this.width /= t.width, this.height /= t.height, this
        },
        round: function() {
            return this.width = i.round(this.width), this.height = i.round(this.height), this
        },
        floor: function() {
            return this.width = i.floor(this.width), this.height = i.floor(this.height), this
        },
        ceil: function() {
            return this.width = i.ceil(this.width), this.height = i.ceil(this.height), this
        }
    };
    var Vt = i.Size;
    i.DOM = {
        createElement: function(t, e) {
            var i = n.createElement(t);
            return e && (i.style.cssText = e), i
        },
        addElement: function(t, e) {
            t && e && e.appendChild(t)
        },
        removeElement: function(t) {
            if (t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            }
        },
        insertAt: function(t, e, n) {
            var i = t.childNodes,
                o = i.length;
            0 === o || n >= o ? t.appendChild(e) : t.insertBefore(e, i[n])
        },
        removeAt: function(t, e) {
            var n = t.childNodes,
                i = n[e];
            n.length;
            i && this.removeElement(i)
        },
        calculateSize: function(t, e) {
            var o, s = Zt.SIZE_ELEMENT,
                r = i.Size();
            return s || (s = Zt.createElement("div", "position:absolute;margin:0;padding:0;border:0 none;top:-100000px;left:-100000px;"), Zt.SIZE_ELEMENT = s), e ? e.appendChild(s) : n.body.appendChild(s), o = t.cloneNode(!0), o.style.position = "relative", s.innerHTML = "", s.appendChild(o), r = Zt.getSize(s), r.width = Math.ceil(r.width), r.height = Math.ceil(r.height), s.innerHTML = "", Zt.removeElement(s), r
        },
        visible: function(t, e) {
            var n = t.style;
            return "boolean" == typeof e && (n.display = e ? "" : "none"), "none" !== n.display
        },
        toggle: function(t) {
            return Zt.visible(t, !Zt.visible(t))
        },
        setZIndex: function(t, e) {
            t.style.zIndex = e || 0
        },
        getCSS: function() {
            if (n.defaultView && n.defaultView.getComputedStyle) return function(e, i) {
                return t.getComputedStyle ? n.defaultView.getComputedStyle(e, null).getPropertyValue(i.replace(/([A-Z])/g, "-$1").toLowerCase()) || e.style[i] : e.style[i]
            };
            if (_.currentStyle) {
                var e = function(t) {
                        return "float" == t ? "styleFloat" : t
                    },
                    i = function(t, e) {
                        return t.currentStyle ? t.currentStyle[e] || t.style[e] : t.style[e]
                    };
                return At.browser.msie ? function(t, n) {
                    return i(t, e(n))
                } : i
            }
        }(),
        getCSSValue: function(t, e) {
            return parseFloat(Zt.getCSS(t, e)) || 0
        },
        contains: function() {
            return _.compareDocumentPosition ? function(t, e) {
                return !!(16 & t.compareDocumentPosition(e))
            } : _.contains ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e.parentNode;
                return n === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i))
            } : function(t, e) {
                for (; e = e.parentNode;)
                    if (e === t) return !0;
                return !1
            }
        }(),
        setBackgroundSize: function(t, e) {
            t.style[Zt.vendorPrefix + "BackgroundSize"] = e, t.style.backgroundSize = e
        }
    };
    var Zt = i.DOM;
    ! function() {
        var i = _,
            o = i.style,
            s = {},
            r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            },
            a = {
                input: null,
                form: null,
                img: null,
                div: null
            },
            h = function(t) {
                var e = r[t] || "div";
                return a[e] || (a[e] = n.createElement(e)), a[e]
            };
        Zt.isSupportedStyle = function(t) {
            return o[t] !== e
        }, Zt.isSupportedEvent = function(n) {
            if (s[n] === e) {
                var i = h(n),
                    o = "on" + n,
                    r = o in i || o in t;
                r || (i.setAttribute(o, "return;"), r = "function" == typeof i[o]), s[n] = r
            }
            return s[n]
        }
    }(), i.DOMEvent = function() {
        function o(t) {
            t.target || (t.target = t.srcElement || n), 3 === t.target.nodeType && (t.target = t.target.parentNode)
        }

        function s(t) {
            i.hasValue(t.which) || (t.which = i.hasValue(t.charCode) ? t.charCode : t.keyCode)
        }

        function r(t) {
            if (!i.hasValue(t.pageX) || i.hasValue(t.clientX)) {
                var e = t.target.ownerDoucment || n,
                    o = e.documentElement,
                    s = e.body;
                t.pageX = t.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)
            }
            return t
        }

        function a(t) {
            r(t), l(t), c(t)
        }

        function h(t) {
            var e = t.touches || [],
                n = t.changedTouches || [],
                i = 0,
                o = 0;
            for (i = 0, o = e.length; i < o; i++) r(e[i]);
            for (i = 0, o = n.length; i < o; i++) r(n[i])
        }

        function l(t) {
            var e = t.relatedTarget,
                n = t.fromElement,
                i = t.toElement;
            !e && n && i && (t.relatedTarget = n == t.target ? i : n)
        }

        function c(t) {
            if (!t.which && t.button !== e) {
                var n = t.button;
                t.which = 1 & n ? m : 2 & n ? v : 4 & n ? y : _
            }
        }

        function u(t) {
            return t % 120 === 0 ? t / 120 : t % 3 === 0 ? t / 3 : t
        }

        function p() {
            var e = !1;
            try {
                var n = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                t.addEventListener("test", null, n)
            } catch (i) {}
            return e
        }
        var d = /mouse|click$|^context/i,
            f = /^touch/i,
            g = /^key/i,
            _ = 0,
            m = 1,
            y = 2,
            v = 3,
            T = !1;
        return {
            MOUSE_NO_BUTTON: _,
            MOUSE_LBUTTON: m,
            MOUSE_MBUTTON: y,
            MOUSE_RBUTTON: v,
            startTouch: function(t) {
                T = !t || f.test(t.type)
            },
            endTouch: function() {
                T = !1
            },
            isTouchStarted: function() {
                return T
            },
            isMouseWheelSupport: Zt.isSupportedEvent("mousewheel"),
            isGestureSupport: Zt.isSupportedEvent("gesturestart"),
            preventDefault: function(e) {
                e = e || t.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            stopPropagation: function(e) {
                e = e || t.event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            },
            stop: function(t) {
                this.preventDefault(t), this.stopPropagation(t)
            },
            fix: function(e) {
                e = e || t.event;
                var n = e.type;
                return o(e), e.preventDefault || (e.preventDefault = function() {
                    this.returnValue = !1
                }), e.stopPropagation || (e.stopPropagation = function() {
                    this.cancelBubble = !0
                }), e.stop = function() {
                    this.preventDefault(), this.stopPropagation()
                }, g.test(n) ? s(e) : d.test(n) ? a(e) : f.test(n) && h(e), e.pos = function() {
                    var t = {};
                    return e.touches && e.touches.length ? t = e.touches[0] : e.changedTouches && e.changedTouches.length && (t = e.changedTouches[e.changedTouches.length - 1]), {
                        clientX: t.clientX || e.clientX || 0,
                        clientY: t.clientY || e.clientY || 0,
                        pageX: t.pageX || e.pageX || 0,
                        pageY: t.pageY || e.pageY || 0,
                        screenX: t.screenX || e.screenX || 0,
                        screenY: t.screenY || e.screenY || 0
                    }
                }, e
            },
            getWheelDelta: function(t) {
                if ("mousewheel" !== t.type && "DOMMouseScroll" !== t.type && "wheel" !== t.type) return null;
                var n = {
                    deltaX: 0,
                    deltaY: 0
                };
                return t.deltaY ? n.deltaY = u(-t.deltaY) : t.wheelDelta ? n.deltaY = u(t.wheelDelta) : t.detail && (n.deltaY = -t.detail), t.axis !== e && t.axis === t.HORIZONTAL_AXIS && (n.deltaX = -1 * n.deltaY, n.deltaY = 0), t.wheelDeltaY !== e && (n.deltaY = u(t.wheelDeltaY)), t.wheelDeltaX !== e && (n.deltaX = -1 * u(t.wheelDeltaX)), n
            },
            getOffsetsByEvent: function(t) {
                return Dt("offsetX" in t ? t.offsetX : "layerX" in t ? t.layerX : 0, "offsetY" in t ? t.offsetY : "layerY" in t ? t.layerY : 0)
            },
            attach: function() {
                var t = p();
                return n.addEventListener ? function(e, n, i, o) {
                    var s = !1;
                    return t && o ? (s = It({
                        capture: !1,
                        passive: !1,
                        once: !1
                    }, o), e.addEventListener(n, i, s)) : e.addEventListener(n, i, !1)
                } : function(t, e, n) {
                    return t.attachEvent("on" + e, n)
                }
            }(),
            detach: function() {
                return n.removeEventListener ? function(t, e, n) {
                    return t.removeEventListener(e, n, !1)
                } : function(t, e, n) {
                    return t.detachEvent("on" + e, n)
                }
            }()
        }
    }();
    var Ft = i.DOMEvent;
    Zt.css3Styles = {
            transition: null,
            transform: null,
            transformOrigin: null,
            backfaceVisibility: null,
            willChange: null
        }, Zt.vendorPrefix = null,
        function() {
            var t = ["Webkit", "Moz", "O"],
                e = i.Agent.poorGPU || "android" === At.mobile && parseFloat(At.version) < 4.1 && !At.browser.mozilla && !At.browser.chrome,
                o = At.browser && At.browser.msie && At.browser.version < 10;
            if (At.browser.csszoom || e || i.forEach(i.keys(Zt.css3Styles), function(e) {
                    for (var n, o, s = 0, r = t.length; s < r; s++)
                        if (n = t[s], o = n + i.capitalize(e), Zt.isSupportedStyle(o)) {
                            Zt.vendorPrefix = n.toLowerCase(), Zt.css3Styles[e] = o;
                            break
                        }! Zt.css3Styles[e] && Zt.isSupportedStyle(e) && (Zt.css3Styles[e] = e)
                }), Zt.isSupportedCSS3Style = function(t) {
                    return null !== Zt.css3Styles[t]
                }, Zt.isSupportedCSS3Style("transform") && !o) {
                var s = (n.documentMode && 9 === n.documentMode, function(t, e, n, i, o, s, r) {
                        var a = "matrix(" + e + ",0,0," + e + "," + n + "," + i + ")";
                        t.style[Zt.css3Styles.transform] = a;
                        var h = o.x + "px " + o.y + "px";
                        r && (h = h.replace(/px/gi, r)), t.style[Zt.css3Styles.transformOrigin] = h
                    }),
                    r = function(t) {
                        var e = /\([0-9epx\.\, \t\-]+/gi,
                            n = t.style[Zt.css3Styles.transform] || "matrix(1, 0, 0, 1, 0, 0)",
                            i = n.match(e)[0].substr(1).split(",");
                        return i
                    };
                Zt.transform = function(t, e, n, i, o, r) {
                    s(t, e, n, i, o, r)
                }, Zt.setScale = function(t, e, n, i) {
                    Zt.transform(t, e, 0, 0, n, i)
                }, Zt.setScaleByPercent = function(t, e, n, i) {
                    s(t, e, 0, 0, n, i, "%")
                }, Zt.translate = function(t, e) {
                    s(t, 1, e.x, e.y, {
                        x: 0,
                        y: 0
                    })
                }, Zt.getTranslate = function(t) {
                    var e = r(t),
                        n = Dt(0, 0);
                    return e.length > 1 && n.add(parseFloat(e[4]), parseFloat(e[5])), n.add(Zt.getRawOffset(t)), n
                }
            } else Zt.transform = function(t, e, n, i, o) {
                o = o || Dt(0, 0);
                var s = -(o.x * e - o.x),
                    r = -(o.y * e - o.y);
                At.browser.msie ? (n *= e, i *= e) : (s /= e, r /= e), s += n, r += i, t.style.zoom = e, t.style.left = s + "px", t.style.top = r + "px"
            }, Zt.setScale = function(t, e, n) {
                Zt.transform(t, e, 0, 0, n)
            }, Zt.translate = function(t, e) {
                Zt.setOffset(t, e)
            }, Zt.getTranslate = function(t) {
                return Zt.getRawOffset(t)
            };
            var a = Zt.css3Styles.transform,
                h = i.Agent.usingGPU && a;
            Zt.backfaceVisibility = function() {
                var t = Zt.css3Styles.backfaceVisibility,
                    e = t && !At.mobile;
                return e ? function(e, n) {
                    e.style[t] = n
                } : Ot
            }(), Zt.forceGPU = function() {
                return h ? function(t) {
                    t.style[a] = "translateZ(0)"
                } : Ot
            }(), Zt.clearGPU = function() {
                return h ? function(t) {
                    t.style[a] = "none"
                } : Ot
            }(), Zt.createDummyForRestrictiveGPU = function() {
                var t = Zt.createElement("div", "color:transparent;width:0;height:0;overflow:visible;");
                return Zt.setText(t, "&nbsp;"), t
            }, Zt.willChange = function() {
                var t = Zt.css3Styles.willChange;
                return t ? function(e, n) {
                    e.style[t] = n || "auto"
                } : Ot
            }()
        }(), It(Zt, {
            setSize: function(t, e, n) {
                var i = e instanceof Vt ? e.clone() : Vt(e, n);
                i.round(), t.style.width = i.width + "px", t.style.height = i.height + "px"
            },
            _getSize: function() {
                var t = {},
                    e = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    };
                return function(n, o) {
                    var s = 0,
                        r = 0,
                        a = 0,
                        h = 0;
                    if ("getBoundingClientRect" in _) {
                        var l;
                        try {
                            l = n.getBoundingClientRect()
                        } catch (c) {}
                        l && "width" in l ? (a = l.width, h = l.height) : (a = n.offsetWidth, h = n.offsetHeight)
                    } else try {
                        a = n.offsetWidth, h = n.offsetHeight
                    } catch (c) {}
                    if (0 === a && 0 === h) {
                        var u = n.style;
                        i.forEach(e, function(e, n) {
                            t[n] = u[n], u[n] = e
                        }), s = Zt.getCSSValue(n, "width"), r = Zt.getCSSValue(n, "height"), i.forEach(e, function(e, n) {
                            u[n] = t[n], t[n] = null
                        })
                    } else s = a, r = h;
                    switch (o) {
                        case 1:
                            return s;
                        case 2:
                            return r;
                        default:
                            return i.Size(s, r)
                    }
                }
            }(),
            getSize: function(t) {
                return Zt._getSize(t)
            },
            getWidth: function(t) {
                return Zt._getSize(t, 1)
            },
            getHeight: function(t) {
                return Zt._getSize(t, 2)
            },
            getSizeWithMargin: function(t) {
                var e = Zt.getSize(t),
                    n = t.style;
                return e.width = i.toNumber(n.marginLeft) + e.width + i.toNumber(n.marginRight), e.height = i.toNumber(n.marginTop) + e.height + i.toNumber(n.marginBottom), e
            },
            getRawSize: function(t) {
                var e = t.style,
                    n = i.toNumber(e.width),
                    o = i.toNumber(e.height);
                return i.Size(n, o)
            },
            getOffset: function() {
                if ("getBoundingClientRect" in _) {
                    var t = "CSS1Compat" === n.compatMode;
                    return function(e) {
                        var n, i, o, s = e && e.ownerDocument,
                            r = s.window || s.defaultView || s.parentWindow,
                            a = s.body,
                            h = s.documentElement;
                        try {
                            n = e.getBoundingClientRect()
                        } catch (l) {}
                        if (Zt.contains(h, e)) {
                            var c = h.clientTop || a.clientTop || 0,
                                u = h.clientLeft || a.clientLeft || 0,
                                p = r.pageYOffset || t && h.scrollTop || a.scrollTop,
                                d = r.pageXOffset || t && h.scrollLeft || a.scrollLeft;
                            i = n.top + p - c, o = n.left + d - u
                        } else n ? (o = n.left, i = n.top) : (o = 0, i = 0);
                        return Dt(o, i)
                    }
                }
                return At.browser.webkit ? function(t) {
                    for (var e = t, n = e.offsetParent, i = 0, o = 0; e = e.parentNode;) e.offsetParent && (i -= e.scrollLeft, o -= e.scrollTop), e == n && (i += t.offsetLeft + e.clientLeft, o += t.offsetTop + e.clientTop, e.offsetParent || (i += e.offsetLeft, o += e.offsetTop), n = e.offsetParent, t = e);
                    return Dt(i, o)
                } : function(t) {
                    var e = 0,
                        i = 0,
                        o = t.ownerDocument || t.document || n;
                    if (o.getBoxObjectFor) {
                        var s = o.getBoxObjectFor(t),
                            r = o.getBoxObjectFor(o.documentElement || o.body);
                        e = s.screenX - r.screenX, i = s.screenY - r.screenY
                    } else {
                        var a;
                        for (a = t; a; a = a.offsetParent) e += a.offsetLeft, i += a.offsetTop;
                        for (a = t.parentNode; a && "BODY" != a.tagName; a = a.parentNode) "TR" == a.tagName && (i += 2), e -= a.scrollLeft, i -= a.scrollTop
                    }
                    return Dt(e, i)
                }
            }(),
            getRawOffset: function(t) {
                var e = t.style,
                    n = i.toNumber(e.left),
                    o = i.toNumber(e.top);
                return Dt(n, o)
            },
            setOffset: function(t, e, n) {
                var i = e instanceof Dt ? e.clone() : Dt(e, n);
                i.round(), t.style.left = i.x + "px", t.style.top = i.y + "px"
            },
            setOffsetWithAnchor: function(t, e, n) {
                e = e || Dt(0, 0), n = n || Dt(0, 0);
                var i = e.x - n.x,
                    o = e.y - n.y;
                Zt.setOffset(t, i, o)
            },
            getScrollOffset: function() {
                var t = _,
                    e = n.body,
                    i = (t && t.scrollLeft || e && e.scrollLeft || 0) - (t && t.clientLeft || e && e.clientLeft || 0),
                    o = (t && t.scrollTop || e && e.scrollTop || 0) - (t && t.clientTop || e && e.clientTop || 0);
                return Dt(i, o)
            },
            disableSelection: function() {
                for (var t, e = ["ms", "webkit", "Khtml", "Moz"], n = 0, i = e.length; n < i && (t = e[n] + "UserSelect", !Zt.isSupportedStyle(t)); n++) t = null;
                return t ? function(e) {
                    e.style[t] = "none"
                } : function(t) {
                    t.unselectable = "on", t.onselectstart = function(t) {
                        Ft.stop(t)
                    }
                }
            }(),
            setOpacity: function() {
                return Zt.isSupportedStyle("opacity") ? function(t, e) {
                    t.style.opacity = e
                } : function(t, e) {
                    var n = t.style,
                        o = i.isNumber(e) ? "alpha(opacity=" + i.round(100 * e) + ")" : "",
                        s = n.filter || "",
                        r = /alpha\([^)]*\)/i,
                        a = /^\s*|\s*$/g;
                    return n.zoom = 1, e >= 1 ? (n.filter = s.replace(r, "").replace(a, ""), void("" === s && n.removeAttribute && n.removeAttribute("filter"))) : void(n.filter = r.test(s) ? s.replace(r, o) : s + " " + o)
                }
            }(),
            getOpacity: function() {
                return Zt.isSupportedStyle("opacity") ? function(t) {
                    var e = parseFloat(t.style.opacity);
                    return isNaN(e) ? 1 : e
                } : function(t) {
                    try {
                        if (t && t.filters && t.filters.alpha) {
                            var n = t.filters.alpha.opacity;
                            return (n !== e ? n : 100) / 100
                        }
                        if (t && t.style && t.style.filter) {
                            var i = /opacity=([^)]*)/;
                            return i.test(t.style.filter || "") ? parseFloat(RegExp.$1) / 100 : 1
                        }
                        return 1
                    } catch (o) {
                        return 1
                    }
                }
            }()
        }), Zt.Image = function(t) {
            var e = this;
            e.DEFAULT_OPTIONS = {
                contextmenu: null,
                disableSelection: !1,
                onload: Ot,
                onerror: Ot,
                opacity: null
            }, t = It({}, e.DEFAULT_OPTIONS, t), e._fLoad = t.onload || Ot, e._fError = t.onerror || Ot, e._img = Zt.createElement("img", Y + H + J + q), e._img.setAttribute("draggable", !1), e._img.setAttribute("unselectable", "on"), t.disableSelection && Zt.disableSelection(e._img), i.forEach(t, function(t, n) {
                var o = "set" + i.capitalize(n);
                i.isFunction(e[o]) && e[o](t)
            })
        }, Zt.Image.prototype = {
            constructor: Zt.Image,
            setHandler: function(t) {
                var e = It({
                    onload: this._fLoad,
                    onerror: this._fError
                }, t);
                this._fLoad = e.onload || Ot, this._fError = e.onerror || Ot
            },
            setOpacity: function(t) {
                this._opacity = t, Zt.setOpacity(this._img, t)
            },
            setPosition: function(t) {
                this._img.style.position = t
            },
            setUrl: function(t, e, n) {
                var i = this._img;
                return t && (t === i.src ? (this._fLoad && this._fLoad(i), e && e(i)) : (i.style.width = "", i.style.height = "", i.removeAttribute("width"), i.removeAttribute("height"), this._setUrl(i, t, e, n))), this
            },
            setSize: function(t) {
                var e = this._img;
                Zt.setSize(e, t), e.setAttribute("width", t.width), e.setAttribute("height", t.height)
            },
            setAlt: function(t) {
                this._img.setAttribute("alt", t)
            },
            setContextmenu: function(t) {
                this._img.contextmenu = t
            },
            getElement: function() {
                return this._img
            },
            _setUrl: function() {
                var e, n = At.browser.msie,
                    i = At.browser.version,
                    o = n && i > 6 && i < 9;
                return e = o ? function(e, n, i, o) {
                    function s() {
                        e.onload = e.onerror = null, r._fLoad(e), i && i(e)
                    }
                    var r = this;
                    e.onload = function() {
                        t.setTimeout(s, 1)
                    }, e.onerror = function() {
                        e.onload = e.onerror = null, r._fError(e), o && o(e)
                    }, e.galleryImg = "no", e.src = n
                } : function(t, e, n, i) {
                    var o = this;
                    t.onload = function() {
                        t.onload = t.onerror = null, o._fLoad(t), n && n(t)
                    }, t.onerror = function() {
                        t.onload = t.onerror = null, o._fError(t), i && i(t)
                    }, t.src = e
                }, n = i = null, o = null, e
            }()
        },
        function() {
            var t = At.browser.csszoom ? "innerText" : "textContent",
                e = function(t, e, n) {
                    return i.isDefined(n) ? void(t[e] = n) : t[e]
                },
                n = function(n, i) {
                    n.nodeType;
                    switch (n.nodeType) {
                        case 1:
                        case 9:
                        case 11:
                            return e(n, t, i);
                        case 3:
                        case 4:
                            return e(n, "nodeValue", i);
                        default:
                            return ""
                    }
                };
            Zt.setText = n, Zt.getText = n
        }(),
        function() {
            function e(t) {
                var e = t.getAttribute("data-ntranid");
                return e || (e = "NTran-" + ++r, t.setAttribute("data-ntranid", e)), e
            }

            function n(t) {
                var n = e(t),
                    i = a[n];
                return i || (i = {
                    timer: null,
                    props: null
                }, a[n] = i), i
            }

            function o(t) {
                t.complete && (Ut.removeDOMListener(t.complete), t.complete = null)
            }

            function s(t, e) {
                e && i.forEach(e, function(e, n) {
                    "opacity" === n ? Zt.setOpacity(t, e) : (n.indexOf("tran") === -1 && "number" == typeof e && (e += "px"), t.style[n] = e)
                })
            }
            var r = 0,
                a = {},
                h = Zt.css3Styles.transition,
                l = "transitionend";
            if (h) {
                var c = ["transitionend", "webkitTransitionEnd", "oTransitionEnd"];
                i.forEach(c, function(t) {
                    return Zt.isSupportedEvent(t.toLowerCase()) ? (l = t, !0) : Zt.isSupportedEvent(t) ? (l = t, !0) : void 0
                })
            }
            Zt.animate = function(e, r, a) {
                var c = n(e);
                a = It({
                    duration: 0,
                    delay: 0,
                    easing: "linear"
                }, a), this.stop(e, {});
                var u = [];
                if (i.forEach(r, function(t, e) {
                        u.push(e)
                    }), c.props = It({}, r), h) c.complete = Ut.addDOMListener(e, l, function() {
                    c.props = null, e.style[h] = "none", "function" == typeof a.complete && a.complete(), o(c)
                }), c.timer = t.setTimeout(function() {
                    c.timer = null;
                    var t = a.easing;
                    t.indexOf("Cubic") > -1 && (t = "easeOutCubic" === t ? "ease-out" : "ease-in"), e.style[h] = [u.join(","), a.duration + "ms", t, a.delay + "ms"].join(" "), s(e, r)
                }, 100);
                else {
                    var p, d = a.easing;
                    p = "function" == typeof d ? d : i.easing[d || "linear"];
                    for (var f = {}, g = 0, _ = u.length; g < _; g++) key = u[g], "opacity" === key ? f[key] = Zt.getOpacity(e) : f[key] = parseFloat(Zt.getCSS(e, key));
                    var m = i.now();
                    c.animLoop = function() {
                        var t = i.now() - m,
                            n = t / a.duration,
                            o = {};
                        i.forEach(r, function(t, e) {
                            o[e] = p(n, f[e], t - f[e])
                        }), t < a.duration ? s(e, o) : (s(e, r), i.TransitionQueue.removeJob(c.animLoop), c.animLoop = null, c.props = null, "function" == typeof a.complete && a.complete())
                    }, i.TransitionQueue.addJob(c.animLoop)
                }
            }, Zt.stop = function(r, l) {
                var c = e(r),
                    u = n(r);
                h ? (t.clearTimeout(u.timer), u.timer = null, o(u), r.style[h] = "none") : (i.TransitionQueue.removeJob(u.animLoop), u.animLoop = null), s(r, l || u.props), u.props = null, a[c] = null, delete a[c]
            }
        }(), i.Event = function() {
            function t(t) {
                return t.__event_relations__ || (t.__event_relations__ = {}), t.__event_relations__
            }

            function n() {
                return "NEvent_" + o++
            }
            var o = 0,
                s = function() {
                    return String.prototype.trim ? function(t) {
                        return t.trim()
                    } : function(t) {
                        return t.replace(/^\s+|\s+$/gm, "")
                    }
                }();
            return {
                addListener: function(e, i, o) {
                    var r = s(i),
                        a = r.split(" ");
                    if (a.length > 1) {
                        for (var h = [], l = 0, c = a.length; l < c; l++) s(a[l]) && h.push(Ut.addListener(e, a[l], o));
                        return h
                    }
                    var u = t(e),
                        p = n();
                    return u[r] || (u[r] = {}, r !== nt && r !== it && Ut.trigger(e, nt, r)), u[r][p] = o, {
                        target: e,
                        eventName: r,
                        listenerId: p,
                        listener: o
                    }
                },
                hasListener: function(e, n) {
                    var o = t(e);
                    return !!o[n] && i.isEmptyObject(o[n]) === !1
                },
                once: function(t, e, n) {
                    var i = Ut.addListener(t, e, function() {
                        for (var t = [], e = 0, o = arguments.length; e < o; e++) t[e] = arguments[e];
                        n.apply(null, t), Ut.removeListener(i), i = null
                    });
                    return i
                },
                removeListener: function(e) {
                    if (e)
                        if (i.isArray(e))
                            for (var n = 0, o = e.length; n < o; n++) Ut.removeListener(e[n]);
                        else {
                            var s = e.target,
                                r = e.eventName,
                                a = e.listenerId,
                                h = t(s);
                            if (!h[r]) return;
                            h[r][a] = null, delete h[r][a], i.isEmptyObject(h[r]) === !0 && (h[r] = null, delete h[r]), r === it || r === nt || h[r] || Ut.trigger(s, it, r)
                        }
                },
                trigger: function(e, n) {
                    for (var o, r = s(n), a = r.split(" "), h = [], l = 0, c = arguments.length; l < c; l++) h[l] = arguments[l];
                    if (a.length > 1)
                        for (var u = 0, p = a.length; u < p; u++) s(a[u]) && (o = [e, a[u]].concat(h.slice(2)), Ut.trigger.apply(Ut, o));
                    else {
                        var d = t(e),
                            f = d[r],
                            g = d[st] || d[rt + r + at];
                        !g && f && (o = h.slice(2), 0 === o.length && e._getDefaultEventParameters && (o = e._getDefaultEventParameters(r) || []), i.forEach(f, function(t) {
                            t && t.apply(null, o)
                        }))
                    }
                },
                getDispatcher: function(e, n) {
                    var i = t(e),
                        o = s(n || "");
                    return n ? i[o] : i
                },
                stopDispatch: function(e, n) {
                    var i = t(e),
                        o = s(n || "");
                    o ? i[rt + o + at] = !0 : i[st] = !0
                },
                resumeDispatch: function(e, n) {
                    var i = t(e),
                        o = s(n || "");
                    o ? i[rt + o + at] = !1 : i[st] = !1
                },
                forward: function(t, e, n, i) {
                    var o = i || e;
                    return Ut.addListener(t, e, Ct(Ut.trigger, Ut, n, o))
                },
                clearInstanceListeners: function(t) {
                    t.__event_relations__ = null, delete t.__event_relations__
                },
                clearListeners: function(e, n) {
                    var i = t(e);
                    i[n] = null, delete i[n]
                },
                addDOMListener: function(t, e, n, i) {
                    var o = s(e),
                        r = o.split(" ");
                    if (r.length > 1) {
                        for (var a = [], h = 0, l = r.length; h < l; h++) s(r[h]) && a.push(Ut.addDOMListener(t, r[h], n, i));
                        return a
                    }
                    return "mousewheel" !== o || Ft.isMouseWheelSupport || (o = "wheel"), Ft.attach(t, o, n, i), {
                        target: t,
                        eventName: o,
                        listener: n
                    }
                },
                removeDOMListener: function(t, n, o) {
                    if (t)
                        if (i.isArray(t))
                            for (var r = 0, a = t.length; r < a; r++) Ut.removeDOMListener(t[r]);
                        else {
                            if (t !== e && n === e && o === e) {
                                var h = t;
                                n = h.eventName, o = h.listener, t = h.target
                            }
                            n = s(n), "mousewheel" !== n || Ft.isMouseWheelSupport || (n = "wheel"), Ft.detach(t, n, o)
                        }
                }
            }
        }();
    var Ut = i.Event;
    i.KVO = function() {}, i.KVO.prototype = {
            constructor: i.KVO,
            set: function(t, e, n) {
                var o = this.__getTargets()[t];
                if (o) {
                    var s = o.target,
                        r = o.targetKey,
                        a = "set" + i.capitalize(t);
                    s[a] ? s[a](e, n) : s.set(r, e, n)
                } else this[t] = e, n !== !0 && this.__notifyChanged(t)
            },
            __lazySet: function(t, e, n) {
                this.get(t) !== e && this.set(t, e, n)
            },
            get: function(t) {
                var e = this.__getTargets()[t];
                if (e) {
                    var n = e.target,
                        o = e.targetKey,
                        s = "get" + i.capitalize(t);
                    return n[s] ? n[s](o) : n.get(o)
                }
                return this[t]
            },
            __notifyChanged: function(t) {
                var e = this.get(t),
                    n = t + "_changed";
                this[n] ? this[n](e) : this.changed && this.changed(t, e), Ut.trigger(this, n, e)
            },
            bindTo: function(t, e, n) {
                if ("string" == typeof t) {
                    n = n || t, this.unbind(t);
                    var o = Ct(function(t) {
                            this.__notifyChanged(t)
                        }, this, t),
                        s = e.__bind(e, n, o);
                    s.targetKey = n, this.__getTargets()[t] = s, this.__notifyChanged(t)
                } else if (i.isArray(t))
                    for (var r = t, a = 0, h = r.length; a < h; a++) this.bindTo(r[a], e)
            },
            __bind: function(t, e, n) {
                return Ut.addListener(t, e + "_changed", n)
            },
            unbind: function(t) {
                if (i.isArray(t)) i.forEach(t, Ct(this.unbind, this));
                else {
                    var e = this.__getTargets()[t];
                    if (e) {
                        var n = e.target,
                            o = this.get(t);
                        n.__unbind(e), this.__getTargets()[t] = null, delete this.__getTargets()[t], this[t] = o
                    }
                }
            },
            __unbind: function(t) {
                Ut.removeListener(t)
            },
            unbindAll: function() {
                var t = this;
                i.forEach(t.__getTargets(), function(e, n) {
                    t.unbind(n)
                })
            },
            setValues: function(t) {
                var e = this;
                i.forEach(t, function(t, n) {
                    var o = "set" + i.capitalize(n);
                    e[o] ? e[o](t) : e.set(n, t)
                })
            },
            __getTargets: function() {
                return this.__targets || (this.__targets = {})
            },
            addListener: function(t, e) {
                return Ut.addListener(this, t, e)
            },
            hasListener: function(t) {
                return Ut.hasListener(this, t)
            },
            addListenerOnce: function(t, e) {
                return Ut.once(this, t, e)
            },
            removeListener: function(t) {
                return Ut.removeListener(t)
            },
            trigger: function(t) {
                var e = [this, t];
                if (arguments.length > 1)
                    for (var n = 1, i = arguments.length; n < i; n++) e.push(arguments[n]);
                return Ut.trigger.apply(Ut, e)
            },
            clearListeners: function(t) {
                return t ? Ut.clearListeners(this, t) : Ut.clearInstanceListeners(this)
            }
        }, i.KVOArray = function(t) {
            this._array = t || [], this.set("length", this._array.length)
        }, zt(i.KVOArray, i.KVO, {
            setAt: function(t, n) {
                var i = this._array[t],
                    o = this.getLength();
                if (t > o - 1) {
                    for (var s = o; s < t; s++) this.insertAt(s, e);
                    this.insertAt(t, n)
                } else this._array[t] = n, this.set("length", this._array.length), Ut.trigger(this, "set_at", t, i)
            },
            insertAt: function(t, e) {
                if (t < 0) throw new Error("index number should be positive");
                this.splice(t, 0, e)
            },
            removeAt: function(t) {
                if (t < 0) throw new Error("index number should be positive");
                return this.splice(t, 1)[0]
            },
            splice: function(t, e) {
                for (var n = e || 0, i = [], o = this._array, s = o.length, r = 2, a = arguments.length; r < a; r++) i.push(arguments[r]);
                var h = o.splice.apply(o, [t, n].concat(i));
                if (this.set("length", o.length), t < 0 ? (t = s + t, t < 0 && (t = 0)) : t >= s && (t = s), h.length > 0)
                    for (var l = t + n - 1, c = h.length; l >= t; l--) Ut.trigger(this, "remove_at", l, h[--c]);
                if (i.length > 0) {
                    var u = (i.length, t);
                    for (r = 0, a = i.length; r < a; r++) Ut.trigger(this, "insert_at", u++, i[r])
                }
                return h
            },
            removeElement: function(t) {
                var e = this.getIndexOfElement(t);
                e !== -1 && this.removeAt(e)
            },
            push: function(t) {
                return this.insertAt(this._array.length, t), this._array.length
            },
            pop: function() {
                return this.removeAt(this.getLength() - 1)
            },
            getAt: function(t) {
                return this._array[t]
            },
            getIndexOfElement: function(t) {
                return i.getIndexOfElement(this._array, t)
            },
            getLength: function() {
                return this.get("length")
            },
            getArray: function() {
                return this._array
            },
            clear: function() {
                for (var t = this.getLength() - 1; t >= 0; t--) this.removeAt(t)
            },
            forEach: function(t) {
                for (var e = 0, n = this.getLength(); e < n; e++) t(this.getAt(e), e)
            }
        }),
        function() {
            i.Math = {
                radianPerDegree: Math.PI / 180,
                degreePerRadian: 180 / Math.PI,
                fromDegreesToRadians: function(t) {
                    return t * i.Math.radianPerDegree
                },
                fromRadiansToDegrees: function(t) {
                    return t * i.Math.degreePerRadian
                },
                distance: function(t, e) {
                    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                },
                area: function(t) {
                    if (!t || 3 !== t.length) return 0;
                    var e = t[0],
                        n = t[1],
                        i = t[2],
                        o = (e + n + i) / 2;
                    return Math.sqrt(o * (o - e) * (o - n) * (o - i))
                },
                getPolygonSize: function(t, n) {
                    if (!t || !n) return 0;
                    var s = 0,
                        r = e(t).concat(t),
                        a = null;
                    return r.sort(function(t, e) {
                        return t.x - e.x
                    }), i.forEach(r, function(e) {
                        var i = e.x;
                        a && a !== i && (s += o(t, a, i, n)), a = i
                    }), s
                },
                getDegrees: function(t, e) {
                    var n = t.x,
                        o = t.y,
                        s = e.x,
                        r = e.y;
                    return i.Math.fromRadiansToDegrees(Math.atan2(n * r - o * s, n * s + o * r))
                },
                getHorizontalDegrees: function(t, e) {
                    var n = {
                            x: t.x,
                            y: e.y
                        },
                        o = {
                            x: e.x - n.x,
                            y: e.y - n.y
                        },
                        s = {
                            x: e.x - t.x,
                            y: e.y - t.y
                        };
                    return i.Math.getDegrees(o, s)
                },
                magnitude: function(t) {
                    var e = t.x,
                        n = t.y;
                    return Math.sqrt(e * e + n * n)
                },
                getVector: function(t, e) {
                    var n = t.x,
                        i = t.y,
                        o = e.x,
                        s = e.y;
                    return Dt(n - o, i - s)
                }
            };
            var t = function(t, e, n, i) {
                    var o = {
                            x: e.x - t.x,
                            y: e.y - t.y
                        },
                        s = {
                            x: i.x - n.x,
                            y: i.y - n.y
                        },
                        r = s.x * (t.y - n.y) - s.y * (t.x - n.x),
                        a = o.x * (t.y - n.y) - o.y * (t.x - n.x),
                        h = s.y * o.x - s.x * o.y;
                    if (0 === h) return null;
                    if (r /= h, a /= h, !(0 < r && r <= 1 && 0 < a && a <= 1)) return null;
                    var l = Dt(t.x + r * (e.x - t.x), t.y + r * (e.y - t.y)),
                        c = (l.x <= Math.min(t.x, e.x) || l.x >= Math.max(t.x, e.x) || l.y <= Math.min(t.y, e.y) || l.y <= Math.min(t.y, e.y)) && (l.x <= Math.min(n.x, i.x) || l.x >= Math.max(n.x, i.x) || l.y <= Math.min(n.y, i.y) || l.y <= Math.min(n.y, i.y));
                    return c ? null : l
                },
                e = function(e) {
                    for (var n = e.length, i = [], o = 0; o < n; o++)
                        for (var s = e[o], r = e[(o + 1) % n], a = 0; a < n; a++) {
                            var h = e[a],
                                l = e[(a + 1) % n],
                                c = t(s, r, h, l);
                            c && i.push(c)
                        }
                    return i
                },
                n = function(t, e, n) {
                    return (n - t.x) * (e.y - t.y) / (e.x - t.x) + t.y
                },
                o = function(t, e, i, o) {
                    var s, a = 0,
                        h = [],
                        l = [],
                        c = t.length;
                    for (s = 0; s < c; s++) {
                        var u = t[s],
                            p = t[(s + 1) % c];
                        if (Math.min(u.x, p.x) <= e && i <= Math.max(u.x, p.x)) {
                            var d, f;
                            u instanceof Rt ? (d = Rt(n(u, p, e), e), f = Rt(n(u, p, i), i)) : (d = Dt(e, n(u, p, e)), f = Dt(i, n(u, p, i))), h.push(d), l.push(f)
                        }
                    }
                    if (h.sort(function(t, e) {
                            return t.y - e.y
                        }), l.sort(function(t, e) {
                            return t.y - e.y
                        }), h.length != l.length || h.length < 2) return 0;
                    for (c = h.length, s = 0; s < c; s += 2) a += r([h[s], l[s], l[s + 1], h[s + 1]], o);
                    return a
                },
                s = function(t) {
                    for (var e = [], n = 0, i = t.length; n < i; n++) {
                        for (var o = !1, s = 0, r = e.length; s < r; s++)
                            if (e[s].equals(t[n])) {
                                o = !0;
                                break
                            } o || e.push(t[n])
                    }
                    return e
                },
                r = function(t, e) {
                    var n, o = 0,
                        r = s(t);
                    return 3 === r.length ? n = [r] : 4 === r.length && (n = [
                        [r[0], r[1], r[2]],
                        [r[0], r[2], r[3]]
                    ]), i.forEach(n, function(t) {
                        for (var n = [], s = 0, r = t.length; s < r; s++) {
                            var a, h = t[s];
                            a = s + 1 === r ? t[0] : t[s + 1], n.push(e.getDistance(h, a))
                        }
                        o += i.Math.area(n)
                    }), o
                }
        }(), i.AsyncEventsModel = function(t) {
            this._tranId = null, this.bindTo(["transformOrigin_px", "projection", "zoom", "containerTopLeft", "scale"], t), this._fProgress = Ct(this.progressZooming, this)
        }, zt(i.AsyncEventsModel, i.KVO, {
            SCALE_FACTOR: At.browser.csszoom ? .08 : .04,
            _tranId: null,
            startZooming: function(t, e, n) {
                if (this.set("transformOrigin_px", e), this.isZooming()) {
                    this._delta = this._delta + t;
                    var o = this._getScaleBy(this._delta);
                    0 === o ? this.stopZooming() : this._dstScale = o
                } else this._delta = t, this.set("scale", 1), this.set("containerTopLeft_px", n), this._dstScale = this._getScaleBy(this._delta), Ut.trigger(this, "zoomstart", this), this._tranId = i.TransitionQueue.addJob(this._fProgress)
            },
            progressZooming: function() {
                if (this.isZooming()) {
                    var t, e = this.get("scale"),
                        n = this._dstScale,
                        i = Math.abs(this._delta),
                        o = this.SCALE_FACTOR * (i > 3 ? .4 : 1),
                        s = i * o;
                    e < n ? t = Math.min(e * (1 + s), n) : e > n && (t = Math.max(e * (1 - s), n)), this.set("scale", t), t === n && this.stopZooming()
                }
            },
            stopZooming: function() {
                this.isZooming() && (i.TransitionQueue.removeJob(this._fProgress), this._tranId = null, this._delta = null, this._dstScale = null, this.set("scale", 1), this.set("containerTopLeft_px", this.get("containerTopLeft")), this.set("transformOrigin_px", Dt(0, 0)), Ut.trigger(this, "zoomend", this))
            },
            zoomingWithScale: function(t, e) {
                var n = this.getContainerTopLeft();
                this._isPinching || (this.set("transformOrigin_px", e), this.set("containerTopLeft_px", n), this._isPinching = !0, Ut.trigger(this, "zoomstart", this)), this.set("scale", t)
            },
            stopZoomingWithScale: function() {
                this._isPinching && (this.set("scale", 1), this.set("containerTopLeft_px", this.get("containerTopLeft")), this.set("transformOrigin_px", Dt(0, 0)), this._isPinching = !1, Ut.trigger(this, "zoomend", this))
            },
            _getScaleBy: function(t) {
                return 0 === t ? 0 : Math.pow(2, t)
            },
            getContainerTopLeft: function() {
                return this.isZooming() ? this.get("containerTopLeft_px") : this.get("containerTopLeft")
            },
            startPanning: function() {
                this.isZooming() && this.stopZooming()
            },
            isZooming: function() {
                return null !== this._tranId
            }
        }),
        function() {
            i.ZoomScaleChecker = {
                getFittableMinZoom: function(t) {
                    t = i.isDefined(t) ? t : this.get("zoom");
                    var e = Math.max(this.getMinZoom(), t);
                    return e !== t && e
                },
                getFittableMaxZoom: function(t) {
                    t = i.isDefined(t) ? t : this.get("zoom");
                    var e = Math.min(this.getMaxZoom(), t);
                    return e !== t && e
                },
                isValidZoom: function(t) {
                    return !(this.get("userMinZoom") > t || this.get("mapTypeMinZoom") > t) && !(this.get("userMaxZoom") < t || this.get("mapTypeMaxZoom") < t)
                },
                getMinZoom: function() {
                    return Math.max(this.get("mapTypeMinZoom"), this.get("userMinZoom"))
                },
                getMaxZoom: function() {
                    return Math.min(this.get("mapTypeMaxZoom"), this.get("userMaxZoom"))
                },
                getValidZoom: function(t) {
                    var e = this.get("zoom") + t,
                        n = this.getMinZoom();
                    if (e <= n) return n;
                    var i = this.getMaxZoom();
                    return e >= i ? i : e
                },
                getValidDeltaZoom: function(t) {
                    var e = this.get("zoom"),
                        n = e + t,
                        i = this.getMinZoom(),
                        o = this.getMaxZoom();
                    return n < i ? t += i - n : n > o && (t += o - n), t
                },
                getFittableScale: function(t) {
                    var e = this.getMinZoom(),
                        n = this.getMaxZoom();
                    this._minScale = Math.pow(2, e - 1), this._maxScale = Math.pow(2, n - 1);
                    var i, o = this.get("zoom"),
                        s = Math.pow(2, o - 1) * t,
                        r = t;
                    return s > this._maxScale ? (i = n - o, r = Math.pow(2, i)) : s < this._minScale && (i = e - o, r = Math.pow(2, i)), r
                },
                getFittableZoomAndScale: function(t) {
                    var e = this.getMinZoom(),
                        n = this.getMaxZoom();
                    this._minScale = Math.pow(2, e - 1), this._maxScale = Math.pow(2, n - 1);
                    var i = this.get("zoom"),
                        o = Math.pow(2, i - 1) * t,
                        s = Math.log(t, 2);
                    return {
                        scale: o,
                        deltaLevel: s
                    }
                }
            }
        }(), i.KeyRecognizer = {
            _initMetaKeys: function() {
                this.set("shiftKey", !1), this.set("ctrlKey", !1), this.set("metaKey", !1), this.set("altKey", !1)
            },
            _setMetaKeys: function(t) {
                this.__lazySet("shiftKey", t.shiftKey), this.__lazySet("ctrlKey", t.ctrlKey), this.__lazySet("metaKey", t.metaKey), this.__lazySet("altKey", t.altKey)
            },
            listenKey: function() {
                function e(t, e, n) {
                    return Ut.addDOMListener(t, e, n)
                }
                this._initMetaKeys(), this._keyInfo = {}, this._keyTran = new i.Transition({
                    easing: i.easing.easeOutCubic,
                    step: 30,
                    duration: 1e3,
                    progress: Ct(this._onKeyTransition, this),
                    stop: Ct(this._onKeyTranEnd, this)
                }), this._keyListeners = [e(t, "blur", Ct(this._onWindowBlur, this)), e(n, "click", Ct(this._onCheckFocus, this)), e(n, "keydown", Ct(this._onKeyDown, this)), e(n, "keyup", Ct(this._onKeyUp, this))]
            },
            unlistenKey: function() {
                Ut.removeDOMListener(this._keyListeners), this._keyInfo = {}, this._keyTran && this._keyTran.stop(), this._keyTran = null
            },
            _focused: !1,
            _isDirKey: function(t) {
                return t === T || t === b || t === v || t === x
            },
            _getXFactor: function() {
                var t = 0;
                return this._keyInfo[v] && (t -= 1), this._keyInfo[x] && (t += 1), t
            },
            _getYFactor: function() {
                var t = 0;
                return this._keyInfo[T] && (t -= 1), this._keyInfo[b] && (t += 1), t
            },
            _onWindowBlur: function() {
                this._keyInfo = {}
            },
            _isFocusable: function(t) {
                return !!t && i.getIndexOfElement(w, t.tagName) > -1
            },
            _onCheckFocus: function(t) {
                t = Ft.fix(t);
                var e = t.target,
                    n = t.target,
                    i = this.getElement();
                for (this._focused = !1; e && "BODY" !== e.tagName && "HTML" !== e.tagName;) {
                    if (e === i && !this._isFocusable(n)) {
                        this._focused = !0;
                        break
                    }
                    e = e.parentNode
                }
            },
            _onKeyTransition: function(t) {
                var e = t.progress,
                    n = (this._keyInfo, this._getXFactor()),
                    i = this._getYFactor(),
                    o = e.weight,
                    s = Dt(n * o, i * o);
                Ut.trigger(this, "keytransition", s)
            },
            _onKeyTranEnd: function(t) {
                Ut.trigger(this, "keytransitionend")
            },
            _onKeyDown: function(t) {
                if (this._setMetaKeys(t), this._focused && (t = Ft.fix(t), Ut.trigger(this, "keydown", t), this.get("keyboardShortcuts") && !this._isFocusable(t.target))) {
                    var e = t.which,
                        n = this._keyInfo,
                        i = this._keyTran;
                    this._isDirKey(e) && (n[e] = !0, i.isRunning() || i.run({
                        weight: 1
                    }, {
                        weight: 70
                    }, {
                        infinity: !0
                    }), Ft.preventDefault(t))
                }
            },
            _onKeyUp: function(t) {
                if (this._setMetaKeys(t), this._focused && (t = Ft.fix(t), Ut.trigger(this, "keyup", t), this.get("keyboardShortcuts"))) {
                    var e = t.which,
                        n = this._keyInfo,
                        i = this._keyTran;
                    this._isDirKey(e) && (n[e] = !1, !i.isRunning() || n[T] || n[b] || n[v] || n[x] || i.stop())
                }
            }
        }, i.MouseRecognizer = {
            listenMouse: function() {
                function t(t, e, n) {
                    return Ut.addDOMListener(t, e, n || i._getTrigger(e))
                }
                var e = this.getTarget(),
                    i = this;
                i._dragListeners = [], i._dragStart = !1, i._panEl = e.setCapture ? e : n, i._mouseListeners = [t(e, "mousedown", Ct(i._onDown, i)), t(e, "mousemove", Ct(i._onMove, i)), t(e, "mouseup", Ct(i._onUp, i)), t(e, "mousewheel", Ct(i._onWheel, i)), t(e, "contextmenu", Ct(i._onContextMenu, i)), t(e, "mouseenter", Ct(i._onEnter, i)), t(e, "mouseleave", Ct(i._onLeave, i))], At.mobile === !1 && i._mouseListeners.push(t(e, "click", Ct(i._onClick, i)))
            },
            unlistenMouse: function() {
                Ut.removeDOMListener(this._mouseListeners), Ut.removeDOMListener(this._dragListeners), this._dragStart = !1, this._panEl = null
            },
            _onEnter: function(t) {
                t = Ft.fix(t), t.preventDefault(), Ut.trigger(this, "mouseover", t)
            },
            _onLeave: function(t) {
                t = Ft.fix(t), t.preventDefault(), Ut.trigger(this, "mouseout", t)
            },
            _onClick: function(t) {
                t = Ft.fix(t), this._triggerSingleClick(t)
            },
            _triggerSingleClick: function(t, e) {
                var n = i.now(),
                    o = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    s = this.__ct__ ? n - this.__ct__ : 1e4,
                    r = this.__cp__ ? i.Math.distance(this.__cp__, o) : 1e4;
                if (s < z && r <= D) this.__ct__ = null, this.__cp__ = null, this._triggerDblClick(t);
                else {
                    if (e) return;
                    this.__ct__ = n, this.__cp__ = o, this._triggerClick(t)
                }
            },
            _isMapEvent: function(t) {
                for (var e = this.__ie_dtarget__ || t.target, n = this.getTarget(), o = !0; e && e !== n;) {
                    if (e.__clickable === !1) {
                        o = !0;
                        break
                    }
                    if (e.__clickable || e === this.panes.floatPane || i.getIndexOfElement(w, e.tagName) > -1) {
                        o = !1;
                        break
                    }
                    e = e.parentNode
                }
                return o
            },
            _triggerClick: function(t) {
                return this._dragStart ? void(this._dragStart = !1) : void(this._isMapEvent(t) && (t.preventDefault && t.preventDefault(), Ut.trigger(this, "click", t)))
            },
            _triggerDblClick: function(t) {
                this._isMapEvent(t) && Ut.trigger(this, "dblclick", t)
            },
            _onDown: function(e) {
                if (!Ft.isTouchStarted() && (e = Ft.fix(e), e.preventDefault(), this.__dp__ = {
                        x: e.pageX,
                        y: e.pageY
                    }, this.__ie_dtarget__ = At.browser.msie && At.browser.version > 8 && e.target, Ft.startTouch(e), Ut.trigger(this, "mousedown", e), this.get("draggable"))) {
                    var n = this._panEl;
                    this._dragEndTimer && (t.clearTimeout(this._dragEndTimer), this._dragEndTimer = null, delete this._dragEndTimer), this._dragListeners.length && (this._initDrag(), this._dragStart = !1), n.setCapture && n.setCapture(), Ut.trigger(this, "dragready", e), this._dragListeners = [Ut.addDOMListener(n, "mousemove", Ct(this._onDrag, this)), Ut.addDOMListener(n, "mouseup", Ct(this._onDragEnd, this))]
                }
            },
            _initDrag: function() {
                this._dragListeners.length && (this._panEl.releaseCapture && this._panEl.releaseCapture(), Ut.removeDOMListener(this._dragListeners), this._dragListeners.length = 0, this._dragListeners = [])
            },
            _onDrag: function(t) {
                this._dragListeners.length && !Ft.isTouchStarted() && (t = Ft.fix(t), t.preventDefault(), this.__dp__ && i.Math.distance(this.__dp__, {
                    x: t.pageX,
                    y: t.pageY
                }) <= B || (this.__dp__ = null, this._dragStart || (this._dragStart = !0), Ut.trigger(this, "drag", t)))
            },
            _onDragEnd: function(e) {
                Ft.endTouch(), e = Ft.fix(e), e.preventDefault(), this._dragStart && Ut.trigger(this, "dragend", e), this._initDrag();
                var n = this;
                n._dragEndTimer = t.setTimeout(function() {
                    n._dragStart = !1
                }, 0)
            },
            _onMove: function(t) {
                Ft.isTouchStarted() || (t = Ft.fix(t), Ut.trigger(this, "mousemove", t))
            },
            _onUp: function(t) {
                Ft.endTouch(), t = Ft.fix(t), Ut.trigger(this, "mouseup", t), this._isMapEvent(t) && t.which === Ft.MOUSE_RBUTTON && !this._dragStart && Ut.trigger(this, "rightclick", t), At.browser.msie && 8 === At.browser.version && this._triggerSingleClick(t, !0), this.__ie_dtarget__ = null
            },
            _onWheel: function(t) {
                return t = Ft.fix(t), Ut.trigger(this, "mousewheel", t), !1
            },
            _onContextMenu: function(t) {
                t = Ft.fix(t), t.preventDefault()
            }
        };
    var Xt = .009,
        jt = 15,
        Yt = 1e3,
        Wt = 500,
        Gt = 15,
        Kt = 2;
    i.TouchRecognizer = {
        listenTouch: function() {
            function t(t, e, n) {
                return Ut.addDOMListener(t, e, n, {
                    passive: !1
                })
            }
            var e = this.getTarget();
            this._clearTouches(), this._swipeListeners = [], this._swipeEl = e.setCapture ? e : n, this._touchListeners = [t(e, "touchstart", Ct(this._onTouchStart, this)), t(e, "touchmove", Ct(this._onTouchMove, this)), t(e, "touchend", Ct(this._onTouchEnd, this))]
        },
        unlistenTouch: function() {
            Ut.removeDOMListener(this._touchListeners), Ut.removeDOMListener(this._swipeListeners), this._swipeStart = !1, this._swipeEl = null
        },
        _clearTouches: function() {
            this._swipeStart = !1, this._startTouches = null, this._moveTouches = null, this._endTouches = null, this._pinching = !1, this._startDistance = null, this._tilting = !1, this._startVec = null, delete this._startVec
        },
        _isValidParent: function(t) {
            for (var e = this.getTarget(); t;) {
                if (t === e) return !0;
                t = t.parentElement
            }
            return !1
        },
        _getTouches: function(t) {
            for (var e = t.touches || [], n = [], i = 0, o = e.length; i < o; i++) n.push({
                pageX: e[i].pageX,
                pageY: e[i].pageY,
                clientX: e[i].clientX,
                clientY: e[i].clientY,
                target: e[i].target || t.target
            });
            return n
        },
        _excludeOutsideTouches: function(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) {
                var o = t[n],
                    s = o.target;
                this._isValidParent(s) && e.push(o)
            }
            return e
        },
        _onTouchStart: function(t) {
            Ft.startTouch(t), t = Ft.fix(t), this._clearTouches();
            var e = this._getTouches(t);
            switch (e = this._excludeOutsideTouches(e), this._startTouches = e, Ut.trigger(this, "touchstart", t), e.length > 1 && this._clearDoubleTap(), e.length) {
                case 1:
                    this._oneFingerStart(t);
                    break;
                case 2:
                    this._twoFingerStart(t)
            }
        },
        _onTouchMove: function(t) {
            if (Ft.isTouchStarted()) {
                t = Ft.fix(t);
                var e = this._getTouches(t),
                    n = this._startTouches;
                switch (this._moveTouches = e, Ut.trigger(this, "touchmove", t), e.length > 1 && this._clearDoubleTap(), n && n.length) {
                    case 1:
                        this._oneFingerMove(t);
                        break;
                    case 2:
                        this._twoFingerMove(t)
                }
            }
        },
        _onTouchEnd: function(t) {
            Ft.endTouch(), t = Ft.fix(t);
            var e = this._startTouches,
                n = this._endTouches || [].concat(this._moveTouches || e || []),
                i = t.changedTouches;
            if (this._endTouches = n, Ut.trigger(this, "touchend", t), n) {
                switch (e && e.length) {
                    case 1:
                        this._oneFingerEnd(t);
                        break;
                    case 2:
                        this._twoFingerEnd(t)
                }
                if (i && i.length > 0)
                    for (var o = 0, s = i.length; o < s; o++) this._endTouches.pop()
            }
        },
        _clearSwipe: function() {
            this._swipeEl.releaseCapture && this._swipeEl.releaseCapture(), Ut.removeDOMListener(this._swipeListeners), this._swipeListeners.length = 0,
                this._swipeListeners = [], this._swipeStart = !1
        },
        _readySwipe: function(t) {
            if (this.get("draggable") && !this._pinching) {
                var e = this._swipeEl;
                e.setCapture && e.setCapture(), this._swipeListeners = [Ut.addDOMListener(e, "touchmove", Ct(this._onSwipe, this), {
                    passive: !1
                }), Ut.addDOMListener(e, "touchend", Ct(this._onSwipeEnd, this), {
                    passive: !1
                })], Ut.trigger(this, "dragready", t), this._swipeStart = !0
            }
        },
        _onSwipe: function(t) {
            if (this._swipeStart) return t = Ft.fix(t), t.preventDefault(), t.touches && t.touches.length > 1 ? void this._clearSwipe() : void Ut.trigger(this, "drag", t)
        },
        _onSwipeEnd: function(t) {
            Ft.endTouch(), t = Ft.fix(t), this._swipeStart && Ut.trigger(this, "dragend", t), this._clearSwipe()
        },
        _getCenter: function(t) {
            function e(t, e) {
                var n = Math.min.apply(Math, t),
                    i = Math.max.apply(Math, t),
                    o = Math.min.apply(Math, e),
                    s = Math.max.apply(Math, e);
                return Dt((n + i) / 2, (o + s) / 2)
            }
            var n, i = 0,
                o = t.length,
                s = [],
                r = [],
                a = [],
                h = [];
            for (i = 0; i < o; i++) n = t[i], s.push(n.pageX), r.push(n.pageY), a.push(n.clientX), h.push(n.clientY);
            return {
                pageXY: e(s, r),
                clientXY: e(a, h)
            }
        },
        _getDistance: function(t) {
            if (!t || t.length < 2) return 0;
            var e = t[0],
                n = t[1];
            if (null === e || null === n) return 0;
            var o = this.getPaddingOffset();
            return i.Math.distance({
                x: e.pageX + o.x,
                y: e.pageY + o.y
            }, {
                x: n.pageX + o.x,
                y: n.pageY + o.y
            })
        },
        _refineGesture: function(t) {
            var e, n = this._getCenter(t.touches).pageXY,
                i = this._getDistance(t.touches);
            return null === this._startDistance ? (this._startDistance = i, e = 1) : e = i / this._startDistance, {
                pageX: n.x,
                pageY: n.y,
                scale: e,
                originalEvent: t
            }
        },
        _clearPinch: function() {
            this._pinchEndCallback ? this._pinchEndCallback() : this._pinchEnd(), this._clearPinchTimer(), this._startDistance = null
        },
        _clearPinchTimer: function() {
            t.clearTimeout(this._pinchTimer), this._pinchEndCallback = null, delete this._pinchEndCallback, this._pinchTimer = null, delete this._pinchTimer
        },
        _getTwoTouches: function(t) {
            var e = t.touches,
                n = [Dt(0, 0), Dt(0, 0)];
            return e && e.length >= 2 && (n = [Dt(e[0].pageX, e[0].pageY), Dt(e[1].pageX, e[1].pageY)]), n
        },
        _isTiltGesture: function(t) {
            var e = t.scale,
                n = Math.abs(1 - e),
                i = n <= Xt,
                o = Math.abs(t.rotation) < Kt,
                s = !this._pinching && i && o;
            return (!s || 1 !== e) && s
        },
        _processTilt: function(t, e) {
            var n = t.originalEvent,
                o = this._getTwoTouches(n),
                s = It({
                    scale: t.scale,
                    center: Dt(t.pageX, t.pageY),
                    pageX: t.pageX,
                    pageY: t.pageY,
                    originalEvent: n
                }, e);
            if (!this._tilting) {
                var r = Math.abs(i.Math.getHorizontalDegrees(o[0], o[1]));
                r < Gt && (this._tilting = !0, Ut.trigger(this, "tiltstart", s))
            }
            this._tilting && Ut.trigger(this, "tilt", s)
        },
        _processPinch: function(t, e) {
            var n = It({
                scale: t.scale,
                center: Dt(t.pageX, t.pageY),
                pageX: t.pageX,
                pageY: t.pageY,
                rotation: t.rotation,
                originalEvent: t.originalEvent
            }, e);
            this._pinching || (this._pinching = !0, Ut.trigger(this, "pinchstart", n)), Ut.trigger(this, "pinch", n)
        },
        _pinchStart: function(t) {
            var e = this._getTwoTouches(t.originalEvent);
            this._tilting = !1, this._startVec = i.Math.getVector(e[0], e[1]), this._pinching = !1, this._startDistance = null
        },
        _pinchChange: function(t) {
            if (2 === t.originalEvent.touches.length) {
                var e = this._getTwoTouches(t.originalEvent),
                    n = i.Math.getVector(e[0], e[1]);
                return this._startVec && (t.rotation = i.Math.getDegrees(n, this._startVec)), this._isTiltGesture(t) ? this._processTilt(t) : void(this.get("pinchZoom") && !this._tilting && 1 !== t.scale && this._processPinch(t))
            }
        },
        _pinchEnd: function(t) {
            this._tilting && Ut.trigger(this, "tiltend", t), this._startVec = null, delete this._startVec, this._tilting = !1, this._clearPinchTimer(), this.get("pinchZoom") && (this._startDistance = null, Ut.trigger(this, "pinchend", t))
        },
        _clearDoubleTap: function() {
            t.clearTimeout(this._dbltapTimer), this._dbltapTimer = null, this._prevTouch = null
        },
        _isOverSwipeThreshold: function(t) {
            if (!this._prevTouch) return !1;
            var e = Dt(this._prevTouch.pageX, this._prevTouch.pageY),
                n = Dt(t.pageX, t.pageY);
            return i.Math.distance(e, n) >= jt
        },
        _tapClick: function(t) {
            var e = this._startTouches,
                n = this._moveTouches,
                i = e ? e[0] : null,
                o = n ? n[0] : null,
                s = i && 1 === e.length,
                r = !o || this._getDistance([o, i]) <= jt;
            s && r && (i = Dt(i.pageX, i.pageY), this._triggerClick && this._triggerClick({
                type: "click",
                pageX: i.x,
                pageY: i.y,
                target: t.target
            }))
        },
        _twofingerTap: function() {
            var t = this._startTouches,
                e = this._getCenter(t),
                n = e.pageXY;
            e.clientXY;
            Ut.trigger(this, "twofingertap", {
                pageX: n.x,
                pageY: n.y
            })
        },
        _doubleTap: function(e) {
            var n = this._startTouches[0];
            Dt(n.pageX, n.pageY);
            if (this._isMapEvent(e))
                if (this._prevTouch)
                    if (this._prevTouch && this._isOverSwipeThreshold(n)) this._clearDoubleTap();
                    else {
                        this._clearDoubleTap();
                        var o = this,
                            s = i.now(),
                            r = Ut.addListener(this, "touchend", function() {
                                Ut.removeListener(r), o._clearDoubleTap(), i.now() - s > z || Ut.trigger(o, "doubletap", {
                                    pageX: n.pageX,
                                    pageY: n.pageY,
                                    target: e.target
                                })
                            })
                    }
            else this._dbltapTimer = t.setTimeout(Ct(this._clearDoubleTap, this), Wt)
        },
        _longTap: function(e) {
            var n = this;
            this._clearLongTap(), this._longTapTimer = t.setTimeout(function() {
                n._clearTouches(), n._clearSwipe(), Ut.trigger(n, "longtap", e)
            }, Yt)
        },
        _clearLongTap: function() {
            t.clearTimeout(this._longTapTimer), this._longTapTimer = null
        },
        _oneFingerStart: function(t) {
            var e = this._startTouches[0];
            this._clearPinch(), this._clearSwipe(), this._readySwipe(t), this._longTap(t), this._doubleTap(t), this._prevTouch = e
        },
        _twoFingerStart: function(t) {
            if (this._clearLongTap(), this._clearDoubleTap(), this._clearSwipe(), this._startDistance = null, this.get("pinchZoom") && t.preventDefault(), this._twoTouchAngle = null, t.touches && t.touches.length >= 2) {
                var e = this._getTwoTouches(t);
                this._twoTouchAngle = Math.abs(i.Math.getHorizontalDegrees(e[0], e[1]))
            }
            this._pinchStart(this._refineGesture(t))
        },
        _oneFingerMove: function(t) {
            var e = this._moveTouches[0],
                n = this._dbltapTimer && this._isOverSwipeThreshold(e);
            n && (this._clearLongTap(), this._clearDoubleTap())
        },
        _twoFingerMove: function(e) {
            this.get("pinchZoom") && e.preventDefault();
            var n = this._refineGesture(e);
            if (e.touches && e.touches.length >= 2) {
                var o = this._getTwoTouches(e);
                this._twoTouchAngle = Math.abs(i.Math.getHorizontalDegrees(o[0], o[1]))
            }
            this._pinchChange(n), this._clearPinchTimer(), this._pinchEndCallback = Ct(this._pinchEnd, this, n), this._pinchTimer = t.setTimeout(this._pinchEndCallback, Wt)
        },
        _oneFingerEnd: function(t) {
            this._clearLongTap(), this._tapClick(t)
        },
        _twoFingerEnd: function(t) {
            if (!this._pinching && !this._tilting) {
                var e = this._twoTouchAngle;
                null !== e && e < Gt && this._twofingerTap()
            }(this._pinching || this._tilting) && this._pinchEnd(t), this._twoTouchAngle = null
        }
    }, i.MapUpdater = {
        update: function(t, e, n, o, s) {
            var r = {},
                a = this.get("zoom"),
                h = this.get("centerPoint"),
                l = this.get("mapSystemProjection"),
                c = (this.get("projection"), this.get("maxBounds")),
                u = i.hasValue(n);
            if (u && (n = i.nearRange(n, this.get("userMinZoom"), this.get("userMaxZoom"))), c) {
                if (t && !c.hasPoint(t)) return;
                if (e && !t && !c.hasPoint(l.fromPointToCoord(e))) return
            }
            if (!t && e ? (r.center = l.fromPointToCoord(e), r.centerPoint = e) : t && !e ? (e = l.fromCoordToPoint(t), r.center = t, r.centerPoint = e) : t && e && (r.center = t, r.centerPoint = e), u && !o && a !== n && (o = Dt(0, 0)), i.hasValue(o)) this.get("containerTopLeft").equals(o) || (r.containerTopLeft = o);
            else {
                o = this.get("containerTopLeft").clone();
                var p = r.centerPoint,
                    d = l.scaleUp(h.x - p.x, a),
                    f = l.scaleUp(h.y - p.y, a);
                o.add(d, f), r.containerTopLeft = o
            }
            if (u && (r.zoom = n), u || i.hasValue(r.centerPoint) || i.hasValue(r.containerTopLeft)) {
                n = u ? n : a, e = e || this.get("centerPoint");
                var g = this.get("size"),
                    _ = l.scaleDown(g.width, n) / 2,
                    m = l.scaleDown(g.height, n) / 2,
                    y = e.clone(),
                    v = this.get("tileSize");
                this.get("repeatX") && ((y.x < 0 || y.x > v.width) && (y.x = y.x % v.width, y.x < 0 && (y.x = v.width + y.x)), r.centerPoint && (r.centerPoint = y.clone())), r.projectionTopLeft = y.clone().sub(_, m), r.projectionBottomRight = y.clone().add(_, m)
            }
            this._fireEvents(r, s)
        },
        _fireEvents: function(t, e) {
            var n, o = ["projectionTopLeft", "containerTopLeft", "center", "centerPoint", "zoom"];
            t.centerPoint && i.isDefined(t.zoom) && this.set("bounds", this.calcBoundsBy(t.centerPoint, t.zoom), !0);
            for (var s = 0; s < o.length; s++) n = o[s], i.isDefined(t[n]) && this.set(n, t[n], e);
            this.set("bounds", this.calcBounds(), e)
        }
    }, i.MapView = function(e, o) {
        var s = i.isString(e) ? n.getElementById(e) : e,
            r = s.style;
        "absolute" !== r.position && (r.position = "relative"), r.overflow = "hidden", t.navigator.pointerEnabled ? (r.touchAction = "none", r.contentZooming = "none") : t.navigator.msPointerEnabled && (r.msTouchAction = "none", r.msContentZooming = "none"), this._mapDiv = s, this.set("mapDiv", s), this._initMetaKeys(), this._prepareDOM(), this.setCursor("open"), this._etarget = this.get("containerFillDiv"), this._bindMapOption(o)
    }, zt(i.MapView, i.KVO, [i.MouseRecognizer, i.KeyRecognizer, i.TouchRecognizer], {
        DEFAULT_STYLE: "position:absolute;display:block;margin:0;padding:0;border:0px none;top:0;left:0;",
        _createPane: function(t, e, n, i, o) {
            e = e || 0, i = i || "overflow:visible;width:100%;height:0;" + this.DEFAULT_STYLE, i += "z-index:" + e + ";", i += o || "";
            var s = Zt.createElement("div", i);
            return V && n && s.setAttribute("data-pane-name", n), t.appendChild(s), s
        },
        _prepareDOM: function() {
            var t = Ct(this._createPane, this),
                e = this.DEFAULT_STYLE,
                n = "-webkit-tap-highlight-color: rgba(0,0,0,0);",
                o = e + "overflow:visible;width:100%;height:100%;" + n,
                s = t(this._mapDiv, 0, "fillMapDiv", o),
                r = t(s, 0, "containerFillDiv", o),
                a = t(r, 1, "containerDiv"),
                h = t(r, 1e4, "loadingDiv", o + "background-color:#fff;"),
                l = t(a, 0, "zoomPane"),
                c = t(a, 1, "tilePane"),
                u = t(a, 100, "overlayPane");
            l.style.display = "none", Zt.disableSelection(c), Zt.disableSelection(l), Zt.setOpacity(h, .5), h.style.display = "none", this.set("fillMapDiv", s), this.set("containerFillDiv", r), this.set("containerDiv", a), this.set("loadingDiv", h), this.set("zoomPane", l), this.set("tilePane", c), this.set("overlayPane", u);
            var p = {
                overlayLayer: t(u, 101, "overlayLayer"),
                overlayImage: t(u, 103, "overlayImage"),
                floatPane: t(u, 106, "floatPane")
            };
            this.set("panes", p), this.set("tileindexpanes", new i.KVOArray), this._zIndex = 107
        },
        addTilePane: function(t) {
            this.get("tileindexpanes").push(t)
        },
        removeTilePane: function(t) {
            this.get("tileindexpanes").removeElement(t)
        },
        getTilePanes: function() {
            return this.get("tileindexpanes")
        },
        addPane: function(t, e) {
            var n, o = e;
            return i.isNumber(o) || !i.hasValue(o) ? (n = o || this._zIndex++, o = this._createPane(this.get("containerDiv"), n, t)) : this.get("containerDiv").appendChild(o), this.get("panes")[t] = o, o
        },
        removePane: function(t) {
            var e = this.get("panes"),
                n = e[t];
            n && (Zt.removeElement(n), n = null, e[t] = null, delete e[t])
        },
        _bindMapOption: function(t) {
            this.bindTo(["padding", "draggable", "scrollWheel", "keyboardShortcuts", "pinchZoom", "background"], t)
        },
        background_changed: function(t) {
            var e = this.get("mapDiv"),
                n = "transparent";
            n = 0 === t.indexOf("#") || 0 === t.indexOf("rgb") ? t : "url('" + t + "') repeat 0 0 transparent";
            try {
                e.style.background = n
            } catch (i) {}
        },
        swapTilePane: function() {
            var t, e = this.get("tilePane"),
                n = this.get("zoomPane");
            Ut.trigger(this, "before_tilepane_swap"), t = e, e = n, n = t, e.style.zIndex = 1, n.style.zIndex = 0, this.set("tilePane", e), this.set("zoomPane", n), t = null, Ut.trigger(this, "tilepane_swapped")
        },
        setCursor: function(t) {
            var e = t;
            t && "auto" !== t || (t = "open"), "open" !== t && "closed" !== t || (e = "url('" + U + "/" + t + "hand.cur'), default"), this._cursorType = t, this.get("fillMapDiv").style.cursor = e
        },
        getCursor: function() {
            return this._cursorType
        },
        toggleHand: function(t) {
            if (t && ("open" === t || "closed" === t)) {
                var e = "open" === t ? "closed" : "open";
                this.getCursor() === e && this.setCursor(t)
            }
        },
        getInfoWindowElement: function() {
            function t(t) {
                Ft.stopPropagation(t)
            }
            var e = this._infoWindowEl;
            if (e) return e;
            e = Zt.createElement("div", K + "cursor:default;");
            for (var n = ["click", "mousedown", "dblclick", "mousewheel", "touchstart", "gesturestart"], i = 0, o = n.length; i < o; i++) Ut.addDOMListener(e, n[i], t);
            return this._infoWindowEl = e, e
        },
        getElement: function() {
            return this.get("mapDiv")
        },
        getMapOffset: function() {
            return Zt.getOffset(this.get("mapDiv")).add(this.getPaddingOffset())
        },
        getContainerDivOffset: function() {
            var t = (this.get("padding"), Zt.getTranslate(this.get("containerDiv"))),
                e = this.getPaddingOffset();
            return t.add(e)
        },
        getTarget: function() {
            return this._etarget
        },
        _getTrigger: function(t) {
            var e = this;
            return function(n) {
                n = Ft.fix(n), n.preventDefault(), Ut.trigger(e, t, n)
            }
        },
        listen: function() {
            this.unlisten(), this.listenMouse(), this.listenKey(), this.listenTouch()
        },
        unlisten: function() {
            this.unlistenMouse(), this.unlistenKey(), this.unlistenTouch()
        },
        padding_changed: function() {
            var t = this.get("containerDiv"),
                e = this.getPaddingOffset();
            t.style.marginLeft = e.x + "px", t.style.marginTop = e.y + "px"
        },
        getPaddingOffset: function() {
            var t = this.get("padding");
            return Dt((t.right - t.left) / 2, (t.bottom - t.top) / 2).mul(-1, -1)
        },
        setSize: function(t) {
            !t || this._size && this._size.equals(t) || (this._size = t.clone(), Zt.setSize(this.get("mapDiv"), t))
        },
        getSize: function() {
            return this._size || (this._size = Zt.getSize(this.get("mapDiv")).round()), this._size
        },
        destroy: function() {
            Zt.removeElement(this.get("fillMapDiv")), this.unlisten(), this.unbindAll()
        }
    }), i.MapModel = function(t) {
        var e = this;
        e.bindTo(["userMinZoom", "userMaxZoom", "padding", "resizeOrigin", "maxBounds", "tileTransition", "tileSpare"], t), e.set("instantTiling", !0), e.set("mapTypeId", t.get("mapTypeId")), e.set("mapSystemProjection", new i.MapSystemProjection(e)), e.set("containerTopLeft", Dt()), e.set("scale", 1), e.set("transformOrigin_px", Dt()), e.set("infowindow", null), e.set("renderMode", ct)
    }, zt(i.MapModel, i.KVO, [i.MapUpdater, i.ZoomScaleChecker], {
        padding_changed: function(t) {
            var e = Dt(t.left, t.top),
                n = Dt(t.right, t.bottom);
            this.set("paddingOffset", Dt((n.x - e.x) / 2, (n.y - e.y) / 2).mul(-1, -1)), this.getCenter() && this.setProjBounds(this.get("size"), this.get("centerPoint"), this.get("zoom"))
        },
        initPrimaryData: function(t) {
            var e, n = this,
                o = n.get("userMinZoom"),
                s = n.get("userMaxZoom"),
                r = t.mapTypes.getSelectedType(),
                a = r.tileSize || Vt(256, 256),
                h = r.projection || i.EmptyProjection,
                l = t.get("bounds"),
                c = t.get("maxBounds"),
                u = t.get("center"),
                p = t.get("zoom");
            i.hasValue(o) === !1 && (o = -1), i.hasValue(s) === !1 && (s = 100), n.set("tileSize", a), n.set("projection", h), n.set("isTilingSystemChanged", !1), n.set("repeatX", r.repeatX || !1), l && (e = this.getFitZoomAndCenter(l), p = Math.max(e.zoom, o), u = e.center, t.set("bounds", null)), c && !c.hasPoint(u) && (e = this.getFitZoomAndCenter(c), p = Math.max(e.zoom, o), u = e.center), o > p && (p = o), s < p && (p = s), t.set("zoom", p), t.set("center", u), n.set("zoom", p), n.set("center", u), n.set("centerPoint", n.get("mapSystemProjection").fromCoordToPoint(u)), n.set("tilt", t.get("tilt")), n.set("rotation", t.get("rotation")), n.setProjBounds(n.get("size"), n.get("centerPoint"), p)
        },
        setCenter: function(t) {
            return !t.equals(this.get("center")) && (this.setCenterPoint(this.get("mapSystemProjection").fromCoordToPoint(t)), !0)
        },
        getCenter: function() {
            return this.get("center")
        },
        setCenterPoint: function(t) {
            var e = t.equals(this.get("centerPoint")) === !1,
                n = this._getTileChanges();
            return this.set("instantTiling", !0), this.update(null, t, null), n === this._getTileChanges() && this.set("instantTiling", !1), e
        },
        getCenterPoint: function() {
            return this.get("centerPoint")
        },
        getCenterPixel: function() {
            var t = this.get("size"),
                e = Dt(t.width / 2, t.height / 2);
            return e.sub(this.get("containerTopLeft"))
        },
        getZoom: function() {
            return this.get("zoom")
        },
        setProjBounds: function(t, e, n) {
            var i = this.get("mapSystemProjection"),
                o = i.scaleDown(t.width, n) / 2,
                s = i.scaleDown(t.height, n) / 2;
            this.set("projectionTopLeft", e.clone().sub(o, s)), this.set("projectionBottomRight", e.clone().add(o, s)), this.set("bounds", this.calcBounds())
        },
        _fromCoordToOffsetAtZoom: function(t, e) {
            var n = this.get("mapSystemProjection"),
                i = n.fromCoordToPoint(t.clone());
            return i.sub(this.get("projectionTopLeft")), n.scaleUp(i, e), i.sub(this.get("containerTopLeft")), i
        },
        _fromOffsetToCoordAtZoom: function(t, e) {
            var n = this.get("mapSystemProjection"),
                i = t.clone();
            return i.add(this.get("containerTopLeft")), n.scaleDown(i, e), i.add(this.get("projectionTopLeft")), n.fromPointToCoord(i)
        },
        getBoundsWithMargin: function(t, e, n) {
            if (t = t || this.getBounds(), e = i.trbl(e), e = i.trbl_abs(e), n = i.isDefined(n) ? n : this.get("zoom"), i.trbl_isZero(e)) return t;
            var o = this._fromCoordToOffsetAtZoom(t.getMin(), n),
                s = this._fromCoordToOffsetAtZoom(t.getMax(), n);
            return o.sub(e.left, e.bottom * -1), s.add(e.right, e.top * -1), o = this._fromOffsetToCoordAtZoom(o, n), s = this._fromOffsetToCoordAtZoom(s, n), o instanceof Rt ? Nt.bounds(o, s) : Bt.bounds(o, s)
        },
        fitBounds: function(t, e) {
            var n = this.getBounds(),
                i = this.getFitZoomAndCenter(t),
                o = this._getTileChanges(),
                s = this.calcBoundsBy(i.centerPoint, i.zoom),
                r = this.getBoundsWithMargin(t, e, i.zoom);
            if (n.equals(r)) return !1;
            for (i.center = r.getCenter(), i.centerPoint = this.get("mapSystemProjection").fromCoordToPoint(i.center); s.hasBounds(r) === !1 && (i.zoom -= 1, s = this.calcBoundsBy(i.centerPoint, i.zoom), !(i.zoom <= this.get("mapTypeMinZoom") || s.hasBounds(r))););
            return this.set("instantTiling", !0), this.update(null, i.centerPoint, i.zoom), o === this._getTileChanges() && this.set("instantTiling", !1), this.getBounds().equals(n) === !1
        },
        getBounds: function() {
            return this.get("bounds")
        },
        getFitZoomAndCenter: function(t) {
            var e = this.get("size").clone(),
                n = (this.get("padding"), this.get("mapSystemProjection")),
                o = this.get("userMinZoom"),
                s = this.get("userMaxZoom"),
                r = this.get("mapTypeMinZoom");
            i.hasValue(o) === !1 && (o = -1), i.hasValue(s) === !1 && (s = 100);
            var a = i.calcFitZoomAndCenter(e, t, n, s, o, r),
                h = this.getFittableMinZoom(a.zoom);
            return h === !1 && (h = a.zoom), a.zoom = h, a
        },
        calcBoundsBy: function(t, e) {
            var n = this.get("mapSystemProjection"),
                i = this.get("tileSize"),
                o = this.get("padding"),
                s = this.get("size").clone().sub(o.left + o.right, o.top + o.bottom),
                r = n.scaleDown(s.width, e) / 2,
                a = n.scaleDown(s.height, e) / 2,
                h = t.clone().add(-1 * r, a),
                l = t.clone().add(r, -1 * a);
            return h.x = Math.max(h.x, 0), h.y = Math.min(h.y, i.height), l.x = Math.min(l.x, i.width), l.y = Math.max(l.y, 0), h = n.fromPointToCoord(h), l = n.fromPointToCoord(l), (h instanceof Rt ? Nt : Bt).bounds(h, l)
        },
        calcBounds: function() {
            return this.calcBoundsBy(this.get("centerPoint"), this.get("zoom"))
        },
        getSize: function() {
            return this.get("size")
        },
        setSize: function(t) {
            this.getCenter() && !this.get("size").equals(t) && (t = t.clone(), this._applyResizeOrigin(this.get("size").clone(), t.clone()), this.set("size", t), this.setProjBounds(t, this.get("centerPoint"), this.get("zoom")), this.set("instantTiling", !1))
        },
        setTilt: function(t) {
            this.set("tilt", t || 0)
        },
        getTilt: function() {
            return this.get("tilt") || 0
        },
        setRotation: function(t) {
            this.set("rotation", t || 0)
        },
        getRotation: function() {
            return this.get("rotation") || 0
        },
        _applyResizeOrigin: function(t, e) {
            var n = this.get("resizeOrigin");
            if (n !== m.CENTER) {
                var i = this.get("mapSystemProjection"),
                    o = this.get("zoom"),
                    s = this.get("centerPoint").clone(),
                    r = i.scaleDown(e.sub(t).div(2, 2), o);
                switch (r = Dt(r.width, r.height), n) {
                    case m.TOP_LEFT:
                    case m.LEFT_TOP:
                        s.add(r);
                        break;
                    case m.TOP_RIGHT:
                    case m.RIGHT_TOP:
                        s.add(-r.x, r.y);
                        break;
                    case m.BOTTOM_RIGHT:
                    case m.RIGHT_BOTTOM:
                        s.sub(r);
                        break;
                    case m.BOTTOM_LEFT:
                    case m.LEFT_BOTTOM:
                        s.sub(-r.x, r.y)
                }
                this.setCenterPoint(s)
            }
        },
        _calcBaseOffset: function() {
            this.set("baseOffset", this.get("mapSystemProjection").fromPointToOffset(Dt(0, 0)))
        },
        _calcLinearCenterPoint: function() {
            var t = this.get("centerPoint").clone();
            if (this.get("repeatX")) {
                var e = this.get("mapSystemProjection"),
                    n = this.get("zoom"),
                    i = e.scaleDown(this.get("baseOffset").clone(), n),
                    o = e.scaleDown(e.fromPointToOffset(Dt(0, 0)), n),
                    s = o.sub(i);
                t.add(s);
                var r = this._cpdiff,
                    a = t.clone().sub(this.get("centerPoint"));
                r && r.equals(a) === !1 && Ut.trigger(this, "__point_shifted"), this._cpdiff = a
            }
            this.set("__linearCenterPoint", t)
        },
        bounds_changed: function() {
            var t = this.get("zoom"),
                e = this.get("size"),
                n = this.__prevZoom !== t,
                i = !this.__prevSize || this.__prevSize.equals(e) === !1,
                o = this.get("isTilingSystemChanged");
            (i || n || o) && this._calcBaseOffset(), this._calcLinearCenterPoint(), this.__prevZoom = this.get("zoom"), this.__prevSize = this.get("size");
            var s = this.get("tileIndexArray");
            s && (n || o ? s.build() : s.update(i), o && this.set("isTilingSystemChanged", !1))
        },
        initTilePaneModel: function() {
            var t = new i.TileIndexArray(this),
                e = 0,
                n = function() {
                    e > 1e3 ? e = 0 : e++
                };
            this.set("tileIndexArray", t), this._getTileChanges = function() {
                return e || 0
            }, Ut.addListener(t, "insert_at", n)
        },
        refreshTiles: function(t) {
            t && this.set("instantTiling", !0), Ut.trigger(this, "refresh", t)
        },
        projection_changed: function() {
            var t = this.getCenter();
            if (t) {
                var e = this.get("mapSystemProjection").fromCoordToPoint(t);
                this.set("isTilingSystemChanged", !0), this.set("centerPoint", e), this.setProjBounds(this.getSize(), e, this.getZoom())
            }
        },
        maxBounds_changed: function(t) {
            var e = this.getCenter();
            if (e && t && !t.hasPoint(e)) return this.setCenter(t.getCenter())
        }
    }), i.MapAction = function(t) {
        var e = this;
        e._mapView = null, e._mapModel = null, e._zoomEffector = null, this._asyncEventsModel = null, e._trans = {}, e._listeningEvents = {}, Ut.addListener(e, nt, Ct(e._onBeginDispatch, e)), Ut.addListener(e, it, Ct(e._onStopDispatch, e)), e.bindTo(["draggable", "scrollWheel", "disableDoubleClickZoom", "disableKineticPan", "keyboardShortcuts", "disableDoubleTapZoom", "disableTwoFingerTapZoom", "zoomOrigin"], t), !Zt.isSupportedCSS3Style("transform") || At.browser.msie && At.browser.version < 10 || e.bindTo("overlayZoomEffect", t)
    }, zt(i.MapAction, i.KVO, {
        setMapModel: function(t) {
            this.bindTo(["mapSystemProjection", "centerPoint", "maxBounds", "scale", "containerTopLeft", "zoom", "center", "tilt", "rotation", "projection", "bounds", "padding", "paddingOffset", "size", "tileTransition", "instantTiling", "mapTypeMinZoom", "mapTypeMaxZoom", "tileSize", "repeatX"], t), this._mapModel = t;
            var e = new i.AsyncEventsModel(t);
            Ut.forward(e, "zoomstart", this), Ut.forward(e, "zoomend", this), this._asyncEventsModel = e, this.forwardZooming(), this.forwardIdle()
        },
        overlayZoomEffect_changed: function(t) {
            var e = i.hasValue(t);
            if (this.setValues({
                    ef_overlay: e,
                    ef_overlaylayer: !1,
                    ef_overlayimage: !1,
                    ef_floatpane: !1
                }), e)
                if ("all" === t) this.setValues({
                    ef_overlaylayer: !0,
                    ef_overlayimage: !0,
                    ef_floatpane: !0
                });
                else {
                    var n = t.split(",");
                    i.forEach(n, function(t) {
                        this.set("ef_" + t.toLowerCase().trim(), !0)
                    }.bind(this))
                }
        },
        repeatX_changed: function() {
            this.triggerIdle()
        },
        forwardZooming: function() {
            var t = this,
                e = t._asyncEventsModel;
            t.clearZooming(), t._zforwards = Ut.forward(e, "zoomstart", t, "zooming")
        },
        forwardIdle: function() {
            var t = this,
                e = t._asyncEventsModel;
            t.clearIdle(), t._iforwards = Ut.forward(e, "zoomend", t, "idle")
        },
        clearZooming: function() {
            Ut.removeListener(this._zforwards), this._zforwards = null
        },
        clearIdle: function() {
            Ut.removeListener(this._iforwards), this._iforwards = null
        },
        triggerIdle: function() {
            Ut.trigger(this, "idle", this._asyncEventsModel)
        },
        setMapView: function(t) {
            this.bindTo(["zoomPane", "tilePane", "shiftKey", "ctrlKey", "metaKey", "altKey"], t), this._mapView = t, this.listenView(t)
        },
        initZoomEffector: function() {
            var t = new i.ZoomEffector(this._mapView, this);
            this.bindTo("tileszooming", t), Ut.forward(t, "scale", this), Ut.forward(t, "clearpaneposition", this), this._zoomEffector = t
        },
        clearOverlayPanePosition: function() {
            this._zoomEffector.clearOverlayPanePosition()
        },
        panBy: function(t, e) {
            if (!t.equals(Dt(0, 0))) {
                var n, i = this.get("mapSystemProjection"),
                    o = this.get("centerPoint").clone(),
                    s = this.get("maxBounds"),
                    r = this.get("scale") || 1,
                    a = this.get("containerTopLeft").clone();
                t = t.clone().round(), a.sub(t), t.div(r, r), i.scaleDown(t, this.get("zoom")), o.add(t), n = i.fromPointToCoord(o), this._asyncEventsModel.startPanning(t), s && !s.hasPoint(n) || (a.round(), e && (this.set("containerTopLeft", a), this._mapModel.set("center", n, e)), this._mapModel.update(null, o, null, a, e))
            }
        },
        _getPageXYPointBy: function(t) {
            if (t) {
                if (t.pos) {
                    var e = t.pos();
                    return Dt(e.pageX, e.pageY)
                }
                return "pageX" in t && "pageY" in t ? Dt(t.pageX, t.pageY) : void 0
            }
        },
        fromEventToPointerEvent: function(t) {
            return this._getPointerEvent(t)
        },
        _getPointerEvent: function(t, e) {
            var n = this._getPageXYPointBy(t);
            if (n) {
                var o = {
                    type: e || t.type || "",
                    originalEvent: t,
                    domEvent: t
                };
                if (o.type) {
                    if (0 === o.type.indexOf("key")) return o.keyboardEvent = t, o
                } else o.type = null, delete o.type;
                var s = this.get("mapSystemProjection"),
                    r = this.get("projection"),
                    a = this._mapView.getMapOffset(),
                    h = n.clone().sub(a).sub(this.get("containerTopLeft")),
                    l = s.fromOffsetToPoint(h),
                    c = s.fromPointToCoord(l);
                return o.pointerEvent = t, o.offset = h, o.point = l, r !== i.EmptyProjection && (o.coord = c), r.fromPointToLatLng && (o.latlng = c), this.get("repeatX") && (o.point = s.fromCoordToPoint(c)), o
            }
        },
        _triggerTap: function(t) {
            var e = {
                    type: "tap",
                    target: t.pointerEvent.target,
                    pageX: t.pointerEvent.pageX,
                    pageY: t.pointerEvent.pageY
                },
                n = {
                    domEvent: e,
                    pointerEvent: e,
                    offset: t.offset,
                    point: t.point,
                    coord: t.coord
                };
            t.latlng && (n.latlng = t.latlng), Ut.trigger(this, "tap", n)
        },
        _isMapEvent: function(t, e) {
            return !($[e] && !this._mapView._isMapEvent(t))
        },
        handleEvent: function(t, e) {
            var n = !t;
            if (e = e || t.type, t && this._listeningEvents[e] && this._isMapEvent(t, e) && (n = !0), n) {
                var i = [this, e],
                    o = null;
                t && (o = this._getPointerEvent(t, e), i.push(o)), o && At.mobile && "click" === e && this._triggerTap(o), Ut.trigger.apply(Ut, i)
            }
        },
        zoomBy: function(e, n, i) {
            n = this._eventOrigin_px || n;
            var o = this._asyncEventsModel,
                s = this._mapModel.getValidDeltaZoom(e),
                r = this.get("zoom"),
                a = r + s,
                h = this.get("mapSystemProjection"),
                l = this;
            if (!this._mapModel.isValidZoom(a) || r === a) return !1;
            this.stopKineticPan();
            var c = this.get("size"),
                u = o.getContainerTopLeft(),
                p = this.get("centerPoint").clone(),
                d = n.clone();
            d.sub(c.width / 2, c.height / 2), d.add(u.x, u.y);
            var f = d.clone();
            h.scaleDown(d, r), h.scaleDown(f, a), p.add(d), p.sub(f);
            var g = this.get("maxBounds"),
                _ = this.get("centerPoint").clone();
            return g && (g.hasPoint(h.fromPointToCoord(p)) || (p = _, n = this._mapModel.getCenterPixel())), i && (o.isZooming() || (this._eventOrigin_px = n.clone(), Ut.removeListener(l._zbl), this._zbl = Ut.addListener(this, "idle", function() {
                t.setTimeout(function() {
                    Ut.removeListener(l._zbl), l._eventOrigin_px = null, l._zbl = null
                }, 100)
            })), o.startZooming(s, n, u)), this._mapModel.update(null, p, a), !0
        },
        zoomingBy: function(t, e, n) {
            switch (t) {
                case "start":
                    this._onStartZoomingBy();
                    break;
                case "change":
                    this._onChangeZoomingBy(e, n);
                    break;
                case "end":
                    this._onEndZoomingBy()
            }
        },
        _onStartZoomingBy: function() {
            var t = this.get("scale");
            this._startScale = t - 1, this._trans.pinch && (this._trans.pinch.stop(), this._trans.pinch = null, delete this._trans.pinch)
        },
        _onChangeZoomingBy: function(t, e) {
            e && !this._scaleEventOrigin && (e = this._getZoomOriginByPoint(e), this._scaleEventOrigin = e);
            var n, i = this._getZoomOrigin() || this._scaleEventOrigin || this._mapModel.getCenterPixel();
            t < 1 ? (t -= 1, n = this._startScale + 1 + t) : n = this._startScale + t, n = this._mapModel.getFittableScale(n), 1 !== n && (this._prevPinch && (n < .1 && (n = .1), n > 16 && (n = 16)), this._asyncEventsModel.zoomingWithScale(n, i))
        },
        _onEndZoomingBy: function() {
            function t(t, e) {
                h.zoomingWithScale(t, e || a)
            }

            function e() {
                c._scaleEventOrigin = null, delete c._scaleEventOrigin, h.stopZoomingWithScale()
            }

            function n(t) {
                c._trans.pinch && (c._trans.pinch.stop(), c._trans.pinch = null, delete c._trans.pinch);
                var e = new i.Transition(It({
                    duration: 100
                }, t));
                c.stopTransition(), e.run({
                    scale: s
                }, {
                    scale: o
                }), c._trans.pinch = e
            }
            var o, s = this.get("scale"),
                r = this.get("zoom"),
                a = this._getZoomOrigin() || this._scaleEventOrigin || this._mapModel.getCenterPixel(),
                h = this._asyncEventsModel,
                l = 0,
                c = this;
            if (s && a) {
                if (1 === s) return e();
                var u = Math.pow(2, r),
                    p = u * s,
                    d = Math.floor(Math.log(p) / Math.log(2));
                l = d - r, 0 === l && s > 1 && (l = 1), o = Math.pow(2, l), s > 1 && s > o && (l += 1, o = Math.pow(2, l));
                var f, g = !1;
                0 === l ? (f = function() {
                    g || (c._mapModel.update(null, c.get("centerPoint"), r), e(), g = !0)
                }, n({
                    progress: function(e) {
                        t(e.progress.scale)
                    },
                    complete: f,
                    stop: f
                })) : o !== s ? (f = function() {
                    g || (c.zoomBy(l, a, !1), e(), g = !0)
                }, n({
                    progress: function(e) {
                        t(e.progress.scale)
                    },
                    complete: f,
                    stop: f
                })) : (this.zoomBy(l, a, !1), e())
            }
        },
        isZooming: function() {
            return !!this._asyncEventsModel && this._asyncEventsModel.isZooming()
        },
        changeScale: function(t) {
            this._asyncEventsModel && (this._startScale = 0, this._onChangeZoomingBy(t), this._onEndZoomingBy())
        },
        isTranRunning: function(t) {
            var e = this._trans;
            if (t) {
                var n = e[t] || null;
                return !!n && n.isRunning()
            }
            var i = !1;
            for (var o in e)
                if (e.hasOwnProperty(o) && e[o] && e[o].isRunning()) {
                    i = !0;
                    break
                } return i
        },
        stopTransition: function() {
            i.forEach(this._trans, function(t) {
                t && t.stop()
            })
        },
        __isFar: function(t) {
            var e = this.get("mapSystemProjection"),
                n = e.fromPointToOffset(this.get("centerPoint")),
                i = e.fromCoordToOffset(t).sub(n),
                o = this.get("size").clone().mul(5, 5);
            return i.x = Math.abs(i.x), i.y = Math.abs(i.y), i.x > o.width || i.y > o.height
        },
        panTo: function(t, e) {
            if (!this.get("center").equals(t)) {
                var n = this.get("mapSystemProjection"),
                    o = this._trans.panto,
                    s = n.fromPointToOffset(this.get("centerPoint")),
                    r = n.fromCoordToOffset(t),
                    a = this;
                if (this.stopTransition(), this.__isFar(t)) return this._mapModel.setCenter(t), e.complete && e.complete(), void a.triggerIdle();
                Ut.trigger(this, "panning"), o || (o = new i.Transition({
                    easing: "easeOutCubic"
                }), this._trans.panto = o);
                var h = s.clone().round();
                o.clearListeners(), o.addListener({
                    progress: function(t) {
                        var n = Dt(t.progress.x, t.progress.y);
                        n.sub(h).round(), a.set("instantTiling", !0), a.panBy(n), h.add(n), e.progress && e.progress(t)
                    },
                    complete: function() {
                        a._mapModel.setCenter(t), a.set("instantTiling", !1), e.complete && e.complete(), a.triggerIdle()
                    }
                }), o.run({
                    x: s.x,
                    y: s.y
                }, {
                    x: r.x,
                    y: r.y
                }, e || {})
            }
        },
        panToBounds: function(t, e, n) {
            var i = this._mapModel.getFitZoomAndCenter(t);
            if (n) {
                var o = this._mapModel.calcBoundsBy(i.centerPoint, i.zoom),
                    s = this._mapModel.getBoundsWithMargin(t, n, i.zoom);
                for (i.center = s.getCenter(), i.centerPoint = this.get("mapSystemProjection").fromCoordToPoint(i.center); o.hasBounds(s) === !1 && (i.zoom -= 1, o = this._mapModel.calcBoundsBy(i.centerPoint, i.zoom), !(i.zoom <= this.get("mapTypeMinZoom") || o.hasBounds(s))););
            }
            this.morph(i.center, i.zoom, e)
        },
        morph: function(t, n, o) {
            o = o || {};
            var s, r = this.get("zoom"),
                a = {
                    duration: 500,
                    easing: "easeOutCubic"
                };
            if (i.hasValue(n) && (n = this._mapModel.getValidZoom(n - r)), s = n - r, n === e || 0 === s) return this.panTo(t, It(a, o));
            var h = this.get("mapSystemProjection"),
                l = Math.pow(2, s) - 1,
                c = this.get("centerPoint").clone(),
                u = h.fromCoordToPoint(t),
                p = c.sub(u).div(l, l),
                d = u.clone().sub(p),
                f = h.fromPointToOffset(d);
            this.stopTransition(), l < 1 && (a.easing = "eastInCubic"), this.zoomBy(s, f, It(a, o))
        },
        kineticPan: function(t, e) {
            if (!t || !e) return this.stopKineticPan();
            var n = this._trans.kinetic;
            if (n) {
                var o = 5,
                    s = 500,
                    r = 800,
                    a = Dt(t.x - e.x, t.y - e.y),
                    h = parseInt(Math.sqrt(a.x * a.x + a.y * a.y), 10),
                    l = i.nearRange(12 * h, s, r),
                    c = e.clone(),
                    u = this;
                a.mul(o, o), a.x = i.nearRange(a.x, -500, 500), a.y = i.nearRange(a.y, -500, 500), c.sub(a), this.stopKineticPan(), this.stopTransition(), n.addListener({
                    progress: function(t) {
                        var n = Dt(t.progress.x, t.progress.y);
                        u.panBy(e.clone().sub(n)), e = n.clone()
                    },
                    complete: function() {
                        u.triggerIdle()
                    }
                }), n.run({
                    x: e.x,
                    y: e.y
                }, {
                    x: c.x,
                    y: c.y
                }, {
                    duration: l
                })
            }
        },
        stopKineticPan: function() {
            var t = this._trans.kinetic;
            t && (t.isRunning() && (t.stop(), this.triggerIdle()), t.clearListeners())
        },
        disableKineticPan_changed: function(t) {
            this.stopKineticPan(), t === !1 ? this._trans.kinetic || (this._trans.kinetic = new i.Transition({
                easing: "easeOutCubic"
            })) : this._trans.kinetic && (this._trans.kinetic = null, delete this._trans.kinetic)
        },
        setZoom: function(t, e) {
            var n = this.get("zoom"),
                i = this._mapModel.getValidDeltaZoom(t - n);
            if (t = n + i, t === n || !this._mapModel.isValidZoom(t)) return !1;
            if (e) {
                var o = this._getZoomOrigin() || this._eventOrigin_px;
                o || (o = this._mapModel.getCenterPixel(), this._eventOrigin_px = o);
                var s = this;
                Ut.once(s, "zoomend", function() {
                    s._eventOrigin_px = null, delete s._eventOrigin_px
                }), this.zoomBy(i, o, e)
            } else {
                this.set("instantTiling", !0);
                var r = this._getZoomOrigin() || this._mapModel.getCenterPixel();
                this.zoomBy(i, r, !1)
            }
            return !0
        },
        mapTypeMinZoom_changed: function() {
            if (this._mapModel) {
                var t = this._mapModel.getFittableMinZoom();
                t !== !1 && this.setZoom(t, !0)
            }
        },
        mapTypeMaxZoom_changed: function() {
            if (this._mapModel) {
                var t = this._mapModel.getFittableMaxZoom();
                t !== !1 && this.setZoom(t, !0)
            }
        },
        _onBeginDispatch: function(t) {
            this._listeningEvents[t] = !0, (At.mobile && "tap" === t || "click" === t) && (this._listeningEvents.tap = !0, this._listeningEvents.click = !0)
        },
        _onStopDispatch: function(t) {
            this._listeningEvents[t] = null, delete this._listeningEvents[t], (At.mobile && "tap" === t || "click" === t) && (this._listeningEvents.tap = null, delete this._listeningEvents.tap, this._listeningEvents.click = null, delete this._listeningEvents.click)
        },
        listenView: function(t) {
            var e = this,
                n = Ct(e.handleEvent, e),
                i = function(i, o) {
                    return Ut.addListener(t, i, o ? Ct(o, e) : n)
                };
            t.listen(), e._viewListeners = [i("click", e._onClick), i("rightclick", e._onRightClick), i("mousedown", e._onDown), i("mousemove"), i("mouseup", e._onUp), i("dblclick", e._onDblClick), i("mouseover", e._onOver), i("mouseout", e._onOut), i("dragready", e._onDragReady), i("drag", e._onDrag), i("dragend", e._onDragEnd), i("mousewheel", e._onWheel), i("keydown"), i("keytransition", e._onKeyTransition), i("keytransitionend", e._onKeyTransitionEnd), i("keyup"), i("touchstart"), i("touchmove"), i("touchend"), i("pinchstart", e._onPinchStart), i("pinch", e._onPinch), i("pinchend", e._onPinchEnd), i("twofingertap", e._onTwoFingerTap), i("doubletap", e._onDoubleTap), i("longtap", e._onLongTap), i("tiltstart", e._onTiltStart), i("tilt", e._onTilt), i("tiltend", e._onTiltEnd)]
        },
        unlistenView: function() {
            Ut.removeListener(this._viewListeners)
        },
        _onDown: function(t) {
            this._mapView.toggleHand("closed"), this.handleEvent(t, "mousedown")
        },
        _onUp: function(t) {
            this._mapView.toggleHand("open"), this.handleEvent(t, "mouseup");
        },
        _onClick: function(t) {
            this.handleEvent(t, "click")
        },
        _onRightClick: function(t) {
            this.handleEvent(t, "rightclick")
        },
        _initDrag: function() {
            this._down = null, this._curPoint = null, this._prevPoint = null, this._isMapDragging = null
        },
        _firePanning: function(t, e) {
            var n = Dt(0, 0),
                i = this._curPoint ? this._curPoint : this._startPoint;
            n.x = i.x - t.x, n.y = i.y - t.y, this._curPoint = t, this.panBy(n, e)
        },
        _onDragReady: function(t) {
            if (t.which !== Ft.MOUSE_RBUTTON && !this._prevPinch && !this.isTranRunning("pinch")) {
                this.kineticPan(null);
                var e = t.pos();
                this._down && this._initDrag(), this._startPoint = Dt(e.pageX, e.pageY), this._prevPoint = [this._startPoint], this._down = !0
            }
        },
        _onDrag: function(t) {
            if (this._down) {
                var e, n = t.pos(),
                    o = Dt(n.pageX, n.pageY);
                if (!this._isMapDragging) {
                    if (e = i.Math.distance(this._startPoint, o), e < k) return;
                    this._isMapDragging = !0, this.handleEvent(t, "dragstart")
                }
                2 === this._prevPoint.length && this._prevPoint.shift(), this._prevPoint.push(this._curPoint), this._firePanning(o, !!At.mobile), this.handleEvent(t, "drag")
            }
        },
        _onDragEnd: function(t) {
            if (this._down) {
                var e, n, i = t.pos(),
                    o = Dt(i.pageX, i.pageY);
                0 === t.type.indexOf("touch") && 0 === o.x && 0 === o.y ? (o = this._prevPoint.pop() || this._startPoint, e = this._prevPoint.pop() || this._startPoint) : e = this._prevPoint.pop(), n = e ? e.clone().sub(o) : Dt(0, 0), this._isMapDragging && (t.type.indexOf("touch") === -1 && this._mapView.toggleHand("open"), this.get("disableKineticPan") || 0 === n.x && 0 === n.y ? (this._firePanning(o, !!At.mobile), At.mobile && this._mapModel.update(null, this.get("centerPoint"), null), this.handleEvent(t, "dragend"), this.triggerIdle()) : (this.handleEvent(t, "dragend"), this.kineticPan(e.clone(), o.clone()))), this._initDrag()
            }
        },
        _getZoomOriginByPoint: function(t) {
            var e = t.clone(),
                n = this._mapView.getContainerDivOffset(),
                i = Zt.getOffset(this._mapView.getElement());
            return e.sub(n).sub(i), e
        },
        _getZoomOriginByOption: function() {
            var t = this.get("zoomOrigin");
            return t && this.get("bounds").hasPoint(t) ? this.get("mapSystemProjection").fromCoordToOffset(t) : null
        },
        _getZoomOrigin: function(t) {
            var e = this._getZoomOriginByOption();
            return e || (t ? this._getZoomOriginByPoint(Dt(t.pageX, t.pageY)) : null)
        },
        _onDblClick: function(t) {
            if (this.handleEvent(t, "dblclick"), !this.get("disableDoubleClickZoom")) {
                var e = this._getZoomOrigin(t);
                this.zoomBy(1, e, !0)
            }
        },
        _onOver: function(t) {
            return this._isMapDragging ? void(this._overMap || (this._overMap = !0, this.handleEvent(t, "mouseover"))) : (this._overMap = !0, void this.handleEvent(t, "mouseover"))
        },
        _onOut: function(t) {
            this._overMap = !1, this.handleEvent(t, "mouseout")
        },
        _onWheel: function(t) {
            if (this.handleEvent(t, "mousewheel"), !this.get("scrollWheel") || Ft.isTouchStarted()) return !1;
            t.stop();
            var e = i.now(),
                n = null !== this._wheelTime && e - this._wheelTime < A,
                o = "wheelDeltaY" in t ? t.wheelDeltaY : "wheelDelta" in t ? t.wheelDelta : null,
                s = null !== o && Math.abs(o) <= 6;
            if (!n && !s) {
                this._wheelTime = e;
                var r = Ft.getWheelDelta(t).deltaY > 0 ? 1 : -1,
                    a = this._getZoomOrigin(t);
                this.stopTransition(), this.zoomBy(r, a, !0)
            }
        },
        _onKeyTransition: function(t) {
            this.panBy(t)
        },
        _onKeyTransitionEnd: function() {
            this.triggerIdle()
        },
        _onPinchStart: function(t) {
            this._prevPinch = t.center, this.zoomingBy("start"), this.handleEvent(t, "pinchstart")
        },
        _onPinch: function(t) {
            this._prevPinch && (this.zoomingBy("change", t.scale, t.center), this.handleEvent(t, "pinch"), this._prevPinch = t.center)
        },
        _onPinchEnd: function(t) {
            this._prevPinch && (this.zoomingBy("end"), this.handleEvent(t, "pinchend"), this._prevPinch = null)
        },
        _onTiltStart: function(t) {
            this._tiltCenter = t.center.clone(), this.handleEvent(t, "tiltstart")
        },
        _onTilt: function(t) {
            this._tiltCenter && t.center && (this._tiltCenter = t.center.clone(), this.handleEvent(t, "tilt"))
        },
        _onTiltEnd: function(t) {
            this._tiltCenter = null, delete this._tiltCenter, this.handleEvent(t, "tiltend")
        },
        _onTap: function(t) {
            this.handleEvent(t, "tap")
        },
        _onTwoFingerTap: function(t) {
            if (this.handleEvent(t, "twofingertap"), !this.get("disableTwoFingerTapZoom")) {
                var e = this._getZoomOrigin(t);
                this.zoomBy(-1, e, !0)
            }
        },
        _onDoubleTap: function(t) {
            if (this.handleEvent(t, "doubletap"), !this.get("disableDoubleTapZoom")) {
                var e = this._getZoomOrigin(t);
                this.zoomBy(1, e, !0)
            }
        },
        _onLongTap: function(t) {
            this.handleEvent(t, "longtap")
        },
        containerTopLeft_changed: function(t) {
            this._zoomEffector && this.get("tileszooming") !== !0 && Zt.translate(this._mapView.get("containerDiv"), t.clone().round())
        },
        destroy: function() {
            this.trigger("willDestroy", this), this.unlistenView(), this.unbindAll(), Ut.clearInstanceListeners(this)
        }
    }), i.TileIndexArray = function(t) {
        this._halfSize = i.Size(0, 0), this._forwards = [], this.set("startXIndex", 0), this.set("startYIndex", 0), this.set("startX_px", 0), this.set("startY_px", 0), this.set("indexes", new i.KVOArray), this._forwardEvents(this.get("indexes")), this.bindTo(["mapSystemProjection", "centerPoint", "__linearCenterPoint", "containerTopLeft", "size", "tileSize", "isTilingSystemChanged", "zoom", "scale", "tileSpare", "padding"], t), this._size = this.get("size"), this._zoom = this.get("zoom"), this._inited = !0, this.build()
    }, zt(i.TileIndexArray, i.KVO, {
        BASE_FOR_EXTRA_TILE: .5,
        _tileSize: null,
        _baseForExtraTile_px: null,
        _oldRange: null,
        _forwardEvents: function(t) {
            this._clearEvents(), this._forwards = [Ut.forward(t, "insert_at", this), Ut.forward(t, "set_at", this), Ut.forward(t, "remove_at", this)]
        },
        _clearEvents: function() {
            Ut.removeListener(this._forwards), this._forwards.length = 0, this._forwards = []
        },
        getRotatedIndexes: function() {
            for (var t = [], e = this.get("indexes").getLength(), n = 0, i = []; n < e; n++) t.push(n);
            for (; e;) {
                var o = t.splice(Math.min(Math.floor(e / 2), e - 1), 1)[0];
                i.push(o), e--
            }
            return i
        },
        _rotateFire: function(t) {
            for (var e = this.getRotatedIndexes(), n = 0, i = e.length; n < i; n++) Ut.trigger(this, "insert_at", e[n], t.getAt(e[n]));
            this._forwardEvents(t)
        },
        tileSize_changed: function(t) {
            this._tileSize = t, this._baseForExtraTile_px = new i.Point(parseInt(t.width * this.BASE_FOR_EXTRA_TILE, 10), parseInt(t.height * this.BASE_FOR_EXTRA_TILE, 10)).round()
        },
        size_changed: function(t) {
            this._halfSize = t.clone().mul(.5, .5)
        },
        tileSpare_changed: function() {
            this.update()
        },
        build: function() {
            if (this._inited) {
                var t = this.get("indexes"),
                    e = this.getIndexesRange(this.get("centerPoint"), this.get("zoom"));
                Ut.trigger(this, "cleared", e), t.clear(), this.set("startXIndex", e.startXIndex), this.set("startYIndex", e.startYIndex), this.set("endXIndex", e.endXIndex), this.set("endYIndex", e.endYIndex), this.set("startX_px", e.startX_px), this.set("startY_px", e.startY_px), this._clearEvents();
                for (var n = e.startXIndex; n <= e.endXIndex; n++)
                    for (var i = e.startYIndex; i <= e.endYIndex; i++) t.push({
                        xIndex: n,
                        yIndex: i
                    });
                this._rotateFire(t), this._oldRange = e, this._basePx = new Dt(e.startX_px, e.startY_px), Ut.trigger(this, "built", e)
            }
        },
        refresh: function() {
            Ut.trigger(this, "refresh", range)
        },
        update: function(t) {
            if (this._inited) {
                var e = this.get("indexes"),
                    n = this.getIndexesRange(this.get("__linearCenterPoint"), this.get("zoom")),
                    i = this._getDiffOfTiles(this._oldRange, n),
                    o = this._getDiffOfTiles(n, this._oldRange);
                this._removeHiddenTiles(e, i), this._addShowingTiles(e, o), t || o.length === e.getLength() ? (this._basePx.x = n.startX_px, this._basePx.y = n.startY_px) : this._interpolate(n), this.set("startXIndex", n.startXIndex), this.set("startYIndex", n.startYIndex), this.set("endXIndex", n.endXIndex), this.set("endYIndex", n.endYIndex), this.set("startX_px", n.startX_px), this.set("startY_px", n.startY_px), this._oldRange = n, Ut.trigger(this, "updated", n), t && Ut.trigger(this, "resized", n)
            }
        },
        _interpolate: function(t) {
            var e = this._oldRange,
                n = this._basePx;
            if (e && n) {
                var i = this._tileSize,
                    o = i.width,
                    s = i.height,
                    r = Dt(t.startX_px, t.startY_px),
                    a = r.clone().sub(n);
                a.clone();
                return a.x = a.x % o, a.y = a.y % s, a.equals(Dt(0, 0)) ? t : (a.x > 0 ? a.x > o / 2 && (a.x = (o - a.x) * -1) : -a.x > o / 2 && (a.x = 1 * (o + a.x)), a.y > 0 ? a.y > s / 2 && (a.y = (s - a.y) * -1) : -a.y > s / 2 && (a.y = 1 * (s + a.y)), r.sub(a), t.startX_px = r.x, t.startY_px = r.y, this._basePx.x = r.x, this._basePx.y = r.y, t)
            }
        },
        _removeHiddenTiles: function(t, e) {
            if (!(t.getLength() <= 0)) {
                var n, i;
                for (i = e.length - 1; i >= 0; i--) n = e[i].tileIndex, t.getAt(n) && t.removeAt(n)
            }
        },
        _addShowingTiles: function(t, e) {
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], t.insertAt(n.tileIndex, n), n.tileIndex = null, delete n.tileIndex
        },
        _getDiffOfTiles: function(t, e) {
            var n, i = [],
                o = t.endYIndex - t.startYIndex + 1;
            if (this._isCoveredByDst(t, e)) return i;
            for (var s = t.startXIndex; s <= t.endXIndex; s++)
                for (var r = s < e.startXIndex || s > e.endXIndex, a = t.startYIndex; a <= t.endYIndex; a++) {
                    var h = a < e.startYIndex || a > e.endYIndex;
                    r || h ? (n = (s - t.startXIndex) * o + (a - t.startYIndex), i.push({
                        tileIndex: n,
                        xIndex: s,
                        yIndex: a
                    })) : r || a !== e.startYIndex || (a = e.endYIndex)
                }
            return i
        },
        _isCoveredByDst: function(t, e) {
            return t.startXIndex >= e.startXIndex && t.startYIndex >= e.startYIndex && t.endXIndex <= e.endXIndex && t.endYIndex <= e.endYIndex
        },
        getIndexesRange: function(t, e) {
            var n = this.get("mapSystemProjection"),
                o = this.get("containerTopLeft").clone().round(),
                s = (this.get("scale") || 1, i.round(this.get("tileSpare"))),
                r = this._tileSize,
                a = r.width,
                h = r.height,
                l = this._halfSize.width,
                c = this._halfSize.height,
                u = i.floor(n.scaleUp(t.x, e)),
                p = i.floor(n.scaleUp(t.y, e)),
                d = i.floor(u / a),
                f = i.floor(p / h),
                g = l,
                _ = l,
                m = c,
                y = c;
            2 * l % 2 === 1 && (g -= .5, _ += .5), 2 * c % 2 === 1 && (m -= .5, y += .5);
            var v = this._getCenterGap(u, "width"),
                T = this._getCenterGap(p, "height"),
                x = Math.round(g - v),
                b = Math.round(_ - (a - v)),
                E = Math.round(m - T),
                M = Math.round(y - (h - T)),
                S = Math.max(i.round(s / 2), 0),
                P = Math.max(s - S, 0),
                w = this._getEdgeIndex(d, x, -1, "width"),
                L = this._getEdgeIndex(f, E, -1, "height"),
                O = this._getEdgeIndex(d, b, 1, "width"),
                C = this._getEdgeIndex(f, M, 1, "height"),
                I = {
                    centerXIndex: d,
                    centerYIndex: f,
                    startXIndex: w,
                    startYIndex: L,
                    endXIndex: O,
                    endYIndex: C,
                    cx_px: u,
                    cy_px: p
                };
            return 0 !== S && (I.startXIndex -= S, I.startYIndex -= S), 0 !== P && (I.endXIndex += S, I.endYIndex += S), I.startX_px = i.round((I.startXIndex - d) * a + x - o.x), I.startY_px = i.round((I.startYIndex - f) * h + E - o.y), I
        },
        _getCenterGap: function(t, e) {
            return t %= this._tileSize[e], t < 0 && (t += this._tileSize[e]), t
        },
        _getEdgeIndex: function(t, e, n, i) {
            var o = this._divideAndCeil(e, this._tileSize[i]),
                s = this._needsExtraTile(e, o, i),
                r = s ? 1 : 0;
            return Math.round(t + o * n + r * n)
        },
        _divideAndCeil: function(t, e) {
            return t < 0 ? 0 : Math.ceil(t / e)
        },
        _needsExtraTile: function(t, e, n) {
            var i = e * this._tileSize[n] - t,
                o = "width" === n ? this._baseForExtraTile_px.x : this._baseForExtraTile_px.y;
            return i < o
        },
        forEach: function(t) {
            this.get("indexes").forEach(t)
        },
        getAt: function(t) {
            return this.get("indexes").getAt(t)
        },
        getLength: function() {
            return this.get("indexes").getLength()
        },
        getArray: function() {
            return this.get("indexes").getArray()
        },
        getRange: function() {
            return this._oldRange
        },
        getTileCount: function() {
            return {
                x: Math.abs(this.get("endXIndex") - this.get("startXIndex")),
                y: Math.abs(this.get("endYIndex") - this.get("startYIndex"))
            }
        }
    }), i.TileIndexPane = function(t, e) {
        this._paneName = t || i.guid(), this._options = It({
            overlayMap: !0
        }, e), this._pool = new i.TilePool, this.set("paneElement", Zt.createElement("div", K)), this.set("tileopacity", 1), this._options.overlayMap && this.set("spareElement", Zt.createElement("div", K))
    }, zt(i.TileIndexPane, i.KVO, {
        setMap: function(t) {
            var e = !this._options.overlayMap;
            if (null === t) this._unlistenSwap(), this._unlistenTile(), this._removeAllTiles(), this.unbindAll(), this.get("view").removeTilePane(this), e ? this.get("view").removePane(this._paneName) : (Zt.removeElement(this.getElement()), Zt.removeElement(this.getSpareElement())), this.set("model", null), this.set("action", null), this.set("view", null), this._tileIndexArray = null;
            else {
                var n = t.getMapModel(),
                    i = t.getMapView(),
                    o = t.getMapAction();
                if (n.get("renderMode") === ut) return;
                i.addTilePane(this);
                var s = n.get("tileIndexArray");
                this.set("model", n), this.set("action", o), this.set("view", i), this.bindTo(["tileTransition", "instantTiling", "zoom", "tileSize", "padding"], n), this.bindTo(["tilePane", "zoomPane"], i), this.bindTo("tileszooming", o), this.bindTo(["startXIndex", "startYIndex", "startX_px", "startY_px"], s), this._tileIndexArray = s, this._listenSwap(i), this._initTiles(), e ? i.addPane(this._paneName, this.getElement()) : Zt.addElement(this.getElement(), this.get("tilePane"))
            }
        },
        setMapTypeRegistry: function(t) {
            this._mapTypes = t, this.bindTo("selectedMapType", t)
        },
        tileSize_changed: function() {},
        _initTiles: function() {
            this._pool.init(), this._listenTile(this._tileIndexArray), this._addAllTiles(this._tileIndexArray)
        },
        _listenTile: function(t) {
            this._unlistenTile(), this._relationArray = [Ut.addListener(t, "insert_at", Ct(this._addTileAt, this)), Ut.addListener(t, "remove_at", Ct(this._removeTileAt, this)), Ut.addListener(t, "resized", Ct(this._rearrangeTiles, this)), Ut.addListener(this.get("model"), "refresh", Ct(this.refresh, this))]
        },
        _listenSwap: function(t) {
            this._swapRelation = [Ut.addListener(t, "before_tilepane_swap", Ct(this._beforeTilePaneSwap, this)), Ut.addListener(t, "tilepane_swapped", Ct(this._onTilePaneSwapped, this))]
        },
        _unlistenTile: function() {
            Ut.removeListener(this._relationArray), this._relationArray = null
        },
        _unlistenSwap: function() {
            Ut.removeListener(this._swapRelation), Ut.removeListener(this._tsL), this._swapRelation = null, this._tsL = null
        },
        _getTile: function(t, e, n) {
            var o = this.get("selectedMapType"),
                s = null;
            if (!o) return null;
            var r = this.get("tileopacity");
            return s = o.getTile(t, e, n), s instanceof i.Tile || (s = new i.Tile(s, {
                tileIndex: {
                    xIndex: t,
                    yIndex: e
                },
                size: this.get("tileSize")
            })), s.setOpacity(r), s.getTileIndex() || s.setTileIndex({
                xIndex: t,
                yIndex: e
            }), s.addListener("loaded", Ct(this._onLoadTile, this)), s
        },
        _getTileOffset: function(t, e) {
            "number" != typeof t && "string" != typeof t && (e = t.y || t.yIndex || 0, t = t.x || t.xIndex || 0);
            var n = this.get("tileSize"),
                i = (t - this.get("startXIndex")) * n.width + this.get("startX_px"),
                o = (e - this.get("startYIndex")) * n.height + this.get("startY_px");
            return Dt(i, o)
        },
        _addTileAt: function(t, e) {
            var n = e.xIndex,
                i = e.yIndex,
                o = this._getTile(n, i, this.get("zoom")),
                s = this._getTileOffset(n, i);
            this._pool.add(o), o.load({
                offset: s,
                pane: this.get("paneElement"),
                transition: this.get("tileTransition") && !this.get("instantTiling")
            })
        },
        _addAllTiles: function() {
            var t = this,
                e = t._tileIndexArray,
                n = e.getRotatedIndexes();
            t._pool.clearState(), i.forEach(n, function(n) {
                var i = e.getAt(n);
                t._addTileAt(n, i)
            })
        },
        _rearrangeTiles: function() {
            var t = this;
            this._pool.forEach(function(e) {
                var n = e.getTileIndex(),
                    i = t._getTileOffset(n);
                e.setOffset(i)
            })
        },
        _removeTileAt: function(t, e) {
            this._pool.remove(e)
        },
        _removeAllTiles: function() {
            this._pool.removeAll()
        },
        refresh: function(t) {
            t && this.set("instantTiling", !0);
            var e = this.get("selectedMapType");
            e && this._pool.reset(e, this.get("zoom"), {
                transition: !t
            })
        },
        _onLoadTile: function(t) {
            var e = t.getTileIndex();
            this._pool.markAt(e, !0);
            var n = this._pool.getLoadedCount(),
                i = this._tileIndexArray && this._tileIndexArray.getLength();
            n === i && Ut.trigger(this, "tilesloaded")
        },
        getMinZoom: function() {
            var t = this.get("selectedMapType");
            return t ? t.minZoom : 0
        },
        getMaxZoom: function() {
            var t = this.get("selectedMapType");
            return t ? t.maxZoom : 0
        },
        getElement: function() {
            return this.get("paneElement")
        },
        getSpareElement: function() {
            return this.get("spareElement") || null
        },
        selectedMapType_changed: function(t) {
            if (this.get("model")) {
                var e = this._mapTypes,
                    n = e.get(e.getPreviousTypeId()),
                    i = !n || !1,
                    o = n ? n.constructor : null;
                i || (i = o !== t.constructor, o === Object && (i = !0)), i ? (this._pool.clearState(), this._removeAllTiles(), this._addAllTiles()) : this.refresh(!0), this.get("zoomPane").style.display = "none"
            }
        },
        _swapPane: function() {
            var t, e = this.getSpareElement();
            e && (e.parentNode || this.get("tilePane").appendChild(e), t = this.get("paneElement"), e.innerHTML = "", this.set("paneElement", e), this.set("spareElement", t))
        },
        _beforeTilePaneSwap: function() {
            this._unlistenTile()
        },
        _onTilePaneSwapped: function() {
            var t = this,
                e = t._pool,
                n = t._options.overlayMap;
            n && (t._swapPane(), e.swap()), Ut.removeListener(t._tsL), t._tsL = Ut.once(t.get("action"), "zoomend", function() {
                n || e.removeAll(), t._initTiles(), t._tsL = null, delete t._tsL
            })
        },
        getSwapped: function() {
            return this._pool.getSwapped()
        },
        setOpacity: function(t) {
            var e = Math.min(Math.max(t, 0), 1) || (0 === t ? 0 : 1);
            this.set("tileopacity", e)
        },
        getOpacity: function() {
            var t = this.get("tileopacity");
            return t === e ? 1 : t
        },
        tileopacity_changed: function(t) {
            this._pool.forEach(function(e) {
                e.setOpacity(t)
            })
        },
        tileszooming_changed: function(t) {
            t && this.get("tileTransition") && !this.get("instantTiling") && this._pool.forEach(function(t) {
                t.cancelFadeIn()
            })
        }
    }), i.ZoomEffector = function(t, e) {
        var n = this;
        n.csszoom = At.browser.csszoom, n._topLeft = null, n._curTopLeft = null, n._origin = null, n._containerDiv = t.get("containerDiv"), n._zoomPane = t.get("zoomPane"), n._tilePane = t.get("tilePane"), n._panes = t.get("panes"), n._overlayPane = t.get("overlayPane"), n.listen(e), n.set("tileszooming", !1), n._working = !1, n._view = t
    }, zt(i.ZoomEffector, i.KVO, {
        listen: function(t) {
            Ut.addListener(t, "tilesloaded", Ct(this._onTilesloaded, this)), Ut.addListener(t, "zoomstart", Ct(this._onZoomStart, this)), Ut.addListener(t, "zoomend", Ct(this._onZoomEnd, this)), this.bindTo("tileSize", t), this.bindTo("ef_overlay", t), this.bindTo("ef_overlaylayer", t), this.bindTo("ef_overlayimage", t), this.bindTo("ef_floatpane", t)
        },
        _onTilesloaded: function() {
            if (this._working) {
                this.clearPanePosition(), this._zoomPane.style.display = "none", this._tilePane.style.display = "", this._working = !1;
                var t = this.get("ef_overlay");
                t && this._showPane(t)
            }
        },
        _onZoomStart: function(t) {
            this.get("tileszooming") === !1 && (Zt.willChange(this._tilePane, "transform"), Zt.backfaceVisibility(this._tilePane, "hidden"), this._hidePane(this.get("ef_overlay")), this.set("tileszooming", !0)), this.start(t)
        },
        _onZoomEnd: function() {
            if (this.get("tileszooming") !== !1) {
                this.set("tileszooming", !1), this.finish();
                var t = this.get("ef_overlay");
                t || this._showPane(t), Zt.backfaceVisibility(this._zoomPane, "visible"), Zt.willChange(this._zoomPane, "auto")
            }
        },
        _hidePane: function(t) {
            var e = this;
            i.forEach(this._panes, function(n, i) {
                t ? e.get("ef_" + i.toLowerCase()) || Zt.visible(n, !1) : Zt.visible(n, !1)
            })
        },
        _showPane: function(t) {
            var e = this;
            i.forEach(this._panes, function(n, i) {
                t ? e.get("ef_" + i.toLowerCase()) || Zt.visible(n, !0) : Zt.visible(n, !0)
            })
        },
        clearOverlayPanePosition: function() {
            if (this.get("ef_overlay")) {
                var t = this._overlayPane;
                Zt.transform(t, 1, 0, 0, {
                    x: 0,
                    y: 0
                }), Zt.setOffset(t, 0, 0)
            }
        },
        isZooming: function() {
            return this.get("tileszooming")
        },
        clearPanePosition: function() {
            var t = this._zoomPane,
                e = this._tilePane;
            Zt.transform(t, 1, 0, 0, {
                x: 0,
                y: 0
            }), Zt.transform(e, 1, 0, 0, {
                x: 0,
                y: 0
            }), Zt.setOffset(t, 0, 0), Zt.setOffset(e, 0, 0), this.clearOverlayPanePosition();
            var n = this._tiles;
            n && (i.forEach(n, function(t) {
                t.setOffset(t.offsetSnapShot)
            }), this._tiles.length = 0, this._tiles = []), Ut.trigger(this, "clearpaneposition")
        },
        _swap: function() {
            var t = this._view;
            t.swapTilePane(), this._tilePane = t.get("tilePane"), this._zoomPane = t.get("zoomPane"), this._zoomPane.style.display = "", this._tilePane.style.display = "none", this._working = !0
        },
        start: function(t) {
            this._topLeft = t.get("containerTopLeft_px"), this._origin = t.get("transformOrigin_px"), this._curTopLeft = this._topLeft.clone(), this._swap(), this.csszoom && this._prepareIEZoom(), this.bindTo("scale", t), this.bindTo("transformOrigin_px", t), this.bindTo("containerTopLeft_px", t)
        },
        _prepareIEZoom: function() {
            var t = [];
            this._view.getTilePanes().forEach(function(e) {
                var n = e.getSwapped();
                i.forEach(n, function(e) {
                    e.offsetSnapShot = e.getOffset().clone(), t.push(e)
                })
            }), this._tiles = t
        },
        scale_changed: function(t) {
            1 !== t && (this._curTopLeft = this._topLeft.clone(), this._curScale = t, this._scaleZoomPane(t))
        },
        _scaleZoomPane: function(t) {
            var e = this._zoomPane,
                n = this._overlayPane,
                o = this._origin.clone() || Dt(0, 0);
            if (this.csszoom) {
                var s = this._tiles,
                    r = o.clone().mul(t, t).sub(o).mul(-1, -1),
                    a = this.get("tileSize").clone().mul(t, t).ceil();
                Zt.setOffset(e, r), i.forEach(s, function(e) {
                    var n = e.offsetSnapShot.clone().mul(t, t).ceil();
                    e.setSize(a), e.setOffset(n)
                })
            } else Zt.setScale(e, t, o, !0), this.get("ef_overlay") && Zt.setScale(n, t, o, !0);
            Ut.trigger(this, "scale", t)
        },
        transformOrigin_px_changed: function(t) {
            this._origin = t
        },
        containerTopLeft_px_changed: function(t) {
            this._topLeft = t
        },
        _teardown: function() {
            Zt.transform(this._containerDiv, 1, 0, 0, {
                x: 0,
                y: 0
            });
            var t = this._curTopLeft,
                e = this._zoomPane,
                n = this._overlayPane,
                i = this._curScale;
            Zt.isSupportedCSS3Style("transform") || (At.browser.msie || t.div(i, i), t.add(Zt.getRawOffset(e))), Zt.setOffset(e, t), this.get("ef_overlay") && Zt.setOffset(n, t), this._tilePane.style.display = ""
        },
        finish: function() {
            this.unbind(["scale", "transformOrigin_px", "containerTopLeft_px"]), this._teardown(), this._topLeft = null, this._origin = null, this._curTopLeft = null, this._curScale = 1
        },
        tileszooming_changed: function(t) {
            t && this.clearPanePosition()
        }
    });
    var Ht = function() {};
    Ht.prototype = {
            constructor: Ht,
            fromCoordToPoint: function(t) {
                var e, n;
                return t instanceof Rt ? (e = t.lng(), n = t.lat()) : (e = t.x, n = t.y), Dt(e, n)
            },
            fromPointToCoord: function(t) {
                var e = t.x,
                    n = t.y;
                return Dt(e, n)
            }
        }, i.EmptyProjection = new Ht,
        function() {
            var t = 6378137,
                e = 85.051128,
                n = i.Math.fromRadiansToDegrees,
                o = i.Math.fromDegreesToRadians,
                s = 1 / 360,
                r = 1 / (4 * Math.PI),
                a = 360,
                h = -1 / (2 * Math.PI),
                l = function() {};
            zt(l, Ht, {
                name: "EPSG:3857",
                fromCoordToPoint: function(t) {
                    return this.fromLatLngToPoint(t)
                },
                fromLatLngToPoint: function(t) {
                    var n, i, a = t.y,
                        h = t.x;
                    return t instanceof Rt && (a = t.lat(), h = t.lng()), n = h * s + .5, a >= e ? i = 0 : a <= -e ? i = 1 : (i = Math.sin(o(a)), i = .5 - Math.log((1 + i) / (1 - i)) * r), Dt(n, i)
                },
                fromPointToCoord: function(t) {
                    return this.fromPointToLatLng(t)
                },
                fromPointToLatLng: function(t) {
                    var e = t.x,
                        o = t.y;
                    return e = (e - .5) * a, o = 2 * Math.atan(Math.exp((o - .5) / h)), o = n(o - Math.PI / 2), i.LatLng(parseFloat(o.toFixed(7)), parseFloat(e.toFixed(7)))
                },
                fromCoordToLatLng: function(t) {
                    return t.clone()
                },
                fromLatLngToCoord: function(t) {
                    return t.clone()
                },
                getDistance: function(e, n) {
                    var o = i.Math.radianPerDegree,
                        s = e.y,
                        r = n.y,
                        a = e.x,
                        h = n.x,
                        l = (r - s) * o,
                        c = (h - a) * o,
                        u = Math.sin(l / 2) * Math.sin(l / 2) + Math.cos(s * o) * Math.cos(r * o) * Math.sin(c / 2) * Math.sin(c / 2),
                        p = 2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u)),
                        d = p * t;
                    return d
                },
                getDestinationCoord: function(t, e, n) {
                    return new Rt(t.y, t.x).destinationPoint(e, n)
                }
            }), i.EPSG3857Projection = l, i.EPSG3857 = new l
        }(), i.MapSystemProjection = function(t) {
            var e = this;
            e.bindTo(["projection", "zoom", "tileSize", "mapTypeMinZoom", "projectionTopLeft", "containerTopLeft", "repeatX"], t)
        }, zt(i.MapSystemProjection, i.KVO, {
            factor: function(t) {
                var e = this.get("projection").minZoom || 0;
                return Math.pow(2, t - e)
            },
            scaleUp: function(t, e) {
                var n = this.factor(e);
                return t instanceof Dt || t instanceof Vt ? t.mul(n, n) : t * n
            },
            scaleDown: function(t, e) {
                var n = this.factor(e);
                return t instanceof Dt || t instanceof Vt ? t.div(n, n) : t / n
            },
            fromCoordToPoint: function(t) {
                var e = this.get("projection"),
                    n = this.get("tileSize"),
                    o = e.fromCoordToPoint(t);
                return e !== i.EmptyProjection && o.mul(n.width, n.height), this._interpolate(o)
            },
            fromPointToCoord: function(t) {
                var e = this.get("projection"),
                    n = this.get("tileSize"),
                    o = t.clone();
                return e !== i.EmptyProjection && o.div(n.width, n.height), e.fromPointToCoord(o)
            },
            fromCoordToOffset: function(t) {
                var e = this.fromCoordToPoint(t);
                return this.fromPointToOffset(e)
            },
            fromPointToOffset: function(t) {
                var e = (this.get("tileSize"), t.clone());
                return e.sub(this.get("projectionTopLeft")), this.scaleUp(e, this.get("zoom")), e.sub(this.get("containerTopLeft")), e
            },
            fromOffsetToCoord: function(t) {
                var e = this.fromOffsetToPoint(t);
                return this.fromPointToCoord(e)
            },
            fromOffsetToPoint: function(t) {
                var e = t.clone();
                return e.add(this.get("containerTopLeft")), this.scaleDown(e, this.get("zoom")), e.add(this.get("projectionTopLeft")), this._interpolate(e)
            },
            fromCoordToPixelPoint: function(t) {
                var e = this.get("zoom"),
                    n = this.fromCoordToPoint(t),
                    i = n.clone();
                return this.scaleUp(i, e), i
            },
            getDistance: function(t, e) {
                var n = this.get("projection");
                return n.getDistance ? n.getDistance(t, e) : 0
            },
            getDestinationCoord: function(t, e, n) {
                var i = this.get("projection");
                return i.getDestinationCoord ? i.getDestinationCoord(t, e, n) : null
            },
            getProjectionName: function() {
                return this.get("projection").name || "unknown"
            },
            _interpolate: function(t) {
                var e = t.clone(),
                    n = this.get("tileSize"),
                    i = n.width,
                    o = n.height;
                return this.get("repeatX") ? (e.x > i ? e.x = e.x % i : e.x < 0 && (e.x = i + e.x % i), e.y > o ? e.y = e.y % o : e.y < 0 && (e.y = o + e.y % o)) : (e.x = Math.min(Math.max(e.x, 0), i), e.y = Math.min(Math.max(e.y, 0), i)), e
            }
        }),
        function() {
            function t(t, e, n, i, o) {
                return t * o - e * Math.sin(2 * o) + n * Math.sin(4 * o) - i * Math.sin(6 * o)
            }

            function e(t) {
                return t < 0 ? -1 : 1
            }

            function n(t) {
                return Math.abs(t) < r ? t : t - e(t) * h
            }
            var o = i.Math.fromRadiansToDegrees,
                s = i.Math.fromDegreesToRadians,
                r = 3.141592653589793,
                a = 1.5707963267948966,
                h = 6.283185307179586,
                l = 1e-10,
                c = {
                    name: "UTMK",
                    datum: "GRS80",
                    lat0: 38,
                    lng0: 127.5,
                    a: 6378137,
                    b: 6356752.314140356,
                    falseNorthing: 2e6,
                    falseEasting: 1e6,
                    scaleFactor: .9996,
                    minX: 340901120,
                    maxX: 359494656,
                    minY: 141928960,
                    maxY: 157454848,
                    TILE_SIZE: 256,
                    BASE_X: 90112,
                    BASE_Y: 668608,
                    POINT_UNIT_PER_METER: 8192
                };
            c.lat0 = s(c.lat0), c.lng0 = s(c.lng0), c.a2 = c.a * c.a, c.b2 = c.b * c.b, c.es = (c.a2 - c.b2) / c.a2, c.e = Math.sqrt(c.es), c.ep2 = (c.a2 - c.b2) / c.b2, c.e0 = function(t) {
                return 1 - .25 * t * (1 + t / 16 * (3 + 1.25 * t))
            }(c.es), c.e1 = function(t) {
                return .375 * t * (1 + .25 * t * (1 + .46875 * t))
            }(c.es), c.e2 = function(t) {
                return .05859375 * t * t * (1 + .75 * t)
            }(c.es), c.e3 = function(t) {
                return t * t * t * (35 / 3072)
            }(c.es), c.ml0 = c.a * t(c.e0, c.e1, c.e2, c.e3, c.lat0);
            var u = function() {};
            zt(u, Ht, {
                name: "UTMK",
                minZoom: -1,
                fromCoordToUTMK: function(t) {
                    return this.fromLatLngToUTMK(t)
                },
                fromLatLngToUTMK: function(t) {
                    return this._fromCoordToPlane("LATLNG_TO_UTMK", t)
                },
                fromUTMKToPoint: function(t) {
                    return this._fromCoordToPlane("UTMK_TO_POINT", t)
                },
                fromCoordToPoint: function(t) {
                    return this.fromLatLngToPoint(t)
                },
                fromLatLngToPoint: function(t) {
                    return this._fromCoordToPlane("LATLNG_TO_POINT", t)
                },
                fromPointToUTMK: function(t) {
                    return this._fromPlaneToCoord("POINT_TO_UTMK", t)
                },
                fromUTMKToCoord: function(t) {
                    return this.fromUTMKToLatLng(t)
                },
                fromUTMKToLatLng: function(t) {
                    return this._fromPlaneToCoord("UTMK_TO_LATLNG", t)
                },
                fromPointToCoord: function(t) {
                    return this.fromPointToLatLng(t)
                },
                fromPointToLatLng: function(t) {
                    return this._fromPlaneToCoord("POINT_TO_LATLNG", t)
                },
                fromLatLngToCoord: function(t) {
                    return t.clone()
                },
                fromCoordToLatLng: function(t) {
                    return t.clone()
                },
                pointPerMeter: c.POINT_UNIT_PER_METER,
                getDistance: function(t, e) {
                    var n = this.fromCoordToPoint(t),
                        o = this.fromCoordToPoint(e),
                        s = i.Math.distance(n, o);
                    return s * c.POINT_UNIT_PER_METER * c.TILE_SIZE
                },
                getDestinationCoord: function(t, e, n) {
                    var o = (e || 0) - 90,
                        s = this.fromCoordToPoint(t),
                        r = n / (c.POINT_UNIT_PER_METER * c.TILE_SIZE),
                        a = o * i.Math.radianPerDegree,
                        h = s.clone();
                    return h.add(r * Math.cos(a), r * Math.sin(a)), this.fromPointToCoord(h)
                },
                _fromCoordToPlane: function(e, i) {
                    var o, r;
                    if ("UTMK_TO_POINT" !== e) {
                        o = s(i.x), r = s(i.y);
                        var a = n(o - c.lng0),
                            h = Math.sin(r),
                            l = Math.cos(r),
                            u = l * a,
                            p = Math.pow(u, 2),
                            d = c.ep2 * Math.pow(l, 2),
                            f = Math.tan(r),
                            g = Math.pow(f, 2),
                            _ = 1 - c.es * Math.pow(h, 2),
                            m = c.a / Math.sqrt(_),
                            y = c.a * t(c.e0, c.e1, c.e2, c.e3, r);
                        o = c.scaleFactor * m * u * (1 + p / 6 * (1 - g + d + p / 20 * (5 - 18 * g + Math.pow(g, 2) + 72 * d - 58 * c.ep2))) + c.falseEasting, r = c.scaleFactor * (y - c.ml0 + m * f * (p * (.5 + p / 24 * (5 - g + 9 * d + 4 * Math.pow(d, 2) + p / 30 * (61 - 58 * g + Math.pow(g, 2) + 600 * d - 330 * c.ep2))))) + c.falseNorthing, o = parseFloat(o), r = parseFloat(r)
                    }
                    return "LATLNG_TO_UTMK" === e ? Dt(parseFloat(o.toFixed(1)), parseFloat(r.toFixed(1))) : ("UTMK_TO_POINT" === e && (o = arguments[1].x, r = arguments[1].y), o = (o - c.BASE_X) / c.POINT_UNIT_PER_METER, r = 1.25 * c.TILE_SIZE - (r - c.BASE_Y) / c.POINT_UNIT_PER_METER, o /= c.TILE_SIZE, r /= c.TILE_SIZE, Dt(o, r))
                },
                _fromPlaneToCoord: function(t, s) {
                    var r, h;
                    if ("UTMK_TO_LATLNG" !== t ? (r = s.x * c.TILE_SIZE, h = s.y * c.TILE_SIZE) : (r = s.x, h = s.y), "UTMK_TO_LATLNG" !== t && (r = r * c.POINT_UNIT_PER_METER + c.BASE_X, h = (1.25 * c.TILE_SIZE - h) * c.POINT_UNIT_PER_METER + c.BASE_Y), "POINT_TO_UTMK" === t) return Dt(parseFloat(r.toFixed(1)), parseFloat(h.toFixed(1)));
                    "UTMK_TO_LATLNG" === t && (r = r, h = h);
                    var u, p, d, f, g = 6;
                    for (r -= c.falseEasting, h -= c.falseNorthing, u = (c.ml0 + h / c.scaleFactor) / c.a, p = u, f = 0; d = (u + c.e1 * Math.sin(2 * p) - c.e2 * Math.sin(4 * p) + c.e3 * Math.sin(6 * p)) / c.e0 - p, p += d, !(Math.abs(d) <= l); f++)
                        if (f >= g) return !1;
                    if (Math.abs(p) < a) {
                        var _ = Math.sin(p),
                            m = Math.cos(p),
                            y = Math.tan(p),
                            v = c.ep2 * Math.pow(m, 2),
                            T = Math.pow(v, 2),
                            x = Math.pow(y, 2),
                            b = Math.pow(x, 2);
                        u = 1 - c.es * Math.pow(_, 2);
                        var E = c.a / Math.sqrt(u),
                            M = E * (1 - c.es) / u,
                            S = r / (E * c.scaleFactor),
                            P = Math.pow(S, 2);
                        r = n(c.lng0 + S * (1 - P / 6 * (1 + 2 * x + v - P / 20 * (5 - 2 * v + 28 * x - 3 * T + 8 * c.ep2 + 24 * b))) / m), h = p - E * y * P / M * (.5 - P / 24 * (5 + 3 * x + 10 * v - 4 * T - 9 * c.ep2 - P / 30 * (61 + 90 * x + 298 * v + 45 * b - 252 * c.ep2 - 3 * T)))
                    } else r = c.lng0, h = a * e(h);
                    return r = o(r), h = o(h), r = parseFloat(r.toFixed(7)), h = parseFloat(h.toFixed(7)), i.LatLng(h, r)
                }
            }), i.UTMKProjection = u, i.UTMK = new u
        }(),
        function() {
            var t = 34e7,
                e = 13e7,
                n = function() {};
            zt(n, i.UTMKProjection, {
                name: "UTMK_NAVER",
                fromCoordToNaver: function(t) {
                    return this.fromLatLngToNaver(t)
                },
                fromLatLngToNaver: function(t) {
                    var e = this._fromCoordToPlane("LATLNG_TO_UTMK", t);
                    return this.fromUTMKToNaver(e)
                },
                fromUTMKToNaver: function(n) {
                    var i = parseInt(10 * n.x + t, 10),
                        o = parseInt(10 * n.y + e, 10);
                    return Dt(i, o)
                },
                fromNaverToPoint: function(t) {
                    var e = this.fromNaverToUTMK(t);
                    return this.fromUTMKToPoint(e)
                },
                fromPointToNaver: function(t) {
                    var e = this.fromPointToUTMK(t);
                    return this.fromUTMKToNaver(e)
                },
                fromNaverToUTMK: function(n) {
                    var i = parseFloat((n.x - t) / 10),
                        o = parseFloat((n.y - e) / 10);
                    return Dt(i, o)
                },
                fromNaverToCoord: function(t) {
                    return this.fromNaverToLatLng(t)
                },
                fromNaverToLatLng: function(t) {
                    var e = this.fromNaverToUTMK(t);
                    return this.fromUTMKToCoord(e)
                }
            }), i.UTMK_NAVERProjection = n, i.UTMK_NAVER = new n
        }(), i.MapTypeRegistry = function(t, n) {
            this._typeIds = [], this._typeId = null, this._prevId = null, this.setValues(t), n !== e && this.setSelectedTypeId(n)
        }, zt(i.MapTypeRegistry, i.KVO, {
            set: function(t, e) {
                if ("selectedPaneType" !== t && "selectedMapType" !== t) {
                    var n = this.get(t),
                        o = i.getIndexOfElement(this._typeIds, t);
                    i.KVO.prototype.set.apply(this, arguments), o > -1 && this._typeIds.splice(o, 1), null !== e ? (this._typeIds.push(t), Ut.trigger(this, "add_paneType", t, e), Ut.trigger(this, "addMapType", t, e)) : n && (Ut.trigger(this, "remove_paneType", t, n), Ut.trigger(this, "removeMapType", t, n))
                }
            },
            setSelectedTypeId: function(t) {
                this._prevId = this._typeId, this._typeId = t, i.KVO.prototype.set.apply(this, ["selectedMapType", this.get(t)]), i.KVO.prototype.set.apply(this, ["selectedPaneType", this.get(t)])
            },
            getSelectedTypeId: function() {
                return this._typeId
            },
            getPreviousTypeId: function() {
                return this._prevId
            },
            getSelectedType: function() {
                return this.get("selectedMapType")
            },
            getTypeIds: function() {
                return this._typeIds.slice(0)
            }
        }), i.Tile = function(t, e) {
            var n = It({
                opacity: 1,
                transition: !0,
                zIndex: 0
            }, e || {});
            this._prepareDOM(), t && this._el.appendChild(t), this.setValues(n)
        }, zt(i.Tile, i.KVO, {
            _prepareDOM: function() {
                var t = Zt.createElement("div", G + J + q);
                t.setAttribute("draggable", !1), t.setAttribute("unselectable", "on"), !At.mobile && At.browser.safari && (t.style.pointerEvents = "none"), At.usingGPU && At.restrictiveGPU && Zt.addElement(Zt.createDummyForRestrictiveGPU(), t), Zt.forceGPU(t), this._el = t
            },
            appendTo: function(t) {
                this._el.parentNode !== t && Zt.addElement(this._el, t)
            },
            getElement: function() {
                return this._el
            },
            getElements: function() {
                return [this._el]
            },
            show: function() {
                this._el && (this._el.style.display = "")
            },
            hide: function() {
                this._el && (this._el.style.display = "none")
            },
            fadeIn: function() {
                var t = Zt.css3Styles.transition ? 300 : 600;
                return function(e, n) {
                    var i = this._el,
                        o = this.getOpacity();
                    Zt.setOpacity(i, n || 0), Zt.animate(i, {
                        opacity: o
                    }, {
                        duration: t,
                        easing: "easeOutCubic",
                        complete: function() {
                            e && e()
                        }
                    })
                }
            }(),
            cancelFadeIn: function() {
                Zt.stop(this._el, {
                    opacity: this.getOpacity()
                })
            },
            load: function(t) {
                var e = It({}, t);
                this.getOffset() || e.offset || (e.offset = Dt(0, 0)), this.setValues(e), this.show(), this.get("transition") ? this.fadeIn(Ct(this._triggerLoaded, this)) : this._triggerLoaded()
            },
            reset: function(t, e, n) {
                t instanceof i.AbstractMapType && !(arguments.length < 2) && this.load(n)
            },
            setBlank: function() {
                this.hide()
            },
            remove: function() {
                Zt.removeElement(this._el)
            },
            destroy: function() {
                this.remove(), this._el = null
            },
            setOffset: function(t, e) {
                var n = t instanceof Dt ? t.clone() : Dt(t, e);
                n !== this.getOffset() && this.set("offset", n)
            },
            getOffset: function() {
                return this.get("offset")
            },
            setOpacity: function(t) {
                t !== this.getOpacity() && this.set("opacity", t)
            },
            getOpacity: function() {
                return this.get("opacity")
            },
            setZIndex: function(t) {
                t !== this.getZIndex() && this.set("zIndex", t)
            },
            getZIndex: function() {
                return this.get("zIndex")
            },
            setSize: function(t) {
                this.getSize();
                this.set("size", t)
            },
            getSize: function() {
                return this.get("size")
            },
            setTileIndex: function(t) {
                var e = t.xIndex,
                    n = t.yIndex;
                "x" in t && (e = t.x, n = t.y), this.set("tileIndex", {
                    xIndex: e || 0,
                    yIndex: n || 0
                })
            },
            disable: function() {
                this._triggerLoaded = Ot
            },
            getTileIndex: function() {
                return this.get("tileIndex") || null
            },
            _triggerLoaded: function() {
                Ut.trigger(this, "loaded", this)
            },
            offset_changed: function(t) {
                Zt.setOffset(this._el, t)
            },
            opacity_changed: function(t) {
                Zt.setOpacity(this._el, t)
            },
            zIndex_changed: function(t) {
                this._el.style.zIndex = t
            },
            size_changed: function(t) {
                Zt.setSize(this._el, t)
            },
            pane_changed: function(t) {
                this.appendTo(t)
            }
        }), i.ImageTile = function(t) {
            var e = It({
                urls: "",
                opacity: 1,
                zIndex: 0,
                imgonload: null,
                imgonerror: null
            }, t);
            this._imgs = [], i.Tile.apply(this, [null, e])
        }, zt(i.ImageTile, i.Tile, {
            _prepareImage: function() {
                var t = this.getUrls(),
                    e = this._imgs.length,
                    n = t.length - e,
                    i = this.getElement(),
                    o = 0,
                    s = null,
                    r = null;
                if (n > 0)
                    for (o = 0; o < n; o++) s = new Zt.Image({
                        contextmenu: null,
                        disableSelection: !0,
                        position: "absolute",
                        opacity: 1,
                        alt: ""
                    }), r = s.getElement(), Zt.setOffset(r, 0, 0), Zt.setZIndex(r, e + o), i.appendChild(r), this._imgs.push(s);
                else if (n < 0)
                    for (n = Math.abs(n), o = 0; o < n; o++) s = this._imgs.pop(), i.removeChild(s.getElement()), s = null
            },
            forEachImages: function(t) {
                return i.forEach(this._imgs, t)
            },
            getElements: function() {
                return [this._el].concat(this.getImageElements())
            },
            setUrls: function(t) {
                return this.set("urls", t), this
            },
            getUrls: function() {
                return this.get("urls")
            },
            load: function(t) {
                var e = It({}, t);
                this.getOffset() || e.offset || (e.offset = Dt(0, 0)), this.setValues(e), this.get("transition") && this.hide(), this.loadImage(e.urls || this.get("urls"))
            },
            reset: function(t, e, n) {
                if (t instanceof i.AbstractMapType && !(arguments.length < 2)) {
                    var o = this,
                        s = t.getImageOptions() || {},
                        r = It({
                            size: t.tileSize,
                            imgonload: s.onload || null,
                            imgonerror: s.onerror || null
                        }, n);
                    i.forEach(r, function(t, e) {
                        o.set(e, t, !0)
                    });
                    var a = this.getTileIndex(),
                        h = t.getTileUrls(a.xIndex, a.yIndex, e);
                    this.setUrls(h), this.load(r)
                }
            },
            loadImage: function(t) {
                var e = t;
                if (!e) return this.setBlank(), void this._triggerLoaded();
                i.isString(e) && (e = [e]);
                var n = this,
                    o = e.length,
                    s = function() {
                        if (n.show(), n.get("transition")) n.fadeIn(function() {
                            --o > 0 || n._triggerLoaded()
                        });
                        else {
                            if (--o > 0) return;
                            n._triggerLoaded()
                        }
                    };
                this.forEachImages(function(t, n) {
                    var i = t.getElement(),
                        o = i.src + "",
                        r = e[n];
                    o || (i.src = X, o = X), r === o ? s() : t._setUrl(i, r, s, s)
                })
            },
            setBlank: function() {
                this.forEachImages(function(t) {
                    var e = t.getElement();
                    e.onload = null, e.onerror = null, e.src = X
                })
            },
            disable: function() {
                this.forEachImages(function(t) {
                    var e = t.getElement();
                    e.onload = null, e.onerror = null
                }), i.Tile.prototype.disable.apply(this)
            },
            remove: function() {
                this.setBlank(), i.Tile.prototype.remove.apply(this)
            },
            destroy: function() {
                i.Tile.prototype.destroy.apply(this), this._imgs.length = 0, this._imgs = null
            },
            getImageElements: function() {
                var t = [];
                return this.forEachImages(function(e) {
                    t.push(e.getElement())
                }), t
            },
            urls_changed: function(t) {
                this._imgs.length !== t.length && this._prepareImage()
            },
            size_changed: function(t) {
                this.forEachImages(function(e) {
                    e.setSize(t)
                }), Zt.setSize(this._el, t)
            },
            imgonload_changed: function(t) {
                this.forEachImages(function(e) {
                    e.setHandler({
                        onload: t
                    })
                })
            },
            imgonerror_changed: function(t) {
                this.forEachImages(function(e) {
                    e.setHandler({
                        onerror: t
                    })
                })
            }
        }), i.CanvasTile = function(t) {
            var e = It({
                opacity: 1
            }, t);
            this._prepareDOM(e), i.Tile.apply(this, [null, e])
        }, zt(i.CanvasTile, i.Tile, {
            _prepareDOM: function() {
                i.Tile.prototype._prepareDOM.apply(this);
                var t = Zt.createElement("canvas"),
                    e = t.getContext("2d");
                this._canvas = t, this._ctx = e, this._el.appendChild(t)
            },
            getElements: function() {
                return [this._el, this._canvas]
            },
            reset: function(t, e, n) {
                if (t instanceof i.AbstractMapType && !(arguments.length < 2)) {
                    var o = this,
                        s = It({
                            size: t.tileSize
                        }, n);
                    i.forEach(s, function(t, e) {
                        o.set(e, t, !0)
                    });
                    var r = this.getTileIndex(),
                        a = t.getTileData(r.xIndex, r.yIndex, e);
                    this.set("imageData", a), this.load(s)
                }
            },
            setBlank: function() {
                var t = this._ctx;
                if (t) {
                    var e = this.getSize();
                    t.clearRect(0, 0, e.width, e.height)
                }
            },
            remove: function() {
                this.setBlank(), i.Tile.prototype.remove.apply(this)
            },
            destroy: function() {
                i.Tile.prototype.destroy.apply(this), this._ctx = null, this._canvas = null
            },
            size_changed: function(t) {
                if (t) {
                    var e = this._canvas;
                    e.width = t.width, e.height = t.height, Zt.setSize(e, t), Zt.setSize(this._el, t)
                }
            },
            imageData_changed: function(t) {
                t && (this.setBlank(), this._ctx.putImageData(t, 0, 0))
            }
        }), i.TilePool = function() {
            this._tiles = {}, this._loadState = {}, this._swapped = []
        }, zt(i.TilePool, i.KVO, {
            init: function() {
                this._tiles = {}, this._loadState = {}
            },
            add: function(t, e) {
                var n = e || t.getTileIndex(),
                    i = this.fromIndexToKey(n);
                this._loadState[i] = !1, this._tiles[i] = t
            },
            remove: function(t) {
                var e, n;
                t instanceof i.Tile ? (e = t, n = this.fromIndexToKey(e.getTileIndex())) : (n = this.fromIndexToKey(t), e = this._tiles[n]), e && (e.destroy(), e = null, this._loadState[n] = null, delete this._loadState[n], this._tiles[n] = null, delete this._tiles[n])
            },
            removeAll: function() {
                var t = this;
                i.forEach(this._tiles, function(e) {
                    t.remove(e)
                }), t.init()
            },
            getAt: function(t) {
                var e = this.fromIndexToKey(t);
                return this._tiles[e]
            },
            getLength: function() {
                var t = 0;
                return i.forEach(this._tiles, function() {
                    t++
                }), t
            },
            clearState: function() {
                this._loadState = {}
            },
            markAt: function(t, n) {
                n === e && (n = !0), this._loadState[this.fromIndexToKey(t)] = n
            },
            getLoadedCount: function() {
                var t = 0;
                return i.forEach(this._loadState, function(e) {
                    e && t++
                }), t
            },
            swap: function() {
                var t = this._swapped;
                i.forEach(t, function(t) {
                    t.destroy(), t = null
                }), t.length = 0, t = [], i.forEach(this._tiles, function(e) {
                    e.disable(), t.push(e), Zt.clearGPU(e.getElement())
                }), this._tiles = {}, this._swapped = t
            },
            getSwapped: function() {
                return this._swapped
            },
            reload: function(t) {
                this.clearState(), this.forEach(function(e) {
                    e.reload(t)
                })
            },
            reset: function(t, e, n) {
                this.clearState(), this.forEach(function(i) {
                    i.reset(t, e, n)
                })
            },
            forEach: function(t) {
                i.forEach(this._tiles, t)
            },
            fromIndexToKey: function(t) {
                return "tile_" + t.xIndex + "x" + t.yIndex
            }
        }), i.AbstractMapType = function(t) {
            this.setMapTypeOptions(t)
        }, i.AbstractMapType.prototype = {
            constructor: i.AbstractMapType,
            setMapTypeOptions: function(t) {
                var n = this,
                    o = t.tileSize || Vt(256, 256);
                o = i.isNumber(o) ? Vt(o, o) : i.box(o, Vt), n.tileSize = o, n.minZoom = (i.isDefined(t.minZoom) ? t.minZoom : t.maxZoom) || 0, n.maxZoom = t.maxZoom || 0, n.name = t.name || "unknown", n.projection = t.projection || i.EmptyProjection, n.repeatX = t.repeatX || !1, n.provider = t.provider || e, n.vendor = t.vendor || e, n.darktheme = t.darktheme || !1, n.uid = t.uid, n.uid || (Q++, n.uid = "unknown:unknown-" + Q), n._options = t
            },
            getMapTypeOptions: function() {
                return this._options
            },
            _getTileCount: function(t) {
                return Math.pow(2, t - (this.projection.minZoom || 0))
            },
            getMinZoom: function() {
                return this.minZoom
            },
            getMaxZoom: function() {
                return this.maxZoom
            },
            getName: function() {
                return this.name
            }
        }, i.ImageMapType = function(t) {
            i.AbstractMapType.apply(this, arguments)
        }, zt(i.ImageMapType, i.AbstractMapType, {
            setMapTypeOptions: function(t) {
                if ("function" != typeof t.getTileUrl && !t.tileSet) throw new Error("'getTileUrl' or 'tileSet' options is required.");
                i.AbstractMapType.prototype.setMapTypeOptions.apply(this, arguments);
                var e = this;
                t.tileSet ? e.tileSet = i.isString(t.tileSet) ? [t.tileSet] : t.tileSet : (i.isArray(e.tileSet) && (e.tileSet.length = 0), e.tileSet = []), e._imgOptions = e._getImageOptions()
            },
            getTileUrls: function(t, e, n) {
                var o, s = this._getTileCount(n),
                    r = this._options;
                return this.repeatX && (t %= s, t < 0 && (t += s)), !this.repeatX && (t < 0 || t >= s) || e < 0 || e >= s ? o = r.TRANSPARENT_URL || X : r.getTileUrl ? o = r.getTileUrl(t, e, n) : r.tileSet && (o = this._getUrlFromTileSet({
                    x: t,
                    y: e,
                    z: n
                })), null === o ? [] : i.isString(o) ? [o] : o
            },
            getTile: function(t, e, n) {
                var o = this.getImageOptions() || {},
                    s = new i.ImageTile({
                        tileIndex: {
                            xIndex: t,
                            yIndex: e
                        },
                        urls: this.getTileUrls(t, e, n),
                        size: this.tileSize,
                        imgonload: o.onload || null,
                        imgonerror: o.onerror || null
                    });
                return s
            },
            _getUrlFromTileSet: function(t) {
                var e = this.tileSet || [],
                    n = this.getMapTypeOptions(),
                    o = e.length || 0,
                    s = 0,
                    r = [];
                if (e.length) {
                    s = parseInt((t.x + t.y) % o, 10);
                    var a = e[s];
                    if (i.isArray(a)) i.forEach(a, function(e) {
                        r.push(qt(e, t, n))
                    });
                    else {
                        var h = a;
                        r.push(qt(h, t, n))
                    }
                } else r.push(this._options.TRANSPARENT_URL || X);
                return r
            },
            getImageOptions: function() {
                return this._imgOptions
            },
            _getImageOptions: function() {
                var t = this._options;
                return {
                    tileSize: this.tileSize,
                    onload: function(e) {
                        t && t.onload && t.onload(e)
                    },
                    onerror: function(e) {
                        t && t.onerror && t.onerror(e)
                    },
                    position: t.position || "absolute",
                    disableSelection: !0,
                    alt: ""
                }
            }
        });
    var qt = function(t, e, n) {
        return t.replace(/\{(-?)(\w+)\}/g, function(t, i, o) {
            return ("x" === o || "y" === o || "z" === o) && o in e ? "-" === i ? "z" === o ? n.maxZoom - e[o] : Math.pow(2, e.z - n.minZoom) - 1 - e[o] : e[o] : o in n ? n[o] : t
        })
    };
    i.CanvasMapType = function(t) {
        i.AbstractMapType.apply(this, arguments)
    }, zt(i.CanvasMapType, i.AbstractMapType, {
        setMapTypeOptions: function(t) {
            if ("function" != typeof t.getTileData) throw new Error("'getTileData' option is required.");
            i.AbstractMapType.prototype.setMapTypeOptions.apply(this, arguments)
        },
        getTileData: function(t, e, n) {
            var i, o = this._getTileCount(n),
                s = this._options;
            return this.repeatX && (t %= o, t < 0 && (t += o)), !this.repeatX && (t < 0 || t >= o) || e < 0 || e >= o ? i = null : s.getTileData && (i = s.getTileData(t, e, n)), i
        },
        getTile: function(t, e, n) {
            var o = this.getTileData(t, e, n),
                s = new i.CanvasTile({
                    tileIndex: {
                        xIndex: t,
                        yIndex: e
                    },
                    size: this.tileSize,
                    imageData: o
                });
            return s
        }
    });
    var Jt = ["enus", "zhcn", "jajp"],
        Qt = function(t) {
            var e = this;
            i.forEach(t, function(t, n) {
                e[n] = t
            }), e.vendor = ht, e._langSuffix = e._getLanguageSuffix(), e.uid || (Q++, e.uid = "naver:unknown-" + Q)
        };
    Qt.prototype = {
            constructor: Qt,
            name: "",
            version: g.onetile,
            tileSize: new i.Size(256, 256),
            minZoom: -1,
            maxZoom: 14,
            projection: i.UTMK_NAVER,
            serverCount: 4,
            timeStamp: "0",
            imgFormat: 0,
            hd: Z > 1,
            prefix: "",
            postfix: "",
            overview: !0,
            darktheme: !1,
            language: "ko-KR",
            _getLanguageSuffix: function() {
                var t = (this.language || "").toLowerCase().replace("-", "") || "kokr";
                return "kokr" === t || i.getIndexOfElement(Jt, t) === -1 ? "" : "_" + t
            },
            getTileUrl: function(t, e, n) {
                if (!this.overview && n < 1) return X;
                var o, s;
                n < 1 ? (o = Math.pow(2, n + 1) - 1, s = o) : (o = 3 * Math.pow(2, n - 1), s = o - 1), e = Math.pow(2, n + 1) - 1 - e;
                var r = this.version,
                    a = this.timeStamp,
                    h = this.imgFormat,
                    l = this.overlayType,
                    c = 0,
                    u = 0;
                if (i.isArray(h) || (h = [h]), i.isArray(l) || (l = [l]), h.length < l.length)
                    for (c = h.length, u = l.length; c < u; c++) h[c] = h[0];
                if (t >= 0 && t <= o && e >= 0 && e <= s) {
                    var p = [];
                    for (c = 0, u = l.length; c < u; c++) p.push(this.toTileUrl(t, e, n, r, a, h[c], l[c]));
                    return p
                }
                return X
            },
            _xyToServerNum: function(t, e) {
                return this.serverCount <= 1 ? "" : parseInt((t + e) % this.serverCount + 1, 10)
            },
            toTileUrl: function(t, e, n, i, o, s, r) {
                return r && r.indexOf("_an") === r.length - 3 && (r += this._langSuffix), [this._getLocation(t, e), this.hd ? "hd" : "get", i, o, s, n, t, e, r].join("/") + this.postfix
            },
            _getLocation: function() {
                return N ? function() {
                    return this._ssl_proxy ? this._ssl_proxy + this.prefix + "onetile" : "https://simg.pstatic.net/onetile"
                } : function(t, e) {
                    return "http://" + this.prefix + "onetile" + this._xyToServerNum(t, e) + ".map.naver.net"
                }
            }(),
            onerror: function(t) {
                var e = t.src;
                if (e) {
                    var n = e.split("://"),
                        i = n[0],
                        o = n[1].split("."),
                        s = o[0];
                    0 === s.indexOf("onetile") ? (o[0] = "nc.onetile", t.src = i + "://" + o.join(".")) : t.src = X
                } else t.src = X
            }
        },
        function() {
            var t = function() {
                    for (var t = [], n = 0, o = arguments.length; n < o; n++) t[n] = arguments[n];
                    var s;
                    return t.unshift({
                        imgFormat: "0"
                    }), s = It.apply(null, t), s && (s.provider = e[s.uid.split(":")[1]]), new i.ImageMapType(new Qt(s))
                },
                e = {
                    world: [{
                        title: " OpenStreetMap",
                        link: "http://www.openstreetmap.org/copyright"
                    }, {
                        title: " Natural Earth",
                        link: "http://www.naturalearthdata.com/"
                    }],
                    normal: [{
                        title: " /OpenStreetMap",
                        bounds: Nt(Rt(37.659996, 124.019911), Rt(42.99527, 130.51321)),
                        link: "http://www.openstreetmap.org/copyright"
                    }],
                    satellite: [{
                        title: " /OpenStreetMap",
                        bounds: Nt(Rt(37.659996, 124.019911), Rt(42.99527, 130.51321)),
                        link: "http://www.openstreetmap.org/copyright"
                    }, {
                        title: " /SPOT"
                    }, {
                        title: " /\uc778\ucc9c\uad11\uc5ed\uc2dc",
                        bounds: Nt(Rt(36.915887, 125.690716), Rt(37.687529, 126.853252))
                    }, {
                        title: " /\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0",
                        bounds: [Nt(Rt(36.9604682, 126.7654746), Rt(38.1834428, 127.8062689)), Nt(Rt(33.1940984, 126.1631646), Rt(33.5666617, 126.9448023)), Nt(Rt(34.2894075, 126.1667903), Rt(36.157058, 127.916409)), Nt(Rt(37.0338716, 127.1017059), Rt(38.6097027, 129.4009515)), Nt(Rt(34.7636795, 127.5739401), Rt(37.1422076, 129.6170151)), Nt(Rt(37.2844933, 130.6524052), Rt(37.6950155, 131.0788897)), Nt(Rt(35.9625217, 125.5567761), Rt(37.2537581, 128.6557701))]
                    }],
                    traffic: [{
                        title: " /\uad6d\ud1a0\uad50\ud1b5\ubd80"
                    }, {
                        title: " /\uacbd\ucc30\uccad(UTIS)"
                    }],
                    cadastral: [{
                        title: " /\ub2e4\uc6b8\uc9c0\uc624\uc778\ud3ec"
                    }]
                };
            It(Qt, {
                getMapTypes: function(t) {
                    var e = new i.MapTypeRegistry({
                        normal: Qt.getNormalMap(t),
                        terrain: Qt.getTerrainMap(t),
                        satellite: Qt.getSatelliteMap(t),
                        hybrid: Qt.getHybridMap(t)
                    });
                    return e.VENDOR = ht, e.uid = "naver:imagemap:default", e
                },
                getWorldMap: function(e) {
                    return t({
                        uid: "naver:world",
                        name: "\uc77c\ubc18",
                        minZoom: 0,
                        maxZoom: 7,
                        projection: i.EPSG3857,
                        tileSize: new i.Size(256, 256),
                        overlayType: "g_bl_vc_bg/g_ol_vc_rd/g_ol_vc_an",
                        repeatX: !0,
                        getTileUrl: function(t, e, n) {
                            var i = Math.pow(2, n);
                            return e >= 0 && e < i ? (e = i - 1 - e, this.toTileUrl(t, e, n, this.version, this.timeStamp, this.imgFormat, this.overlayType)) : X
                        }
                    }, e)
                },
                getVectorMap: function(e) {
                    return t({
                        uid: "naver:normal:bg",
                        name: "\uc77c\ubc18",
                        overlayType: "bl_vc_bg"
                    }, e)
                },
                getNormalMap: function(e) {
                    return t({
                        uid: "naver:normal",
                        name: "\uc77c\ubc18",
                        overlayType: "bl_vc_bg/ol_vc_an"
                    }, e)
                },
                getTerrainMap: function(e) {
                    return t({
                        uid: "naver:normal:terrain",
                        name: "\uc9c0\ud615\ub3c4",
                        overlayType: "bl_tn_bg/ol_vc_bg/ol_vc_an"
                    }, e)
                },
                getSatelliteMap: function(e) {
                    return t({
                        uid: "naver:satellite",
                        name: "\uc704\uc131",
                        imgFormat: "1",
                        overlayType: "bl_st_bg",
                        darktheme: !0
                    }, e)
                },
                getHybridMap: function(e) {
                    return t({
                        uid: "naver:satellite:hybrid",
                        name: "\uacb9\uccd0\ubcf4\uae30",
                        overlayType: ["bl_st_bg", "empty/ol_st_rd/ol_st_an"],
                        imgFormat: [1, 0],
                        darktheme: !0
                    }, e)
                },
                getBlankMap: function(e) {
                    return t({
                        uid: "naver:blank",
                        name: "\ud22c\uba85",
                        getTileUrl: function() {
                            return X
                        }
                    }, e)
                },
                getLiteMap: function(e) {
                    return t({
                        uid: "naver:normal:lite",
                        name: "Lite",
                        overlayType: "bl_cs_bg/ol_cs_an",
                        minZoom: 1,
                        maxZoom: 9,
                        repeatX: !1
                    }, e)
                },
                getNormalLabelLayer: function(e) {
                    return t({
                        uid: "naver:normal:label",
                        name: "\uc8fc\uae30",
                        overlayType: "empty/ol_vc_an"
                    }, e)
                },
                getSatelliteLabelLayer: function(e) {
                    return t({
                        uid: "naver:satellite:label",
                        name: "\uc8fc\uae30",
                        overlayType: "empty/ol_st_an"
                    }, e)
                },
                getTrafficLayer: function(e) {
                    return t({
                        uid: "naver:traffic",
                        name: "\uad50\ud1b5",
                        overlayType: "empty/ol_tr_rt/ol_vc_an",
                        overview: !1
                    }, e)
                },
                getBicycleLayer: function(e) {
                    return t({
                        uid: "naver:bicycle",
                        name: "\uc790\uc804\uac70",
                        overlayType: "empty/ol_bc_hb/ol_vc_an",
                        overview: !1
                    }, e)
                },
                getTrafficBicycleLayer: function(e) {
                    return t({
                        uid: "naver:trafficbicycle",
                        name: "\uad50\ud1b5/\uc790\uc804\uac70",
                        overlayType: "empty/ol_bc_hb/ol_tr_rt/ol_vc_an",
                        overview: !1
                    }, e)
                },
                getCadastralLayer: function(e) {
                    return t({
                        uid: "naver:cadastral",
                        name: "\uc9c0\uc801\ub3c4",
                        overlayType: "empty/ol_lp_cn",
                        overview: !1
                    }, e)
                },
                getStreetLayer: function(e) {
                    return t({
                        uid: "naver:street",
                        name: "\uac70\ub9ac\ubdf0",
                        overlayType: "empty/ol_pn_rd",
                        overview: !1,
                        postfix: "?dv=" + g.dv
                    }, e)
                }
            })
        }(), i.NaverImagePaneTypeOption = Qt, i.Layer = function(t, e, n) {
            this.name = t, this._initRegistry(e);
            var i = this.registry;
            if (!i.getSelectedTypeId()) {
                var o = i.getTypeIds();
                o.length && i.setSelectedTypeId(o[0])
            }
            this.options = It({
                zIndex: 0,
                overlayMap: !1
            }, n)
        }, zt(i.Layer, i.KVO, {
            _initRegistry: function(t) {
                if (t instanceof i.MapTypeRegistry) return void(this.registry = t);
                var e = this.name || i.guid(),
                    n = t,
                    o = {};
                o[e] = n, this.registry = new i.MapTypeRegistry(o, e)
            },
            _initPane: function() {
                var t = this.options.overlayMap,
                    e = this.options.zIndex || (t ? 0 : 90);
                this.pane = new i.TileIndexPane(this.name, {
                    overlayMap: t
                });
                var n = this.pane.getElement();
                return n.style.zIndex = e, t && (this.pane.getSpareElement().style.zIndex = e), this.pane
            },
            _beforeSetMap: Ot,
            setMap: function(t) {
                var e = this.getMap();
                if (t !== e) {
                    if (this._beforeSetMap(t), t) {
                        var n = this._initPane();
                        this._updateRegistry(t), n.setMapTypeRegistry(this.registry), this._addToMap(t)
                    } else e && this._destroy();
                    return this.set("map", t), this._afterSetMap(t), !0
                }
            },
            _addToMap: function(t) {
                var e = this.pane;
                e.setMap(t), t.layers.set(this.name, this), t.set(this.name + "Layer", this)
            },
            _afterSetMap: Ot,
            getMap: function() {
                return this.get("map") || null
            },
            setLayerTypeId: function(t) {
                this.registry.setSelectedTypeId(t)
            },
            getLayerTypeId: function() {
                return this.registry.getSelectedTypeId()
            },
            getLayerType: function() {
                return this.registry.getSelectedType()
            },
            getPaneElement: function() {
                return this.pane ? this.pane.get("paneElement") : null
            },
            refresh: function(t) {
                this.pane.refresh(t)
            },
            setOpacity: function(t) {
                this.pane && this.pane.setOpacity(t)
            },
            getOpacity: function() {
                return this.pane ? this.pane.getOpacity() : 1
            },
            _updateRegistry: Ot,
            _destroy: function() {
                this.pane.unbindAll(), this.pane.setMap(null), this.pane = null, delete this.pane;
                var t = this.getMap();
                return t && (t.layers.set(this.name, null), t.set(this.name + "Layer", null), this.set("map", null), this.map = null, delete this.map), !1
            }
        }), i.LabelLayer = function(t, e, n) {
            this._forceExcludeSymbol = !1, i.Layer.apply(this, arguments)
        }, zt(i.LabelLayer, i.Layer, {
            _afterSetMap: function(t) {
                t && (this._mapTypeRelation = [Ut.addListener(t, "mapType_changed", Ct(this._onMapTypeChanged, this)), Ut.addListener(t, "addLayer", Ct(this._onMapAddLayer, this)), Ut.addListener(t, "removeLayer", Ct(this._onMapRemoveLayer, this))])
            },
            _updateRegistry: function(t) {
                this._checkCadastral(t), this._changeLabelOverlay(t.getMapType())
            },
            _onMapAddLayer: function(t) {
                var e = this.getMap(),
                    n = i.getIndexOfElement(pt, t.getLayerType().uid) > -1;
                e && n && (this._checkCadastral(), this._refreshLabelOverlay())
            },
            _onMapRemoveLayer: function(t) {
                var e = this.getMap();
                e && (this._checkCadastral(), this._refreshLabelOverlay())
            },
            _refreshLabelOverlay: function(t) {
                var e = this.getMap(),
                    n = t || (e ? e.getMapType() : null);
                n && this._changeLabelOverlay(n) && this.refresh()
            },
            _checkCadastral: function(t) {
                var e = t || this.getMap();
                if (e && e.layers) {
                    for (var n, o = e.layers, s = o.getLayerNames(), r = !1, a = 0, h = s.length; a < h; a++)
                        if (n = o.get(s[a]), n && i.getIndexOfElement(pt, n.getLayerType().uid) > -1) {
                            r = !0;
                            break
                        } this._forceExcludeSymbol = r
                }
            },
            _changeLabelOverlay: function(t) {
                var e = this.getLayerType(),
                    n = e.getMapTypeOptions(),
                    i = n.overlayType,
                    o = i,
                    s = (t.uid || "").split(":");
                return "naver" === s[0] && (o = o.replace("/ol_vc_an", "").replace("/ol_st_an", ""), this.options.smartSymbol && this._forceExcludeSymbol || ("satellite" === s[1] && "hybrid" === s[2] ? o += "/ol_st_an" : "satellite" !== s[1] && (o += "/ol_vc_an")), o !== i && (n.overlayType = o, !0))
            },
            _onMapTypeChanged: function(t) {
                this._refreshLabelOverlay(t)
            },
            _destroy: function() {
                Ut.removeListener(this._mapTypeRelation), this._mapTypeRelation = null, i.Layer.prototype._destroy.apply(this)
            }
        }), i.BicycleLayer = function(t) {
            var e = It({
                zIndex: 3,
                overlayMap: !0
            }, t);
            i.LabelLayer.apply(this, ["bicycle", Qt.getBicycleLayer(), e])
        }, zt(i.BicycleLayer, i.LabelLayer, {}), i.CadastralLayer = function(t) {
            var e = It({
                zIndex: 1,
                overlayMap: !0
            }, t);
            i.Layer.apply(this, ["cadastral", Qt.getCadastralLayer(), e])
        }, zt(i.CadastralLayer, i.Layer), i.LayerRegistry = function() {
            this._layerNames = []
        }, zt(i.LayerRegistry, i.KVO, {
            set: function(t, e) {
                var n = this.get(t),
                    o = i.getIndexOfElement(this._layerNames, t);
                i.KVO.prototype.set.apply(this, arguments), o > -1 && this._layerNames.splice(o, 1), null !== e ? (this._layerNames.push(t), Ut.trigger(this, "addLayer", e)) : n && Ut.trigger(this, "removeLayer", t)
            },
            getLayerNames: function() {
                return this._layerNames.slice(0)
            }
        }), i.StreetLayer = function(t) {
            var e = It({
                zIndex: 10,
                overlayMap: !0,
                smartSymbol: !0
            }, t);
            this._cadastralActivated = !1, i.Layer.apply(this, ["street", Qt.getStreetLayer(), e])
        }, zt(i.StreetLayer, i.LabelLayer), i.TrafficLayer = function(t) {
            var e = It({
                zIndex: 2,
                overlayMap: !0,
                interval: 3e5
            }, t);
            this._lastVersion = {
                version: 0,
                updateDate: ""
            }, i.LabelLayer.apply(this, ["traffic", Qt.getTrafficLayer(), e])
        }, zt(i.TrafficLayer, i.LabelLayer, {
            RT_VERSION_API: N ? "https://ssl.map.naver.com/rts/wmts?request=GetLastVersion" : "http://rts1.map.naver.net/rts/wmts?request=GetLastVersion",
            _addToMap: function(t) {
                var e = this;
                e._getRTVersion(function() {
                    i.Layer.prototype._addToMap.apply(e, [t]), e.options.interval && e.startAutoRefresh()
                })
            },
            _updateRTVersion: function() {
                var t = this.registry.get(this.name),
                    e = t.getMapTypeOptions();
                e.timeStamp = this._lastVersion.version
            },
            _destroy: function() {
                this.endAutoRefresh(), i.LabelLayer.prototype._destroy.apply(this)
            },
            _setLastVersion: function(t) {
                this._lastVersion = t, this._updateRTVersion()
            },
            _getRTVersion: function(t) {
                var e = this;
                i.jsonp(this.RT_VERSION_API, {
                    callbackname: "callbackname",
                    callback: function(n) {
                        e._setLastVersion(n), t && t(n)
                    },
                    error: function() {
                        t && t()
                    }
                })
            },
            startAutoRefresh: function() {
                var e = this,
                    n = e.options.interval;
                e._timer && t.clearTimeout(e._timer), e._timer = t.setTimeout(function i() {
                    e._getRTVersion(function(o) {
                        o && e.refresh(!0), e._timer = t.setTimeout(i, n)
                    })
                }, n)
            },
            endAutoRefresh: function() {
                this._timer && (t.clearTimeout(this._timer), this._timer = null, delete this._timer)
            }
        }), i.MapOptions = function(t) {
            if (It(this, {
                    gl: !1,
                    background: U + "/pattern_1.png",
                    tileSpare: 0,
                    pixelRatio: Z,
                    center: Rt(37.5666103, 126.9783882),
                    bounds: null,
                    tilt: 0,
                    rotation: 0,
                    maxBounds: null,
                    padding: i.trbl(),
                    overlayZoomEffect: null,
                    tileTransition: !0,
                    baseTileOpacity: 1,
                    disableKineticPan: !0,
                    zoomOrigin: null,
                    size: null,
                    zoom: 11,
                    minZoom: null,
                    maxZoom: null,
                    mapTypes: null,
                    mapTypeId: "normal",
                    resizeOrigin: m.CENTER,
                    draggable: !0,
                    disableDoubleClickZoom: !1,
                    disableDoubleTapZoom: !1,
                    disableTwoFingerTapZoom: !1,
                    keyboardShortcuts: !0,
                    scrollWheel: !0,
                    pinchZoom: !0,
                    scaleControl: !0,
                    scaleControlOptions: {
                        position: m.BOTTOM_RIGHT
                    },
                    logoControl: !0,
                    logoControlOptions: {
                        position: m.BOTTOM_RIGHT
                    },
                    mapDataControl: !0,
                    mapDataControlOptions: {
                        position: m.BOTTOM_LEFT
                    },
                    mapTypeControl: !1,
                    mapTypeControlOptions: {
                        position: m.TOP_RIGHT
                    },
                    zoomControl: !1,
                    zoomControlOptions: {
                        position: m.TOP_LEFT
                    },
                    compassControl: !1,
                    compassControlOptions: {
                        position: m.TOP_LEFT
                    }
                }), t = t || {}, "mapTypes" in t || (t.mapTypes = Qt.getMapTypes()), t.center) {
                if (!(t.center instanceof i.Point)) {
                    var e = t.mapTypes.get(t.mapTypeId || this.mapTypeId).projection;
                    ["UTMK", "UTMK_NAVER", "EPSG:3857"].indexOf(e.name) > -1 ? t.center = i.box(t.center, Rt) : t.center = i.box(t.center)
                }
            } else t.center = this.center;
            !t.zoomOrigin || t.zoomOrigin instanceof i.Point || (t.zoomOrigin = i.box(t.zoomOrigin)), !t.bounds || t.bounds instanceof i.PointBounds || (t.bounds = i.box(t.bounds)), !t.maxBounds || t.maxBounds instanceof i.PointBounds || (t.maxBounds = i.box(t.maxBounds)), !t.size || t.size instanceof i.Size || (t.size = i.box(t.size, i.Size)), t.padding && (t.padding = i.trbl(t.padding)), this.setValues(t), this.set("__optionsOrder", i.keys(It(t, {
                scaleControl: this.scaleControl,
                logoControl: this.logoControl,
                mapDataControl: this.mapDataControl,
                mapTypeControl: this.mapTypeControl,
                zoomControl: this.zoomControl,
                compassControl: this.compassControl
            }))), this.get("tileTransition") && At.browser.csszoom && this.set("tileTransition", !1)
        }, zt(i.MapOptions, i.KVO, {
            setRefinedOption: function(t, e) {
                "size" === t ? e = i.box(e, Vt) : "center" !== t && "zoomOrigin" !== t && "bounds" !== t && "maxBounds" !== t || (e = i.box(e)), this.set(t, e)
            },
            updateSilently: function(t, e) {
                var n = this.get(t);
                n instanceof Dt || n instanceof Bt || n instanceof Vt ? n.equals(e) === !1 && this.set(t, e, !0) : "object" != typeof n ? n !== e && this.set(t, e, !0) : this.set(t, e, !0)
            }
        }), i.Map = function(t, e) {
            var n = this._initMapOptions(e);
            this.id = "nmap-" + i.guid(), this.__WILL_REDRAW = !1, this._mapModel = new i.MapModel(n), this._initRenderMode(), this._initMapView(t, n), this.switchTo(this.get("renderMode")), this._initTilePane(), this._initLayers(), this._initMapTypes(), this._initDataLayer(), i.Map.__instances.push(this), u(this)
        }, zt(i.Map, i.KVO, {
            switchTo: function(t) {
                this._initParts()
            },
            _initParts: function() {
                var t = this._mapOptions;
                this._mapModel.setMapbox && this._mapModel.setMapbox(null), this._mapAction = new i.MapAction(t)
            },
            setCenter: function(t) {
                if (t = i.box(t), this._stopTransition(), !this.__reserveMove("setCenter", [t])) {
                    var e = this._mapModel.setCenter(t);
                    e && this._triggerIdle()
                }
            },
            setCenterPoint: function(t) {
                if (t = i.box(t, Dt), this._stopTransition(), !this.__reserveMove("setCenterPoint", [t])) {
                    var e = this._mapModel.setCenterPoint(t);
                    e && this._triggerIdle()
                }
            },
            setZoom: function(t, e) {
                this._stopTransition();
                var n = this._mapAction.setZoom(t, e);
                !e && n && this._triggerIdle()
            },
            zoomBy: function(t, e, n) {
                e = e ? i.box(e) : this.getCenter();
                var o = this.getProjection(),
                    s = o.fromCoordToOffset(e);
                this._stopTransition();
                var r = this._mapAction.zoomBy(t, s, n);
                !n && r && this._triggerIdle()
            },
            updateBy: function(t, e) {
                t = i.box(t), this.getCenter().equals(t) && this.getZoom() === e || (this._stopTransition(), this.__reserveMove("updateBy", [t, e]) || (this._mapModel.set("instantTiling", !0), this._mapModel.update(t, null, e), this._triggerIdle()))
            },
            fitBounds: function(t, e) {
                if (i.isArray(t) && "number" != typeof t[0]) {
                    if (t.length < 2) return;
                    i.forEach(t, function(e, n) {
                        e instanceof Dt || (t[n] = i.box(e))
                    });
                    var n = Nt;
                    t[0] instanceof Rt || (n = Bt), t = n.bounds.apply(n, t)
                } else t = i.box(t);
                if (this._stopTransition(), !this.__reserveMove("fitBounds", [t, e])) {
                    var o = this._mapModel.fitBounds(t, e);
                    o && this._triggerIdle()
                }
            },
            panTo: function(t, e) {
                t = i.box(t), this.__reserveMove("panTo", [t, e]) || this._mapAction.panTo(t, It({
                    duration: 1e3,
                    easing: "easeOutCubic"
                }, e))
            },
            panToBounds: function(t, e, n) {
                t = i.box(t), this.__reserveMove("panToBounds", [t, e, n]) || this._mapAction.panToBounds(t, It({
                    duration: 1e3,
                    easing: "easeOutCubic"
                }, e), n)
            },
            panBy: function(t) {
                t && (t = i.box(t, Dt), this._stopTransition(), this.__reserveMove("panBy", [t]) || (this._mapAction.panBy(t), this._triggerIdle()))
            },
            morph: function(t, e, n) {
                t = i.box(t), this._stopTransition(), this.__reserveMove("morph", [t, e, n]) || this._mapAction.morph(t, e, n)
            },
            setTilt: function(t) {
                this._mapModel.setTilt(t)
            },
            getTilt: function() {
                return this._mapModel.getTilt()
            },
            setRotation: function(t) {
                this._mapModel.setRotation(t)
            },
            getRotation: function() {
                return this._mapModel.getRotation()
            },
            setOptions: function(t) {
                var e = this._mapOptions;
                if ("string" == typeof t) {
                    var n = t,
                        o = arguments[1];
                    "padding" === n && (o = It(e.get("padding"), o)), e.setRefinedOption(n, o)
                } else i.forEach(t, Ct(function(t, e) {
                    this.setOptions(e, t)
                }, this))
            },
            getOptions: function(t) {
                var n = this._mapOptions;
                return t !== e ? "minZoom" === t || "maxZoom" === t ? n.get("user" + i.capitalize(t)) : n.get(t) : n
            },
            getProjection: function() {
                return this.get("mapSystemProjection")
            },
            getPrimitiveProjection: function() {
                return this.get("projection")
            },
            getCenterPoint: function() {
                return this._mapModel.getCenterPoint().clone()
            },
            getCenter: function() {
                return this._mapModel.getCenter().clone()
            },
            getZoom: function() {
                return this._mapModel.getZoom()
            },
            setMapTypeId: function(t) {
                this._assembleListener && (Ut.removeListener(this._assembleListener), this._assembleListener = null, delete this._assembleListener, this._assemble(t)), this.mapTypes.setSelectedTypeId(t)
            },
            refresh: function(t) {
                var e = this._mapModel,
                    n = this.getMapType(),
                    o = n.projection || i.EmptyProjection,
                    s = n.tileSize || Vt(256, 256),
                    r = !1;
                r = e.get("projection") !== o || e.get("tileSize").equals(s) === !1, r && (e.set("tileSize", s), e.set("projection", o)), e.refreshTiles(t), this._triggerIdle()
            },
            setSize: function(t) {
                t = i.box(t, Vt), this.getSize().equals(t) || (this._resizeListener && (Ut.removeDOMListener(this._resizeListener), this._resizeListener = null, delete this._resizeListener), this._resizeMapListener && (Ut.removeListener(this._resizeMapListener), this._resizeMapListener = null, delete this._resizeMapListener), this._mapModel.setSize(t), Ut.trigger(this, "resize"), this._triggerIdle())
            },
            getSize: function() {
                return this._mapModel.getSize().clone()
            },
            getBounds: function() {
                return this._mapModel.getBounds().clone()
            },
            getFitZoomAndCenter: function(t) {
                return this._mapModel.getFitZoomAndCenter(t)
            },
            getElement: function() {
                return this._mapView.getElement()
            },
            setCursor: function(t) {
                this._mapView.setCursor(t)
            },
            getCursor: function() {
                return this._mapView.getCursor()
            },
            getCurrentInfoWindow: function() {
                return this._mapModel.get("infowindow")
            },
            closeInfoWindow: function() {
                this._mapModel.get("infowindow") && this._mapModel.get("infowindow").close()
            },
            getPanes: function() {
                return this._mapView.get("panes")
            },
            addPane: function(t, e) {
                return this._mapView.addPane(t, e)
            },
            removePane: function(t) {
                this._mapView.removePane(t)
            },
            __reserveMove: function(t, e) {
                return !!this._mapAction.isZooming() && (this.__RESERVED_MOVE = [t, e], !0)
            },
            _initMapOptions: function(t) {
                var e = new i.MapOptions(t),
                    n = e.get("minZoom"),
                    o = e.get("maxZoom");
                return null !== n && e.set("userMinZoom", n), null !== o && e.set("userMaxZoom", o), this._listenMapOptions(e), this._mapOptions = e, e
            },
            _initRenderMode: function() {
                var t = this._mapOptions,
                    e = this._mapModel;
                t.get("gl") && i.glSupported() ? e.set("renderMode", ut) : e.set("renderMode", ct), Ut.addListener(this, "renderMode_changed", function(e) {
                    var n = !1;
                    e === ut && (n = !0), t.set("gl", n, !0)
                }), this.bindTo("renderMode", e)
            },
            __unlisten__: function(t) {
                this[t] && (Ut.removeListener(this[t]), this[t] = null, delete this[t])
            },
            __listen__: function(t, e) {
                this.__unlisten__(t), this[t] = e
            },
            _listenMapOptions: function(t) {
                var e = this;
                Ut.once(this, "assemble", function() {
                    e.__listen__("_mapOptionsListeners", [Ut.addListener(t, "minZoom_changed", function(n) {
                        t.set("userMinZoom", n), n > e.getZoom() && e.setZoom(n, !0)
                    }), Ut.addListener(t, "maxZoom_changed", function(n) {
                        t.set("userMaxZoom", n), n < e.getZoom() && e.setZoom(n, !0)
                    }), Ut.addListener(t, "mapTypes_changed", function(t) {
                        e._changeRegistry(t)
                    }), Ut.addListener(t, "center_changed", function(t) {
                        e.setCenter(t)
                    }), Ut.addListener(t, "zoom_changed", function(t) {
                        e.setZoom(t)
                    }), Ut.addListener(t, "bounds_changed", function(t) {
                        e.fitBounds(t)
                    }), Ut.addListener(t, "size_changed", function(t) {
                        e.setSize(t)
                    }), Ut.addListener(t, "tilt_changed", function(t) {
                        e.setTilt(t)
                    }), Ut.addListener(t, "rotation_changed", function(t) {
                        e.setRotation(t)
                    }), Ut.addListener(t, "gl_changed", function(t) {
                        e.switchTo(t ? ut : ct)
                    })])
                })
            },
            _initMapView: function(t, e) {
                var n = new i.MapView(t, e),
                    o = e.get("size");
                this._resizeMapListener = Ut.addListener(this, "resize", Ct(this._onResize, this)), o ? n.setSize(o) : (e.set("size", n.getSize(), !0), this._listenResize()), this._mapView = n
            },
            _listenResize: function() {
                this._resizeListener = Ut.addDOMListener(t, "resize", Ct(this._onResizeWindow, this))
            },
            _onResizeWindow: function(t) {
                this._resizeByTrigger(), Ut.trigger(this, "resize", lt)
            },
            _onResize: function(t) {
                this._resizeListener && (t && t === lt || this._resizeByTrigger())
            },
            _resizeByTrigger: function() {
                if (this._mapModel && this._resizeListener) {
                    var t = Zt.getSize(this.getElement()).round();
                    this.getSize().equals(t) || (this._mapModel.setSize(t), this._sizeChanged = !0, this._triggerIdle())
                }
            },
            _initTilePane: function() {
                this.mapPane = new i.TileIndexPane("basemap"), this.mapPane.bindTo("tileopacity", this._mapOptions, "baseTileOpacity"), this._listenTilePane(this.mapPane)
            },
            _listenTilePane: function(t) {
                var e = this;
                this.__listen__("_tilePaneListeners", [Ut.forward(t, "tilesloaded", this), Ut.addListener(this, "tilesloaded", function() {
                    e._mapModel.set("instantTiling", !1)
                })])
            },
            _initLayers: function() {
                this.layers = new i.LayerRegistry, this._listenLayers(this.layers)
            },
            _listenLayers: function(t) {
                this.__listen__("_layersListeners", [Ut.forward(t, "addLayer", this), Ut.forward(t, "removeLayer", this)])
            },
            _initMapAction: function() {
                var t = this._mapAction;
                t.setMapModel(this._mapModel), t.setMapView(this._mapView), t.initZoomEffector(), this._listenMapAction(t)
            },
            _listenMapAction: function(t) {
                var e = "_mapActionListeners",
                    n = this;
                n.__listen__(e, [Ut.forward(n, "tilesloaded", t), Ut.addListener(t, "idle", Ct(n.__onIdle, n)), Ut.addListener(t, "willDestroy", Ct(n.__unlisten__, n, e))])
            },
            _initMapTypes: function() {
                var t = this._mapOptions.get("mapTypeId"),
                    e = this._mapOptions.get("mapTypes");
                return this.mapTypes = e, e.get(t) ? void this._assemble(t) : void(this._assembleListener = Ut.once(e, t + "_changed", Ct(this._assemble, this, t)))
            },
            _initDataLayer: function() {
                var t = new i.DataLayer;
                t.setMap(this), this.data = t
            },
            _assemble: function(t) {
                if (this._initRegistry(t || this.mapTypes.getSelectedTypeId()), this._initMapModel(), this._initMapAction(), this.__FORWARDS) {
                    var e = this;
                    i.forEach(this.__FORWARDS, function(t, n) {
                        t = Ut.forward(e._mapAction, n, e), e._mapActionListeners && e._mapActionListeners.push(t)
                    })
                }
                this._listenDispatchStatus(), this.mapPane.setMap(this), this._initControl(), this.trigger("assemble")
            },
            _listenDispatchStatus: function() {
                this.__listen__("_dispatchStatusListeners", [Ut.addListener(this, nt, Ct(this._onBeginDispatch, this, this)), Ut.addListener(this, it, Ct(this._onStopDispatch, this, this))])
            },
            _initRegistry: function(t) {
                var e = this.mapTypes;
                e.setSelectedTypeId(t), this.unbind("mapType"), this._listenMapTypes(), this.bindTo("mapType", e, "selectedMapType"), this.mapPane.setMapTypeRegistry(e), this._adjustZoomLimit(this.get("mapType"))
            },
            _listenMapTypes: function() {
                var t = this;
                this.__listen__("_mapTypesListeners", [Ut.addListener(this, "mapType_changed", function(e) {
                    t._mapType_changed(e)
                })])
            },
            _changeRegistry: function(t) {
                var e = this.getMapTypeId(),
                    n = this.mapTypeControl;
                this.mapTypes = t, this._initRegistry(e), n && n.getMap() && (n.setMap(null), n.setMap(this))
            },
            _extendProj: function() {
                var t = this.get("mapSystemProjection");
                if (t && !t.fromPageXYToOffset) {
                    var e = this._mapView;
                    t.fromPageXYToOffset = function(t) {
                        var n = e.getMapOffset(),
                            i = t.clone().sub(n).sub(this.get("containerTopLeft"));
                        return i
                    }, t.fromPageXYToPoint = function(t) {
                        var e = this.fromPageXYToOffset(t);
                        return this.fromOffsetToPoint(e)
                    }, t.fromPageXYToCoord = function(t) {
                        var e = this.fromPageXYToOffset(t);
                        return this.fromOffsetToCoord(e)
                    }
                }
            },
            _initMapModel: function() {
                function t(t, e) {
                    c[t] = e
                }

                function n() {
                    i.forEach(a, function(t) {
                        t in c && s.set(t, c[t])
                    }), c = {}
                }

                function o(n) {
                    return function(i) {
                        var o = s.get(n);
                        return o === e ? s.set(n, i) : void(o.equals && o.equals(i) || o === i || (s._mapAction.isZooming() && l[n] ? t(n, i) : s.set(n, i)))
                    }
                }
                var s = this,
                    r = s._mapModel;
                if (!r.get("center")) {
                    r.set("size", s._mapView.getSize()), r.initPrimaryData(s._mapOptions), r.initTilePaneModel(), s.bindTo(["projection", "mapSystemProjection", "mapTypeId", "padding", "repeatX"], r), s._extendProj();
                    var a = ["center", "centerPoint", "zoom", "bounds"],
                        h = a.concat(["size", "tilt", "rotation", "scale"]),
                        l = {};
                    i.forEach(a, function(t) {
                        l[t] = 1;
                    });
                    var c = {};
                    s._zcl && Ut.removeListener(s._zcl), s._zcl = Ut.addListener(s._mapAction, "zoomend", function() {
                        n()
                    }), i.forEach(h, function(t) {
                        Ut.addListener(s, t + "_m_changed", o(t)), s.bindTo(t + "_m", r, t)
                    }), Ut.addListener(r, "__point_shifted", function() {
                        s._pointShifted = !0
                    }), Ut.addListener(s, "size_changed", function(t) {
                        s._size_changed(t)
                    })
                }
            },
            getMapModel: function() {
                return this._mapModel
            },
            getMapView: function() {
                return this._mapView
            },
            getMapAction: function() {
                return this._mapAction
            },
            _adjustZoomLimit: function(t) {
                var e = this._mapOptions,
                    n = this._mapModel,
                    i = t.minZoom,
                    o = t.maxZoom;
                null === e.get("minZoom") && e.set("userMinZoom", i), null === e.get("maxZoom") && e.set("userMaxZoom", o), n.set("mapTypeMinZoom", i), n.set("mapTypeMaxZoom", o)
            },
            _addInternalControl: function(t, e) {
                if (e) {
                    var n = this._mapOptions,
                        i = this,
                        o = function(t) {
                            i[t] ? i[t].getMap() !== i && i[t].setMap(i) : (i[t] = new e(n[t + "Options"]), i[t].setMap(i))
                        },
                        s = function(t) {
                            return function(e) {
                                e ? o(t) : i[t] && i[t].setMap(null)
                            }
                        },
                        r = function(t) {
                            return function(e) {
                                i[t] && i[t].setOptions(e)
                            }
                        };
                    n[t] && o(t), Ut.addListener(n, t + "_changed", s(t)), Ut.addListener(n, t + "Options_changed", r(t))
                }
            },
            _addCopyrightControls: function() {
                var t = this.getPrimitiveProjection();
                t !== i.UTMK && t !== i.UTMK_NAVER && t !== i.EPSG3857 || this._addInternalControl("scaleControl", i.ScaleControl), this._addInternalControl("logoControl", i.LogoControl), this._addInternalControl("mapDataControl", i.MapDataControl)
            },
            _addDefaultControls: function() {
                var t = this._mapOptions.get("__optionsOrder"),
                    e = this;
                i.forEach(t, function(t) {
                    "mapTypeControl" !== t && "zoomControl" !== t && "compassControl" !== t || e._addInternalControl(t, i[i.capitalize(t)])
                })
            },
            _onBeginDispatch: function(t, e) {
                var n = e.match(/\S+_changed$/gi);
                if (!n || !n.length) {
                    t = t || this, t.__FORWARDS || (t.__FORWARDS = {});
                    var i = Ut.forward(this._mapAction, e, t);
                    t.__FORWARDS[e] = i, this._mapActionListeners && this._mapActionListeners.push(i)
                }
            },
            _onStopDispatch: function(t, e) {
                t = t || this, t.__FORWARDS && (Ut.removeListener(t.__FORWARDS[e]), t.__FORWARDS[e] = null, delete t.__FORWARDS[e])
            },
            _initControl: function() {
                if (!this.controls) {
                    var t = this,
                        e = new i.CalcControlPosition(t),
                        n = [];
                    i.forEach(m, function(t, o) {
                        var s = new i.KVOArray;
                        e.bind(s, o), n[t] = s
                    }), this.controls = n, t._addCopyrightControls(), t._addDefaultControls()
                }
            },
            _triggerIdle: function() {
                this._mapAction.triggerIdle()
            },
            _triggerRedraw: function() {
                this._sizeChanged && (this._sizeChanged = !1), this._pointShifted && (this._pointShifted = !1), this._isTilingSystemChanged && (this._isTilingSystemChanged = !1), this.trigger("redraw")
            },
            setScale: function(t) {
                this._stopTransition(), this._mapAction.changeScale(t)
            },
            _stopTransition: function() {
                this._mapAction.stopTransition()
            },
            getMapTypeId: function() {
                return this.mapTypes.getSelectedTypeId()
            },
            getMapType: function() {
                return this.mapTypes.getSelectedType()
            },
            fromEventToPointerEvent: function(t) {
                return t = Ft.fix(t.originalEvent || t), this._mapAction.fromEventToPointerEvent(t)
            },
            destroy: function(t) {
                var e = t || !1;
                this._mapView.destroy(), this._mapAction.destroy();
                var n = this.getElement();
                if (n.innerHTML = "", e) {
                    n.style.backgroundImage = 'url("' + (U + "/auth_fail.png") + '")', n.style.backgroundPosition = "center center";
                    try {
                        n.style.backgroundSize = "256px 256px"
                    } catch (i) {}
                } else n.style.background = "none"
            },
            _mapType_changed: function(t) {
                var e = this.get("projection");
                if (e) {
                    var n = this._mapModel,
                        o = n.get("tileSize") || Vt(256, 256),
                        s = t.projection || i.EmptyProjection,
                        r = t.tileSize || Vt(256, 256);
                    this._isTilingSystemChanged = e !== s || o.equals(r) === !1, n.set("instantTiling", !0), n.set("mapTypeId", this.getMapTypeId()), this._adjustZoomLimit(t);
                    var a = t.repeatX || !1,
                        h = n.get("repeatX") !== a;
                    this._isTilingSystemChanged && this.refresh(!0), h && this._mapModel.set("repeatX", a, this._isTilingSystemChanged)
                }
            },
            _size_changed: function(t) {
                this._resizeListener || this._mapView.setSize(t), this._sizeChanged = !0
            },
            _checkRedrawRequired: function() {
                var t = this._mapModel,
                    e = t.get("containerTopLeft"),
                    n = t.get("repeatX");
                return this.__WILL_REDRAW ? (this.__WILL_REDRAW = !1, this._triggerRedraw()) : void((this._sizeChanged || this._isTilingSystemChanged || 0 === e.x && 0 === e.y || n && (!n || this._pointShifted)) && this._triggerRedraw())
            },
            __onIdle: function() {
                var t = this._mapOptions;
                if (t.updateSilently("center", this.getCenter()), t.updateSilently("zoom", this.getZoom()), t.updateSilently("bounds", this.getBounds()), t.updateSilently("size", this.getSize()), t.updateSilently("tilt", this.getTilt()), t.updateSilently("rotation", this.getRotation()), this._checkRedrawRequired(), this.__RESERVED_MOVE && !this._mapAction.isZooming()) {
                    var e = this.__RESERVED_MOVE,
                        n = e[0],
                        i = e[1];
                    this.__RESERVED_MOVE = null, delete this.__RESERVED_MOVE, this.__WILL_REDRAW = !0, this[n].apply(this, i)
                }
            },
            _getPointerEvent: function() {
                var t = this.getProjection(),
                    e = this.getCenter();
                if (t && e) {
                    var n = this.getPrimitiveProjection(),
                        i = t.fromCoordToOffset(e),
                        o = t.fromOffsetToPoint(i),
                        s = {
                            coord: e.clone(),
                            point: o,
                            offset: i,
                            pointerEvent: null,
                            domEvent: null
                        };
                    return n.fromPointToLatLng && (s.latlng = e.clone()), s
                }
            },
            _getDefaultEventParameters: function(t) {
                for (var e = !1, n = [], i = 0, o = O.length; i < o; i++)
                    if (O[i] === t) {
                        e = !0;
                        break
                    } return e && 0 !== t.indexOf("key") ? n.push(this._getPointerEvent()) : t.indexOf("_changed") === t.length - 8 && n.push(this.get(t.replace("_changed", ""))), n
            }
        }), i.Map.__instances = [], i.CustomControl = function(t, e) {
            "string" != typeof t && (e = t, t = null);
            var n = this.DEFAULT_OPTIONS || {
                    position: m.TOP_LEFT
                },
                i = It({
                    zIndex: Q++
                }, n);
            this.setOptions(It({}, i, e || {})), this._element = this._createElement(t), this._oldPosition = null, this._oldMap = null
        }, zt(i.CustomControl, i.KVO, {
            _beforeSetMap: Ot,
            setMap: function(t) {
                var e = this.get("map"),
                    n = this.get("position");
                t !== e && (e && (Ut.removeListener(this._renderModeListener), this.unbind("renderMode")), t && (this._renderModeListener = Ut.addListener(this, "renderMode_changed", Ct(this._renderMode_changed, this)), this.bindTo("renderMode", t.getMapModel())), this._beforeSetMap(t), t ? this._addControl(t, n) : e && this._removeControl(e, n), this.set("map", t), this._afterSetMap(t))
            },
            _afterSetMap: Ot,
            getMap: function() {
                return this.get("map")
            },
            setPosition: function(t) {
                var e = this.get("map"),
                    n = this.get("position"),
                    i = this.DEFAULT_OPTIONS || {
                        position: m.TOP_LEFT
                    };
                "number" != typeof t && (t = i.position), e && (this._removeControl(e, n), this._addControl(e, t)), this.set("position", t)
            },
            _createElement: function(t) {
                var e = Zt.createElement("div", "position:relative;");
                return t && (e.innerHTML = t), Zt.setZIndex(e, this.get("zIndex")), e
            },
            html: function(t) {
                return t ? void(this._element.innerHTML = t) : this._element.innerHTML
            },
            getElement: function() {
                return this._element
            },
            _addControl: function(t, e) {
                var n = t.controls[e];
                n.push(this._element)
            },
            _removeControl: function(t, e) {
                var n = t.controls[e];
                n.removeElement(this._element)
            },
            setOptions: function(t) {
                var e = this;
                if ("string" == typeof t) {
                    var n = t,
                        o = arguments[1];
                    "position" === n ? e.setPosition(o) : e.set(n, o)
                } else i.forEach(t, function(t, n) {
                    e.setOptions(n, t)
                })
            },
            getOptions: function(t) {
                var n = this,
                    o = {};
                return t !== e ? this.get(t) : (i.forEach(n.DEFAULT_OPTIONS, function(t, e) {
                    o[e] = n.get(e)
                }), o)
            },
            zIndex_changed: function(t) {
                var e = this.getElement();
                e && Zt.setZIndex(e, t)
            },
            _setAdvancedOptions: Ot,
            _renderMode_changed: function(t) {
                this._onRenderModeChanged && this._onRenderModeChanged(t)
            }
        }), i.CalcControlPosition = function(t) {
            this._panes = {}, this._mapDiv = t.getElement(), this._mapSize = t.getSize(), Ut.addListener(t, "size_changed", Ct(this._onSizeChanged, this))
        }, i.CalcControlPosition.prototype = {
            constructor: i.CalcControlPosition,
            bind: function(t, e) {
                this._listeners = [Ut.addListener(t, "insert_at", Ct(this.insertAt, this, e, t)), Ut.addListener(t, "set_at", Ct(this.setAt, this, e, t)), Ut.addListener(t, "remove_at", Ct(this.removeAt, this, e, t))]
            },
            unbind: function() {
                Ut.removeListener(this._listeners), this._listeners.length = 0, this._listeners = []
            },
            insertAt: function(t, e, n) {
                var i = this._typeToStyle(t);
                this._arrange(i, e, n)
            },
            setAt: function(t, e, n, i) {
                i && Zt.removeElement(i.parentNode);
                var o = this._typeToStyle(t);
                this._arrange(o, e, n)
            },
            removeAt: function(t, e, n, i) {
                if (i) {
                    var o = this._typeToStyle(t);
                    Zt.removeElement(i.parentNode), "bottom" === o[0] && this._alignBottom(o), "center" === o[1] && this._alignCenter(o)
                }
            },
            _getWrapper: function(t) {
                var e = t.join("_"),
                    n = "border:0 none;margin:0;padding:0;pointer-events:none;";
                switch (e) {
                    case "top_left":
                    case "bottom_left":
                    case "left_center":
                        n += "float:left";
                        break;
                    case "top_right":
                    case "bottom_right":
                    case "right_center":
                        n += "float:right"
                }
                return Zt.createElement("div", n)
            },
            _bottomBaseline: function(t, e) {
                var n = e.offsetHeight;
                if (t.minElement)
                    if (n < t.minHeight) {
                        t.minElement = e, t.minHeight = n;
                        for (var i, o = 0, s = t.element.childNodes.length; o < s; o++) i = t.element.childNodes[o], i !== e && 1 === i.nodeType && (i.style.marginTop = -(i.offsetHeight - n) + "px")
                    } else e.style.marginTop = -(n - t.minHeight) + "px", e.style.height = n + "px";
                else t.minElement = e, t.minHeight = n, e.style.height = n + "px"
            },
            _arrange: function(t, e, n) {
                var i = this._getPaneInfo(t),
                    o = i.element,
                    s = e.getAt(n),
                    r = t[0],
                    a = t[1],
                    h = this._getWrapper(t);
                "none" !== s.style.pointerEvents && (s.style.pointerEvents = "auto"), h.appendChild(s), Zt.insertAt(o, h, "bottom" !== a ? n : 0), "bottom" === r && this._bottomBaseline(i, h), "center" === a && this._alignCenter(t)
            },
            _typeToStyle: function(t) {
                return t.toLowerCase().split("_")
            },
            _getPaneInfo: function(t) {
                var e = t.join("_"),
                    n = this._panes[e],
                    i = n ? n.element : null;
                if (posPane = this._panes[e], i) return n;
                var o = t[0],
                    s = t[1],
                    r = "position:absolute;z-index:100;margin:0;padding:0;pointer-events:none;";
                if ("center" === s) r += o + ":0;";
                else
                    for (var a = 0, h = t.length; a < h; a++) r += t[a] + ":0;";
                return i = Zt.createElement("div", r), n = {
                    element: i
                }, this._panes[e] = n, this._mapDiv.appendChild(i), n
            },
            _alignCenter: function(t) {
                if ("center" === t[1]) {
                    var e = this._getPaneInfo(t).element,
                        n = t[0],
                        o = this._mapSize,
                        s = Zt.getSize(e);
                    "top" === n || "bottom" === n ? e.style.left = i.round((o.width - s.width) / 2) + "px" : e.style.top = i.round((o.height - s.height) / 2) + "px"
                }
            },
            _alignBottom: function(t) {
                if ("bottom" === t[0]) {
                    for (var e, n = this._getPaneInfo(t), o = [], s = 1 / 0, r = null, a = 0, h = n.element.childNodes.length; a < h; a++) e = n.element.childNodes[a], 1 === e.nodeType && o.push(e);
                    0 !== o.length && (i.forEach(o, function(t) {
                        var e = t.offsetHeight;
                        t.offsetHeight < s && (s = e, r = t)
                    }), r.style.marginTop = 0, r.style.height = s + "px", n.minElement = r, n.minHeight = s, i.forEach(o, function(t) {
                        if (t !== r) {
                            var e = t.offsetHeight;
                            t.style.marginTop = -(e - s) + "px", t.style.height = e + "px"
                        }
                    }))
                }
            },
            _onSizeChanged: function(t) {
                var e = this;
                e._mapSize = t, i.forEach(e._panes, function(t, n) {
                    n.indexOf("center") !== -1 && e._alignCenter(n.split("_"))
                })
            }
        }, i.MapTypeControl = function(t) {
            this.set("id", "nmaptypecontrol-" + i.guid()), this._domListeners = [], this._registryListeners = [], this._registry = null, this._lazyMapTypeId = null, this.DEFAULT_OPTIONS = {
                position: m.TOP_RIGHT,
                mapTypeIds: null,
                style: y.BUTTON
            }, i.CustomControl.apply(this, [t])
        }, zt(i.MapTypeControl, i.CustomControl, {
            _beforeSetMap: function(t) {
                if (t) {
                    var e = t.mapTypes;
                    this._registry = e, this._prepareDOM(e), this._bindEvent(e)
                } else this._unbindEvent(), this._registry = null
            },
            _afterSetMap: function(t) {
                t || (this._removeDOMEvents(), this._element.innerHTML = "")
            },
            _addControl: function(t, e) {
                i.CustomControl.prototype._addControl.apply(this, arguments), this._adjustUI(e)
            },
            _adjustUI: function(t) {
                var e = t || this.get("position");
                if (this.get("style") === y.DROPDOWN) switch (e) {
                    case m.BOTTOM_LEFT:
                    case m.BOTTOM_CENTER:
                    case m.BOTTOM_RIGHT:
                        this._mapTypeListWrap.style.top = "auto", this._mapTypeListWrap.style.bottom = "29px";
                        break;
                    default:
                        this._mapTypeListWrap.style.top = "29px", this._mapTypeListWrap.style.bottom = "auto"
                } else switch (e) {
                    case m.BOTTOM_LEFT:
                    case m.BOTTOM_CENTER:
                    case m.BOTTOM_RIGHT:
                        this._subMapTypeWrap.style.top = "-32px";
                        break;
                    default:
                        this._subMapTypeWrap.style.top = "32px"
                }
            },
            _bindEvent: function(t) {
                this._registryListeners = [Ut.addListener(t, "addMapType", Ct(this._onAddMapType, this)), Ut.addListener(t, "removeMapType", Ct(this._onRemoveMapType, this)), Ut.addListener(t, "selectedMapType_changed", Ct(this._onMapTypeChanged, this))]
            },
            _unbindEvent: function() {
                Ut.removeListener(this._registryListeners), this._registryListeners.length = 0
            },
            _onAddMapType: function(t, e) {
                this.get("style") === y.DROPDOWN ? this._addMapTypeList(t, e) : this._addMapTypeButton(t, e), this._lazyMapTypeId && this._lazyMapTypeId === t && (this._onMapTypeChanged(this._registry.getSelectedType()), this._lazyMapTypeId = null, delete this._lazyMapTypeId)
            },
            _onRemoveMapType: function(t, e) {
                this.get("style") === y.DROPDOWN ? this._removeMapTypeList(t, e) : this._removeMapTypeButton(t, e)
            },
            _clearMapType: function() {
                var t = this._registry;
                if (t) {
                    var e = this._mapTypeScheme,
                        n = this;
                    i.forEach(e, function(e, o) {
                        var s = e.subs || {};
                        i.forEach(s, function(e, i) {
                            n._onRemoveMapType(i, t.get(i))
                        }), n._onRemoveMapType(o, t.get(o))
                    }), this._mapTypeScheme = {}
                }
            },
            _onMapTypeChanged: function(t) {
                if (t) {
                    var e = this._registry.getSelectedTypeId(),
                        n = null,
                        o = null,
                        s = null;
                    if (this.get("style") === y.DROPDOWN) n = this._mapTypeScheme[e], o = n.element, this._mapTypeNameWrap.innerHTML = t.name || (t.getName ? t.getName() : e), o.style.backgroundColor = "#f6f6f6", s = this.get("mapTypeElement"), s && (s.style.backgroundColor = "#fff"), this.set("mapTypeElement", o);
                    else {
                        var r = this._getParentMapTypeId(t);
                        if (n = this._mapTypeScheme[r || e], o = n.element, !o) return;
                        s = this.get("mapTypeElement"), s && (s.style.borderColor = "#fff", s.style.backgroundColor = "#fff", s.style.color = "#444"), o.style.borderColor = "#2A7CDD", o.style.backgroundColor = "#2F87EC", o.style.color = "#fff", i.forEach(n.subs, function(t, n) {
                            var i = t.element.getElementsByTagName("img")[0],
                                o = "-checked",
                                s = "-unchecked";
                            e === n && (s = "-checked", o = "-unchecked"), i.src = i.src.replace(o, s)
                        }), this.set("mapTypeElement", o)
                    }
                    this.set("mapTypeId", e)
                }
            },
            _prepareDOM: function(t) {
                this._element.style.margin = "10px", this._element.innerHTML = "", this.get("style") === y.DROPDOWN ? this._prepareDropdown(t) : this._prepareButton(t);
                var e = t.getSelectedTypeId(),
                    n = this.get("mapTypeIds") || t.getTypeIds();
                i.getIndexOfElement(n, e) > -1 ? this._onMapTypeChanged(t.getSelectedType()) : this._lazyMapTypeId = e, this._style = this.get("style"), this._adjustUI()
            },
            _prepareButton: function(t) {
                var e = this.get("mapTypeIds") || t.getTypeIds(),
                    n = "position:relative;z-index:1;padding:0;margin:0;list-style:none;display:block;height:30px;box-sizing:content-box !important;",
                    o = Zt.createElement("ul", n),
                    s = Zt.createElement("ul", n.replace("position:relative", "position:absolute") + "left:0;width:100%;");
                o.style.borderRight = "solid 1px #444", s.style.top = "34px", s.style.display = "none", this._mapTypeWrap = o, this._subMapTypeWrap = s, this._mapTypeScheme = {};
                var r = Ct(this._addMapTypeButton, this);
                i.forEach(e, function(e) {
                    var n = t.get(e);
                    n.uid.split(":").length < 3 && r(e, n)
                }), i.forEach(e, function(e) {
                    var n = t.get(e);
                    n.uid.split(":").length >= 3 && r(e, n)
                }), this._element.appendChild(o), this._element.appendChild(s), this._domListeners = [Ut.addDOMListener(o, "mousedown", Ct(this._onDownButton, this)), Ut.addDOMListener(o, "mouseover", Ct(this._onOverButton, this)), Ut.addDOMListener(o, "mouseout", Ct(this._onOutButton, this)), Ut.addDOMListener(s, "mousedown", Ct(this._onDownCheckbox, this)), Ut.addDOMListener(s, "mouseover", Ct(this._onOverCheckbox, this)), Ut.addDOMListener(s, "mouseout", Ct(this._onOutCheckbox, this))]
            },
            _updateSubMapTypeStyle: function(t) {
                var e = i.keys(t),
                    n = e.length;
                0 !== n && (1 === n ? t[e[0]].listElement.style.border = "solid 1px #444" : i.forEach(e, function(e, i) {
                    var o = t[e].listElement;
                    i < n - 1 ? o.style.borderBottom = "0 none" : o.style.borderBottom = "solid 1px #444", i > 0 && (o.style.borderTop = "solid 1px #ddd")
                }))
            },
            _addMapTypeButton: function(t, e) {
                var n = "position:relative;z-index:1;float:left;display:block;margin:0;padding:0;list-style:none;border:solid 1px #444;box-sizing:content-box !important;",
                    i = Y + "height:26px;line-height:26px;border:solid 1px #fff;background-color:#fff;text-decoration:none;color:#000;font-size:13px;letter-spacing:-1px;font-family:" + j,
                    o = "<a href='#' style='" + i + "'>{{name}}</a>",
                    s = ["<a href='#' style='" + i.replace("color:#000", "color:#666") + "' title='{{name}}'>", '<img src="' + U + '/maptype-unchecked.png" width="13" height="13" alt="" style="position:absolute;display:block;top:7px;left:7px;width:13px;height:13px;border:0 none;cursor:pointer;' + H + '" />', "<span style='display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:0;padding:0;color:#666;font-size:13px;letter-spacing:-1px;font-family:" + j + ";'>{{name}}</span>", "</a>"].join(""),
                    r = this._mapTypeScheme,
                    a = e.name || (e.getName ? e.getName() : t),
                    h = this._getParentMapTypeId(e),
                    l = null,
                    c = null;
                if (h && h !== t) {
                    h = this._getParentMapTypeId(e), l = Zt.createElement("li", n.replace("float:left;", ""));
                    var u = s.replace(/\{\{name\}\}/g, a);
                    "naver:satellite:hybrid" === e.uid && (u = u.replace("-unchecked", "-checked")), l.innerHTML = u, l.style.display = "none", c = l.getElementsByTagName("a")[0], c.style.position = "relative", c.style.paddingLeft = "25px", c.__mapTypeId = t, c.onclick = Ct(this._preventLink, this), r[h] || (r[h] = {
                        element: null,
                        listElement: null,
                        uid: null,
                        subs: {}
                    }), r[h].subs[t] = {
                        element: c,
                        listElement: l
                    }, this._updateSubMapTypeStyle(r[h].subs), this._subMapTypeWrap.appendChild(l)
                } else l = Zt.createElement("li", n), l.style.borderRight = "0 none", l.innerHTML = o.replace("{{name}}", a), c = l.getElementsByTagName("a")[0], c.style.padding = "0 7px", c.__mapTypeId = t, c.onclick = Ct(this._preventLink, this), r[t] ? (r[t].element = c, r[t].uid = e.uid) : r[t] = {
                    element: c,
                    listElement: l,
                    uid: e.uid,
                    subs: {}
                }, this._mapTypeWrap.appendChild(l)
            },
            _removeMapTypeButton: function(t, e) {
                var n = this._getParentMapTypeId(e),
                    i = this._mapTypeScheme[n || t];
                if (n === t) {
                    Zt.removeElement(i.element.parentNode), i.element = null;
                    var o = !1;
                    if (i.subs)
                        for (var s in i.subs)
                            if (i.subs.hasOwnProperty(s) && i.subs[s]) {
                                o = !0;
                                break
                            } o || (i.uid = null)
                } else Zt.removeElement(i.subs[t].listElement), i.subs[t] = null, delete i.subs[t], this._updateSubMapTypeStyle(i.subs)
            },
            _getParentMapTypeId: function(t) {
                var e = this._mapTypeScheme,
                    n = t.uid,
                    i = n.split(":"),
                    o = i[0] + ":" + i[1],
                    s = null;
                for (var r in e)
                    if (e.hasOwnProperty(r) && e[r].uid === o) {
                        s = r;
                        break
                    } return s
            },
            _getButtonElement: function(t) {
                if ("A" === t.tagName && t.__mapTypeId) return t;
                for (; t && "A" !== t.tagName && "DIV" !== t.tagName;) t = t.parentNode;
                return t && t.__mapTypeId ? t : null
            },
            _hideCheckbox: function(e) {
                function n() {
                    for (var t = 0, e = s.length; t < e; t++) s[t].style.display = "none";
                    o.style.display = "none"
                }
                var i = e || 0,
                    o = this._subMapTypeWrap,
                    s = o.getElementsByTagName("li");
                t.clearTimeout(this._hoverTimer), i ? this._hoverTimer = t.setTimeout(n, i) : n()
            },
            _showCheckboxOf: function(t) {
                var e = this._mapTypeScheme[t];
                if (e) {
                    var n = 0;
                    i.forEach(e.subs, function(t) {
                        t.listElement.style.display = "block", n++
                    }), n && (this._subMapTypeWrap.style.display = "block")
                }
            },
            _onDownButton: function(e) {
                var n = Ft.fix(e),
                    o = this._getButtonElement(n.target);
                if (o) {
                    var s = o.__mapTypeId,
                        r = this._mapTypeScheme[s];
                    t.clearTimeout(this._hoverTimer), this._hideCheckbox(), this._showCheckboxOf(s), i.forEach(r.subs, function(t, e) {
                        var n = t.element.getElementsByTagName("img")[0];
                        if (n.src.indexOf("-checked") > -1) return s = e, !0
                    }), this.setMapTypeId(s)
                }
            },
            _onOverButton: function(e) {
                var n = Ft.fix(e),
                    i = this._getButtonElement(n.target);
                if (i) {
                    var o = this._registry.getSelectedType(),
                        s = this._getParentMapTypeId(o) || this._registry.getSelectedTypeId(),
                        r = this._registry.get(i.__mapTypeId),
                        a = this._getParentMapTypeId(r) || i.__mapTypeId;
                    this._mapTypeScheme[a];
                    s === a && (t.clearTimeout(this._hoverTimer), this._showCheckboxOf(a))
                }
            },
            _onOutButton: function(t) {
                this._hideCheckbox(2e3)
            },
            _onDownCheckbox: function(t) {
                var e = Ft.fix(t),
                    n = this._getButtonElement(e.target);
                if (n) {
                    var i = this._registry.getSelectedTypeId(),
                        o = n.__mapTypeId;
                    i === o && (o = this._getParentMapTypeId(this._registry.get(o))), this.setMapTypeId(o)
                }
            },
            _onOverCheckbox: function(e) {
                t.clearTimeout(this._hoverTimer)
            },
            _onOutCheckbox: function(t) {
                this._hideCheckbox(2e3)
            },
            _prepareDropdown: function(t) {
                var e = this.get("mapTypeIds") || t.getTypeIds(),
                    n = t.getSelectedType(),
                    o = "\uc9c0\ub3c4 \uc720\ud615 \ubcc0\uacbd";
                n && (o = n.name || (n.getName ? n.getName() : t.getSelectedTypeId()));
                var s = Zt.createElement("div", Y + "position:relative;z-index:0;"),
                    r = Zt.createElement("ul", "position:absolute;z-index:1;top:29px;left:0;padding:0;margin:0;list-style:none;display:none;width:100%;border-top:solid 1px #444;border-bottom:solid 1px #444;box-sizing:content-box !important;"),
                    a = Zt.createElement("a", "text-decoration:none;color:#000;font-size:13px;letter-spacing:-1px;display:block;padding:0 21px 0 9px;text-align:left;background-color:#fff;border:solid 1px #444;height:28px;line-height:28px;min-width:69px !important;box-sizing:content-box !important;font-family:" + j);
                a.innerHTML = "<span>" + o + '</span><img src="' + U + '/maptype-arrow-down.png" width="8" height="4" alt="\ud3bc\uce58\uae30" style="position:absolute;z-index:0;top:14px;right:8px;width:8px;height:4px;' + H + '" />', a.href = "#", a.title = "\uc9c0\ub3c4 \uc720\ud615 \ubcc0\uacbd", a.onclick = Ct(this._preventLink, this), s.appendChild(a), this._mapTypeNameWrap = a.getElementsByTagName("span")[0], this._dropDownArrow = a.getElementsByTagName("img")[0], this._mapTypeListWrap = r, this._mapTypeScheme = {};
                var h = Ct(this._addMapTypeList, this);
                i.forEach(e, function(e) {
                    h(e, t.get(e))
                }), this._element.appendChild(s), this._element.appendChild(r), this._domListeners = [Ut.addDOMListener(a, "mousedown", Ct(this._onToggleList, this)), Ut.addDOMListener(r, "mousedown", Ct(this._onDownListItem, this)), Ut.addDOMListener(r, "mouseover", Ct(this._onOverListItem, this)), Ut.addDOMListener(r, "mouseout", Ct(this._onOutListItem, this))]
            },
            _addMapTypeList: function(t, e) {
                var n = "display:block;margin:0;padding:0;list-style:none;background-color:#fff;border:solid 1px #444;box-sizing:content-box !important;",
                    i = Y + "height:28px;line-height:28px;background-color:#fff;text-decoration:none;color:#666;font-size:13px;letter-spacing:-1px;padding:0 9px;font-family:" + j,
                    o = "<a href='#'' style='" + i + "'>{{name}}</a>",
                    s = this._mapTypeScheme,
                    r = e.name || (e.getName ? e.getName() : t),
                    a = Zt.createElement("li", n);
                a.innerHTML = o.replace("{{name}}", r), a.style.borderTop = "0 none", a.style.borderBottom = "0 none";
                var h = a.getElementsByTagName("a")[0];
                h.__mapTypeId = t, h.onclick = Ct(this._preventLink, this), s[t] = {
                    element: h,
                    uid: e.uid,
                    listElement: a
                }, this._mapTypeListWrap.appendChild(a)
            },
            _removeMapTypeList: function(t, e) {
                var n = this._mapTypeScheme[t];
                Zt.removeElement(n.listElement), n = null, this._mapTypeScheme[t] = null, delete this._mapTypeScheme[t]
            },
            _toggleList: function(t) {
                var e = "-down",
                    n = "-up";
                t || (e = "-up", n = "-down"), Zt.visible(this._mapTypeListWrap, t), this._dropDownArrow.src = this._dropDownArrow.src.replace(e, n)
            },
            _onToggleList: function() {
                this._toggleList(Zt.visible(this._mapTypeListWrap) === !1)
            },
            _onDownListItem: function(t) {
                var e = Ft.fix(t),
                    n = this._getButtonElement(e.target);
                if (n) {
                    var i = n.__mapTypeId;
                    this.setMapTypeId(i), this._toggleList(!1)
                }
            },
            _onOverListItem: function(t) {
                var e = Ft.fix(t),
                    n = this._getButtonElement(e.target);
                n && (n.style.backgroundColor = "#f6f6f6")
            },
            _onOutListItem: function(t) {
                var e = Ft.fix(t),
                    n = this._getButtonElement(e.target);
                n && n.__mapTypeId !== this._registry.getSelectedTypeId() && (n.style.backgroundColor = "#fff")
            },
            _preventLink: function(t) {
                var e = Ft.fix(t);
                e.preventDefault()
            },
            setMapTypeId: function(t) {
                var e = this._registry.getSelectedTypeId();
                t !== e && this._registry.setSelectedTypeId(t)
            },
            mapTypeIds_changed: function(t) {
                var e = this;
                if (e._registry) {
                    var n = e._registry,
                        o = t || n.getTypeIds();
                    e._clearMapType(), e._lazyMapTypeId = n.getSelectedTypeId(), i.forEach(o, function(t) {
                        var i = n.get(t);
                        e._onAddMapType(t, i)
                    })
                }
            },
            _removeDOMEvents: function() {
                i.forEach(this._domListeners, function(t) {
                    Ut.removeDOMListener(t)
                }), this._domListeners.length = 0
            },
            style_changed: function(t) {
                this._element && (this._style !== t && (this._removeDOMEvents(), Ft.endTouch(), this._prepareDOM(this._registry)), this._style = t)
            }
        }), i.ZoomControl = function(t) {
            this.DEFAULT_OPTIONS = {
                position: m.TOP_LEFT,
                style: y.LARGE,
                legendDisabled: !1
            }, this.__LEGEND_SCHEME__ = [
                ["\ubd80\ub3d9\uc0b0", 13],
                ["\uac70\ub9ac", 11],
                ["\uc74d,\uba74,\ub3d9", 9],
                ["\uc2dc,\uad70,\uad6c", 6],
                ["\uc2dc,\ub3c4", 3],
                ["\uad6d\uac00", 1]
            ], this.SCALER_GAP = 10, this._domListeners = [], this.set("legendAllowed", !0), i.CustomControl.apply(this, [t])
        }, zt(i.ZoomControl, i.CustomControl, {
            _beforeSetMap: function(t) {
                t ? (this._prepareDOM(), this._bindDOMEvent()) : (this._unbindDOMEvent(), this._destroyDOM())
            },
            _afterSetMap: function(t) {
                if (t) {
                    var e = t.getMapModel();
                    this.bindTo("minZoom", e, "userMinZoom"), this.bindTo("maxZoom", e, "userMaxZoom"), this.bindTo("mapTypeMinZoom", e), this.bindTo("mapTypeMaxZoom", e), this.bindTo("zoom", t), this.bindTo("mapType", t), this._adjustLegend()
                } else this.unbind("minZoom"), this.unbind("maxZoom"), this.unbind("mapTypeMinZoom"), this.unbind("mapTypeMaxZoom"), this.unbind("zoom"), this.unbind("mapType", t)
            },
            _addControl: function(t, e) {
                i.CustomControl.prototype._addControl.apply(this, arguments), this._adjustLegend(e)
            },
            _prepareDOM: function() {
                var t = function(t, e, n) {
                        var i = Zt.createElement(t, e);
                        return n && (i.innerHTML = n), i
                    },
                    e = function(t, e) {
                        for (var n = 0, i = e.length; n < i; n++) t.appendChild(e[n])
                    },
                    n = function(t, e, n, i) {
                        var o = '<img src="{{url}}" width="{{width}}" height="{{height}}" alt="{{alt}}" style="' + Y + H + 'width:{{width}}px;height:{{height}}px;" />',
                            s = {
                                url: U + "/zoom-" + t,
                                width: e || 0,
                                height: n || 0,
                                alt: i || ""
                            },
                            r = o;
                        return r.replace(/{{(\w+)}}/g, function(t, e) {
                            return s[e]
                        })
                    },
                    i = "position:relative;z-index:2;width:28px;height:22px;cursor:pointer;display:block;overflow:hidden;box-sizing:content-box !important;",
                    o = "position:absolute;top:7px;bottom:7px;left:12px;width:4px;height:100%;display:block;",
                    s = t("div", "position:relative;z-index:0;width:28px;margin:10px;border:solid 1px #444;box-sizing:content-box !important;"),
                    r = t("a", i + "border-bottom:solid 1px #cacdd1;", n("in-large-normal.png", 28, 22, "\uc9c0\ub3c4 \ud655\ub300")),
                    a = t("div", "position:relative;width:28px;height:118px;overflow:hidden;margin:0;padding:7px 0;background-color:#fff;cursor:pointer;box-sizing:content-box !important;"),
                    h = t("div", o + "background-color:#2F87EC;"),
                    l = t("div", o + "background-color:#CACDD1;"),
                    c = t("a", "position:absolute;left:4px;width:18px;height:10px;top:27px;border:solid 1px #444;cursor:move;display:block;overflow:hidden;box-sizing:content-box !important;", n("handle.png", 18, 10, "\uc9c0\ub3c4 \ud655\ub300/\ucd95\uc18c \uc2ac\ub77c\uc774\ub354")),
                    u = t("a", i + "border-top:solid 1px #cacdd1;", n("out-large-normal.png", 28, 22, "\uc9c0\ub3c4 \ucd95\uc18c")),
                    p = t("div", "position:absolute;top:22px;width:44px;height:0;overflow:visible;display:none;"),
                    d = t("div", "display:block;margin:0;padding:0;");
                Zt.disableSelection(s), r.href = "#", u.href = "#", c.href = "#", e(a, [h, l, c]), e(s, [r, a, u]), p.appendChild(d), s.appendChild(p), this._doms = {
                    wrap: s,
                    zoomIn: r,
                    zoomOut: u,
                    zoomInImg: r.getElementsByTagName("img")[0],
                    zoomOutImg: u.getElementsByTagName("img")[0],
                    scaler: a,
                    scalerOn: h,
                    scalerOff: l,
                    slider: c,
                    legend: p,
                    legendInner: d
                }, this.style_changed(this.get("style") || y.LARGE), this._element.appendChild(s), this._drawLegend()
            },
            _createLegendItem: function(t, e) {
                var n = this.SCALER_GAP,
                    i = 14,
                    o = this.get("maxZoom") || 14,
                    s = G + "width:44px;height:17px;overflow:hidden;",
                    r = Zt.createElement("div", s),
                    a = t || "",
                    h = e || 1,
                    l = (o - i) * n + 3,
                    c = Zt.createElement("img", G + H + "width:44px;height:17px;"),
                    u = Zt.createElement("span", Y + "font-family:" + j + ";position:relative;z-index:2;line-height:17px;color:#fff;font-size:11px;padding:0 4px 0 0;text-align:center;letter-spacing:-1px;");
                return c.src = U + "/zoom-legend-left-normal.png", c.alt = "", u.innerHTML = a, r.appendChild(c), r.appendChild(u), r.style.top = l + n * (i - h) + "px", {
                    zoom: h,
                    element: r,
                    imgEl: c,
                    textEl: u
                }
            },
            _drawLegend: function() {
                var t = this._doms.legendInner,
                    e = [],
                    n = Ct(this._createLegendItem, this);
                t.innerHTML = '<h4 style="visibility:hidden;width:0;height:0;overflow:hidden;margin:0;padding:0;">\uc9c0\ub3c4 \ucee8\ud2b8\ub864\ub7ec \ubc94\ub840</h4>', i.forEach(this.__LEGEND_SCHEME__, function(i, o) {
                    var s = i[0],
                        r = i[1],
                        a = n(s, r);
                    0 === o && (a.imgEl.src = a.imgEl.src.replace("-normal", "-on")), a.zoom = r, e.push(a), t.appendChild(a.element)
                }), this.__legends__ = e, this._adjustLegend()
            },
            _bindDOMEvent: function() {
                var t = (this.get("map"), this._doms),
                    e = t.zoomIn,
                    n = t.zoomOut,
                    i = t.scaler,
                    o = t.slider,
                    s = Ut.addDOMListener,
                    r = function(t) {
                        Ft.stop(t)
                    };
                this._domListeners = [s(e, "click", r), s(n, "click", r), s(e, "mousedown", Ct(this._onClickZoomIn, this)), s(n, "mousedown", Ct(this._onClickZoomOut, this)), s(i, "mouseover", Ct(this._onMouseOver, this)), s(i, "mouseout", Ct(this._onMouseOut, this)), s(i, "mousedown", Ct(this._onMouseDownScaler, this)), s(o, "mousedown", Ct(this._onMouseDownSlider, this)), s(o, "click", r)]
            },
            _unbindDOMEvent: function() {
                Ut.removeDOMListener(this._domListeners), this._domListeners.length = 0, this._domListeners = []
            },
            _onClickZoomIn: function(t) {
                Ft.stop(t);
                var e = this.getMap(),
                    n = e.getZoom() + 1;
                e.setZoom(n, !0)
            },
            _onClickZoomOut: function(t) {
                Ft.stop(t);
                var e = this.getMap(),
                    n = e.getZoom() - 1;
                e.setZoom(n, !0)
            },
            _onMouseOver: function() {
                !this.get("legendDisabled") && this.get("legendAllowed") && (this._doms.legend.style.display = "")
            },
            _onMouseOut: function() {
                !this.get("legendDisabled") && this.get("legendAllowed") && (this._doms.legend.style.display = "none")
            },
            _onMouseDownScaler: function(t) {
                t = Ft.fix(t), t.stop();
                var e, n = t.target || t.srcElement,
                    i = t.pos(),
                    o = this._doms.scaler,
                    s = i.pageY - Zt.getOffset(o).y;
                if (n !== this._doms.slider) {
                    e = Math.floor(s / this.SCALER_GAP);
                    var r = this.getMap(),
                        a = r.getZoom(),
                        h = this.get("maxZoom") - e;
                    h !== a && r.setZoom(h, !0)
                }
            },
            _onMouseDownSlider: function(t) {
                t = Ft.fix(t), t.stop();
                var e = this,
                    i = this._doms.scaler,
                    o = this.getMap(),
                    s = [Ut.addDOMListener(n, "mousemove", function(t) {
                        t = Ft.fix(t), t.stop();
                        var n, s = t.target || t.srcElement,
                            r = t.pos(),
                            a = r.pageY - Zt.getOffset(i).y;
                        s !== i && s.parentNode !== i || (n = Math.floor((a + 2) / e.SCALER_GAP), o.setZoom(e.get("maxZoom") - n, !0))
                    }), Ut.addDOMListener(n, "mouseup", function(t) {
                        Ut.removeDOMListener(s), s = null
                    })]
            },
            zoom_changed: function(t) {
                var n, i = this.get("maxZoom");
                if (i !== e && (n = i - t), !(t === e || i === e || n < 0)) {
                    var o = this._doms,
                        s = (this.getMap(), this.get("minZoom")),
                        r = this.SCALER_GAP,
                        a = n * r + 4,
                        h = o.zoomIn,
                        l = o.zoomOut,
                        c = o.zoomInImg,
                        u = o.zoomOutImg,
                        p = "-dimmed",
                        d = "-normal";
                    t === s ? (l.style.cursor = "default", u.src = u.src.replace(d, p)) : t === i ? (h.style.cursor = "default", c.src = c.src.replace(d, p)) : (h.style.cursor = "pointer", l.style.cursor = "pointer", c.src = c.src.replace(p, d), u.src = u.src.replace(p, d)), o.slider.style.top = a + "px", o.scalerOff.style.height = a + "px"
                }
            },
            minZoom_changed: function() {
                this._setScalerHeight(), this.zoom_changed(this.get("zoom"))
            },
            maxZoom_changed: function() {
                this._setScalerHeight(), this.zoom_changed(this.get("zoom"))
            },
            mapTypeMinZoom_changed: function(t) {
                this._setScalerHeight(), this.zoom_changed(this.get("zoom"))
            },
            mapTypeMaxZoom_changed: function(t) {
                this._setScalerHeight(), this.zoom_changed(this.get("zoom"))
            },
            mapType_changed: function(t) {
                var e = !t || t.vendor !== ht || t.projection !== i.UTMK_NAVER;
                this.get("legendAllowed") === e && this.set("legendAllowed", !e)
            },
            legendAllowed_changed: function(t) {
                this._doms && !t && this.get("legendDisabled") && Zt.visible(this._doms.legend, !1)
            },
            style_changed: function(t) {
                var e = this._doms;
                if (e && e.wrap) {
                    var n = e.scaler,
                        i = e.zoomIn,
                        o = e.zoomInImg,
                        s = e.zoomOut,
                        r = e.zoomOutImg,
                        a = 22,
                        h = "block",
                        l = "solid 1px #cacdd1",
                        c = "-small",
                        u = "-large";
                    t === y.SMALL && (h = "none", l = "0 none", a = 28, c = "-large", u = "-small"), n.style.display = h, i.style.height = a + "px", i.style.borderBottom = l, o.style.height = a + "px", o.height = a, o.src = o.src.replace(c, u), s.style.height = a + "px", r.style.height = a + "px", r.height = a, r.src = r.src.replace(c, u)
                }
            },
            _setScalerHeight: function() {
                var t = this.get("minZoom"),
                    n = this.get("maxZoom"),
                    i = this.get("mapTypeMaxZoom"),
                    o = 119;
                n !== e && t !== e && i !== e && (o = (n - t) * this.SCALER_GAP + 6, this._doms.scaler.style.height = o + "px", this._doms.scalerOn.style.height = o + "px", this._adjustLegend())
            },
            _adjustLegend: function(t) {
                if (this.getMap()) {
                    var e = t || this.get("position"),
                        n = this.get("minZoom"),
                        o = this.get("maxZoom");
                    i.forEach(this.__legends__, function(t) {
                        var e = t.zoom,
                            i = t.element;
                        e > o || e < n ? i.style.visibility = "hidden" : i.style.visibility = "visible"
                    });
                    var s = this._doms.legend,
                        r = 36,
                        a = "-left-",
                        h = "-right-",
                        l = "0 0 0 4px";
                    switch (e) {
                        case m.TOP_RIGHT:
                        case m.RIGHT_TOP:
                        case m.BOTTOM_RIGHT:
                        case m.RIGHT_BOTTOM:
                        case m.RIGHT_CENTER:
                            r = -51, a = "-right-", h = "-left-", l = "0 4px 0 0"
                    }
                    s.style.left = r + "px", this.__legends__ && i.forEach(this.__legends__, function(t) {
                        var e = t.imgEl,
                            n = t.textEl;
                        e.src = e.src.replace(a, h), n.style.padding = l
                    })
                }
            },
            _destroyDOM: function() {
                this._doms = null, delete this._doms, this._element.innerHTML = "", this._doms = {}
            }
        }), i.LogoControl = function(t) {
            this.DEFAULT_OPTIONS = {
                position: m.BOTTOM_RIGHT
            }, i.CustomControl.apply(this, arguments)
        }, zt(i.LogoControl, i.CustomControl, {
            _beforeSetMap: function(t) {
                t ? this._bindEvent(t) : this._unbindEvent()
            },
            _bindEvent: function(t) {
                this.bindTo("mapType", t)
            },
            _unbindEvent: function(t) {
                this.unbind("mapType")
            },
            _createElement: function() {
                var t = U + "/naver-normal.png",
                    e = "display:block;width:43px;height:10px;overflow:hidden;",
                    n = Zt.createElement("a", e + "margin:0 5px 7px 0;");
                return n.href = "https://map.naver.com", n.target = "_blank", n.innerHTML = '<img src="' + t + '" width="43" height="10" alt="NAVER" style="' + e + "border:0 none;margin:0;padding:0;" + H + '" />',
                    this._logoImg = n.getElementsByTagName("img")[0], n
            },
            mapType_changed: function(t) {
                t && (t.darktheme ? this._logoImg.src = this._logoImg.src.replace("-normal.png", "-dark.png") : this._logoImg.src = this._logoImg.src.replace("-dark.png", "-normal.png"))
            }
        }), i.MapDataControl = function(t) {
            this.DEFAULT_OPTIONS = {
                position: m.BOTTOM_RIGHT
            }, this.POPUP_PADDING = 15, this._providers = {}, i.CustomControl.apply(this, arguments)
        }, zt(i.MapDataControl, i.CustomControl, {
            _afterSetMap: function(t) {
                t ? (this.bindTo("mapType", t), this.bindTo("size", t), this._listeners = [Ut.addListener(t, "addLayer", Ct(this._onAddLayer, this)), Ut.addListener(t, "removeLayer", Ct(this._onRemoveLayer, this)), Ut.addListener(t, "idle", Ct(this._onIdle, this))], t.getElement().appendChild(this._popupEl), this._syncToLayers(t.layers)) : (this.unbind("mapType"), this.unbind("size"), Ut.removeListener(this._listeners), this._popupEl.parentElement.removeChild(this._popupEl))
            },
            _onIdle: function() {
                i.forEach(this._providers, function(t, e) {
                    t.checkValid()
                })
            },
            _createElement: function() {
                function t() {
                    var t = Zt.createElement("div", "margin:0;padding:0 0 2px 10px;height:19px;line-height:19px;color:#444;font-family:" + j + ";font-size:11px;clear:both;white-space:nowrap;pointer-events:none;");
                    return t.className = "map_copyright", t
                }

                function e() {
                    var t = Zt.createElement("a", "font-family:" + j + ";font-size:11px;line-height: 19px;margin:0 0 0 5px;padding:0;color:#444;float:left;pointer-events:auto;text-decoration:underline;display:none;");
                    return t.setAttribute("href", "#"), Zt.setText(t, "\ub354\ubcf4\uae30"), Ut.addDOMListener(t, "click", function(t) {
                        Ft.preventDefault(t), i._toggleViewMoreEl()
                    }), t
                }

                function n() {
                    var t = Zt.createElement("div", "border:1px solid #292930;background:#fff;padding:" + i.POPUP_PADDING + "px;color:#333;position:absolute;font-size:11px;max-width:350px !important;line-height:1.5;max-height:300px !important;clear:both;display:none"),
                        e = Zt.createElement("h5", "font-size: 12px;margin-top: 0px;margin-bottom: 10px;"),
                        n = Zt.createElement("a", "position:absolute;top:8px;right:8px;width:14px;height:14px;font-size:14px;line-height:14px;display:block;overflow:hidden;color:#444;text-decoration:none;font-weight:bold;text-align:center;"),
                        o = Zt.createElement("div");
                    return Zt.setText(e, "\uc9c0\ub3c4 \ub370\uc774\ud130"), n.setAttribute("href", "#"), Zt.setText(n, "\u2573"), Ut.addDOMListener(n, "click", function(e) {
                        Ft.stop(e), Zt.visible(t, !1)
                    }), t.appendChild(e), t.appendChild(n), t.appendChild(o), t
                }
                var i = this,
                    o = t();
                return i._viewMoreAnchor = e(), i._popupEl = n(), o.appendChild(this._viewMoreAnchor), o
            },
            size_changed: function(t) {
                this._layout(t), this._updatePopupSize()
            },
            mapType_changed: function(t) {
                if (this.getMap()) {
                    var e = this._providers.basemap;
                    e ? e.setMapType(this.get("mapType")) : this._providers.basemap = new i.MapDataProvider(this), this._adjColor(t), this._layout()
                }
            },
            _adjColor: function(t) {
                var e = t,
                    n = "#444";
                e.darktheme && (n = "#fff"), this._element.style.color = n, this._viewMoreAnchor.style.color = n, i.forEach(this._providers, function(t, e) {
                    t.setColor(n)
                })
            },
            _syncToLayers: function(t) {
                var e = this,
                    n = t.getLayerNames();
                i.forEach(this._providers, function(t, o) {
                    if ("basemap" !== o) {
                        var s = i.getIndexOfElement(n, o);
                        s < 0 ? e._removeProvider(o) : n.splice(s, 1)
                    }
                }), i.forEach(n, function(n) {
                    e._addProvider(t.get(n))
                }), this._layout()
            },
            _addProvider: function(t) {
                var e = t.get("name");
                this._providers[e] || (this._providers[e] = new i.MapDataProvider(this, t.getLayerType()))
            },
            _removeProvider: function(t) {
                this._providers[t] && (this._providers[t].setMapType(null), this._providers[t] = null, delete this._providers[t])
            },
            _onAddLayer: function(t) {
                this._addProvider(t), this._layout()
            },
            _onRemoveLayer: function(t) {
                this._removeProvider(t)
            },
            _layout: function() {
                var t = this.getMap().getSize(),
                    e = t.width < 300;
                Zt.visible(this._viewMoreAnchor, e), i.forEach(this._providers, function(t, n) {
                    t.setVisible(!e)
                })
            },
            _toggleViewMoreEl: function() {
                Zt.toggle(this._popupEl), this._updatePopupSize()
            },
            _updatePopupSize: function() {
                if (Zt.visible(this._popupEl)) {
                    var t = this.getMap().getSize(),
                        e = 4 * this.POPUP_PADDING;
                    this._popupEl.style.width = i.round(t.width - e) + "px";
                    var n = Zt.getSize(this._popupEl),
                        o = t.height / 2 - n.height / 2,
                        s = t.width / 2 - n.width / 2;
                    Zt.setOffset(this._popupEl, Dt(i.round(s), i.round(o)))
                }
            },
            getElement: function() {
                return this._element
            },
            getPopupElement: function() {
                return this._popupEl
            }
        }), i.MapDataProvider = function(t, e) {
            this._isBasemap = !1, this._items = [], this._control = t, e || (this._isBasemap = !0, e = t.get("mapType")), this._createElement(), this.setMapType(e)
        }, zt(i.MapDataProvider, i.KVO, {
            _createElement: function() {
                var t = this._control.getElement();
                this._isBasemap && (this._vendorElement = Zt.createElement("div", "float:left"), t.insertBefore(this._vendorElement, t.firstChild)), this._element = Zt.createElement("div", "float:left"), t.appendChild(this._element)
            },
            setMapType: function(t) {
                this.set("mapType", t)
            },
            setVisible: function(t) {
                Zt.visible(this._element, t)
            },
            setColor: function(t) {
                i.forEach(this._items, function(e) {
                    e.el.style.color = t
                }), this._vendorElement && (this._vendorElement.firstChild.style.color = t)
            },
            mapType_changed: function(t) {
                t ? (this._isBasemap && this._removeItemElements(), this._create(t), this.checkValid()) : this._destroy()
            },
            _create: function(t) {
                var e = t,
                    o = n.createDocumentFragment(),
                    s = n.createDocumentFragment(),
                    r = this._control.getPopupElement().getElementsByTagName("div")[0];
                if (i.forEach(e.provider, Ct(function(t, e) {
                        var n = this._createItemElements(t),
                            r = t.bounds && [];
                        if (t.bounds) {
                            var a = i.getLiteralType(t.bounds);
                            !a && t.bounds.length ? i.forEach(t.bounds, function(t) {
                                r.push(i.box(t))
                            }) : r = [i.box(t.bounds)]
                        }
                        this._items.push({
                            el: n[0],
                            cloneEl: n[1],
                            bounds: r
                        }), o.appendChild(n[0]), s.appendChild(n[1])
                    }, this)), this._isBasemap) {
                    var a = this._createItemElements({
                        title: t.vendor || ""
                    });
                    this._items.push({
                        el: a[0],
                        cloneEl: a[1]
                    }), this._vendorElement.appendChild(a[0]), s.insertBefore(a[1], s.firstChild), r.insertBefore(s, r.firstChild)
                } else r.appendChild(s);
                this._element.appendChild(o)
            },
            _createItemElements: function(t) {
                var e, n;
                return t.link ? (e = Zt.createElement("a", "pointer-events:auto;white-space:pre;"), e.setAttribute("target", "_blank"), e.setAttribute("href", t.link)) : e = Zt.createElement("span", "white-space:pre;"), n = e.cloneNode(), n.style.color = "#444", n.style["float"] = "left", Zt.setText(e, t.title), Zt.setText(n, t.title), [e, n]
            },
            _removeItemElements: function() {
                i.forEach(this._items, function(t) {
                    Zt.removeElement(t.el), Zt.removeElement(t.cloneEl), t = null
                }), this._items.length = 0, this._items = []
            },
            checkValid: function() {
                var t = this._control.getMap().getBounds();
                i.forEach(this._items, function(e) {
                    var n = !1;
                    e.bounds && (i.forEach(e.bounds, function(e) {
                        var i = null;
                        i = e instanceof Nt ? Bt.bounds(e.getSW(), e.getNE()) : e, n = i.intersects(t)
                    }), Zt.visible(e.el, n), Zt.visible(e.cloneEl, n))
                })
            },
            _destroy: function() {
                this._removeItemElements(), Zt.removeElement(this._element), this._isBasemap && Zt.removeElement(this._vendorElement), this._items = null, delete this._items
            }
        }), i.ScaleControl = function(t) {
            this._IMG_SCALE = [U + "/scale-normal-l.png", U + "/scale-normal-b.png", U + "/scale-normal-r.png"], this._SCALE_SIZE = 50, this._MAX_SCALE_SIZE = 100, this._textEl = null, this._textShadowCss = "-1px 0 rgba(255, 255, 255, 0.3), 0 1px rgba(255, 255, 255, 0.3), 1px 0 rgba(255, 255, 255, 0.3), 0 -1px rgba(255, 255, 255, 0.3)", this.DEFAULT_OPTIONS = {
                position: m.BOTTOM_RIGHT
            }, i.CustomControl.apply(this, arguments)
        }, zt(i.ScaleControl, i.CustomControl, {
            getScaleText: function() {
                var t = this._textEl;
                return t ? t.innerHTML : ""
            },
            _afterSetMap: function(t) {
                if (t) {
                    var e = t.getMapModel();
                    this.bindTo(["mapTypeMinZoom", "mapTypeMaxZoom", "mapSystemProjection", "projection", "tileSize"], e), this.bindTo(["zoom", "center", "mapType"], t)
                } else this.unbind(["mapTypeMinZoom", "mapTypeMaxZoom", "projection", "tileSize", "zoom", "center", "mapType"])
            },
            zoom_changed: function() {
                this._update()
            },
            center_changed: function() {
                var t = (this.get("map"), this.get("projection"));
                t.pointPerMeter || this._update()
            },
            projection_changed: function() {
                this.get("mapSystemProjection") && (this._calcPointPerMeter(), this._update())
            },
            tileSize_changed: function() {
                this.get("mapSystemProjection") && (this._calcPointPerMeter(), this._update())
            },
            mapType_changed: function(t) {
                if (t) {
                    var e = "#000",
                        n = this._textShadowCss,
                        o = "-dark-",
                        s = "-normal-";
                    t.darktheme && (e = "#fff", n = n.replace(/rgba\(255, 255, 255, 0\.3/g, "rgba(0, 0, 0, 0.15"), o = "-normal-", s = "-dark-"), this._textEl.style.color = e;
                    try {
                        this._textEl.style.textShadow = n
                    } catch (r) {}
                    i.forEach(this._barEls, function(t) {
                        t.src = t.src.replace(o, s)
                    })
                }
            },
            _calcPointPerMeter: function(t, e) {
                var n = t || this.get("projection"),
                    i = e || this.get("tileSize");
                if (n && i) {
                    if (n.name.indexOf("EPSG:3857") > -1 || !n.pointPerMeter) return void(this._pointPerMeter = null);
                    var o = i.width,
                        s = 256 / o;
                    this._pointPerMeter = n.pointPerMeter * s
                }
            },
            _update: function() {
                var t, e = this.get("map").getZoom(),
                    n = this.get("projection"),
                    i = this.getElement(),
                    o = this._barEls[1],
                    s = parseInt(i.style.width, 10),
                    r = 52,
                    a = r - 8;
                if ("UTMK_NAVER" === n.name || "UTMK" === n.name) {
                    s !== r && (i.style.width = r + "px", o.style.width = a + "px");
                    var h = this._calcMeterPerPixel(e);
                    t = this._SCALE_SIZE * h
                } else {
                    var l = this._calcMeterPerPixel(e, this._MAX_SCALE_SIZE);
                    t = this._getRoundNum(l), r = Math.round(this._MAX_SCALE_SIZE * (t / l)), a = r - 8, i.style.width = r + "px", o.style.width = a + "px", o.width = a
                }
                t = this._addUnitToDistance(t), Zt.setText(this._textEl, t)
            },
            _addUnitToDistance: function(t) {
                return t = t > 1e3 ? i.round(t / 100) / 10 + "km" : i.round(10 * t) / 10 + "m"
            },
            _calcMeterPerPixel: function(t, e) {
                var n = this.get("map"),
                    o = this.get("projection"),
                    s = this.get("mapSystemProjection"),
                    r = 0;
                if (this._pointPerMeter) r = this._pointPerMeter / s.scaleUp(1, t);
                else {
                    var a = n.getCenterPoint(),
                        h = s.scaleUp(a.clone(), t),
                        l = s.scaleDown(new i.Point(h.x + e, h.y), t),
                        c = s.fromPointToCoord(a),
                        u = s.fromPointToCoord(l);
                    r = o.getDistance ? o.getDistance(c, u) : 0
                }
                return r
            },
            _getRoundNum: function(t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                    n = t / e;
                return n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1, e * n
            },
            _createElement: function() {
                var t = "position:absolute;left:0;bottom:0;z-index:2;display:block;width:4px;height:10px;overflow:hidden;margin:0;padding:0;border:0 none;" + H,
                    e = "text-shadow:" + this._textShadowCss + ";",
                    n = this._IMG_SCALE,
                    i = Zt.createElement("div", "position:relative;width:52px;height:14px;margin:0 12px 7px 2px;overflow:hidden;");
                i.innerHTML = ["<span style='display:block;margin:0;padding:0 4px;text-align:center;font-size:10px;line-height:11px;font-family:" + j + ";font-weight:bold;color:#000;" + e + "'></span>", '<img src="' + n[1] + '" width="44" height="4" alt="" style="' + t.replace("h:4px", "h:44px").replace("t:10px", "t:4px").replace("left:0", "left:4px;") + '" />', '<img src="' + n[0] + '" width="4" height="10" alt="" style="' + t + '" />', '<img src="' + n[2] + '" width="4" height="10" alt="" style="' + t.replace("left:", "right:") + '" />'].join(""), this._textEl = i.getElementsByTagName("span")[0];
                var o = i.getElementsByTagName("img");
                return this._barEls = [o[1], o[0], o[2]], i
            }
        }), i.DrawingUtil = {
            getDrawingType: function() {
                if (!this._drawingType) {
                    var t = "NONE";
                    this.isSupportedSVG() ? t = "SVG" : this.isSupportedVML() && (t = "VML"), this._drawingType = t
                }
                return this._drawingType
            },
            isSupportedSVG: function() {
                return n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
            },
            isSupportedVML: function() {
                if (this.__isSupportedVML === e) {
                    var t = n.createElement("div");
                    t.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
                    var i = t.firstChild;
                    i.style.behavior = "url(#default#VML)", this.__isSupportedVML = !i || "object" == typeof i.adj
                }
                return this.__isSupportedVML
            },
            isSupportedCanvas: function() {
                if (this.__isSupportedCanvas === e) {
                    var t = n.createElement("canvas");
                    this.__isSupportedCanvas = !(!t.getContext || !t.getContext("2d"))
                }
                return this.__isSupportedCanvas
            },
            getBounds: function(t) {
                var e, n, i, o = t.length,
                    s = 1 / 0,
                    r = 1 / 0,
                    a = -(1 / 0),
                    h = -(1 / 0);
                for (e = 0; e < o; e++) n = t[e].x, i = t[e].y, s = Math.min(s, n), r = Math.min(r, i), a = Math.max(a, n), h = Math.max(h, i);
                return {
                    min: Dt(s, r),
                    max: Dt(a, h)
                }
            }
        }, i.LineUtil = {
            simplify: function(t, e) {
                var n = Math.min(e ? e : 1, 150);
                if (!t.length) return t.slice();
                var i = n * n;
                return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
            },
            pointToSegmentDistance: function(t, e, n) {
                return Math.sqrt(this._sqClosestPointOnSegment(t, e, n, !0))
            },
            closestPointOnSegment: function(t, e, n) {
                return this._sqClosestPointOnSegment(t, e, n)
            },
            _simplifyDP: function(t, n) {
                var i = t.length,
                    o = typeof Uint8Array != e + "" ? Uint8Array : Array,
                    s = new o(i);
                s[0] = s[i - 1] = 1, this._simplifyDPStep(t, s, n, 0, i - 1);
                var r, a = [];
                for (r = 0; r < i; r++) s[r] && a.push(t[r]);
                return a
            },
            _simplifyDPStep: function(t, e, n, i, o) {
                var s, r, a, h = 0;
                for (r = i + 1; r <= o - 1; r++) a = this._sqClosestPointOnSegment(t[r], t[i], t[o], !0), a > h && (s = r, h = a);
                h > n && (e[s] = 1, this._simplifyDPStep(t, e, n, i, s), this._simplifyDPStep(t, e, n, s, o))
            },
            _reducePoints: function(t, e) {
                for (var n = [t[0]], i = 1, o = 0, s = t.length; i < s; i++) this._sqDist(t[i], t[o]) > e && (n.push(t[i]), o = i);
                return o < s - 1 && n.push(t[s - 1]), n
            },
            clipSegment: function(t, e, n, i) {
                var o, s, r, a = i ? this._lastCode : this._getBitCode(t, n),
                    h = this._getBitCode(e, n);
                for (this._lastCode = h;;) {
                    if (!(a | h)) return [t, e];
                    if (a & h) return !1;
                    o = a || h, s = this._getEdgeIntersection(t, e, o, n), r = this._getBitCode(s, n), o === a ? (t = s, a = r) : (e = s, h = r)
                }
            },
            _getEdgeIntersection: function(t, e, n, i) {
                var o, s, r = e.x - t.x,
                    a = e.y - t.y,
                    h = i.min,
                    l = i.max;
                return 8 & n ? (o = t.x + r * (l.y - t.y) / a, s = l.y) : 4 & n ? (o = t.x + r * (h.y - t.y) / a, s = h.y) : 2 & n ? (o = l.x, s = t.y + a * (l.x - t.x) / r) : 1 & n && (o = h.x, s = t.y + a * (h.x - t.x) / r), new L.Point(o, s, (!0))
            },
            _getBitCode: function(t, e) {
                var n = 0;
                return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2), t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8), n
            },
            _sqDist: function(t, e) {
                var n = e.x - t.x,
                    i = e.y - t.y;
                return n * n + i * i
            },
            _sqClosestPointOnSegment: function(t, e, n, i) {
                var o, s = e.x,
                    r = e.y,
                    a = n.x - s,
                    h = n.y - r,
                    l = a * a + h * h;
                return l > 0 && (o = ((t.x - s) * a + (t.y - r) * h) / l, o > 1 ? (s = n.x, r = n.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, i ? a * a + h * h : new L.Point(s, r)
            }
        }, i.shapes = {}, i.shapes.Shape = function(t) {
            this.options = It({}, this.options, t), this.element = this._initShape(), this._updateShape(), this._updateStyle()
        }, i.shapes.Shape.prototype = {
            constructor: i.shapes.Shape,
            setOptions: function(t) {
                this.options = It(this.options, t), this.isShapeChanged(t) && this._updateShape(), this.isStyleChanged(t) && this._updateStyle()
            },
            _initShape: function() {
                return null
            },
            _updateShape: Ot,
            _updateStyle: function() {
                var t = this.getElement(),
                    e = this.options;
                Zt.setZIndex(t, e.zIndex), Zt.visible(t, e.visible)
            },
            _calcBounds: function(t, e, n, o, s) {
                var r;
                return r = 0 === t && 0 === e && 0 === n && 0 === o ? {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0
                } : {
                    x: i.round(t - s),
                    y: i.round(e - s),
                    w: i.round(n + 2 * s),
                    h: i.round(o + 2 * s)
                }
            },
            getElement: function() {
                return this.element
            },
            getShapeElement: function() {
                return this._shapeElement || this.element || null
            }
        },
        function() {
            if (i.shapes.CommonShape = {
                    isStyleChanged: function(t) {
                        return t.strokeColor !== e || t.strokeOpacity !== e || t.strokeWeight !== e || t.strokeStyle !== e || t.strokeLineCap !== e || t.strokeLineJoin !== e || t.fillColor !== e || t.fillOpacity !== e || t.visible !== e || t.zIndex !== e
                    },
                    toPathString: function(t) {
                        var e = [];
                        if (0 === t.length) return "";
                        e.push("M");
                        for (var n = 0, i = t.length; n < i; n++) e.push(t[n].x + "," + t[n].y), 0 === n && e.push("L");
                        return e.join(" ")
                    }
                }, i.shapes.CommonShape.circle = {
                    options: {
                        strokeColor: "#007EEA",
                        strokeOpacity: 1,
                        strokeWeight: 1,
                        strokeStyle: "solid",
                        fillColor: "none",
                        fillOpacity: 1,
                        center: Dt(0, 0),
                        radius: 0
                    },
                    isShapeChanged: function(t) {
                        return t.center !== e || t.radius !== e
                    },
                    isStyleChanged: i.shapes.CommonShape.isStyleChanged
                }, i.shapes.CommonShape.rectangle = {
                    options: {
                        strokeColor: "#007EEA",
                        strokeOpacity: 1,
                        strokeWeight: 1,
                        strokeStyle: "solid",
                        fillColor: "none",
                        fillOpacity: 1,
                        minBoundPoint: Dt(0, 0),
                        maxBoundPoint: Dt(0, 0)
                    },
                    isShapeChanged: function(t) {
                        return t.minBoundPoint !== e || t.maxBoundPoint !== e
                    },
                    isStyleChanged: i.shapes.CommonShape.isStyleChanged
                }, i.shapes.CommonShape.path = {
                    options: {
                        strokeColor: "#007EEA",
                        strokeOpacity: 1,
                        strokeWeight: 1,
                        strokeStyle: "solid",
                        fillColor: "none",
                        fillOpacity: 1,
                        path: [],
                        minBoundPoint: Dt(0, 0),
                        maxBoundPoint: Dt(0, 0)
                    },
                    isShapeChanged: function(t) {
                        return t.path !== e
                    },
                    isStyleChanged: function(t) {
                        return t.strokeColor !== e || t.strokeOpacity !== e || t.strokeWeight !== e || t.strokeStyle !== e || t.strokeLineCap !== e || t.strokeLineJoin !== e || t.visible !== e || t.zIndex !== e
                    },
                    isIconChanged: function(t) {
                        return t.startIcon !== e || t.endIcon !== e || t.startIconSize !== e || t.endIconSize !== e || t.strokeColor !== e
                    },
                    toPathString: i.shapes.CommonShape.toPathString
                }, i.shapes.CommonShape.closedPath = {
                    options: {
                        strokeColor: "#007EEA",
                        strokeOpacity: 1,
                        strokeWeight: 1,
                        strokeStyle: "solid",
                        fillColor: "#007EEA",
                        fillOpacity: .3,
                        paths: [
                            []
                        ],
                        minBoundPoint: Dt(0, 0),
                        maxBoundPoint: Dt(0, 0)
                    },
                    isShapeChanged: function(t) {
                        return t.path !== e
                    },
                    isStyleChanged: i.shapes.CommonShape.isStyleChanged,
                    toPathString: i.shapes.CommonShape.toPathString
                }, "NONE" === i.DrawingUtil.getDrawingType()) {
                var t = function() {};
                t.prototype = {
                    constructor: t,
                    _initShape: Ot,
                    setCenter: Ot,
                    setRadius: Ot,
                    setOptions: Ot,
                    getOptions: Ot,
                    setBounds: Ot,
                    getBounds: Ot,
                    getShapeElement: Ot,
                    getElement: Ot,
                    setPath: Ot
                }, i.shapes.Circle = function() {}, zt(i.shapes.Circle, t), i.shapes.Ellipse = function() {}, zt(i.shapes.Ellipse, t), i.shapes.Rectangle = function() {}, zt(i.shapes.Rectangle, t), i.shapes.Path = function() {}, zt(i.shapes.Path, t), i.shapes.ClosedPath = function() {}, zt(i.shapes.ClosedPath, t)
            }
        }(),
        function() {
            i.DrawingUtil.isSupportedSVG() && (i.shapes.ShapeSVG = function(t) {
                this.DASH_STYLE = {
                    solid: "0",
                    shortdash: "2,1",
                    shortdot: "1,1",
                    shortdashdot: "2,1,1,1",
                    shortdashdotdot: "2,1,1,1,1,1",
                    dot: "1,2",
                    dash: "3,2",
                    longdash: "7,2",
                    dashdot: "3,2,1,2",
                    longdashdot: "7,2,1,2",
                    longdashdotdot: "7,2,1,2,1,2"
                }, i.shapes.Shape.call(this, t), this._setBounds()
            }, zt(i.shapes.ShapeSVG, i.shapes.Shape, {
                _initShape: function() {
                    function t(t, e) {
                        n.setAttribute(t, e)
                    }
                    var e = this._calcBoundsFromOptions(),
                        n = this._makeSVGTag(At.browser.msie ? "svg" : "svg:svg");
                    return t("version", "1.1"), t("width", e.w + "px"), t("height", e.h + "px"), t("viewBox", "" + e.x + " " + e.y + " " + e.w + " " + e.h), t("overflow", "visible"), n.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), t("style", "position:absolute;overflow:visible;margin:0;padding:0;border:0;width:" + e.w + "px; height:" + e.h + "px;pointer-events:none;"), this._shapeElement = this._makeSVGTag("path"), this._shapeElement.setAttribute("fill-rule", "evenodd"), n.appendChild(this._shapeElement), n
                },
                setOptions: function(t) {
                    i.shapes.Shape.prototype.setOptions.call(this, t), this._setBounds()
                },
                _makeSVGTag: function(t) {
                    return n.createElementNS("http://www.w3.org/2000/svg", t)
                },
                _updateShape: function() {},
                _updateStyle: function() {
                    var t = this._getCssText(this.options);
                    this._shapeElement.setAttribute("style", t + "pointer-events:visiblePainted;"), i.shapes.Shape.prototype._updateStyle.call(this)
                },
                _setBounds: function() {
                    var t = this.getElement(),
                        e = this._calcBoundsFromOptions(),
                        n = t.style;
                    return n.left = e.x + "px", n.top = e.y + "px", n.width = e.w + "px", n.height = e.h + "px", t.setAttribute("width", e.w + "px"), t.setAttribute("height", e.h + "px"), t.setAttribute("viewBox", "" + e.x + " " + e.y + " " + e.w + " " + e.h), this._bounds = e, e
                },
                getBounds: function() {
                    return this._bounds
                },
                _calcBoundsFromOptions: function() {
                    return this._calcBounds(0, 0, 0, 0, 0)
                },
                _getCssText: function(t) {
                    if (i.isEmptyObject(t)) return "";
                    var e = [];
                    if ("none" != t.strokeColor) {
                        e.push("stroke:" + t.strokeColor, "stroke-width:" + t.strokeWeight + "px", "stroke-opacity:" + t.strokeOpacity);
                        var n = this._getLineCap(t.strokeLineCap),
                            o = this._getLineJoin(t.strokeLineJoin),
                            s = this._getDashStyle(t.strokeStyle, t.strokeWeight, n);
                        n && e.push("stroke-linecap:" + n), o && e.push("stroke-linejoin:" + o), s && e.push("stroke-dasharray:" + s)
                    } else e.push("stroke:none");
                    "none" != t.fillColor ? e.push("fill:" + t.fillColor, "fill-opacity:" + t.fillOpacity) : e.push("fill:none");
                    var r = e.join(";");
                    return r ? r + ";" : ""
                },
                _getDashStyle: function(t, e, n) {
                    var o;
                    if (i.isArray(t)) o = t.join(",");
                    else {
                        o = [];
                        for (var s, r = parseFloat(e), a = (this.DASH_STYLE[t] || "0").split(","), h = 0, l = a.length; h < l; h++) s = parseInt(a[h], 10), s = s * r + (s > 1 ? r : 0), n && l > 1 && (h % 2 === 0 ? s = Math.max(1, s - r) : s *= 2), o[h] = s;
                        o = o.join(",")
                    }
                    return o = o ? o : this.DASH_STYLE.solid, "0" === o ? null : o
                },
                _getLineCap: function(t) {
                    var e = (t || "").toLowerCase(),
                        n = ["flat", "butt", "round", "square"];
                    return i.getIndexOfElement(n, e) > -1 ? ("flat" === e && (e = "butt"), e) : null
                },
                _getLineJoin: function(t) {
                    var e = (t || "").toLowerCase(),
                        n = ["miter", "round", "bevel"];
                    return i.getIndexOfElement(n, e) > -1 ? e : null
                }
            }))
        }(),
        function() {
            i.DrawingUtil.isSupportedSVG() && (i.shapes.CircleSVG = function(t) {
                i.shapes.ShapeSVG.call(this, t)
            }, zt(i.shapes.CircleSVG, i.shapes.ShapeSVG, [i.shapes.CommonShape.circle], {
                setCenter: function(t) {
                    this.options.center = t, this._updateShape(), this._setBounds()
                },
                setRadius: function(t) {
                    this.options.radius = t, this._updateShape(), this._setBounds()
                },
                _updateShape: function() {
                    var t = this.options,
                        e = t.radius,
                        n = t.center.x - e,
                        i = t.center.y - e;
                    this._shapeElement.setAttribute("d", ["M", n, i + e, "A", e, e, 0, 1, 0, n, i + e - 1, "Z"].join(" "))
                },
                _calcBoundsFromOptions: function() {
                    var t = this.options,
                        e = t.radius,
                        n = t.center.x - e,
                        i = t.center.y - e,
                        o = 2 * e,
                        s = o,
                        r = t.strokeWeight;
                    return this._calcBounds(n, i, o, s, r)
                }
            }), "SVG" === i.DrawingUtil.getDrawingType() && (i.shapes.Circle = i.shapes.CircleSVG))
        }(),
        function() {
            i.DrawingUtil.isSupportedSVG() && (i.shapes.ClosedPathSVG = function(t) {
                i.shapes.ShapeSVG.call(this, t), this._shapeElement.setAttribute("stroke-linejoin", "round")
            }, zt(i.shapes.ClosedPathSVG, i.shapes.ShapeSVG, [i.shapes.CommonShape.closedPath], {
                setPath: function(t, e, n, i) {
                    var o = this.options;
                    o.paths = t, o.minBoundPoint = e, o.maxBoundPoint = n, this._updateShape(i), this._setBounds()
                },
                _updateShape: function(t) {
                    for (var e, n = [], o = this.options.paths, s = 0, r = o.length; s < r; s++) e = i.LineUtil.simplify(o[s], t), n.push(this.toPathString(e));
                    0 !== n.length && n[0] || (n = ["M 0,0"]), this._shapeElement.setAttribute("d", n.join(" Z ") + " Z")
                },
                _calcBoundsFromOptions: function() {
                    var t = this.options,
                        e = t.minBoundPoint,
                        n = t.maxBoundPoint,
                        i = e.x,
                        o = e.y,
                        s = Math.abs(n.x - i),
                        r = Math.abs(n.y - o),
                        a = t.strokeWeight;
                    return this._calcBounds(i, o, s, r, a)
                }
            }), "SVG" === i.DrawingUtil.getDrawingType() && (i.shapes.ClosedPath = i.shapes.ClosedPathSVG))
        }(),
        function() {
            if (i.DrawingUtil.isSupportedSVG()) {
                var t = 0,
                    e = 1;
                i.shapes.PathSVG = function(t) {
                    t && t.fillColor && (t.fillColor = "none"), i.shapes.ShapeSVG.call(this, t), this._shapeElement.setAttribute("stroke-linejoin", "round")
                }, zt(i.shapes.PathSVG, i.shapes.ShapeSVG, [i.shapes.CommonShape.path], {
                    setOptions: function(t) {
                        t.fillColor && (t.fillColor = "none"), i.shapes.ShapeSVG.prototype.setOptions.call(this, t), this.isIconChanged(t) && this._updateIcons(t)
                    },
                    _updateIcons: function(n) {
                        this._defsElement || (this._defsElement = this._makeSVGTag("defs"), this.element.insertBefore(this._defsElement, this._shapeElement)), n.startIcon && (this._startIcon = this._startIcon || this._addMarker(t), this._setIconShape(this._startIcon, n.startIcon, t)), n.endIcon && (this._endIcon = this._endIcon || this._addMarker(e), this._setIconShape(this._endIcon, n.endIcon, e)), this._startIcon && null === n.startIcon && (this._removeMarker(this._startIcon, t), this._startIcon = null), this._endIcon && null === n.endIcon && (this._removeMarker(this._endIcon, e), this._endIcon = null), this._setIconSize(), this._updateIconsStyle(), this._startIcon || this._endIcon || !this._defsElement || (this._defsElement.parentNode.removeChild(this._defsElement), this._defsElement = null), this._defsElement && i.Agent.browser.msie && i.Agent.browser.version > 9 && this._forceRender()
                    },
                    _setIconShape: function(t, e, n) {
                        if (t) {
                            var i, o, s = t.childNodes[0],
                                r = 10,
                                a = 5,
                                h = [0, 0, r, r],
                                l = [
                                    [Dt(r, r), Dt(0, r / 2), Dt(r, 0)],
                                    [Dt(0, 0), Dt(r, r / 2), Dt(0, r)]
                                ],
                                c = [
                                    ["M", 0, a, "A", a, a, 0, 1, 0, 0, a - .01],
                                    [Dt(0, r / 2), Dt(r / 2, r), Dt(r, r / 2), Dt(r / 2, 0)]
                                ],
                                u = r / 2,
                                p = r / 2;
                            switch (e) {
                                case S.OPEN_ARROW:
                                    var d = 0 === n ? -1 : 1;
                                    i = l[n], i[0].x = i[0].y += d, i[1].x -= 2 * d, i[2].x += d, i[2].y -= d, u = i[1].x - 2 * d, o = this.toPathString(i);
                                    break;
                                case S.BLOCK_ARROW:
                                    i = l[n], o = this.toPathString(i) + " Z";
                                    break;
                                case S.CIRCLE:
                                    i = c[0], o = i.join(" ") + " Z";
                                    break;
                                case S.DIAMOND:
                                    i = c[1], o = this.toPathString(i) + " Z"
                            }
                            s.setAttribute("d", o), t.setAttribute("viewBox", h.join(" ")), t.setAttribute("refX", u), t.setAttribute("refY", p)
                        }
                    },
                    _setIconSize: function() {
                        var t = function(t, e, n) {
                            t && (n ? t.setAttribute("markerUnits", "userSpaceOnUse") : (t.setAttribute("markerUnits", "strokeWidth"), n = e === S.OPEN_ARROW ? 5 : 3), t.setAttribute("markerWidth", n), t.setAttribute("markerHeight", n))
                        };
                        t(this._startIcon, this.options.startIcon, this.options.startIconSize), t(this._endIcon, this.options.endIcon, this.options.endIconSize)
                    },
                    _updateIconsStyle: function() {
                        var t = this.options.strokeColor,
                            e = function(e, n) {
                                var i = "";
                                e && (i = n < 2 ? "fill:none; stroke-width:2px; stroke-linecap:round; stroke:" + t + ";" : "fill:" + t + "; stroke:none;", e.childNodes[0].setAttribute("style", i))
                            };
                        e(this._startIcon, this.options.startIcon), e(this._endIcon, this.options.endIcon)
                    },
                    _addMarker: function(e) {
                        var n = i.guid(),
                            o = this._makeSVGTag("marker"),
                            s = this._makeSVGTag("path"),
                            r = e === t ? "marker-start" : "marker-end";
                        return o.setAttribute("id", n), o.setAttribute("orient", "auto"), o.appendChild(s), this._defsElement.appendChild(o), this._shapeElement.setAttribute(r, "url(#" + n + ")"), o
                    },
                    _removeMarker: function(e, n) {
                        var i = n === t ? "marker-start" : "marker-end";
                        this._shapeElement.removeAttribute(i), this._defsElement.removeChild(e)
                    },
                    setPath: function(t, e, n, i) {
                        var o = this.options;
                        o.path = t, o.minBoundPoint = e, o.maxBoundPoint = n, this._updateShape(i), this._setBounds()
                    },
                    _updateShape: function(t) {
                        var e = i.LineUtil.simplify(this.options.path, t),
                            n = this.toPathString(e);
                        n || (n = "M 0 0"), this._shapeElement.setAttribute("d", n), this._defsElement && i.Agent.browser.msie && i.Agent.browser.version > 9 && this._forceRender()
                    },
                    _forceRender: function() {
                        var t = this.getElement();
                        t && t.parentNode && t.parentNode.insertBefore(t, t)
                    },
                    _calcBoundsFromOptions: function() {
                        var t = this.options,
                            e = t.minBoundPoint,
                            n = t.maxBoundPoint,
                            i = e.x,
                            o = e.y,
                            s = Math.abs(n.x - i),
                            r = Math.abs(n.y - o),
                            a = t.strokeWeight;
                        return this._calcBounds(i, o, s, r, a)
                    }
                }), "SVG" === i.DrawingUtil.getDrawingType() && (i.shapes.Path = i.shapes.PathSVG)
            }
        }(),
        function() {
            i.DrawingUtil.isSupportedSVG() && (i.shapes.RectangleSVG = function(t) {
                i.shapes.ShapeSVG.call(this, t)
            }, zt(i.shapes.RectangleSVG, i.shapes.ShapeSVG, [i.shapes.CommonShape.rectangle], {
                setBounds: function(t, e) {
                    var n = this.options;
                    n.minBoundPoint = t, n.maxBoundPoint = e, this._updateShape(), this._setBounds()
                },
                _updateShape: function() {
                    var t = this.options,
                        e = t.minBoundPoint,
                        n = t.maxBoundPoint,
                        i = e.x,
                        o = e.y,
                        s = Math.abs(n.x - i),
                        r = Math.abs(n.y - o);
                    this._shapeElement.setAttribute("d", ["M", i, o, "L", i + s, o, i + s, o + r, i, o + r, "Z"].join(" "))
                },
                _calcBoundsFromOptions: function() {
                    var t = this.options,
                        e = t.minBoundPoint,
                        n = t.maxBoundPoint,
                        i = e.x,
                        o = e.y,
                        s = Math.abs(n.x - i),
                        r = Math.abs(n.y - o),
                        a = t.strokeWeight;
                    return this._calcBounds(i, o, s, r, a)
                }
            }), "SVG" === i.DrawingUtil.getDrawingType() && (i.shapes.Rectangle = i.shapes.RectangleSVG))
        }(),
        function() {
            i.DrawingUtil.isSupportedSVG() && (i.shapes.EllipseSVG = function(t) {
                i.shapes.ShapeSVG.call(this, t)
            }, zt(i.shapes.EllipseSVG, i.shapes.RectangleSVG, {
                _updateShape: function() {
                    var t = this.options,
                        e = t.minBoundPoint,
                        n = t.maxBoundPoint,
                        i = e.x,
                        o = e.y,
                        s = Math.abs(n.x - i) / 2,
                        r = Math.abs(n.y - o) / 2;
                    this._shapeElement.setAttribute("d", ["M", i, o + r, "A", s, r, 0, 1, 0, i, o + r - 1, "Z"].join(" "))
                }
            }), "SVG" === i.DrawingUtil.getDrawingType() && (i.shapes.Ellipse = i.shapes.EllipseSVG))
        }(),
        function() {
            if (i.DrawingUtil.isSupportedVML()) {
                try {
                    n.namespaces.add("v", "urn:schemas-microsoft-com:vml");
                    var t = n.createElement("style"),
                        e = n.getElementsByTagName("head")[0];
                    e.insertBefore(t, e.firstChild.firstChild);
                    var o = t.styleSheet,
                        s = "behavior: url(#default#VML);";
                    o.addRule("v\\:shape", s), o.addRule("v\\:path", s), o.addRule("v\\:fill", s), o.addRule("v\\:stroke", s)
                } catch (r) {}
                i.shapes.ShapeVML = function(t) {
                    i.shapes.Shape.call(this, t)
                }, zt(i.shapes.ShapeVML, i.shapes.Shape, {
                    setOptions: function(t) {
                        this.options = It(this.options, t), this._updateShape()
                    },
                    _initShape: function() {
                        var t = Zt.createElement("v:shape", "position:absolute;width:1px;height:1px;margin:0;padding:0;border:0;"),
                            e = Zt.createElement("v:path"),
                            n = Zt.createElement("v:fill"),
                            i = Zt.createElement("v:stroke");
                        t.setAttribute("coordorigin", "0 0"), t.setAttribute("coordsize", "1 1"), n.setAttribute("on", !1), i.setAttribute("on", !1), t.appendChild(e), t.appendChild(n), t.appendChild(i), this._shapeElement = t, this._pathElement = e, this._fillElement = n, this._strokeElement = i;
                        var o = Zt.createElement("div", "position:absolute;overflow:visible;margin:0;padding:0;border:0;top:0;left:0;");
                        return o.appendChild(t), o
                    },
                    _updateShape: function() {},
                    _updateStyle: function() {
                        var t = this.options;
                        if (!i.isEmptyObject(t)) {
                            var e = this._strokeElement,
                                n = this._fillElement;
                            if ("none" == t.strokeColor) e.on = !1;
                            else {
                                e.on = !0, e.color = t.strokeColor || "transparent", e.weight = t.strokeWeight + "px", e.opacity = t.strokeOpacity;
                                var o = this._getLineCap(t.strokeLineCap),
                                    s = this._getLineJoin(t.strokeLineJoin),
                                    r = this._getDashStyle(t.strokeStyle);
                                o && (e.endcap = o), s && (e.joinstyle = s), r && (e.dashstyle = r)
                            }
                            "none" == t.fillColor ? n.on = !1 : (n.on = !0, n.color = t.fillColor || "transparent", n.opacity = t.fillOpacity), i.shapes.Shape.prototype._updateStyle.call(this)
                        }
                    },
                    _getDashStyle: function(t) {
                        if (!t) return null;
                        var e;
                        return e = i.isArray(t) ? t.join(" ") : t
                    },
                    _getLineCap: function(t) {
                        var e = (t || "").toLowerCase(),
                            n = ["flat", "butt", "square", "round"];
                        return i.getIndexOfElement(n, e) > -1 ? ("butt" === e && (e = "flat"), e) : null
                    },
                    _getLineJoin: function(t) {
                        var e = (t || "").toLowerCase(),
                            n = ["miter", "round", "bevel"];
                        return i.getIndexOfElement(n, e) > -1 ? e : null
                    }
                })
            }
        }(),
        function() {
            i.DrawingUtil.isSupportedVML() && (i.shapes.CircleVML = function(t) {
                i.shapes.ShapeVML.call(this, t)
            }, zt(i.shapes.CircleVML, i.shapes.ShapeVML, [i.shapes.CommonShape.circle], {
                setCenter: function(t) {
                    this.options.center = t, this._updateShape()
                },
                setRadius: function(t) {
                    this.options.radius = t, this._updateShape()
                },
                _updateShape: function() {
                    this._updateStyle();
                    var t = this.options,
                        e = t.radius,
                        n = 2 * e,
                        i = t.center.x - e,
                        o = t.center.y - e;
                    this._pathElement.v = ["AR", i, o, i + n, o + n, "0 0 0 0 X E"].join(" ")
                }
            }), "VML" === i.DrawingUtil.getDrawingType() && (i.shapes.Circle = i.shapes.CircleVML))
        }(),
        function() {
            i.DrawingUtil.isSupportedVML() && (i.shapes.ClosedPathVML = function(t) {
                i.shapes.ShapeVML.call(this, t)
            }, zt(i.shapes.ClosedPathVML, i.shapes.ShapeVML, [i.shapes.CommonShape.closedPath], {
                setPath: function(t, e, n, i) {
                    var o = this.options;
                    o.paths = t, o.minBoundPoint = e, o.maxBoundPoint = n, this._updateShape(i)
                },
                _updateShape: function(t) {
                    this._updateStyle();
                    for (var e, n = [], o = this.options.paths, s = 0, r = o.length; s < r; s++) e = i.LineUtil.simplify(o[s], t), n.push(this.toPathString(e));
                    this._shapeElement.style.display = "none", this._pathElement.v = n.join(" X ") + " X E", this._shapeElement.style.display = ""
                }
            }), "VML" === i.DrawingUtil.getDrawingType() && (i.shapes.ClosedPath = i.shapes.ClosedPathVML))
        }(),
        function() {
            i.DrawingUtil.isSupportedVML() && (i.shapes.PathVML = function(t) {
                t && t.fillColor && (t.fillColor = "none"), i.shapes.ShapeVML.call(this, t)
            }, zt(i.shapes.PathVML, i.shapes.ShapeVML, [i.shapes.CommonShape.path], {
                setPath: function(t, e, n, i) {
                    var o = this.options;
                    o.path = t, o.minBoundPoint = e, o.maxBoundPoint = n, this._updateShape(i)
                },
                setOptions: function(t) {
                    t.fillColor && (t.fillColor = "none"), i.shapes.ShapeVML.prototype.setOptions.call(this, t), (t.hasOwnProperty("startIcon") || t.hasOwnProperty("endIcon")) && this._updateIcons(t)
                },
                _updateIcons: function(t) {
                    var e = i.keys(t)[0],
                        n = "startIcon" === e ? "startArrow" : "endArrow",
                        o = ["open", "block", "oval", "diamond"],
                        s = this._shapeElement.getElementsByTagName("stroke")[0];
                    s[n] = o[t[e] - 1] || "none"
                },
                _updateShape: function(t) {
                    this._updateStyle(), this._shapeElement.style.display = "none";
                    var e = i.LineUtil.simplify(this.options.path, t),
                        n = this.toPathString(e);
                    n || (n = "M 0 0"), n += " E", this._pathElement.v = n, this._shapeElement.style.display = ""
                }
            }), "VML" === i.DrawingUtil.getDrawingType() && (i.shapes.Path = i.shapes.PathVML))
        }(),
        function() {
            i.DrawingUtil.isSupportedVML() && (i.shapes.RectangleVML = function(t) {
                i.shapes.ShapeVML.call(this, t)
            }, zt(i.shapes.RectangleVML, i.shapes.ShapeVML, [i.shapes.CommonShape.rectangle], {
                setBounds: function(t, e) {
                    this.options.minBoundPoint = t, this.options.maxBoundPoint = e, this._updateShape()
                },
                _updateShape: function() {
                    this._updateStyle();
                    var t = this.options,
                        e = t.minBoundPoint,
                        n = t.maxBoundPoint,
                        i = e.x,
                        o = e.y,
                        s = Math.abs(n.x - i),
                        r = Math.abs(n.y - o),
                        a = i,
                        h = o,
                        l = i + s,
                        c = o + r;
                    this._pathElement.v = ["M", a, h, "L", l, h, l, c, a, c, "X E"].join(" ")
                }
            }), "VML" === i.DrawingUtil.getDrawingType() && (i.shapes.Rectangle = i.shapes.RectangleVML))
        }(),
        function() {
            i.DrawingUtil.isSupportedVML() && (i.shapes.EllipseVML = function(t) {
                i.shapes.ShapeVML.call(this, t)
            }, zt(i.shapes.EllipseVML, i.shapes.RectangleVML, {
                _updateShape: function() {
                    this._updateStyle();
                    var t = this.options,
                        e = t.minBoundPoint,
                        n = t.maxBoundPoint,
                        i = e.x,
                        o = e.y,
                        s = Math.abs(n.x - i),
                        r = Math.abs(n.y - o);
                    this._pathElement.v = ["AR", i, o, i + s, o + r, "0 0 0 0 X E"].join(" ")
                }
            }), "VML" === i.DrawingUtil.getDrawingType() && (i.shapes.Ellipse = i.shapes.EllipseVML))
        }(), i.OverlayView = function() {}, zt(i.OverlayView, i.KVO, {
            __notifyChanged: function(t) {
                var e = this.get(t),
                    n = "_" + t + "_changed";
                this[n] && this[n](e), i.KVO.prototype.__notifyChanged.apply(this, [t])
            },
            _bindMap: function(t) {
                var e = this,
                    n = t.getMapModel(),
                    i = t.getMapView(),
                    o = t.getMapAction();
                e.bindTo("mapCenter", t, "center"),
                    e.bindTo("mapZoom", t, "zoom"), e.bindTo("mapSize", t, "size"), e.bindTo("mapBounds", t, "bounds"), e.bindTo("tileRepeatX", t, "repeatX"), e.bindTo(["panes", "mapDiv"], i), e._renderModeListener = Ut.addListener(this, "renderMode_changed", Ct(this._renderMode_changed, this)), e.bindTo(["mapSystemProjection", "padding", "paddingOffset", "containerTopLeft", "renderMode"], n), e.bindTo(["ef_overlay", "ef_overlaylayer", "ef_overlayimage", "ef_floatpane"], o), e._redrawListeners = [Ut.addListener(t, "redraw", Ct(e._onRedraw, e))], e._isAdded = !0, e._isZoomEffect = !1, e._isEffectCustomOverlay = !1
            },
            _onEffectEnd: function() {
                this._isZoomEffect && (this._isZoomEffect = !1, this._onRedraw())
            },
            _onEffectStart: function() {
                this._isZoomEffect = !0
            },
            _onScale: function(t) {
                if (this.get("ef_overlay"))
                    if (this.scale) this.scale(t);
                    else if (this.getElement && this.getEffectAnchor) {
                    var e = this.getElement(),
                        n = this.getEffectAnchor();
                    this._isEffectCustomOverlay = !0, Zt.setScale(e, 1 / t, {
                        x: n.x,
                        y: n.y
                    }, !0)
                }
            },
            _onRedraw: function() {
                this._isAdded && (this._isZoomEffect || (this.draw(), Ut.trigger(this, "draw"), this._isEffectCustomOverlay && Zt.transform(this.getElement(), 1, 0, 0, {
                    x: 0,
                    y: 0
                })))
            },
            _unbindMap: function() {
                this._isAdded && (this.unbind("mapSystemProjection"), this.unbind("padding"), this.unbind("paddingOffset"), this.unbind("mapCenter"), this.unbind("mapZoom"), this.unbind("mapSize"), this.unbind("mapBounds"), this.unbind("tileRepeatX"), this.unbind("panes"), this.unbind("mapDiv"), this.unbind("containerTopLeft"), this.unbind("renderMode"), this.unbind("ef_overlay"), this.unbind("ef_overlaylayer"), this.unbind("ef_overlayimage"), this.unbind("ef_floatpane"), Ut.removeListener(this._renderModeListener), Ut.removeListener(this._redrawListeners), this._effectListener && Ut.removeListener(this._effectListener), this._isAdded = !1, this._isZoomEffect = !1, this._isEffectCustomOverlay = !1, this._effectListener = null)
            },
            setMap: function(t) {
                return t && t.getMapModel || (t = null), !t || t.get("renderMode") !== ut || this instanceof naver.maps.Marker ? (this.getMap() && (this.get("ef_overlay") && this.getMap().getMapAction().clearOverlayPanePosition(), this.onRemove(), this._unbindMap(), Ut.trigger(this, "removed")), this.set("map", t), void(t && (this._bindMap(t), this.onAdd(), Ut.trigger(this, "added"), this.draw(), Ut.trigger(this, "draw")))) : void this.switchTo(ut, t)
            },
            getMap: function() {
                return this.get("map")
            },
            getProjection: function() {
                return this.getMap() ? this.get("mapSystemProjection") : null
            },
            getContainerTopLeft: function() {
                return this.getMap() ? this.get("containerTopLeft") : null
            },
            getMapOffset: function() {
                if (!this.getMap()) return null;
                var t = this.get("paddingOffset");
                return Zt.getOffset(this.get("mapDiv")).add(t)
            },
            getPanes: function() {
                return this.getMap() ? this.get("panes") : null
            },
            toFeature: function() {
                if (!i.isFunction(this.toGeometry)) return null;
                var t = this.toGeometry(),
                    e = {
                        type: Tt,
                        geometry: t,
                        properties: {}
                    };
                return i.forEach(t.mantle_properties, function(t, n) {
                    e.properties[n] = t
                }), e
            },
            toGeoJson: function() {
                if (!i.isFunction(this.toGeometry)) return null;
                var t = {
                        type: xt,
                        features: []
                    },
                    e = this.toFeature();
                return t.features.push(e), t
            },
            _getMantleProperties: function() {
                var t = ["map", "position", "simplifyLevel", "path", "paths", "bounds", "center"],
                    e = this.getOptions(),
                    n = {};
                return i.forEach(e, function(e, o) {
                    t.indexOf(o) === -1 && i.hasValue(e) && (n[o] = e)
                }), n.overlayType = this.OVERLAY_TYPE, n
            },
            _fromCoordToPointerEvent: function(t) {
                var e = this.getProjection();
                if (e && t) {
                    var n = e.get("projection"),
                        i = e.fromCoordToOffset(t),
                        o = e.fromOffsetToPoint(i),
                        s = {
                            coord: t.clone(),
                            point: o,
                            offset: i,
                            pointerEvent: null,
                            domEvent: null,
                            overlay: this
                        };
                    return n.fromPointToLatLng && (s.latlng = t.clone()), s
                }
            },
            _renderMode_changed: function(t) {
                this._onRenderModeChanged && this._onRenderModeChanged(t)
            },
            switchTo: Ot,
            _getDefaultEventParameters: function(t) {
                for (var e = !1, n = [], i = 0, o = O.length; i < o; i++)
                    if (O[i] === t) {
                        e = !0;
                        break
                    } return e && this._getPointerEvent ? n.push(this._getPointerEvent()) : t.indexOf("_changed") === t.length - 8 && n.push(this.get(t.replace("_changed", ""))), n
            },
            _getSingleClickType: function(t, e) {
                var n, o = i.now(),
                    s = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    r = this.__ct__ ? o - this.__ct__ : 1e4,
                    a = this.__cp__ ? i.Math.distance(this.__cp__, s) : 1e4;
                if (r < z && a <= D) this.__ct__ = null, this.__cp__ = null, t.stopPropagation(), n = "dblclick";
                else {
                    if (e) return;
                    this.__ct__ = o, this.__cp__ = s, n = "click"
                }
                return n
            },
            ef_overlay_changed: function(t) {
                var e = this.getMap();
                if (e)
                    if (t) {
                        var n = e.getMapAction();
                        this._effectListener = [Ut.addListener(n, "clearpaneposition", Ct(this._onEffectEnd, this)), Ut.addListener(n, "zoomstart", Ct(this._onEffectStart, this)), Ut.addListener(n, "scale", Ct(this._onScale, this))]
                    } else Ut.removeListener(this._effectListener), this._effectListener = null
            }
        }), i.CalcShapeDrawingPixelBounds = {
            getDrawingRect: function() {
                return this.getDrawingPixelBounds()
            },
            getDrawingPixelBounds: function() {
                var t = this.getProjection(),
                    e = this.getBounds();
                if (!e) return null;
                var n = t.fromCoordToPixelPoint(e.getMin()),
                    i = t.fromCoordToPixelPoint(e.getMax()),
                    o = Dt(n.x, i.y),
                    s = Dt(i.x, n.y),
                    r = this.getOptions().strokeWeight;
                return r && (o = o.sub(r, r), s = s.add(r, r)), Bt.bounds(o, s)
            }
        }, i.MarkerIcon = function(t) {
            this.type = t.type
        }, i.MarkerIcon.prototype = {
            constructor: i.MarkerIcon,
            update: function(t, e) {},
            destroy: function() {
                Zt.removeElement(this._element), delete this._element, this.size = null, this.anchor = null, this._manager && delete this._manager
            },
            getElement: function() {
                return this._element
            }
        }, i.ImageIcon = function(t) {
            this.type = tt.image
        }, zt(i.ImageIcon, i.MarkerIcon, {
            update: function(t, e) {
                var n = i.bind(this._onLoad, this, t, e),
                    o = i.bind(this._onError, this, e);
                this._manager ? (new Zt.Image({
                    url: t.url,
                    onload: i.bind(function() {
                        this._manager.setUrl(t.url)
                    }, this),
                    onerror: o
                }), this._manager.setHandler({
                    onload: n,
                    onerror: o
                })) : (this._manager = new Zt.Image({
                    url: t.url,
                    onload: n,
                    onerror: o,
                    disableSelection: !0,
                    alt: "",
                    position: "absolute"
                }), this._element = this._manager.getElement(), this._element.ondragstart = function() {
                    return !1
                }), (t.size || t.scaledSize) && (this.size = t.size || t.scaledSize, this.anchor = i.calcAnchorPosition(this.size, t.anchor))
            },
            _onLoad: function(t, e, n) {
                var o = i.Size(n.width, n.height),
                    s = t.origin ? t.origin.clone().mul(-1, -1) : i.Point(0, 0);
                Zt.setSize(n, t.scaledSize || o), Zt.setOffset(n, s), this.size = t.size || t.scaledSize || o, this.anchor = i.calcAnchorPosition(this.size, t.anchor), e()
            },
            _onError: function(t) {
                this.update(i.boxToIcon(), t)
            }
        }), i.SymbolIcon = function() {
            this.isSymbol = !0
        }, zt(i.SymbolIcon, i.MarkerIcon, {
            update: function(t, e) {
                t = i.extend({}, i.SymbolIcon.DEFAULT_OPTIONS, t), this._manager ? this._manager.setOptions(t) : (this._manager = new(i.shapes[i.capitalize(t.style)])(t), this._element = this._manager.getElement(), this._element.style.position = "static", At.browser.msie && At.browser.version < 9 && (this._element.style.padding = t.strokeWeight)), this.size = this._calcSize(t), this.anchor = i.calcAnchorPosition(this.size, t.anchor), e()
            },
            _calcSize: function(t) {
                var e, n, o = 2 * t.strokeWeight;
                if (t.style === M.CIRCLE) e = n = 2 * t.radius;
                else {
                    var s = t.minBoundPoint,
                        r = t.maxBoundPoint;
                    e = Math.abs(r.x - s.x), n = Math.abs(r.y - s.y)
                }
                return i.Size(e + o, n + o)
            },
            getShapeElement: function() {
                return this._manager.getShapeElement()
            }
        }), i.SymbolIcon.DEFAULT_OPTIONS = {
            fillColor: "#000000",
            fillOpacity: 0,
            strokeColor: "#000000",
            strokeOpacity: 1,
            strokeStyle: "solid",
            strokeWeight: 1,
            simplifyLevel: 1
        }, i.CircleIcon = function() {
            this.type = tt.circle
        }, zt(i.CircleIcon, i.SymbolIcon, {}), i.PathIcon = function() {
            this.type = tt.path
        }, zt(i.PathIcon, i.SymbolIcon, {}), i.ClosedPathIcon = function() {
            this.type = tt.closedPath
        }, zt(i.ClosedPathIcon, i.SymbolIcon, {}), i.HtmlIcon = function() {
            this.type = tt.html
        }, zt(i.HtmlIcon, i.MarkerIcon, {
            update: function(t, e) {
                this._element && Zt.removeElement(this._element), i.isString(t.content) ? this._element = this._makeElement(t.content) : this._element = t.content, this.size = t.scaledSize || t.size || i.Size(0, 0), this.anchor = i.calcAnchorPosition(this.size, t.anchor), e()
            },
            _makeElement: function(t) {
                var e = Zt.createElement("DIV");
                return e.innerHTML = t, 1 == e.childNodes.length ? e.removeChild(e.firstChild) : e
            }
        }), i.MarkerAnimation = {
            _animation_changed: function() {
                if (!this._trans) {
                    var t = new i.Transition({
                            easing: i.easing.easeOutBounce,
                            duration: 700
                        }),
                        e = new i.Transition({
                            easing: i.easing.easeOutQuad,
                            duration: 350
                        }),
                        n = new i.Transition({
                            easing: i.easing.easeInQuad,
                            duration: 350
                        });
                    this._trans = {
                        drop: t,
                        bounceUp: e,
                        bounceDown: n
                    }
                }
                this.draw()
            },
            startTransition: function(t, e, n) {
                var i = this._getAnimation(t, e, n),
                    o = i.startTran,
                    s = i.startTranOptions;
                o.run(s.from, s.to)
            },
            stopTransition: function() {
                i.forEach(this._trans, function(t) {
                    t && (t.clearListeners(), t.stop())
                })
            },
            _getAnimation: function(t, e, n) {
                var i = this,
                    o = function(e) {
                        var i = e.progress;
                        t.style.left = i.left - n.x + "px", t.style.top = i.top - n.y + "px"
                    },
                    s = null,
                    r = null,
                    a = null;
                switch (this.animation) {
                    case P.BOUNCE:
                        var h = this._trans.bounceUp,
                            l = this._trans.bounceDown;
                        s = h, r = {
                            top: e.y,
                            left: e.x
                        }, a = {
                            top: e.y - 20,
                            left: e.x
                        }, h.addListener({
                            start: function() {
                                Zt.setOffsetWithAnchor(t, e, n)
                            },
                            progress: o,
                            complete: function() {
                                l.run(a, r)
                            }
                        }), l.addListener({
                            progress: o,
                            complete: function() {
                                h.run(r, a)
                            }
                        });
                        break;
                    case P.DROP:
                        var c = this._trans.drop,
                            u = this.get("containerTopLeft");
                        s = c, r = {
                            top: -u.y,
                            left: e.x
                        }, a = {
                            top: e.y,
                            left: e.x
                        }, c.addListener({
                            start: function() {
                                Zt.setOffsetWithAnchor(t, e, n)
                            },
                            progress: o,
                            complete: function() {
                                Zt.setOffsetWithAnchor(t, e, n), i.stopTransition(), i.set("animation", null, !0)
                            }
                        });
                        break;
                    default:
                        throw Error("Invalid animation.")
                }
                return {
                    startTran: s,
                    startTranOptions: {
                        from: r,
                        to: a
                    }
                }
            }
        }, i.MarkerDraggble = {
            THRESHOLD: 50,
            EVENT_NAME: {
                move: At.mobile ? "touchmove" : "mousemove",
                up: At.mobile ? "touchend" : "mouseup"
            },
            _init: function() {
                this._keyInfo = {}
            },
            _cleanUp: function() {
                this._dragReady = null, this._deltaMouseToMarker = null, this._startPageXY = null, this._startMousePoint = null, this._prevCursor = null, this._keyInfo = null, this._dragReadyListener = null
            },
            _enableDrag: function() {
                this.eventTarget && !this._dragReadyListener && (this._init(), this._dragReadyListener = this.addListener("mousedown", i.bind(this._onMouseDown, this)), this._panningTran || (this._panningTran = new i.Transition({
                    easing: i.easing.easeOutCubic,
                    step: 30,
                    duration: 1e3,
                    progress: Ct(this._onPanningTransition, this)
                })))
            },
            _disableDrag: function() {
                this.removeListener(this._dragReadyListener), this._dragReadyListener = null, this._panningTran && this._panningTran.stop(), this._cleanUp()
            },
            _onMouseDown: function(t) {
                if (Ft.preventDefault(t.domEvent), Ft.stopPropagation(t.domEvent), !(At.touchablePC && t.domEvent.which > 1 || !At.touchablePC && !At.mobile && 1 !== t.domEvent.which)) {
                    this.animation && this.stopTransition(), this._dListener = [Ut.addDOMListener(_, this.EVENT_NAME.move, Ct(this._onMouseMove, this), {
                        passive: !1
                    }), Ut.addDOMListener(_, this.EVENT_NAME.up, Ct(this._onMouseUp, this))], At.touchablePC && (this._dListener.push(Ut.addDOMListener(_, "touchmove", Ct(this._onMouseMove, this), {
                        passive: !1
                    })), this._dListener.push(Ut.addDOMListener(_, "touchend", Ct(this._onMouseUp, this))));
                    var e = t.pointerEvent.pos(),
                        n = t.point,
                        i = Dt(e.pageX, e.pageY),
                        o = Zt.getOffset(this._wrapper);
                    this._deltaMouseToMarker = i.sub(o), this._startMousePoint = n, this._startPageXY = i, this._dragReady = !0
                }
            },
            _onMouseMove: function(t) {
                if (this._dragReady) {
                    t = Ft.fix(t), Ft.preventDefault(t);
                    var e = t.pos(),
                        n = Dt(e.pageX, e.pageY);
                    if (this._isMoved(n)) {
                        var i = this._getDraggablePointerEvent(t),
                            o = n.sub(this.getMapOffset()).sub(this._deltaMouseToMarker);
                        this._dragStarted || (this._prevCursor = this.cursor, this.set("cursor", "url('" + U + "/closedhand.cur'), default"), Ut.trigger(this, "dragstart", i), this._detachToMarkerPane(), this._dragStarted = !0), Zt.setOffset(this._wrapper, o), this._detectDirection(o), Ut.trigger(this, "drag", i)
                    }
                }
            },
            _onMouseUp: function(t) {
                if (this._dragReady) {
                    t = Ft.fix(t), Ft.stopPropagation(t), Ut.removeDOMListener(this._dListener), this._panningTran.isRunning() && this._panningTran.stop();
                    var e = this._getDraggablePointerEvent(t),
                        n = e.coord,
                        i = this.getMap();
                    this._dragStarted ? (this._dragStarted = null, i.getBounds().hasPoint(n) || i.setCenter(n), this._attachToMarkerPane(), this.set("position", n), this.set("cursor", this._prevCursor), this._prevCursor = null, this._dragReady = null, Ut.trigger(this, "dragend", e)) : this.draw()
                }
            },
            _detachToMarkerPane: function() {
                Zt.addElement(this._wrapper, this.getMap().getElement())
            },
            _attachToMarkerPane: function() {
                Zt.addElement(this._wrapper, this.getPanes().overlayImage)
            },
            _detectDirection: function(t) {
                var e = this._keyInfo,
                    n = this._panningTran,
                    i = n.isRunning(),
                    o = this.get("mapSize"),
                    s = this.THRESHOLD,
                    r = t.x,
                    a = t.y,
                    h = r >= o.width - s,
                    l = r <= 0 + s,
                    c = a >= o.height - s,
                    u = a <= 0 + s;
                e[x] = h, e[v] = l, e[b] = c, e[T] = u, !i && (h || l || c || u) && n.run({
                    weight: 1
                }, {
                    weight: 40
                }, {
                    infinity: !0
                }), !i || h || l || c || u || n.stop()
            },
            _getXFactor: function() {
                var t = 0,
                    e = this._keyInfo;
                return e[v] && (t -= 1), e[x] && (t += 1), t
            },
            _getYFactor: function() {
                var t = 0,
                    e = this._keyInfo;
                return e[T] && (t -= 1), e[b] && (t += 1), t
            },
            _onPanningTransition: function(t) {
                var e = t.progress,
                    n = this._getXFactor(),
                    i = this._getYFactor(),
                    o = e.weight,
                    s = Dt(n * o, i * o);
                this.getMap().panBy(s)
            },
            _isMoved: function(t) {
                return i.Math.distance(this._startPageXY, t) >= 5
            },
            _getDraggablePointerEvent: function(t) {
                var e = t.pos(),
                    n = Dt(e.pageX, e.pageY),
                    i = this._calcNewMarkerCoordinates(n),
                    o = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t;
                return {
                    offset: i.offset,
                    point: i.point,
                    coord: i.coord,
                    pointerEvent: o,
                    domEvent: o,
                    overlay: this
                }
            },
            _calcNewMarkerCoordinates: function(t) {
                var e = this.getProjection(),
                    n = t.sub(this.getMapOffset()).sub(this.get("containerTopLeft")),
                    i = e.fromOffsetToPoint(n),
                    o = this.getPosition(),
                    s = e.fromCoordToPoint(o),
                    r = i.sub(this._startMousePoint),
                    a = s.add(r);
                return {
                    offset: e.fromPointToOffset(a),
                    point: a,
                    coord: e.fromPointToCoord(a)
                }
            }
        }, i.Marker = function(t) {
            this.OVERLAY_TYPE = "Marker", this.DEFAULT_OPTIONS = {
                icon: null,
                shape: null,
                cursor: "pointer",
                clickable: !0,
                draggable: !1,
                position: null,
                map: null,
                title: "",
                visible: !0,
                zIndex: null,
                simplifyLevel: 1,
                animation: null
            }, this._wrapper = this._createWrapper(), this.set("_nmarker_id", "nmarker-" + i.guid()), this.setOptions(It({}, this.DEFAULT_OPTIONS, t))
        }, zt(i.Marker, i.OverlayView, [i.MarkerAnimation, i.MarkerDraggble], {
            setOptions: function(t) {
                var e = this;
                if ("string" == typeof t) {
                    var n = t,
                        o = arguments[1],
                        s = "set" + i.capitalize(n);
                    if ("shadow" === t) return void i.console.once("[DEPRECATED] The 'shadow' option of naver.maps.Marker is DEPRECATED.\nnaver.maps.Marker\uc758 'shadow' \uc635\uc158\uc740 \uc9c0\uc6d0 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4.");
                    e[s] ? e[s](o) : e.set(n, o)
                } else i.forEach(t, function(t, n) {
                    "map" !== n && e.setOptions(n, t)
                }), t.map && this.setMap(t.map)
            },
            setShadow: function() {
                i.console.info("[DEPRECATED] The 'setShadow' method is DEPRECATED.\n'setShadow' \uba54\uc11c\ub4dc\ub294 \uc9c0\uc6d0 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")
            },
            getShadow: function() {
                i.console.info("[DEPRECATED] The 'getShadow' method is DEPRECATED.\n'getShadow' \uba54\uc11c\ub4dc\ub294 \uc9c0\uc6d0 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")
            },
            getOptions: function(t) {
                var e = this,
                    n = {};
                return t ? this.get(t) : (i.forEach(this.DEFAULT_OPTIONS, function(t, i) {
                    n[i] = e.get(i)
                }), n)
            },
            setPosition: function(t) {
                this.set("position", i.box(t))
            },
            setIcon: function(t) {
                this.set("icon", t)
            },
            getDrawingRect: function() {
                var t = this._icon.size,
                    e = this._icon.anchor,
                    n = this._toPixelPoint(this.position);
                if (!t) return Bt.bounds(n.clone(), n.clone());
                var i = new Dt(n.x - e.x, n.y - e.y),
                    o = new Dt(n.x + t.width - e.x, n.y + t.height - e.y);
                return Bt.bounds(i, o)
            },
            toGeometry: function() {
                return {
                    type: dt,
                    coordinates: i.DataUtil.toPoint(this.getPosition()),
                    mantle_properties: this._getMantleProperties()
                }
            },
            getWrapElement: function() {
                return this._wrapper
            },
            getElement: function() {
                return this._wrapper
            },
            _toPixelPoint: function(t) {
                var e = this.getProjection(),
                    n = e.fromCoordToPixelPoint(t);
                return n
            },
            getAnchor: function() {
                if (this._icon) return this._icon.anchor
            },
            getSize: function() {
                if (this._icon) return this._icon.size
            },
            onAdd: function() {
                var t = this.getPanes().overlayImage,
                    e = this.getMap().getMapAction();
                t.appendChild(this._wrapper), this._addWrapListener(this._wrapper), this._addListener(this.eventTarget), this.bindTo("ef_overlayImage", e)
            },
            onRemove: function() {
                this.unbind("ef_overlayImage"), this._removeListener(), this._removeWrapListener(this._wrapper), Zt.removeElement(this._wrapper), this.stopTransition()
            },
            _zIndex_changed: function(t) {
                (0 === t || t) && Zt.setZIndex(this._wrapper, t)
            },
            _visible_changed: function(t) {
                Zt.visible(this._wrapper, !!t)
            },
            _position_changed: function() {
                this.draw()
            },
            _title_changed: function(t) {
                this._wrapper.title = t
            },
            _clickable_changed: function(t) {
                this.eventTarget && (this._wrapper.__clickable = !!t, this.eventTarget.__clickable = !!t, this._icon.getElement().__clickable = !!t, this.set("cursor", this.cursor))
            },
            _cursor_changed: function(t) {
                if (this.eventTarget) {
                    var e = this._getCursorState(t || "pointer"),
                        n = this._icon.getElement(),
                        i = "inherit";
                    this._icon.isSymbol ? (this._wrapper.style.cursor = i, this.eventTarget.style.cursor = e, n.style.cursor = e) : (this._wrapper.style.cursor = i, n.style.cursor = i, this.eventTarget.style.cursor = e)
                }
            },
            _draggable_changed: function(t) {
                this._updateDraggable(t)
            },
            _shape_changed: function(t) {
                this.updateShape(t)
            },
            _icon_changed: function(t) {
                var e = i.boxToIcon(t);
                i.equals(e, this._beforeBoxedIcon) || (this._icon && this._icon.type === tt[e.type] || (this._icon && (this._removeFromWrapper(this._icon.getElement()), this._icon.destroy()), this._icon = new(i[i.capitalize(e.type) + "Icon"])), this._beforeBoxedIcon = e, this._icon.update(e, i.bind(this._icon_loaded, this)))
            },
            _icon_loaded: function() {
                this._icon.type === tt.html ? this._wrapper.style.overflow = "visible" : (Zt.setSize(this._wrapper, this._icon.size), this._wrapper.style.overflow = "hidden"), this._transformOriginX = this._icon.anchor.x / this._icon.size.width * 100, this._transformOriginY = this._icon.anchor.y / this._icon.size.height * 100, this.draw(), this._addToWrapper(this._icon.getElement()), this.updateShape(this.shape)
            },
            draw: function() {
                if (this.map && this.position && this._icon.anchor && !this._dragStarted) {
                    var t = this.getProjection(),
                        e = this.position,
                        n = t.fromCoordToOffset(e);
                    this.stopTransition(), this.animation ? this.startTransition(this._wrapper, n, this._icon.anchor, this.animation) : Zt.setOffsetWithAnchor(this._wrapper, n, this._icon.anchor), this.get("ef_overlayimage") && Zt.transform(this._wrapper, 1, 0, 0, {
                        x: 0,
                        y: 0
                    })
                }
            },
            scale: function(t) {
                this.getMap() && this.get("ef_overlayimage") && this._transformOriginX && this._transformOriginY && Zt.setScaleByPercent(this._wrapper, 1 / t, {
                    x: this._transformOriginX,
                    y: this._transformOriginY
                }, !0)
            },
            updateShape: function(t) {
                this._icon.getElement() && (this.icon || this.shape || (t = et), t ? (this._updateMaskTarget(), this._updateMask(t), this._setEventTarget(this._mask.childNodes[0])) : (this._removeMaskTarget(), this._removeMask(), this._icon.isSymbol ? this._setEventTarget(this._icon.getShapeElement()) : this._setEventTarget(this._icon.getElement())))
            },
            _updateMaskTarget: function() {
                this._dummImg || (this._dummImg = this._createDummImg()), this._addToWrapper(this._dummImg), Zt.setSize(this._dummImg, this._icon.size), this._dummImg.useMap = "#" + this._nmarker_id
            },
            _updateMask: function(t) {
                this._mask || (this._mask = this._createShapeMap(t), this._addToWrapper(this._mask));
                var e = this._mask.getElementsByTagName("area")[0];
                e.shape = t.type, e.coords = t.coords
            },
            _removeMaskTarget: function() {
                this._removeFromWrapper(this._dummImg), this._dummImg = null
            },
            _removeMask: function() {
                this._mask && (this._removeFromWrapper(this._mask), delete this._mask)
            },
            _addToWrapper: function(t) {
                this._wrapper && this._wrapper.appendChild(t)
            },
            _removeFromWrapper: function(t) {
                if (this._wrapper) try {
                    this._wrapper.removeChild(t)
                } catch (e) {}
            },
            _setEventTarget: function(t) {
                this.eventTarget !== t && (this.eventTarget = t, this.set("clickable", this.clickable), this._removeListener(), this._addListener(this.eventTarget), this._updateDraggable(this.draggable))
            },
            _updateDraggable: function(t) {
                t ? this._enableDrag() : this._disableDrag()
            },
            _getCursorState: function(t) {
                return t = t || this.cursor, this.clickable ? t || "pointer" : "inherit"
            },
            _createWrapper: function() {
                var t = ["position:absolute;", "overflow:hidden;", "box-sizing:content-box !important"].join("");
                return Zt.createElement("div", t)
            },
            _createDummImg: function() {
                var t = Zt.createElement("img", "position:absolute;border:0;left:0px;top:0px;" + H);
                return Zt.disableSelection(t), t.src = X, t.alt = "", t
            },
            _createShapeMap: function(t) {
                var e = Zt.createElement("map"),
                    n = Zt.createElement("area", "display: block"),
                    i = this;
                return e.name = this._nmarker_id, n.href = "#", n.onclick = function(t) {
                    return Ft.preventDefault(t), !1
                }, (At.browser.msie || At.browser.edge) && (n.onmouseover = function(t) {
                    if (!i.__hover) {
                        var e = i._getListener("mouseenter");
                        e(t)
                    }
                    i._dummImg.style.cursor = i._getCursorState()
                }, n.onmouseout = function(t) {
                    var e = i._getListener("mouseleave");
                    e(t), i._dummImg.style.cursor = ""
                }), e.appendChild(n), e
            },
            _addListener: function(t) {
                if (t && (this.clickable || this.draggable))
                    for (var e, n = 0, o = f.length; n < o; n++) e = f[n], this._listeners.push(i.Event.addDOMListener(t, e, this._getListener(e)))
            },
            _removeListener: function() {
                i.Event.removeDOMListener(this._listeners), this._listeners = []
            },
            _addWrapListener: function(t) {
                var e = this;
                e._wrapListeners = i.Event.addDOMListener(t, "mouseleave", function(t) {
                    e._getListener("mouseleave")(Ft.fix(t))
                })
            },
            _removeWrapListener: function() {
                i.Event.removeDOMListener(this._wrapListeners), this._wrapListeners = null
            },
            _getListener: function(t) {
                var e, n = this,
                    o = At.browser.msie && At.browser.version < 9;
                return e = i.Agent.mobile ? function(t, e) {
                        var i;
                        switch (t) {
                            case "click":
                                i = n._getSingleClickType(e)
                        }
                        return [i || t]
                    } : function(t, e) {
                        var s, r, a = t,
                            h = n._dragStarted;
                        switch (t) {
                            case "mouseenter":
                            case "mouseover":
                                if (h || n.__hover) return;
                                n.__hover = !0;
                                break;
                            case "mouseleave":
                            case "mouseout":
                                if (h || !n.__hover) return;
                                n.__hover = null;
                                break;
                            case "mousedown":
                                n.__dp__ = {
                                    x: e.pageX,
                                    y: e.pageY
                                };
                                break;
                            case "click":
                                if (h) return;
                                a = i.Math.distance(n.__dp__, {
                                    x: e.pageX,
                                    y: e.pageY
                                }) < k ? n._getSingleClickType(e) : null;
                                break;
                            case "mouseup":
                                o && (r = n._getSingleClickType(e, o))
                        }
                        return [s, a, r]
                    },
                    function(o) {
                        if (n.map && n.clickable) {
                            var s = Ft.fix(o),
                                r = n._getPointerEvent(s),
                                a = e(t, s);
                            i.forEach(a, function(t) {
                                t && Ut.trigger(n, I[t] || t, r)
                            })
                        }
                    }
            },
            _getPointerEvent: function(t) {
                if (!t) return this._fromCoordToPointerEvent(this.getPosition());
                var e = t.pos(),
                    n = Dt(e.pageX, e.pageY),
                    i = this.getProjection(),
                    o = this.get("containerTopLeft"),
                    s = this.getMapOffset(),
                    r = Dt(n.x - s.x, n.y - s.y).sub(o),
                    a = i.fromOffsetToPoint(r),
                    h = {
                        offset: r,
                        point: a,
                        coord: i.fromPointToCoord(a),
                        pointerEvent: t,
                        domEvent: t,
                        overlay: this
                    };
                return this.get("tileRepeatX") && (h.point = i.fromCoordToPoint(h.coord)), h
            }
        }), i.forEach(["position", "icon", "shape", "cursor", "clickable", "draggable", "title", "visible", "zIndex", "animation"], function(t) {
            var e = i.capitalize(t),
                n = "set" + e,
                o = "get" + e;
            i.Marker.prototype[n] || (i.Marker.prototype[n] = function() {
                this.get(t) !== arguments[0] && this.set(t, arguments[0])
            }), i.Marker.prototype[o] || (i.Marker.prototype[o] = function() {
                return this.get(t)
            })
        }), i.InfoWindow = function(t) {
            this.DEFAULT_OPTIONS = {
                position: null,
                zIndex: 0,
                maxWidth: 0,
                pixelOffset: Dt(0, 0),
                backgroundColor: "#fff",
                borderColor: "#333333",
                borderWidth: 1,
                disableAutoPan: !1,
                disableAnchor: !1,
                anchorSkew: !1,
                anchorSize: Vt(20, 24),
                anchorColor: "#ffffff"
            }, this._iconAnchor = Dt(0, 0), this._boundary = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            }, this._disabled = !1, this._drawRequired = !1, this._resizeRequired = !1, this._prepareDOM(), this.setOptions(It({}, this.DEFAULT_OPTIONS, t), !0)
        }, zt(i.InfoWindow, i.OverlayView, {
            _prepareDOM: function() {
                var t = function(t) {
                        return Zt.createElement("div", t)
                    },
                    e = Y + "width:0;height:0;position:absolute;border:solid 0 transparent;pointer-events:none;",
                    n = t(G + "cursor:default;"),
                    i = t(W),
                    o = t(e),
                    s = t(e);
                Zt.isSupportedCSS3Style("transform") && (o.style[Zt.css3Styles.transformOrigin] = "right bottom", s.style[Zt.css3Styles.transformOrigin] = "right bottom"), n.appendChild(i), n.appendChild(o), n.appendChild(s), this.wrapper = n, this.contentWrap = i, this.anchorBack = o, this.anchorFore = s
            },
            _calculateSize: function() {
                var t = this.getPanes(),
                    e = this.getContentElement(),
                    n = this.get("maxWidth") || 0,
                    i = Vt(60, 30);
                if (t) {
                    var o = t.floatPane;
                    if (e && (i = Zt.calculateSize(e, o)), n > 0 && i.width > n) {
                        var s = e.cloneNode(!0);
                        s.style.width = n + "px", i = Zt.calculateSize(s, o), Zt.removeElement(s), s = null
                    }
                }
                this.set("contentSize", i)
            },
            getElement: function(t) {
                if (!t && !this.element) return null;
                var e = this.element || t.getMapView().getInfoWindowElement();
                return this.element = e, e
            },
            getWrapElement: function() {
                return this.wrapper
            },
            getContentElement: function() {
                return this.contentElement
            },
            setOptions: function(t) {
                var e = this,
                    n = function(t, n) {
                        "position" === t && (n = i.box(n)), "anchorSize" === t && (n = i.box(n, i.Size)), "pixelOffset" === t && (n = i.box(n, i.Point)), e.set(t, n)
                    };
                if ("string" == typeof t) {
                    var o = t,
                        s = arguments[1];
                    n(o, s)
                } else i.forEach(t, function(t, e) {
                    n(e, t)
                });
                this._disabled = !1, this._resizeRequired ? this.resize() : this._drawRequired && this.draw(), this._resizeRequired = !1, this._drawRequired = !1
            },
            getOptions: function(t) {
                var n = this,
                    o = {};
                return t !== e ? this.get(t) : (i.forEach(n.DEFAULT_OPTIONS, function(t, e) {
                    o[e] = n.get(e)
                }), o)
            },
            open: function(t, e) {
                if (!t) throw new Error("unassigned map");
                if (e) {
                    var n = e.getPosition ? e.getPosition().clone() : i.box(e);
                    this._iconAnchor = e.getAnchor && e.getAnchor() ? e.getAnchor().clone() : Dt(0, 0), this.set("position", n, !0)
                }
                if (!this.get("position")) throw new Error("position or anchor should be assigned.");
                this.getContent() || this.setContent(""), this.setMap(t), this.get("disableAutoPan") === !1 && this._panToVisible()
            },
            close: function() {
                this.setMap(null)
            },
            _panToVisible: function() {
                if (this.getMap()) {
                    var t = this.getMap(),
                        e = t.getMapAction();
                    if (!e.isTranRunning()) {
                        var n = t.getMapModel(),
                            i = this.getProjection(),
                            o = i.fromCoordToOffset(t.getCenter()),
                            s = t.getSize(),
                            r = this._boundary,
                            a = n.get("containerTopLeft"),
                            h = Dt(0, 0),
                            l = {
                                left: a.x + r.x,
                                top: a.y + r.y,
                                right: a.x + r.x + r.w,
                                bottom: a.y + r.y + r.h
                            },
                            c = {
                                left: l.left < 0,
                                top: l.top < 0,
                                right: l.right > s.width,
                                bottom: l.bottom > s.height
                            },
                            u = 20;
                        c.left && !c.right ? h.x += l.left - u : !c.left && c.right && (h.x += l.right - s.width + u), c.top && !c.bottom ? h.y += l.top - u : !c.top && c.bottom && (h.y += l.bottom - s.height + u), 0 === h.x && 0 === h.y || (h.y > 0 && (h.y += this._iconAnchor.y), o.add(h), t.panTo(i.fromOffsetToCoord(o), {
                            duration: 200
                        }))
                    }
                }
            },
            setContent: function(t) {
                this.set("content", t)
            },
            getContent: function() {
                return this.get("content")
            },
            setPosition: function(t) {
                if (!t) throw new Error("Property 'position' is required.");
                this.set("position", i.box(t))
            },
            getPosition: function() {
                return this.get("position")
            },
            setZIndex: function(t) {
                t = parseInt(t || 0, 10), this.set("zIndex", t)
            },
            getZIndex: function() {
                return this.get("zIndex")
            },
            onAdd: function() {
                if (this.getMap()) {
                    var t = this.getMap(),
                        e = this.getPanes().floatPane,
                        n = this.getElement(t);
                    n.style.zIndex = i.toNumber(this.get("zIndex")), t.closeInfoWindow(), t.getMapModel().set("infowindow", this), e.appendChild(n), this._calculateSize();
                    var o = this.getPosition();
                    Ut.trigger(this, "open", this._fromCoordToPointerEvent(o))
                }
            },
            draw: function() {
                if (this.getMap()) {
                    if (this._disabled) return void(this._drawRequired = !0);
                    var t = this.getElement(),
                        e = this.wrapper;
                    e.parentNode !== t && (t.innerHTML = "", t.appendChild(e));
                    var n = this.getBoundary();
                    Zt.setOffset(t, n.x, n.y), this.get("ef_floatpane") && Zt.transform(t, 1, 0, 0, {
                        x: 0,
                        y: 0
                    })
                }
            },
            scale: function(t) {
                if (this.get("ef_floatpane")) {
                    var e = this.getElement(),
                        n = this.getBoundary();
                    Zt.setScale(e, 1 / t, {
                        x: n.w / 2,
                        y: n.h
                    }, !0)
                }
            },
            resize: function() {
                if (this.getMap()) {
                    if (this._disabled) return void(this._resizeRequired = !0);
                    this._calculateSize(), this.draw()
                }
            },
            getBoundary: function() {
                var t = this.getProjection(),
                    e = this.get("position"),
                    n = t.fromCoordToOffset(e).clone().round(),
                    i = this.get("contentSize"),
                    o = 2 * this.get("borderWidth"),
                    s = this.get("pixelOffset"),
                    r = this._iconAnchor,
                    a = this.get("disableAnchor") ? 0 : this.get("anchorSize").height,
                    h = Dt((i.width + o) / 2, i.height + o + a),
                    l = n.clone().sub(h.sub(s.x, s.y - r.y));
                return this._boundary = {
                    x: l.x,
                    y: l.y,
                    w: i.width + o,
                    h: n.y - r.y - l.y,
                    anchor: r
                }, this._boundary
            },
            onRemove: function() {
                if (this.getMap()) {
                    var t = this.getMap().getMapModel();
                    t.set("infowindow", null), Zt.removeElement(this.element), Zt.removeElement(this.wrapper), Ut.trigger(this, "close", this._fromCoordToPointerEvent(this.getPosition()))
                }
            },
            _changeContent: function(t) {
                var e = this.contentWrap,
                    n = t || this.contentElement;
                this._calculateSize(), e.innerHTML = "", n && e.appendChild(n), this.draw()
            },
            _content_changed: function(t) {
                var e = null;
                if ("string" == typeof t) {
                    var n = Zt.createElement("div");
                    n.innerHTML = t;
                    for (var i = n.childNodes, o = i.length, s = 0, r = o; s < r; s++) {
                        var a = i[s].nodeType;
                        if (1 === a) {
                            if (e) {
                                e = n;
                                break
                            }
                            e = i[s]
                        } else 1 === o && 3 === a && (e = n)
                    }
                } else e = t;
                this.contentElement = e, this._changeContent(e)
            },
            _contentSize_changed: function(t) {
                var e = this.anchorBack,
                    n = this.anchorFore,
                    o = this.get("anchorSize"),
                    s = this.get("pixelOffset");
                Zt.setSize(this.contentWrap, t), e.style.left = n.style.left = i.round(t.width / 2 - o.width / 2 - s.x) + "px", e.style.bottom = i.round((o.height - s.y) * -1 - this.get("borderWidth")) + "px", n.style.bottom = i.round((o.height - s.y) * -1 + 2) + "px"
            },
            _position_changed: function(t) {
                this.draw()
            },
            _borderColor_changed: function(t) {
                this.wrapper.style.borderColor = t, this.anchorBack.style.borderTopColor = t
            },
            _borderWidth_changed: function(t) {
                this.wrapper.style.borderWidth = t + "px", this.resize()
            },
            _maxWidth_changed: function(t) {
                this.resize()
            },
            _anchorSize_changed: function(t) {
                var e = t.width / 2,
                    n = this.anchorBack.style,
                    i = this.anchorFore.style,
                    o = this.get("pixelOffset");
                n.borderLeftWidth = i.borderLeftWidth = e + "px", n.borderRightWidth = i.borderRightWidth = e + "px";
                var s = t.height - o.y;
                n.borderTopWidth = i.borderTopWidth = (s < 0 ? 0 : s) + "px", n.bottom = (t.height - o.y) * -1 - this.get("borderWidth") + "px", i.bottom = (t.height - o.y) * -1 + 2 + "px", this.resize()
            },
            _anchorSkew_changed: function(t) {
                if (Zt.isSupportedCSS3Style("transform")) {
                    var e = t === !0 ? -40 : 0;
                    this.anchorBack.style[Zt.css3Styles.transform] = "skewX(" + e + "deg)", this.anchorFore.style[Zt.css3Styles.transform] = "skewX(" + e + "deg)", t === !0 ? this.anchorBack.style.marginLeft = -1 - this.get("borderWidth") + "px" : this.anchorBack.style.marginLeft = 0, this.draw()
                }
            },
            _anchorColor_changed: function(t) {
                this.anchorFore.style.borderTopColor = t
            },
            _pixelOffset_changed: function(t) {
                if (this.get("contentSize")) {
                    var e = this.get("contentSize"),
                        n = this.anchorBack.style,
                        i = this.anchorFore.style,
                        o = this.get("anchorSize");
                    n.left = i.left = e.width / 2 - o.width / 2 - t.x + "px", this.set("anchorSize", this.get("anchorSize"))
                }
            },
            _disableAnchor_changed: function(t) {
                var e = this.anchorBack.style,
                    n = this.anchorFore.style;
                t ? e.display = n.display = "none" : e.display = n.display = "", this.draw()
            },
            _zIndex_changed: function(t) {
                var e = this.getElement();
                e && (e.style.zIndex = t)
            },
            _backgroundColor_changed: function(t) {
                this.wrapper.style.background = t
            },
            _getPointerEvent: function(t) {
                return this._fromCoordToPointerEvent(this.getPosition())
            }
        }), i.GroundOverlay = function(t, e, n) {
            this.DEFAULT_OPTIONS = {
                clickable: !0,
                map: null,
                opacity: 1
            }, this.set("url", t), this.set("bounds", i.box(e)), this._clonedWrapper = null, this._prepareDOM(), this._setOptions(It({}, this.DEFAULT_OPTIONS, n)), this._initEvent()
        }, zt(i.GroundOverlay, i.OverlayView, {
            _prepareDOM: function() {
                var t = Zt.createElement("div", "position:absolute;overflow:hidden;z-index:10;"),
                    e = Zt.createElement("img", "position:absolute;left:0px;top:0px;border:0px;padding:0px;margin:0px;");
                e.src = this.get("url"), e.alt = "", Zt.disableSelection(e), Zt.addElement(e, t), this._wrapper = t, this._img = e
            },
            _setOptions: function(t) {
                var e = {};
                i.forEach(this.DEFAULT_OPTIONS, function(n, i) {
                    i in t && "map" !== i && (e[i] = t[i])
                }), this.setValues(e), t.map && this.setMap(t.map)
            },
            _bindDefaultEvent: function(t, e) {
                this._defaultListener = [Ut.addListener(e, "zooming", Ct(this._copyWrapperIntoZoomPane, this)), Ut.addListener(e, "idle", Ct(this._removeWrapperFromZoomPane, this))]
            },
            _initEvent: function() {
                var t = this._wrapper,
                    e = this;
                t && i.forEach(GROUND_DOMEVENTS, function(n) {
                    Ut.addDOMListener(t, n, e._getListener(n))
                })
            },
            _getListener: function(t) {
                var e, n = this,
                    o = At.browser.msie && At.browser.version < 9;
                return e = At.mobile ? function(t, e) {
                        var i;
                        switch (t) {
                            case "click":
                                i = n._getSingleClickType(e)
                        }
                        return [i || t]
                    } : function(t, e) {
                        var s, r, a = t;
                        switch (t) {
                            case "mousedown":
                                n.__dp__ = {
                                    x: e.pageX,
                                    y: e.pageY
                                };
                                break;
                            case "click":
                                a = i.Math.distance(n.__dp__, {
                                    x: e.pageX,
                                    y: e.pageY
                                }) < k ? n._getSingleClickType(e) : null;
                                break;
                            case "mouseup":
                                o && (r = n._getSingleClickType(e, o))
                        }
                        return [s, a, r]
                    },
                    function(o) {
                        if (n.getMap() && n.get("clickable")) {
                            var s = Ft.fix(o),
                                r = n._getPointerEvent(s),
                                a = e(t, s);
                            i.forEach(a, function(t) {
                                t && Ut.trigger(n, I[t] || t, r)
                            })
                        }
                    }
            },
            _getPointerEvent: function(t) {
                var e = t.pos(),
                    n = Dt(e.pageX, e.pageY),
                    i = this.getProjection(),
                    o = this.get("containerTopLeft"),
                    s = this.getMapOffset(),
                    r = Dt(n.x - s.x, n.y - s.y).sub(o),
                    a = i.fromOffsetToPoint(r),
                    h = {
                        offset: r,
                        point: a,
                        coord: i.fromPointToCoord(a),
                        pointerEvent: t,
                        domEvent: t,
                        overlay: this
                    };
                return this.get("tileRepeatX") && (h.point = i.fromCoordToPoint(h.coord)), h
            },
            _unbindEvent: function() {
                Ut.removeListener(this._defaultListener), this._defaultListener.length = 0, this._defaultListener = [], this.get("clickable") && (Ut.removeListener(this._clickableListener), this._clickableListener = [])
            },
            _copyWrapperIntoZoomPane: function() {
                if (!this._clonedWrapper) {
                    var t = this._wrapper.cloneNode(!0);
                    Zt.addElement(t, this.get("zoomPane")),
                        this._clonedWrapper = t
                }
            },
            _removeWrapperFromZoomPane: function() {
                this._clonedWrapper && (Zt.removeElement(this._clonedWrapper), this._clonedWrapper = null)
            },
            _clickable_changed: function(t) {
                this._wrapper && (t ? (this._wrapper.__clickable = !0, this._wrapper.style.cursor = "pointer") : (this._wrapper.__clickable = !1, this._wrapper.style.cursor = ""))
            },
            getBounds: function() {
                return this.get("bounds")
            },
            getOpacity: function() {
                return this.get("opacity")
            },
            setOpacity: function(t) {
                this.set("opacity", t)
            },
            getUrl: function() {
                return this.get("url")
            },
            onAdd: function() {
                var t = this.getMap();
                t && (Zt.addElement(this._wrapper, this.getPanes().overlayLayer), this.bindTo("zoomPane", t.getMapView()), this._bindDefaultEvent(t, t.getMapAction()))
            },
            draw: function() {
                if (this.getMap()) {
                    var t = this.getBounds(),
                        e = this.getProjection(),
                        n = e.fromCoordToOffset(t.getMax()).round(),
                        i = e.fromCoordToOffset(t.getMin()).round(),
                        o = Bt.bounds(n, i),
                        s = o.getMin(),
                        r = o.getMax(),
                        a = s.x,
                        h = s.y,
                        l = r.x,
                        c = r.y,
                        u = Vt(Math.abs(l - a), Math.abs(c - h));
                    Zt.setOffset(this._wrapper, a, h), Zt.setSize(this._wrapper, u), Zt.setSize(this._img, u)
                }
            },
            onRemove: function() {
                this.getMap() && (this.unbind("zoomPane"), this._unbindEvent(), Zt.removeElement(this._wrapper))
            },
            _opacity_changed: function(t) {
                Zt.setOpacity(this._wrapper, t)
            }
        }), i.AbstractShapeOverlay = function(t) {
            this._shape = this._createShape(), t = It({}, this.DEFAULT_OPTIONS || {}, t), this.setOptions(t), this._initEvent()
        }, zt(i.AbstractShapeOverlay, i.OverlayView, [i.CalcShapeDrawingPixelBounds], {
            _initEvent: function() {
                var t = this._shape.getShapeElement();
                if (t)
                    for (var e, n = 0, i = d.length; n < i; n++) e = d[n], Ut.addDOMListener(t, e, this._getListener(e))
            },
            _getPointerEvent: function(t) {
                if (t) {
                    var e = t.pos(),
                        n = Dt(e.pageX, e.pageY),
                        i = this.getProjection(),
                        o = this.get("containerTopLeft"),
                        s = this.getMapOffset(),
                        r = Dt(n.x - s.x, n.y - s.y).sub(o),
                        a = i.fromOffsetToPoint(r),
                        h = {
                            offset: r,
                            point: a,
                            coord: i.fromPointToCoord(a),
                            pointerEvent: t,
                            domEvent: t,
                            overlay: this
                        };
                    return this.get("tileRepeatX") && (h.point = i.fromCoordToPoint(h.coord)), h
                }
                if (this.getCenter) return this._fromCoordToPointerEvent(this.getCenter());
                if (this.getBounds) {
                    var l = this.getBounds();
                    return l ? this._fromCoordToPointerEvent(l.getCenter()) : {}
                }
            },
            _getListener: function(t) {
                var e, n = this,
                    o = At.browser.msie && At.browser.version < 9;
                return e = At.mobile ? function(t, e) {
                        var i;
                        switch (t) {
                            case "click":
                                i = n._getSingleClickType(e)
                        }
                        return [i || t]
                    } : function(t, e) {
                        var s, r, a = t;
                        switch (t) {
                            case "mousedown":
                                n.__dp__ = {
                                    x: e.pageX,
                                    y: e.pageY
                                };
                                break;
                            case "click":
                                At.browser.msie && (s = "mouseup"), a = i.Math.distance(n.__dp__, {
                                    x: e.pageX,
                                    y: e.pageY
                                }) < k ? n._getSingleClickType(e) : null;
                                break;
                            case "mouseup":
                                o && (r = n._getSingleClickType(e, o))
                        }
                        return [s, a, r]
                    },
                    function(o) {
                        if (n.getMap() && n.getClickable()) {
                            var s = Ft.fix(o),
                                r = n._getPointerEvent(s),
                                a = e(t, s);
                            i.forEach(a, function(t) {
                                t && Ut.trigger(n, I[t] || t, r)
                            })
                        }
                    }
            },
            setOptions: function(t) {
                var n = this.PROPERTIES_NAME || [],
                    o = this;
                if ("string" == typeof t) {
                    var s = t,
                        r = arguments[1],
                        a = {};
                    i.getIndexOfElement(n, s) === -1 ? o.setStyles(s, r) : (a[s] = r, o.setValues(a))
                } else i.forEach(t, function(t, e) {
                    "map" !== e && o.setOptions(e, t)
                }), t.map !== e && this.setMap(t.map)
            },
            getOptions: function(t) {
                var n = {},
                    o = this;
                return t !== e ? o.get(t) : (i.forEach(o.DEFAULT_OPTIONS || {}, function(t, e) {
                    n[e] = o.get(e)
                }), n)
            },
            setStyles: function(t) {
                var e = this.PROPERTIES_NAME || [],
                    n = this;
                if ("string" == typeof t) {
                    var o = t,
                        s = arguments[1],
                        r = {};
                    if (i.getIndexOfElement(e, o) !== -1) throw new Error("The '" + o + "' is not style property.");
                    n.set(o, s), r[o] = s, n._shape.setOptions(r)
                } else i.forEach(t, function(t, e) {
                    n.setStyles(e, t)
                })
            },
            getStyles: function(t) {
                var n = this.PROPERTIES_NAME || [],
                    o = {},
                    s = this;
                if (t !== e) {
                    if (i.getIndexOfElement(n, t) === -1) return s.get(t);
                    throw new Error("The '" + t + "' is not style property.")
                }
                return i.forEach(s.DEFAULT_OPTIONS || {}, function(t, e) {
                    i.getIndexOfElement(n, e) === -1 && (o[e] = s.get(e))
                }), o
            },
            setVisible: function(t) {
                this.set("visible", t), this._shape.setOptions({
                    visible: t
                })
            },
            getVisible: function() {
                return this.get("visible")
            },
            setZIndex: function(t) {
                this.set("zIndex", t), this._shape.setOptions({
                    zIndex: t
                })
            },
            getZIndex: function() {
                return this.get("zIndex") || 0
            },
            setClickable: function(t) {
                this.set("clickable", t)
            },
            getClickable: function() {
                return this.get("clickable")
            },
            _clickable_changed: function(t) {
                var e = this.getWrapElement();
                e && (t ? (e.__clickable = !0, e.style.cursor = "pointer") : (e.__clickable = !1, e.style.cursor = ""))
            },
            draw: function() {
                if (this.getMap() && (this._draw(), this.get("ef_overlaylayer"))) {
                    var t = this.getElement(),
                        e = this.strokeWeight;
                    t.style.strokeWidth = e + "px"
                }
            },
            onAdd: function() {
                if (this.getMap() && this._shape.element) {
                    var t = this.getPanes().overlayLayer,
                        e = this.getMap().getMapAction();
                    t.appendChild(this._shape.element), this.__added = !0, this.get("ef_overlaylayer") && (this._mapActionListener = Ut.addListener(e, "scale", Ct(this._onScale, this)))
                }
            },
            onRemove: function() {
                if (this.getMap() && this._shape.element && this.__added) {
                    var t = this.getPanes().overlayLayer;
                    t.removeChild(this._shape.element), Ut.removeListener(this._clickableListener), this._mapActionListener && Ut.removeListener(this._mapActionListener), this.__added = !1, this._mapActionListener = null
                }
            },
            scale: function(t) {
                if (this.get("ef_overlaylayer") && this.strokeWeight) {
                    var e = this.getElement(),
                        n = this.strokeWeight;
                    e.style.strokeWidth = 1 * n / t + "px"
                }
            },
            _createShape: function() {
                throw new Error("please implement this method")
            },
            getShape: function() {
                return this._shape || null
            },
            getBounds: function() {
                return null
            },
            _draw: function() {
                throw new Error("please implement this method")
            },
            getElement: function() {
                return this._shape.getShapeElement()
            },
            getWrapElement: function() {
                return this._shape.getElement()
            }
        }), i.Polyline = function(t) {
            this.DEFAULT_OPTIONS = {
                map: null,
                path: [],
                strokeColor: "#007EEA",
                strokeOpacity: 1,
                strokeWeight: 2,
                strokeStyle: "solid",
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                visible: !0,
                clickable: !1,
                simplifyLevel: 1,
                startIcon: null,
                startIconSize: null,
                endIcon: null,
                endIconSize: null,
                zIndex: 0
            }, this.OVERLAY_TYPE = "Polyline", this.PROPERTIES_NAME = ["path", "map"], i.AbstractShapeOverlay.call(this, t)
        }, zt(i.Polyline, i.AbstractShapeOverlay, {
            setPath: function(t) {
                if (!i.isArray(t) && t.constructor !== i.KVOArray) throw new Error("path must be Array or naver.maps.KVOArray");
                var e;
                e = i.isArray(t) ? t[0] instanceof Dt ? new i.KVOArray(t) : new i.KVOArray(i.boxToPath(t)) : t, this._unbindPath(), this.set("path", e), this._bindPath(), this.draw()
            },
            _bindPath: function() {
                var t = this.getPath(),
                    e = Ct(this.draw, this);
                Ut.addListener(t, "insert_at", e), Ut.addListener(t, "remove_at", e), Ut.addListener(t, "set_at", e)
            },
            _unbindPath: function() {
                var t = this.getPath();
                t && Ut.clearInstanceListeners(t)
            },
            getPath: function() {
                return this.get("path")
            },
            getBounds: function() {
                var t = this.getPath();
                if (!t || 0 === t.getLength()) return null;
                var e = t.getAt(0),
                    n = Bt(e.clone(), e.clone());
                if (t.forEach(function(t) {
                        n.extend(t)
                    }), e instanceof Rt) {
                    var i = n.getMin(),
                        o = n.getMax();
                    n = Nt([i.x, i.y, o.x, o.y])
                }
                return n
            },
            getDistance: function() {
                var t = this.getPath().getArray(),
                    e = this.getProjection();
                if (!t || 0 === t.length || !e) return 0;
                for (var n = 0, i = 0, o = t.length; i < o && i + 1 !== o; i++) n += e.getDistance(t[i], t[i + 1]);
                return n
            },
            _createShape: function() {
                return new i.shapes.Path
            },
            _draw: function() {
                var t = this._project(this.getPath());
                t.path.length > 0 && this._shape.setPath(t.path, t.minBoundPoint, t.maxBoundPoint, this.get("simplifyLevel"))
            },
            _project: function(t) {
                var e = this.getProjection(),
                    n = [],
                    i = 1 / 0,
                    o = 1 / 0,
                    s = -(1 / 0),
                    r = -(1 / 0);
                return t.forEach(function(t) {
                    var a = e.fromCoordToOffset(t).round();
                    i = Math.min(a.x, i), o = Math.min(a.y, o), s = Math.max(a.x, s), r = Math.max(a.y, r), n.push(a)
                }), 1 === n.length && n.push(n[0].clone()), {
                    path: n,
                    minBoundPoint: Dt(i, o),
                    maxBoundPoint: Dt(s, r)
                }
            },
            _simplifyLevel_changed: function() {
                this.getMap() && this._draw()
            },
            _path_changed: function() {},
            toGeometry: function() {
                return {
                    type: ft,
                    coordinates: i.DataUtil.fromPointArrayToCoordinates(this.getPath()),
                    mantle_properties: this._getMantleProperties()
                }
            }
        }), i.Polygon = function(t) {
            this.DEFAULT_OPTIONS = {
                map: null,
                paths: [],
                strokeColor: "#007EEA",
                strokeOpacity: 1,
                strokeWeight: 1,
                strokeStyle: "solid",
                fillColor: "none",
                fillOpacity: 1,
                visible: !0,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                clickable: !1,
                simplifyLevel: 1,
                zIndex: 0
            }, this.OVERLAY_TYPE = "Polygon", this.PROPERTIES_NAME = ["paths", "map"], i.AbstractShapeOverlay.call(this, t)
        }, zt(i.Polygon, i.AbstractShapeOverlay, {
            _isPath: function(t) {
                var e = "array";
                if (!i.isArray(t) && (e = "kvoArray", t.constructor !== i.KVOArray)) throw e = null, new Error("path must be Array or naver.maps.KVOArray");
                return e
            },
            setPaths: function(t) {
                var e = this._isPath(t),
                    n = "kvoArray" === e ? t : new i.KVOArray;
                this._unbindPaths(), "array" === e && t.length > 0 && (t[0] instanceof Dt ? n.push(new i.KVOArray(t)) : i.isArray(t[0]) && (!t[0][0] || t[0][0] instanceof Dt ? i.forEach(t, function(t) {
                    n.push(new i.KVOArray(t))
                }) : "number" == typeof t[0][0] ? n.push(new i.KVOArray(i.boxToPath(t))) : i.forEach(t, function(t) {
                    n.push(new i.KVOArray(i.boxToPath(t)))
                }))), this.set("paths", n), this._bindPaths(), n.getLength() > 0 && this.draw()
            },
            setPath: function(t) {
                var e, n = this._isPath(t);
                e = "array" === n ? t[0] instanceof Dt ? new i.KVOArray(t) : new i.KVOArray(i.boxToPath(t)) : t, this._unbindPaths(), this.getPaths().setAt(0, e), this._bindPaths(), this.draw()
            },
            _bindPaths: function() {
                var t = this.getPaths(),
                    e = Ct(this.draw, this);
                t.forEach(function(t) {
                    Ut.addListener(t, "insert_at", e), Ut.addListener(t, "remove_at", e), Ut.addListener(t, "set_at", e)
                })
            },
            _unbindPaths: function() {
                var t = this.getPaths();
                t && t.forEach(function(t) {
                    Ut.clearInstanceListeners(t)
                })
            },
            getPaths: function() {
                return this.get("paths")
            },
            getPath: function() {
                return this.get("paths").getAt(0)
            },
            getBounds: function() {
                var t, e = this.getPaths();
                if (!e || 0 === e.getLength()) return null;
                if (t = this.getPath(), !t || 0 === t.getLength()) return null;
                var n = t.getAt(0),
                    i = Bt(n.clone(), n.clone());
                if (e.forEach(function(t) {
                        t.forEach(function(t) {
                            i.extend(t)
                        })
                    }), n instanceof Rt) {
                    var o = i.getMin(),
                        s = i.getMax();
                    i = Nt([o.x, o.y, s.x, s.y])
                }
                return i
            },
            _createShape: function() {
                return new i.shapes.ClosedPath
            },
            _draw: function() {
                var t = this._project(this.getPaths());
                t.paths.length > 0 && this._shape.setPath(t.paths, t.minBoundPoint, t.maxBoundPoint, this.get("simplifyLevel"))
            },
            _project: function(t) {
                var e = this.getProjection(),
                    n = [],
                    i = 1 / 0,
                    o = 1 / 0,
                    s = -(1 / 0),
                    r = -(1 / 0),
                    a = !1;
                return t.forEach(function(t) {
                    var h = [];
                    t.forEach(function(n) {
                        var l = e.fromCoordToOffset(n).round();
                        i = Math.min(l.x, i), o = Math.min(l.y, o), s = Math.max(l.x, s), r = Math.max(l.y, r), h.push(l), 1 === t.getLength() && h.push(l.clone()), a = !0
                    }), n.push(h)
                }), a || (n = []), {
                    paths: n,
                    minBoundPoint: Dt(i, o),
                    maxBoundPoint: Dt(s, r)
                }
            },
            getAreaSize: function() {
                var t = this.getProjection(),
                    e = this.getPaths(),
                    n = 0;
                return e.forEach(function(e) {
                    var o = e.getArray();
                    n += i.Math.getPolygonSize(o, t)
                }), n
            },
            _simplifyLevel_changed: function() {
                this.getMap() && this._draw()
            },
            _paths_changed: function() {},
            toGeometry: function() {
                return {
                    type: gt,
                    coordinates: i.DataUtil.fromPolygonArrayToCoordinates([this.getPaths()])[0],
                    mantle_properties: this._getMantleProperties()
                }
            }
        }), i.Rectangle = function(t) {
            this.DEFAULT_OPTIONS = {
                map: null,
                bounds: Nt(Rt(0, 0), Rt(0, 0)),
                strokeColor: "#007EEA",
                strokeOpacity: 1,
                strokeWeight: 1,
                strokeStyle: "solid",
                fillColor: "none",
                fillOpacity: 1,
                visible: !0,
                clickable: !1,
                zIndex: 0
            }, this.OVERLAY_TYPE = "Rectangle", this.PROPERTIES_NAME = ["bounds", "map"], i.AbstractShapeOverlay.call(this, t)
        }, zt(i.Rectangle, i.AbstractShapeOverlay, {
            setBounds: function(t) {
                t = i.box(t);
                var e = t.getMin(),
                    n = t.getMax();
                t = t instanceof Nt ? Nt.bounds(e, n) : Bt.bounds(e, n), this.set("bounds", t), this.draw()
            },
            getBounds: function() {
                return this.get("bounds")
            },
            _createShape: function() {
                var t = new i.shapes.Rectangle;
                return t
            },
            _draw: function() {
                var t = this.get("bounds"),
                    e = this.getProjection(),
                    n = e.fromCoordToOffset(t.getMin()).round(),
                    i = e.fromCoordToOffset(t.getMax()).round(),
                    o = Bt.bounds(n, i);
                this._shape.setBounds(o.getMin(), o.getMax())
            },
            getAreaSize: function() {
                var t, e = this.getBounds(),
                    n = this.getProjection(),
                    i = e.getMin(),
                    o = e.getMax();
                t = e instanceof Nt ? Rt(e.south(), e.east()) : Dt(e.maxX(), e.minY());
                var s = n.getDistance(t, i),
                    r = n.getDistance(t, o);
                return s * r
            },
            _bounds_changed: function() {},
            toGeometry: function() {
                return {
                    type: _t,
                    coordinates: this.getBounds().toArray(),
                    mantle_properties: this._getMantleProperties()
                }
            }
        }), i.Circle = function(t) {
            this.DEFAULT_OPTIONS = {
                map: null,
                center: Rt(0, 0),
                radius: 0,
                strokeColor: "#007EEA",
                strokeOpacity: 1,
                strokeWeight: 1,
                strokeStyle: "solid",
                fillColor: "none",
                fillOpacity: 1,
                visible: !0,
                clickable: !1,
                zIndex: 0
            }, this.OVERLAY_TYPE = "Circle", this.PROPERTIES_NAME = ["center", "radius", "map"], i.AbstractShapeOverlay.call(this, t)
        }, zt(i.Circle, i.AbstractShapeOverlay, {
            setCenter: function(t) {
                this.set("center", i.box(t)), this.draw()
            },
            getCenter: function() {
                return this.get("center")
            },
            setRadius: function(t) {
                this.set("radius", t), this.draw()
            },
            getRadius: function() {
                return this.get("radius")
            },
            getBounds: function() {
                var t = this.getProjection(),
                    e = this.getCenter(),
                    n = this.getRadius(),
                    i = t.getDestinationCoord(e, 0, n),
                    o = t.getDestinationCoord(e, 180, n),
                    s = t.getDestinationCoord(e, 90, n),
                    r = t.getDestinationCoord(e, 270, n),
                    a = Bt([r.x, o.y, s.x, i.y]);
                return e instanceof Rt && (a = Nt([r.x, o.y, s.x, i.y])), a
            },
            _createShape: function() {
                return new i.shapes.Circle
            },
            _draw: function() {
                var t = this.get("center"),
                    e = this.get("radius"),
                    n = this.getProjection(),
                    i = n.fromCoordToOffset(t).round(),
                    o = n.getDestinationCoord(t, 90, e),
                    s = e;
                if (o) {
                    var r = n.fromCoordToOffset(o).round();
                    s = r.x - i.x
                }
                this._shape.setOptions({
                    center: i,
                    radius: s
                })
            },
            getAreaSize: function() {
                var t = this.getRadius();
                this.getProjection();
                return t * t * Math.PI
            },
            _center_changed: function() {},
            toGeometry: function() {
                return {
                    type: dt,
                    coordinates: this.getCenter().toArray(),
                    mantle_properties: this._getMantleProperties()
                }
            }
        }), i.Ellipse = function(t) {
            this.DEFAULT_OPTIONS = {
                map: null,
                bounds: Nt(Rt(0, 0), Rt(0, 0)),
                strokeColor: "#007EEA",
                strokeOpacity: 1,
                strokeWeight: 1,
                strokeStyle: "solid",
                fillColor: "none",
                fillOpacity: 1,
                visible: !0,
                clickable: !1,
                zIndex: 0
            }, this.OVERLAY_TYPE = "Ellipse", this.PROPERTIES_NAME = ["bounds", "map"], i.AbstractShapeOverlay.call(this, t)
        }, zt(i.Ellipse, i.Rectangle, {
            _createShape: function() {
                var t = new i.shapes.Ellipse;
                return t
            },
            getAreaSize: function() {
                var t, e = this.getBounds(),
                    n = this.getProjection(),
                    i = e.getMin(),
                    o = e.getMax();
                t = e instanceof Nt ? Rt(e.south(), e.east()) : Dt(e.maxX(), e.minY());
                var s = n.getDistance(t, i) / 2,
                    r = n.getDistance(t, o) / 2;
                return Math.PI * s * r
            },
            toGeometry: function() {
                this.getBounds();
                return {
                    type: _t,
                    coordinates: this.getBounds().toArray(),
                    mantle_properties: this._getMantleProperties()
                }
            }
        }), i.ConverterUtil = {
            isXMLDoc: function(t) {
                if (!t) return !1;
                var e = (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            },
            isHexColor: function(t) {
                var e = /(^[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{6}$)/i;
                return e.test(t)
            },
            isAlphabet: function(t) {
                var e = /^[A-Z]+$/i;
                return e.test(t)
            },
            getElementsByTagName: function(t, e, n) {
                var i = t.getElementsByTagName(e);
                return 0 === i.length && e.indexOf(":") !== -1 && (i = t.getElementsByTagName(e.split(":")[1])), n ? [].slice.call(i) : i
            },
            getOneElementByTagName: function(t, e) {
                var n = i.ConverterUtil.getElementsByTagName(t, e, !0);
                return n.length > 0 ? n[0] : null
            },
            getElementByTagNameInParent: function(t, e, n) {
                for (var o, s = i.ConverterUtil.getElementsByTagName(t, e), r = 0, a = s.length; r < a; r++) {
                    var h = s[r];
                    if (h.parentNode.nodeName === n) {
                        o = h;
                        break
                    }
                }
                return o
            },
            getValueByTagName: function(t, e) {
                var n = "undefined" != typeof e ? i.ConverterUtil.getElementsByTagName(t, e, !0) : t,
                    o = "";
                return n && (o = n.length ? n[0].textContent || n[0].innerText : n.textContent || n.innerText), o
            },
            getAttribute: function(t, e) {
                return t.getAttribute(e)
            },
            parseColor: function(t) {
                t = t || "", "#" === t.substr(0, 1) && (t = t.substr(1));
                var e, n = t.length,
                    i = "",
                    o = [];
                switch (n) {
                    case 3:
                    case 6:
                        i = t;
                        break;
                    case 8:
                        e = parseInt(t.substr(0, 2), 16) / 255, i = t.substr(6, 2) + t.substr(4, 2) + t.substr(2, 2)
                }
                return 0 === i.length || (o.push("#" + i), isNaN(e)) ? o[0] : (o.push(e), o)
            }
        };
    var $t = i.ConverterUtil;
    ! function() {
        function t(t) {
            var e = $t.getElementsByTagName(t, "bounds"),
                n = null;
            if (e && e.length) {
                var i = e[0],
                    o = parseFloat($t.getAttribute(i, "minlat")),
                    s = parseFloat($t.getAttribute(i, "minlon")),
                    r = parseFloat($t.getAttribute(i, "maxlat")),
                    a = parseFloat($t.getAttribute(i, "maxlon"));
                n = [s, o, a, r]
            }
            return n
        }

        function e(t) {
            var e = {};
            return i.forEach(p, function(n) {
                var i = $t.getValueByTagName(t, n);
                i && (e[n] = i)
            }), i.isEmptyObject(e) ? null : e
        }

        function n(t, e) {
            var n = $t.getElementByTagNameInParent(t, "extensions", e),
                i = null;
            return n && (i = s(n)), i
        }

        function o(t, e, n, i) {
            var o = null,
                s = null;
            switch (t) {
                case "width":
                    s = "strokeWeight", o = Math.floor(+e / 25.4 * 96), isNaN(o) && (s = null);
                    break;
                case "opacity":
                    s = "strokeOpacity", o = parseFloat(e), isNaN(o) && (s = null);
                    break;
                case "linecap":
                    s = "strokeLineCap", o = e.toLowerCase();
                    break;
                case "pattern":
                    s = "strokeStyle", o = e.toLowerCase();
                    break;
                case "color":
                    s = "strokeColor", o = $t.parseColor(e)
            }
            s && (n[t] = o, i[s] = o)
        }

        function s(t) {
            var e = {},
                n = {};
            if (t)
                for (var s = 0, r = d.length; s < r; s++) {
                    var a = d[s],
                        h = $t.getValueByTagName(t, a);
                    h && o(a, h, e, n)
                }
            return {
                bypassStyle: i.isEmptyObject(e) ? null : e,
                mantleStyle: i.isEmptyObject(n) ? null : n
            }
        }

        function r(t) {
            var e = $t.getAttribute(t, "lat"),
                n = $t.getAttribute(t, "lon"),
                i = $t.getValueByTagName(t, "ele"),
                o = [parseFloat(n), parseFloat(e)];
            return i && (i = parseFloat(i), isNaN(i) || o.push(i)), o
        }

        function a(t, e, n) {
            var i = {
                type: Tt,
                geometry: {
                    type: t,
                    coordinates: e
                }
            };
            return n && (n.bypassStyle && (i.properties = n.bypassStyle), n.mantleStyle && (i.geometry.mantle_properties = n.mantleStyle, i.geometry.mantle_properties.overlayType = "PolyLine")), i
        }

        function h(t) {
            var n = r(t),
                i = e(t),
                o = {
                    type: Tt,
                    geometry: {
                        type: dt,
                        coordinates: n
                    }
                };
            return i && (o.properties = i), o
        }

        function l(t, e) {
            var n = $t.getElementsByTagName(t, "trkseg", !0),
                o = 1 === n.length,
                s = [];
            return i.forEach(n, function(t) {
                var e = $t.getElementsByTagName(t, "trkpt", !0),
                    n = [];
                i.forEach(e, function(t) {
                    n.push(r(t))
                }), s.push(n)
            }), a(o ? ft : mt, o ? s[0] : s, e)
        }

        function c(t, e) {
            var n = $t.getElementsByTagName(t, "rtept", !0),
                o = [];
            return i.forEach(n, function(t) {
                o.push(r(t))
            }), a(ft, o, e)
        }

        function u(e) {
            var o = $t.getElementsByTagName(e, "wpt", !0),
                s = $t.getElementsByTagName(e, "trk", !0),
                r = $t.getElementsByTagName(e, "rte", !0),
                a = null,
                u = {
                    type: xt,
                    features: []
                },
                p = t(e);
            return p && (u.bbox = p), i.forEach(o, function(t) {
                a = h(t), a && u.features.push(a)
            }), i.forEach(s, function(t) {
                a = l(t, n(t, "trk")), a && u.features.push(a)
            }), i.forEach(r, function(t) {
                a = c(t, n(t, "rte")), a && u.features.push(a)
            }), u
        }
        var p = ["time", "name", "desc", "cmt", "type", "sym"],
            d = ["color", "opacity", "width", "linecap", "pattern"];
        i.GPX = {
            fromGpxToGeoJson: u
        }
    }(),
    function() {
        function t(t, e) {
            e = e || ",", t = t.split(e);
            for (var n = [], i = 0, o = t.length; i < o; i++) n[i] = parseFloat(p(t[i]));
            return n
        }

        function e(e) {
            e = e.replace(/^\s*|\s*$/g, "").split(/\s+/);
            var n = [];
            return i.forEach(e, function(e) {
                n.push(t(e))
            }), n
        }

        function n(t, e, n) {
            e && (e = p(e), e && (n[t] = e))
        }

        function o(t) {
            return !!+t
        }

        function s(t, e) {
            var s = r(t),
                a = {},
                h = {};
            if (0 === s.length) return [];
            var l = $t.getOneElementByTagName(t, "visibility");
            if (l) {
                var c = $t.getValueByTagName(l);
                c = o(c), a.visibility = c, h.visible = c
            }
            var u = $t.getValueByTagName(t, "styleUrl");
            if (u && "#" === u[0]) {
                a.styleUrl = u;
                var p = e[u];
                if (p.normal && p.highlight) {
                    var d = p.normal,
                        f = p.highlight,
                        g = e[d],
                        _ = e[f];
                    a[d] = g.o, a[f] = _.o, h[d] = g.m, h[f] = _.m, i.extend(h, g.m)
                } else {
                    var m = p.o,
                        y = p.m;
                    m && i.extend(a, m), y && i.extend(h, y)
                }
            }
            n("name", $t.getValueByTagName(t, "name"), a), n("address", $t.getValueByTagName(t, "address"), a), n("description", $t.getValueByTagName(t, "description"), a), i.isEmptyObject(h) || i.forEach(s, function(t) {
                t.mantle_properties = i.extend(t.mantle_properties, h)
            });
            var v = {
                type: Tt,
                geometry: 1 === s.length ? s[0] : {
                    type: vt,
                    geometries: s
                },
                properties: a
            };
            return v
        }

        function r(n) {
            var o = $t.getOneElementByTagName(n, "MultiGeometry"),
                s = $t.getOneElementByTagName(n, "gx:MultiTrack");
            if (o) return r(o);
            if (s) return r(s);
            var a = [];
            return i.forEach(c, function(o) {
                var s = $t.getElementsByTagName(n, o);
                s && s.length > 0 && i.forEach(s, function(n) {
                    var s = null,
                        r = o,
                        h = null;
                    switch (o) {
                        case dt:
                            h = "Marker", s = t($t.getValueByTagName(n, "coordinates"));
                            break;
                        case ft:
                            h = "Polyline", s = e($t.getValueByTagName(n, "coordinates"));
                            break;
                        case gt:
                            h = "Polygon";
                            var l = $t.getOneElementByTagName(n, "outerBoundaryIs"),
                                c = $t.getElementsByTagName(n, "innerBoundaryIs"),
                                u = null;
                            s = [], l && (u = $t.getOneElementByTagName(l, "LinearRing"), s.push(e($t.getValueByTagName(u, "coordinates")))), i.forEach(c, function(t) {
                                u = $t.getOneElementByTagName(t, "LinearRing"), s.push(e($t.getValueByTagName(u, "coordinates")))
                            });
                            break;
                        case "gx:Track":
                            h = "Polyline", r = ft, s = [];
                            var p = $t.getElementsByTagName(n, "gx:coord", !0);
                            i.forEach(p, function(e) {
                                s.push(t($t.getValueByTagName(e), " "))
                            })
                    }
                    s && s.length > 0 && a.push({
                        type: r,
                        coordinates: s,
                        mantle_properties: {
                            overlayType: h
                        }
                    })
                })
            }), a
        }

        function a(t) {
            var e = $t.getValueByTagName(t, "color"),
                n = $t.getElementsByTagName(t, "width"),
                i = {
                    o: {},
                    m: {}
                };
            if (e) {
                var o = $t.parseColor(e);
                i.o.color = e, i.m.strokeColor = o[0], i.m.strokeOpacity = o[1]
            }
            return n && n.length > 0 && (n = $t.getValueByTagName(n), i.o.width = n, i.m.strokeWeight = n), i
        }

        function h(t) {
            var e = $t.getValueByTagName(t, "color"),
                n = ($t.getElementsByTagName(t, "fill"), $t.getElementsByTagName(t, "outline"), {
                    o: {},
                    m: {}
                });
            if (e) {
                var i = $t.parseColor(e);
                n.o.color = e, n.m.fillColor = i[0], n.m.fillOpacity = i[1]
            }
            return n
        }

        function l(t) {
            var e = {
                    type: xt,
                    features: []
                },
                n = $t.getElementsByTagName(t, "Style", !0),
                o = $t.getElementsByTagName(t, "StyleMap", !0),
                r = $t.getElementsByTagName(t, "Placemark", !0),
                l = {};
            return i.forEach(n, function(t) {
                var e = $t.getAttribute(t, "id"),
                    n = "#" + e;
                l[n] = {}, n.length > 1 && i.forEach(u, function(e) {
                    var o = $t.getElementsByTagName(t, e, !0);
                    i.forEach(o, function(t) {
                        var o = null;
                        switch (e) {
                            case "LineStyle":
                                o = a(t);
                                break;
                            case "PolyStyle":
                                o = h(t)
                        }
                        l[n] = i.extend(l[n], o)
                    })
                })
            }), i.forEach(o, function(t) {
                var e = $t.getAttribute(t, "id"),
                    n = "#" + e,
                    o = $t.getElementsByTagName(t, "Pair", !0),
                    s = {};
                i.forEach(o, function(t) {
                    var e = $t.getValueByTagName(t, "key"),
                        n = $t.getValueByTagName(t, "styleUrl");
                    s[e] = n
                }), l[n] = s
            }), i.forEach(r, function(t) {
                e.features.push(s(t, l))
            }), e
        }
        var c = [gt, ft, dt, "gx:Track"],
            u = ["LineStyle", "PolyStyle"],
            p = function() {
                return String.prototype.trim ? function(t) {
                    return t.trim()
                } : function(t) {
                    return t.replace(/^\s+|\s+$/gm, "")
                }
            }();
        i.KML = {
            fromKmlToGeoJson: l
        }
    }(), i.Converter = {
        gpx: function(t) {
            if (!$t.isXMLDoc(t)) throw new Error("Invalid Parameter Type Error.");
            return i.GPX.fromGpxToGeoJson(t)
        },
        kml: function(t) {
            if (!$t.isXMLDoc(t)) throw new Error("Invalid Parameter Type Error.");
            return i.KML.fromKmlToGeoJson(t)
        }
    };
    i.Converter;
    i.DataUtil = {
        toPoint: function(t) {
            return t ? [t.x, t.y] : []
        },
        fromPointArrayToCoordinates: function(t) {
            var e = [];
            return t instanceof i.KVOArray && (t = t.getArray()), i.forEach(t, function(t) {
                e.push(i.DataUtil.toPoint(t))
            }), e
        },
        fromPointArrayListToCoordinates: function(t) {
            var e = [];
            return i.forEach(t, function(t) {
                t instanceof i.KVOArray && (t = t.getArray()), e.push(i.DataUtil.fromPointArrayToCoordinates(t))
            }), e
        },
        fromPolygonArrayToCoordinates: function(t) {
            var e = [];
            return t instanceof i.KVOArray && (t = t.getArray()), i.forEach(t, function(t) {
                t instanceof i.KVOArray && (t = t.getArray()), e.push(i.DataUtil.fromPointArrayListToCoordinates(t))
            }), e
        },
        _parsePoint: function(t) {
            return new naver.maps.Point(t)
        },
        _parseLineString: function(t) {
            var e = [];
            return i.forEach(t, function(t) {
                e.push(i.DataUtil._parsePoint(t))
            }), e
        },
        _parseMultiLineString: function(t) {
            var e = [];
            return i.forEach(t, function(t) {
                e.push(i.DataUtil._parseLineString(t))
            }), e
        },
        _parseMultiPolygon: function(t) {
            var e = [];
            return i.forEach(t, function(t, n) {
                e.push(i.DataUtil._parseMultiLineString(t))
            }), e
        }
    };
    i.DataUtil;
    i.DataLayer = function() {
        this._features = [], this._stylist = null, this._styleType = null
    }, zt(i.DataLayer, i.KVO, {
        setMap: function(t) {
            this.set("map", t)
        },
        getMap: function() {
            return this.get("map")
        },
        addGeoJson: function(t, e) {
            for (var n = this._getFeaturesFrom(t), i = 0, o = n.length; i < o; i++) this.addFeature(n[i], e);
            t.bbox && this.getMap().fitBounds(t.bbox)
        },
        addGpx: function(t, e) {
            var n = i.Converter.gpx(t);
            n && this.addGeoJson(n, e)
        },
        addKml: function(t, e) {
            var n = i.Converter.kml(t);
            n && this.addGeoJson(n, e)
        },
        removeGeoJson: function(t) {
            var e = this._features,
                n = [];
            if (t.type === Tt) n.push(t);
            else {
                if (t.type !== xt) return;
                n = n.concat(t.features)
            }
            for (var o, s, r = e.length - 1; r >= 0; r--) {
                o = e[r], s = o.getRaw();
                for (var a = 0, h = n.length; a < h; a++)
                    if (i.equals(s, n[a])) {
                        this.removeFeature(o), n.splice(a, 1);
                        break
                    }
            }
        },
        addFeature: function(t, e) {
            t.setDataLayer(this), e && t.autoStyle(), this._listenFeature(t), this._features.push(t), Ut.trigger(this, "addfeature", {
                feature: t
            })
        },
        removeFeature: function(t) {
            var e = this._features,
                n = i.getIndexOfElement(e, t);
            n > -1 && (t.setDataLayer(null), this._unlistenFeature(t), e.splice(n, 1), Ut.trigger(this, "removefeature", {
                feature: t
            }))
        },
        getAllFeature: function() {
            return this._features
        },
        getFeatureById: function(t) {
            var e = null;
            return this.forEach(function(n) {
                if (n.getId() === t) return e = n, !0
            }), e
        },
        forEach: function(t) {
            var e = this.getAllFeature();
            return i.forEach(e, t)
        },
        _getFeaturesFrom: function(t) {
            var e = [],
                n = this;
            switch (t.type) {
                case xt:
                    i.forEach(t.features, function(t) {
                        e = e.concat(n._getFeaturesFrom(t))
                    });
                    break;
                case Tt:
                    e.push(new i.Feature(t))
            }
            return e
        },
        _listenFeature: function(t) {
            this._unlistenFeature(t);
            var e = t.EVENT_LIST,
                n = this;
            t.__dataLayerListeners = [], i.forEach(e, function(e) {
                t.__dataLayerListeners.push(Ut.forward(t, e, n))
            }), t.__dataLayerListeners.push(Ut.forward(t, "property_changed", this))
        },
        _unlistenFeature: function(t) {
            var e = t.__dataLayerListeners;
            e && (Ut.removeListener(e), t.__overlayListeners = null, delete t.__overlayListeners)
        },
        setStyle: function(t) {
            var e = t || null,
                n = null,
                o = this;
            e && (n = i.isFunction(e) ? "function" : "object", i.isFunction(e) || (e = function() {
                return t
            })), this._stylelist = e, this._styleType = n, e && this.forEach(function(t) {
                o._setFeatureStyle(t)
            })
        },
        getStyle: function() {
            return this._stylelist ? "function" !== this._styleType ? this._stylelist() : this._stylelist : null
        },
        overrideStyle: function(t, e) {
            this.set("overriden_style", e), this._setFeatureStyle(t, e)
        },
        revertStyle: function(t) {
            if (this.set("overriden_style", null), t) this._setFeatureStyle(t);
            else {
                var e = this;
                this.forEach(function(t) {
                    e._setFeatureStyle(t)
                })
            }
        },
        _setFeatureStyle: function(t, e) {
            if (this._stylelist || e) {
                var n = this._stylelist,
                    i = e || (n ? n(t) : null);
                i && t.setStyle(i)
            }
        },
        toGeoJson: function() {
            var t = {
                type: xt,
                features: []
            };
            return this.forEach(function(e) {
                t.features.push(e.toGeoJson())
            }), 1 === t.features.length && (t = t.features[0]), t
        }
    }), i.Geometry = function(t) {
        if (this._raw = t, !t.type || !t.coordinates) throw new Error("Invalid geojson!");
        this.set("id", i.guid()), this.set("type", t.type), this.set("coords", []), this._parseCoordinates()
    }, zt(i.Geometry, i.KVO, {
        getRaw: function() {
            return this._raw
        },
        getMantleProperties: function() {
            return this._raw.mantle_properties
        },
        getId: function() {
            return this.get("id")
        },
        getType: function() {
            return this.get("type")
        },
        getCoords: function() {
            return this.get("coords")
        },
        _parseCoordinates: function() {
            var t = this.get("type"),
                e = this._raw.coordinates,
                n = [];
            switch (t) {
                case dt:
                    n = [i.DataUtil._parsePoint(e)];
                    break;
                case _t:
                    n = i.DataUtil._parseLineString(e);
                    break;
                case ft:
                    n = [i.DataUtil._parseLineString(e)];
                    break;
                case mt:
                    n = i.DataUtil._parseMultiLineString(e);
                    break;
                case gt:
                    n = [i.DataUtil._parseMultiLineString(e)];
                    break;
                case yt:
                    n = i.DataUtil._parseMultiPolygon(e)
            }
            this.set("coords", n)
        },
        toGeoJson: function() {
            var t = (this.getRaw(), this.getType()),
                e = this.getCoords(),
                n = {
                    type: t,
                    coordinates: []
                };
            switch (t) {
                case dt:
                    n.coordinates = i.DataUtil.toPoint(e[0]);
                    break;
                case _t:
                    n.coordinates = i.DataUtil.fromPointArrayToCoordinates(e);
                    break;
                case ft:
                    n.coordinates = i.DataUtil.fromPointArrayToCoordinates(e[0]);
                    break;
                case mt:
                    n.coordinates = i.DataUtil.fromPointArrayListToCoordinates(e);
                    break;
                case gt:
                    n.coordinates = i.DataUtil.fromPolygonArrayToCoordinates(e)[0];
                    break;
                case yt:
                    n.coordinates = i.DataUtil.fromPolygonArrayToCoordinates(e)
            }
            return n
        }
    }), i.Feature = function(t) {
        this._raw = t, this.EVENT_LIST = ["click", "dblclick", "mouseover", "mouseout", "mousedown", "mouseup", "rightclick"], this.DEFAULT_OVERLAY_STYLE = {
            strokeColor: "#000",
            strokeOpacity: .8,
            strokeWeight: 3,
            fillColor: "#000",
            fillOpacity: .3,
            clickable: !0
        }, this.set("type", t.type), this.set("id", t.id || i.guid()), this._initProperties(), this._initGeometryCollection(), this._initOverlay()
    }, zt(i.Feature, i.KVO, {
        getRaw: function() {
            return this._raw
        },
        getId: function() {
            return this.get("id")
        },
        setProperty: function(t, e) {
            var n = this._propertyList || [],
                o = this.getProperty(t);
            i.getIndexOfElement(n, t) === -1 && n.push(t), this.set("property_" + t, e), Ut.trigger(this, "property_changed", {
                feature: this,
                name: t,
                newValue: e,
                oldValue: o
            }), this._applyStyle()
        },
        getProperty: function(t) {
            return this.get("property_" + t)
        },
        getBounds: function() {
            return this.get("bounds") || null
        },
        getGeometries: function() {
            return this.get("geometryCollection")
        },
        getOverlays: function() {
            return this._overlays
        },
        forEachOverlay: function(t) {
            return i.forEach(this._overlays, t)
        },
        setStyle: function(t) {
            this.forEachOverlay(function(e) {
                var n = It(!0, {}, t || {});
                e instanceof naver.maps.Marker && !n.icon && (null === e.getIcon() || i.equals(e.getIcon(), i.MarkerView.DEFAULT_ICON)) && (n.icon = null, delete n.icon), e.setOptions(n)
            })
        },
        autoStyle: function() {
            var t = this.getGeometries();
            this.forEachOverlay(function(e) {
                var n = e.__geometryId;
                n && i.forEach(t, function(t) {
                    t.getId() === n && e.setOptions(t.getMantleProperties())
                })
            })
        },
        setDataLayer: function(t) {
            this.set("dataLayer", t)
        },
        _initBounds: function() {
            var t = this._raw.bbox,
                e = null;
            t ? e = new naver.maps.PointBounds(this._raw.bbox) : this.forEachOverlay(function(t) {
                var n = null;
                t.getBounds ? n = t.getBounds() : t.getPosition && (n = Bt(t.getPosition().clone(), t.getPosition().clone())), n && (e = e ? e.union(n) : n.clone())
            }), this.set("bounds", e)
        },
        _initProperties: function() {
            var t = this._raw,
                e = t.properties,
                n = [],
                o = this;
            i.forEach(e, function(t, e) {
                n.push(e), o.set("property_" + e, t)
            }), this._propertyList = n
        },
        _initGeometryCollection: function() {
            var t = this._parseGeometry(this._raw.geometry);
            this.set("geometryCollection", t)
        },
        _parseGeometry: function(t) {
            var e = [],
                n = this;
            return t.type === vt ? i.forEach(t.geometries, function(t) {
                e = e.concat(n._parseGeometry(t))
            }) : e.push(new i.Geometry(t)), e
        },
        _initOverlay: function() {
            var t = this.get("geometryCollection"),
                e = this.DEFAULT_OVERLAY_STYLE,
                n = [];
            i.forEach(t, function(t) {
                var o = t.getType(),
                    s = t.getCoords(),
                    r = t.getMantleProperties(),
                    a = r ? r.overlayType : null,
                    h = r ? t.getId() : null;
                switch (o) {
                    case dt:
                        r && "Circle" === a ? n.push(new naver.maps.Circle({
                            center: s[0],
                            radius: r.radius,
                            __geometryId: h
                        })) : n.push(new naver.maps.Marker({
                            position: s[0],
                            __geometryId: h
                        }));
                        break;
                    case _t:
                        r ? n.push(new naver.maps[a]({
                            bounds: new naver.maps.PointBounds(s[0], s[1]),
                            __geometryId: h
                        })) : i.forEach(s, function(t) {
                            n.push(new naver.maps.Marker({
                                position: t,
                                __geometryId: h
                            }))
                        });
                        break;
                    case ft:
                    case mt:
                        i.forEach(s, function(t) {
                            n.push(new naver.maps.Polyline(It({
                                path: t,
                                __geometryId: h
                            }, e)))
                        });
                        break;
                    case gt:
                    case yt:
                        var l = [];
                        i.forEach(s, function(t) {
                            i.forEach(t, function(t) {
                                l.push(t)
                            })
                        }), n.push(new naver.maps.Polygon(It({
                            paths: l,
                            __geometryId: h
                        }, e)))
                }
            }), this._initFeatureEvent(n), this._overlays = n
        },
        _initFeatureEvent: function(t) {
            var e = this,
                n = function(t, n) {
                    return Ut.addListener(t, n, function(t) {
                        var i = t || {};
                        i.feature = e, Ut.trigger(e, n, i)
                    })
                },
                o = e.EVENT_LIST,
                s = [];
            i.forEach(t, function(t) {
                i.forEach(o, function(e) {
                    s.push(n(t, e))
                })
            }), e._listeners = s
        },
        _applyStyle: function() {
            var t = this.get("dataLayer");
            if (t) {
                var e = t.getStyle(),
                    n = null,
                    o = t.get("overriden_style");
                e && (n = i.isFunction(e) ? e(this) : e), n && this.setStyle(n), o && this.setStyle(o)
            }
        },
        dataLayer_changed: function(t) {
            t ? (this._applyStyle(), this.bindTo("map", t)) : (this.unbind("map"), this.map_changed(null))
        },
        map_changed: function(t) {
            this.forEachOverlay(function(e) {
                e.setMap(t)
            }), this._initBounds()
        },
        toGeoJson: function() {
            var t = this._propertyList,
                e = this.getRaw(),
                n = {
                    id: this.getId(),
                    type: Tt,
                    properties: {},
                    geometry: {}
                },
                o = this.getOverlays(),
                s = this;
            return i.forEach(t, function(t) {
                var e = s.getProperty(t);
                i.hasValue(e) && (n.properties[t] = e)
            }), e.bbox && (n.bbox = e.bbox), e.crs && (n.crs = e.crs), o.length > 1 ? (n.geometry.type = vt, n.geometry.geometries = [], i.forEach(o, function(t) {
                n.geometry.geometries.push(t.toGeometry())
            })) : n.geometry = o[0].toGeometry(), n
        }
    });
    var te = function() {
            for (var t = n.getElementsByTagName("script"), e = "", i = t.length - 1; i >= 0 && (e = t[i].src || "", !h.test(e)); i--) e = "";
            return t = null, e
        },
        ee = function(t) {
            var e = n.createElement("a");
            e.href = t;
            var i = e.protocol,
                o = e.hostname || e.host;
            return 0 !== i.indexOf("http") && (i = "https:"), e = null, i + "//" + o + "/openapi/v3/maps-"
        };
    ! function() {
        var e = function(t, e) {
            this._parse(t);
            var n = this.submodules;
            if (n) {
                for (var i = [], o = 0, s = n.length; o < s; o++) i.push(e + n[o] + ".js");
                this.load(i, Ct(this.boot, this))
            } else this.boot()
        };
        e.prototype = {
            constructor: e,
            exec: function(e) {
                function n() {
                    if (s) {
                        var e = function(e) {
                            for (var n = t, i = e.split("."), o = i.length - 1, s = i[o], r = 0, a = o; r < a; r++) {
                                var h = i[r];
                                if (!(h in n)) return null;
                                n = n[h]
                            }
                            return n[s]
                        }(s);
                        e && (o.jsContentLoaded = !0, e())
                    }
                    o.onJSContentLoaded && (o.jsContentLoaded = !0, o.onJSContentLoaded())
                }
                if (!o.jsContentLoaded) {
                    var s = this.callback;
                    t.clearTimeout(this._t), i.isNumber(e) ? this._t = t.setTimeout(n, e) : n()
                }
            },
            boot: function() {
                var e = Ut.addDOMListener(t, "load", Ct(function() {
                    Ut.removeDOMListener(e), e = null, this.exec()
                }, this));
                this.exec(), o.jsContentLoaded || "complete" !== n.readyState || this.exec(10);
            },
            load: function(t, e) {
                var i = navigator.connection || {},
                    o = "cellular" === i.type && i.downlinkMax <= .115;
                "loading" !== n.readyState || o ? this._async(t, e) : this._sync(t, e)
            },
            _parse: function(t) {
                var e = t.split("?")[1];
                if (e) {
                    e = e.replace(/&amp;/gi, "&").split("&");
                    for (var n = e.length - 1; n >= 0; n--) {
                        var i = e[n];
                        if (0 === i.indexOf("submodules=")) {
                            var o = i.replace("submodules=", "");
                            o && (this.submodules = o.split(","))
                        } else 0 === i.indexOf("callback=") && (this.callback = i.replace("callback=", ""))
                    }
                }
            },
            _sync: function(t, e) {
                i.forEach(t, function(t) {
                    n.write('<script type="text/javascript" src="' + t + '"></script>')
                }), e()
            },
            _async: function(t, e) {
                for (var i = t.length, o = 0, s = function() {
                        o++, o >= i && e()
                    }, r = n.body || n.getElementsByTagName("head")[0], a = 0, h = i; a < h; a++) {
                    var l = n.createElement("script");
                    l.type = "text/javascript", l.src = t[a], "readyState" in l ? l.onreadystatechange = function() {
                        "loaded" != l.readyState && "complete" != l.readyState || (l.onreadystatechange = null, s())
                    } : l.onload = s, r.appendChild(l)
                }
            }
        };
        var s = (te || Ot)() || "",
            r = (ee || Ot)(s) || "";
        new e(s, r)
    }(),
    function() {
        if (!t.naver || !t.naver.maps) {
            i.isDefined(t.naver) || (t.naver = {}), Lt.DOM = Zt, Lt.DOMEvent = Ft, Lt.jsonp = i.jsonp, Lt.CalcControlPosition = i.CalcControlPosition, It(o, {
                Map: i.Map,
                MapTypeId: {
                    NORMAL: "normal",
                    TERRAIN: "terrain",
                    SATELLITE: "satellite",
                    HYBRID: "hybrid"
                },
                Point: Dt,
                PointBounds: Bt,
                LatLng: Rt,
                LatLngBounds: Nt,
                Size: Vt,
                Event: Ut,
                KVO: i.KVO,
                KVOArray: i.KVOArray,
                Layer: i.Layer,
                BicycleLayer: i.BicycleLayer,
                CadastralLayer: i.CadastralLayer,
                LabelLayer: i.LabelLayer,
                StreetLayer: i.StreetLayer,
                TrafficLayer: i.TrafficLayer,
                Marker: i.Marker,
                InfoWindow: i.InfoWindow,
                GroundOverlay: i.GroundOverlay,
                OverlayView: i.OverlayView,
                PaneTypeRegistry: i.MapTypeRegistry,
                MapTypeRegistry: i.MapTypeRegistry,
                Polyline: i.Polyline,
                Polygon: i.Polygon,
                Rectangle: i.Rectangle,
                Ellipse: i.Ellipse,
                Circle: i.Circle,
                Projection: Ht,
                EmptyProjection: i.EmptyProjection,
                UTMK: i.UTMK,
                UTMK_NAVER: i.UTMK_NAVER,
                EPSG3857: i.EPSG3857,
                Tile: i.Tile,
                ImageTile: i.ImageTile,
                CanvasTile: i.CanvasTile,
                ImageMapType: i.ImageMapType,
                CanvasMapType: i.CanvasMapType,
                NaverMapTypeOption: Qt,
                TileIndexPane: i.TileIndexPane,
                CustomControl: i.CustomControl,
                ScaleControl: i.ScaleControl,
                LogoControl: i.LogoControl,
                MapDataControl: i.MapDataControl,
                MapTypeControl: i.MapTypeControl,
                MapTypeControlStyle: y,
                ZoomControl: i.ZoomControl,
                ZoomControlStyle: y,
                SymbolPath: E,
                SymbolStyle: M,
                Position: m,
                Animation: P,
                PointingIcon: S,
                Util: Lt,
                Data: i.DataLayer,
                Feature: i.Feature,
                Geometry: i.Geometry,
                DataConverter: i.Converter
            }), t.naver.maps = o;
            var e = Ut.addListener(o, ot, function(t) {
                bt ? (Ut.removeListener(e), e = null) : u(t)
            });
            V && (o.VERSION = s)
        }
    }(), !t.N && t.naver.maps && (t.N = t.naver.maps)
}(window);