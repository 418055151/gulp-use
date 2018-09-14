webpackJsonp([10], {
    477: function(e, n, t) {
        "use strict";
        function o(e) {
            var n = e > 100 ? "放大" : "缩小"
              , t = '<p style="line-height:24px;">你的浏览器目前处于' + n + '状态，会导致页面显示不正常，你可以键盘按“ctrl+数字0”组合键恢复初始状态。<span id="stop-remind" style="' + v + '">不再显示</span></p></div>';
            m(".header-index").length && (h += "z-index:1001;position:absolute"),
            m("#edu-low-version").length || (a ? s !== n && (a.innerHTML = t) : (a = document.createElement("div"),
            a.id = "zoom-warn",
            a.style.cssText = h,
            a.innerHTML = t,
            m(document.body).prepend(a)),
            s = n)
        }
        function i() {
            a && (a.parentNode.removeChild(a),
            a = null)
        }
        function r(e) {
            var n = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
            return n ? decodeURIComponent(n[2]) : ""
        }
        function d(e, n, t, o, i) {
            var r = new Date;
            r.setTime(r.getTime() + (i ? 36e5 * i : 2592e6)),
            document.cookie = e + "=" + n + "; expires=" + r.toGMTString() + "; path=" + (o || "/") + "; " + (t ? "domain=" + t + ";" : "")
        }
        function c() {
            setTimeout(function() {
                var e = l.zoom();
                e ? e *= 100 : e = 100,
                e >= 105 || e <= 95 ? o(e) : a && i()
            }, 1e3)
        }
        function u() {
            !r(f) && c()
        }
        var a, s, m = t(0), l = t(699), h = "height:24px;width:100%;text-align:center;background-color:#F6F6CC;color:#333;", v = "cursor:pointer;color:#369;", f = "stop_remind_zoom", x = m(window);
        m(document.body).on("click", "#stop-remind", function() {
            d(f, f),
            i()
        }),
        x.resize(function() {
            u()
        }),
        m(function() {
            u()
        })
    },
    699: function(e, n, t) {
        "use strict";
        var o = function() {
            return window.devicePixelRatio || 1
        }
          , i = function() {
            var e, n, t, o = "position:absolute;left:-2000px;height:1px;", i = document.createElement("div"), r = document.createElement("div"), d = document.createElement("div");
            return i.style.cssText = "width:16px;" + o,
            document.body.appendChild(i),
            r.style.fontSize = "medium",
            d.style.cssText = "width:1em;" + o,
            r.appendChild(d),
            document.body.appendChild(r),
            e = i.offsetWidth,
            n = d.offsetWidth,
            t = n / e,
            document.body.removeChild(i),
            document.body.removeChild(r),
            t
        }
          , r = function() {
            return {
                zoom: 1,
                devicePxPerCssPx: 1
            }
        }
          , d = function() {
            var e = Math.round(screen.deviceXDPI / screen.logicalXDPI * 100) / 100;
            return {
                zoom: e,
                devicePxPerCssPx: e * o()
            }
        }
          , c = function() {
            var e = document.body.getBoundingClientRect()
              , n = (e.right - e.left) / document.body.offsetWidth;
            return n = Math.round(100 * n) / 100,
            {
                zoom: n,
                devicePxPerCssPx: n * o()
            }
        }
          , u = function() {
            var e = 90 === Math.abs(window.orientation) ? screen.height : screen.width
              , n = e / window.innerWidth;
            return n = 1,
            {
                zoom: n,
                devicePxPerCssPx: n * o()
            }
        }
          , a = function() {
            var e = window.outerWidth / window.innerWidth;
            return e = Math.round(100 * e) / 100,
            {
                zoom: e,
                devicePxPerCssPx: e * o()
            }
        }
          , s = function() {
            var e = h("min--moz-device-pixel-ratio", "", 0, 10, 20, 1e-4);
            return e = Math.round(100 * e) / 100,
            {
                zoom: e,
                devicePxPerCssPx: e
            }
        }
          , m = function() {
            return {
                zoom: s().zoom,
                devicePxPerCssPx: o()
            }
        }
          , l = function() {
            var e = window.outerWidth / window.innerWidth;
            return e = Math.round(100 * e) / 100,
            {
                zoom: e,
                devicePxPerCssPx: e * o()
            }
        }
          , h = function(e, n, t, o, i, r) {
            function d(t, o, i) {
                var u = (t + o) / 2;
                return i <= 0 || o - t < r ? u : c("(" + e + ":" + u + n + ")").matches ? d(u, o, i - 1) : d(t, u, i - 1)
            }
            var c, u, a, s;
            window.matchMedia ? c = window.matchMedia : (u = document.getElementsByTagName("head")[0],
            a = document.createElement("style"),
            u.appendChild(a),
            s = document.createElement("div"),
            s.className = "mediaQueryBinarySearch",
            s.style.display = "none",
            document.body.appendChild(s),
            c = function(e) {
                a.sheet.insertRule("@media " + e + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0);
                var n = "underline" == getComputedStyle(s, null).textDecoration;
                return a.sheet.deleteRule(0),
                {
                    matches: n
                }
            }
            );
            var m = d(t, o, i);
            return s && (u.removeChild(a),
            document.body.removeChild(s)),
            m
        }
          , v = function() {
            var e = r
              , n = navigator.userAgent.toLowerCase();
            return isNaN(screen.deviceXDPI) || isNaN(screen.logicalXDPI) ? -1 !== n.indexOf("msie 7.") ? e = c : "ontouchstart"in window && "string" == typeof document.body.style.webkitTextSizeAdjust ? e = u : -1 !== n.indexOf("webkit") ? e = a : -1 !== n.indexOf("opera") ? e = l : -1 !== n.indexOf("firefox") && window.devicePixelRatio ? e = m : s().zoom > .001 && (e = s) : e = d,
            e
        }();
        e.exports = {
            zoom: function() {
                return v().zoom
            },
            device: function() {
                return v().devicePxPerCssPx
            },
            zoomText: function() {
                return i()
            }
        }
    }
});
