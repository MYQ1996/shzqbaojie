function hex_sha1(r) {
    return binb2hex(core_sha1(str2binb(r), r.length * chrsz))
}

function b64_sha1(r) {
    return binb2b64(core_sha1(str2binb(r), r.length * chrsz))
}

function str_sha1(r) {
    return binb2str(core_sha1(str2binb(r), r.length * chrsz))
}

function hex_hmac_sha1(r, a) {
    return binb2hex(core_hmac_sha1(r, a))
}

function b64_hmac_sha1(r, a) {
    return binb2b64(core_hmac_sha1(r, a))
}

function str_hmac_sha1(r, a) {
    return binb2str(core_hmac_sha1(r, a))
}

function sha1_vm_test() {
    return "a9993e364706816aba3e25717850c26c9cd0d89d" == hex_sha1("abc")
}

function core_sha1(r, a) {
    r[a >> 5] |= 128 << 24 - a % 32, r[(a + 64 >> 9 << 4) + 15] = a;
    for (var n = Array(80), t = 1732584193, h = -271733879, e = -1732584194, c = 271733878, s = -1009589776, o = 0; o < r.length; o += 16) {
        for (var b = t, _ = h, f = e, u = c, i = s, d = 0; 80 > d; d++) {
            n[d] = 16 > d ? r[o + d] : rol(n[d - 3] ^ n[d - 8] ^ n[d - 14] ^ n[d - 16], 1);
            var l = safe_add(safe_add(rol(t, 5), sha1_ft(d, h, e, c)), safe_add(safe_add(s, n[d]), sha1_kt(d)));
            s = c, c = e, e = rol(h, 30), h = t, t = l
        }
        t = safe_add(t, b), h = safe_add(h, _), e = safe_add(e, f), c = safe_add(c, u), s = safe_add(s, i)
    }
    return Array(t, h, e, c, s)
}

function sha1_ft(r, a, n, t) {
    return 20 > r ? a & n | ~a & t : 40 > r ? a ^ n ^ t : 60 > r ? a & n | a & t | n & t : a ^ n ^ t
}

function sha1_kt(r) {
    return 20 > r ? 1518500249 : 40 > r ? 1859775393 : 60 > r ? -1894007588 : -899497514
}

function core_hmac_sha1(r, a) {
    var n = str2binb(r);
    n.length > 16 && (n = core_sha1(n, r.length * chrsz));
    for (var t = Array(16), h = Array(16), e = 0; 16 > e; e++) t[e] = 909522486 ^ n[e], h[e] = 1549556828 ^ n[e];
    var c = core_sha1(t.concat(str2binb(a)), 512 + a.length * chrsz);
    return core_sha1(h.concat(c), 672)
}

function safe_add(r, a) {
    var n = (65535 & r) + (65535 & a),
        t = (r >> 16) + (a >> 16) + (n >> 16);
    return t << 16 | 65535 & n
}

function rol(r, a) {
    return r << a | r >>> 32 - a
}

function str2binb(r) {
    for (var a = Array(), n = (1 << chrsz) - 1, t = 0; t < r.length * chrsz; t += chrsz) a[t >> 5] |= (r.charCodeAt(t / chrsz) & n) << 32 - chrsz - t % 32;
    return a
}

function binb2str(r) {
    for (var a = "", n = (1 << chrsz) - 1, t = 0; t < 32 * r.length; t += chrsz) a += String.fromCharCode(r[t >> 5] >>> 32 - chrsz - t % 32 & n);
    return a
}

function binb2hex(r) {
    for (var a = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", t = 0; t < 4 * r.length; t++) n += a.charAt(r[t >> 2] >> 8 * (3 - t % 4) + 4 & 15) + a.charAt(r[t >> 2] >> 8 * (3 - t % 4) & 15);
    return n
}

function binb2b64(r) {
    for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", t = 0; t < 4 * r.length; t += 3)
        for (var h = (r[t >> 2] >> 8 * (3 - t % 4) & 255) << 16 | (r[t + 1 >> 2] >> 8 * (3 - (t + 1) % 4) & 255) << 8 | r[t + 2 >> 2] >> 8 * (3 - (t + 2) % 4) & 255, e = 0; 4 > e; e++) n += 8 * t + 6 * e > 32 * r.length ? b64pad : a.charAt(h >> 6 * (3 - e) & 63);
    return n
}
var hexcase = 0,
    b64pad = "",
    chrsz = 8;