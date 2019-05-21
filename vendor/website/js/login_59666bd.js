! function (a) {
    a(document).ready(function () {
        function e(e) {
            for (var o = "", c = 0; c < e.length; c++) {
                var n = "<li data-value=" + e[c].classify.id + ">" + e[c].classify.name + "</li>";
                o += n
            }
            a("#yjfkItemsPhone") && a("#yjfkItemsPhone").append(o), a("#yjfkItems") && a("#yjfkItems").append(o), t()
        }

        function t() {
            a("#yjfkItems").on("click", function (e) {
                var e = e || window.event,
                    t = a(e.target);
                "li" == t[0].nodeName.toLowerCase() && (c = t.attr("data-value"), o = t.html(), n && n.removeClass("currBg"), t.addClass("currBg"), n = t)
            })
        }
        var o = "",
            c = "",
            n = "";
        a.ajax({
            type: "GET",
            url: "https://api-gateway-cust.ayibang.com:443/v2/cms/listsConf",
            async: !1,
            success: function (a) {
                a && a.datas && e(a.datas)
            }
        });
        var s = !0,
            r = a("#obtainphone"),
            l = (a("#noThing"), a("#code")),
            i = null;
        if (clearInterval(i), a.cookie("captcha")) {
            clearInterval(i);
            var d = a.cookie("captcha"),
                v = a("#obtaincode");
            v.val(d + "绉掑悗閲嶆柊鑾峰彇").attr("disabled", !0), i = setInterval(function () {
                d--, d > 0 ? (v.val(d + "绉�").attr("disabled", !0).css({
                    background: "#ccc"
                }), a.cookie("captcha", d, {
                    path: "/",
                    expires: 1 / 86400 * d
                })) : (clearInterval(i), v.val("鑾峰彇楠岃瘉鐮�").removeClass("disabled").removeAttr("disabled style").css({
                    background: "#00beaf"
                }))
            }, 1e3)
        }
        a("#obtaincode").click(function (e) {
            clearInterval(i), e.preventDefault(); {
                var t = a(this),
                    o = 60,
                    c = (a("#code").val(), a("#obtainphone").val()),
                    n = new Date;
                Date.parse(n)
            }
            if ("" == r.val()) alert("璇疯緭鍏ユ墜鏈哄彿"), r.focus();
            else {
                if (!r.val().match(/(^1[3|5|7|8|4][0-9]{9}$)/)) return alert("鎵嬫満鍙风爜鏍煎紡涓嶆纭�"), r.val("").focus(), !1;
                i = setInterval(function () {
                    o--, o > 0 ? (t.attr("disabled", !0).val(o + "绉�"), a.cookie("captcha", o, {
                        path: "/",
                        expires: 1 / 86400 * o
                    }), a("#obtaincode").css("background", "#ccc")) : (clearInterval(i), t.val("鑾峰彇楠岃瘉鐮�").removeAttr("disabled"), a("#obtaincode").css("background", "#00beaf"))
                }, 1e3), a.ajax({
                    url: "https://api-gateway-cust.ayibang.com:443/v2/cms/getVcode",
                    dataType: "json",
                    async: !0,
                    data: {
                        phone: c
                    },
                    type: "get",
                    success: function () {},
                    error: function () {}
                })
            }
        });
        var p = a("#submitBtn");
        p.on("click", function () {
            p.prop("disabled", !1);
            var e = a("#obtaincode"),
                t = a("#opinion").val(),
                n = a("#obtainphone").val(),
                v = a("#code").val();
            if ("" == t) alert("鎰忚涓嶈兘涓虹┖"), r.focus();
            else if ("" == n) alert("鎵嬫満鍙蜂笉鑳戒负绌�");
            else {
                if (!r.val().match(/(^1[3|5|7|8|4][0-9]{9}$)/)) return alert("鎵嬫満鍙风爜鏍煎紡涓嶆纭�"), r.val("").focus(), !1;
                if ("" == l.val()) return alert("璇疯緭鍏ラ獙璇佺爜"), l.val("").focus(), !1;
                if (!l.val().match(/(^\d{4}$)/)) return alert("楠岃瘉鐮佹牸寮忎笉姝ｇ‘"), l.val("").focus(), !1;
                if (p.prop("disabled", !0), !s) return;
                s = !1, a.ajax({
                    url: "https://api-gateway-cust.ayibang.com:443/v2/cms/feedBackWeb",
                    dataType: "json",
                    async: !0,
                    data: {
                        phone: n,
                        content: t,
                        vcode: v,
                        classifyID: c,
                        classifyName: o
                    },
                    type: "post",
                    success: function () {
                        s = !0, alert("瀹㈡湇灏忓宸茬粡鏀跺埌鎮ㄧ殑鎰忚鍙嶉锛屼細鍦ㄧ涓€鏃堕棿缁欐偍瑙ｅ喅鍝"), a(".feedback").hide(), a("#opinion").val(""), a("#obtainphone").val(""), a("#code").val("");
                        var t = new Date;
                        a.cookie("captcha", d, {
                            path: "/",
                            expires: new Date(t - 864e5)
                        }), document.cookie = "", clearInterval(i), e.val("鑾峰彇楠岃瘉鐮�").removeClass("disabled").removeAttr("disabled style").css({
                            background: "#00beaf"
                        }), p.prop("disabled", !1)
                    },
                    error: function (e) {
                        s = !0;
                        var t = JSON.parse(e.responseText).error.message;
                        alert(t), a("#code").val(""), a("#submitBtn").prop("disabled", !1)
                    }
                })
            }
        }), a(".closebtn3").click(function () {
            var e = new Date;
            a.cookie("captcha", 0, {
                path: "/",
                expires: new Date(e - 864e5)
            }), document.cookie = "", clearInterval(i), a("#obtaincode").val("鑾峰彇楠岃瘉鐮�").removeClass("disabled").removeAttr("disabled style").css({
                background: "#00beaf"
            }), a("#obtainphone").val(""), a("#opinion").val(""), p.prop("disabled", !1), a(".feedback").hide()
        })
    })
}(window.jQuery || window.Zepto, window);