$(document).ready(function () {
    function e(e) {
        var n = $(".imgbox > div:first").width();
        $(".imgbox").stop(!0, !1).animate({
            marginLeft: -n * e + "px"
        }, 500), $(".bannernav li").removeClass("on").eq(e).addClass("on")
    }

    function n() {
        return "placeholder" in document.createElement("input")
    }
    var a, l = $(".bannernav > li").length,
        t = 0,
        r = $(".feedback"),
        o = $(".closebtn3");
    $(".bannernav li").click(function () {
        t = $(".bannernav li").index(this), e(t)
    }).eq(0).mouseover(), $(".bannerbox").hover(function () {
        clearInterval(a)
    }, function () {
        a = setInterval(function () {
            e(t), t++, t == l && (t = 0)
        }, 2e3)
    }).trigger("mouseleave"), $(".say").click(function () {
        r.show(), n() || $("[placeholder]").focus(function () {
            var e = $(this);
            e.val() == e.attr("placeholder") && (e.val(""), e.removeClass("placeholder"))
        }).blur(function () {
            var e = $(this);
            ("" == e.val() || e.val() == e.attr("placeholder")) && (e.addClass("placeholder"), e.val(e.attr("placeholder")))
        }).blur()
    }), o.click(function () {
        r.hide()
    })
});