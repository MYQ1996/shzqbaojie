function qyfwInput(e, t, n) {
    return '<div class="qyfwContentList tcf-flex tcf-drection-row tcf-align-items-center"><span class="qyfw-left">' + e + '</span><input onchange="intenChangeFn(this)" data-ukey="' + n + '" class="qyfw-right-input" type="text" maxlength="' + t + '"/></div>'
}

function qyfwSelect(e, t, n) {
    return '<div class="qyfwContentList  tcf-flex tcf-drection-row tcf-align-items-center"><span class="qyfw-left">' + e + '</span><select class="qyfw-right"  onchange="intenChangeFn(this)"  data-ukey="' + n + '">' + t + "</select></div>"
}

function qyfwTextarea(e, t, n, a) {
    return '<div class="qyfwContentList tcf-flex tcf-drection-row tcf-align-items-center"><span class="qyfw-left">' + e + '</span><textarea  onchange="intenChangeFn(this)"  data-ukey="' + a + '" maxlength="' + n + '" class="qyfw-right-input" placeholder="' + t + '"></textarea></div>'
}

function checkPhone(e) {
    return /^1\d{10}$/.test(e) ? !0 : !1
}

function getScodes(e) {
    var t = '<div class="qyfw-serviceType">';
    $.ajax({
        type: "GET",
        url: "https://api-gateway-cust.ayibang.com/v3/intentofficial/getscodes",
        async: !1,
        headers: {
            Authorization: e,
            APP_CHANNEL: "aybweb",
            APPCHANNEL: "aybweb"
        },
        success: function (e) {
            $(".qyfw-top").empty(), scodeCity = e;
            for (var n = 0; n < e.length; n++) t += (n + 1) % 3 == 0 ? '<span class="qyfw-serviceType-list" data-scode="' + e[n].scode + '">' + e[n].name + "</span></br>" : '<span class="qyfw-serviceType-list" data-scode="' + e[n].scode + '">' + e[n].name + "</span>";
            t += "</div>", $(".qyfw-top").append(selectService("閫夋嫨鏈嶅姟", t)), scodeClickFn()
        },
        error: function (e) {
            var t = JSON.parse(e.responseText).error.message;
            alert(t)
        }
    })
}

function selectService(e, t) {
    return '<div class="qyfwContentList  tcf-flex tcf-drection-row tcf-align-items-center"><span class="qyfw-left">' + e + "</span><div>" + t + "</div></div>"
}

function getContent(e) {
    for (var t = 0; t < e.length; t++)
        if ("input" == e[t].type) $(".qyfw-content").append(qyfwInput(e[t].name, e[t].fieldLimit.upperLimit, e[t].ukey));
        else if ("select" == e[t].type) {
        for (var n = e[t].options, a = '<option value="">' + e[t].description + "</option>", s = 0; s < n.length; s++) a += '<option value="' + n[s].value + '">' + n[s].title + "</option>";
        $(".qyfw-content").append(qyfwSelect(e[t].name, a, e[t].ukey))
    } else "textarea" == e[t].type && $(".qyfw-content").append(qyfwTextarea(e[t].name, e[t].description, e[t].fieldLimit.upperLimit, e[t].ukey))
}

function order(e) {
    scodeSelected = e, $(".qyfwYy-bj").css("display", "block"), $(".qyfwYyContent").css("display", "none"), $(".successBox").css("display", "none"), $(".enterpriselogin").css("display", "none"), $(".enterpriselogin").css("display", "block")
}

function closebtnEnFn() {
    var e = new Date;
    $.cookie("captcha", 0, {
        path: "/",
        expires: new Date(e - 864e5)
    }), document.cookie = "", clearInterval(resendEn), enobtain.val("鑾峰彇楠岃瘉鐮�"), enobtain.css("background", "#ccc"), enobtain.attr("disabled", !0), myphone.val(""), verif.val(""), $(".enterpriselogin").hide(), $(".qyfwYy-bj").hide()
}

