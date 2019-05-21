$(function () {
    function t(t) {
        return 0 == t.length ? !1 : !0
    }
    var n = !1,
        e = $(".cengboxindex");
    // e.load("comment.html");
    var o, i, a = $("#activityon"),
        r = $(".hiring"),
        c = "http://activity.ayibang.com/2016/zhaopin/index.html?type=2",
        d = ($("html"), navigator.userAgent, t(a));
    $(".hiringhref").attr("href", c), r.on("click", function () {
        return $(window).width() <= 750 ? void(window.location.href = c) : (n = !0, o = $(".cengboxindex"), i = $(".serviceurl"), d && (a.removeClass("on"), r.addClass("on")), i.attr("src", c), o.show(), void document.addEventListener("touchmove", function (t) {
            n && (t.preventDefault(), t.stopPropagation())
        }))
    }), e.on("click", function (t) {
        if (t.target && "DIV" == t.target.nodeName) {
            var e = t.target.className.split(" ");
            for (var c in e) "closebtnindex" == e[c] && (o.hide(), i.attr("src", ""), n = !1, d && (a.addClass("on"), r.removeClass("on")))
        }
    })
});