function getContentList(e, t) {
    _scode = e, $(".allCity").html("");
    for (var n = '<option value="">璇烽€夋嫨鎵€鍦ㄥ煄甯�</option>', a = 0; a < scodeCity.length; a++)
        if (e == scodeCity[a].scode)
            for (var s = 0; s < scodeCity[a].citys.length; s++) n += '<option value="' + scodeCity[a].citys[s].key + '"data-pinyin="' + scodeCity[a].citys[s].pinYin + '">' + scodeCity[a].citys[s].value + "</option>";
    $(".allCity").append(n), $.ajax({
        type: "GET",
        url: "https://api-gateway-cust.ayibang.com/v3/intentofficial/currversion",
        async: !1,
        headers: {
            Authorization: t,
            APP_CHANNEL: "aybweb",
            APPCHANNEL: "aybweb"
        },
        data: {
            scode: _scode
        },
        success: function (e) {
            currversionData = e, e && e.attributes && (required = e.attributes.required, optional = e.attributes.optional, getContent(required), getContent(optional))
        },
        error: function (e) {
            var t = JSON.parse(e.responseText).error.message;
            alert(t)
        }
    })
}

function scodeClickFn() {
    $(".qyfw-serviceType-list").click(function () {
        subObj = {}, subObjf = {}, _button = 0, $("#qyfwButton").removeClass("buttonAddClass"), $(".qyfw-content").html(""), _scode = $(this).attr("data-scode"), $(this).siblings(".qyfw-serviceType-list").removeClass("addClass"), $(this).addClass("addClass"), getContentList(_scode, verToken)
    })
}

function intenChangeFn(e) {
    $("#qyfwButton").removeClass("buttonAddClass");
    for (var t = $(e).attr("data-ukey"), n = 0; n < required.length; n++)
        if (t == required[n].ukey)
            if ("input" == required[n].type) {
                var a = $(e).val();
                a ? subObj[t] = a : delete subObj[t]
            } else if ("select" == required[n].type) {
        var s = $(e).prop("value");
        s ? subObj[t] = s : delete subObj[t]
    } else if ("textarea" == required[n].type) {
        var i = $(e).val();
        i ? subObj[t] = i : delete subObj[t]
    }
    for (var n = 0; n < optional.length; n++)
        if (t == optional[n].ukey)
            if ("input" == optional[n].type) {
                var o = $(e).val();
                o ? subObjf[t] = o : delete subObjf[t]
            } else if ("select" == optional[n].type) {
        var c = $(e).prop("value");
        c ? subObjf[t] = c : delete subObjf[t]
    } else if ("textarea" == optional[n].type) {
        var r = $(e).val();
        r ? subObjf[t] = r : delete subObjf[t]
    }
    var l = Object.keys(subObj);
    l.length == required.length && $("#selectCity").val() && $("#inputPhone").val() && checkPhone($("#inputPhone").val()) && ($("#qyfwButton").addClass("buttonAddClass"), _button = 1)
}
var scodeSelected = "",
    scodeCity, cityPinyin;
$(".qyfw-close").click(function () {
    $(".qyfwYy-bj").css("display", "none"), $("#inputPhone").val("")
});
var env = {
        hex: "08fe2621d8e716b02ec0da35256a998d"
    },
    myphone = $("#enphone"),
    verif = $("#encode"),
    enobtain = $("#enobtain"),
    loginSubmitBtn = $("#loginSubmitBtn"),
    vervalue = "",
    phoneVal = "",
    verToken = "";
enobtain.css("background", "#ccc"), enobtain.attr("disabled", !0), loginSubmitBtn.css("background", "#ccc"), loginSubmitBtn.attr("disabled", !0);
var resendEn = null,
    isCorrectPhone = !1,
    isHaveCode = !1;
myphone.bind("input", function () {
    myphone.val().match(/(^1[0-9]{10}$)/) ? (enobtain.css("background", "#00beaf"), enobtain.removeAttr("disabled"), isCorrectPhone = !0) : (clearInterval(resendEn), enobtain.val("鑾峰彇楠岃瘉鐮�"), myphone.focus(), enobtain.css("background", "#ccc"), enobtain.attr("disabled", !0), isCorrectPhone = !1, loginSubmitBtn.css("background", "#ccc"), loginSubmitBtn.attr("disabled", !0))
}), verif.bind("input", function () {
    verif.val() && isCorrectPhone && isHaveCode ? (loginSubmitBtn.css("background", "#00beaf"), loginSubmitBtn.removeAttr("disabled")) : (loginSubmitBtn.css("background", "#ccc"), loginSubmitBtn.attr("disabled", !0))
}), loginSubmitBtn.click(function () {
    vervalue = verif.val(), phoneVal = myphone.val(), $.ajax({
        url: "https://oauth.ayibang.com/oauth2/access_token",
        dataType: "json",
        async: !0,
        data: {
            username: phoneVal,
            password: vervalue,
            grant_type: "password",
            scope: "total",
            client_secret: "3N5X43NC",
            client_id: "MhXzkHlBrySjHhRhl"
        },
        type: "post",
        success: function (e) {
            if (verToken = e.access_token) {
                closebtnEnFn(), $(".qyfwYy-bj").css("display", "block"), $(".qyfwYyContent").css("display", "block"), $(".qyfw-serviceType-list").removeClass("addClass"), $("#qyfwButton").removeClass("buttonAddClass"), $(".qyfw-content").html("");
                for (var t = scodeSelected, n = 0; n < $(".qyfw-serviceType-list").length; n++) {
                    var a = $(".qyfw-serviceType-list").eq(n).attr("data-scode");
                    t == a && $(".qyfw-serviceType-list").eq(n).addClass("addClass")
                }
                getScodes(verToken), getContentList(t, verToken)
            }
        },
        error: function (e) {
            var t = JSON.parse(e.responseText).error.message;
            alert(t)
        }
    })
}), $(".enobtain").click(function (e) {
    clearInterval(resendEn), e.preventDefault();
    var t = $(this),
        n = 60;
    vervalue = verif.val(), phoneVal = myphone.val(), mydate = new Date; {
        var a = +new Date,
            s = hex_md5(env.hex + hex_sha1(hex_md5(phoneVal + a)));
        Date.parse(mydate)
    }
    if ("" == myphone.val()) alert("璇疯緭鍏ユ墜鏈哄彿"), myphone.focus();
    else {
        if (!myphone.val().match(/(^1[0-9]{10}$)/)) return alert("鎵嬫満鍙风爜鏍煎紡涓嶆纭�"), myphone.val("").focus(), !1;
        resendEn = setInterval(function () {
            n--, n > 0 ? (t.attr("disabled", !0).val(n + "绉�"), $.cookie("captcha", n, {
                path: "/",
                expires: 1 / 86400 * n
            }), $("#enobtain").css("background", "#ccc")) : (clearInterval(resendEn), t.val("鑾峰彇楠岃瘉鐮�").removeAttr("disabled"), $("#enobtain").css("background", "#00beaf"))
        }, 1e3), $.ajax({
            url: "https://api-gateway-cust.ayibang.com/vcode",
            dataType: "json",
            async: !0,
            data: {
                mobile: phoneVal,
                time: a,
                signature: s
            },
            type: "get",
            success: function () {
                isHaveCode = !0
            },
            error: function (e) {
                var t = JSON.parse(e.responseText).error.message;
                alert(t)
            }
        })
    }
}), $("#closebtnEn").click(closebtnEnFn);
var _scode, currversionData, required, optional, subObj = {},
    subObjf = {},
    _button = 0;
$("#qyfwButton").click(function () {
    if (1 == _button) {
        var e = {},
            t = {};
        t.scode = _scode, t.cityID = $("#selectCity").val();
        var n = $("#selectCity").find("option:selected").attr("data-pinyin");
        t.addrPhone = $("#inputPhone").val(), t.channel = "aybweb", t.modelID = currversionData.model.id;
        var a = [],
            s = {};
        for (var i in subObj) {
            var o = {};
            o.name = i, o.value = subObj[i], a.push(o)
        }
        for (var c in subObjf) {
            var r = {};
            r.name = c, r.value = subObjf[c], a.push(r)
        }
        s.remark = "", s.scode = _scode, s.content = a, e.order = t, e.intention = s, $.ajax({
            type: "POST",
            url: "https://api-gateway-cust.ayibang.com/v3/intentofficial/reserve",
            async: !1,
            data: {
                intention: e
            },
            headers: {
                Authorization: verToken,
                APP_CHANNEL: "aybweb",
                APPCHANNEL: "aybweb",
                CITY: n
            },
            success: function () {
                $(".qyfwYyContent").css("display", "none"), $(".successBox").css("display", "block")
            },
            error: function (e) {
                var t = JSON.parse(e.responseText).error.message;
                alert(t)
            }
        })
    }
});