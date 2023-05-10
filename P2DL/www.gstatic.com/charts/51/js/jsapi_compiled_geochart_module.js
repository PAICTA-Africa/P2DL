var gvjs_iZ = 'Failed geocoding "',
    gvjs_jZ = "Requested map does not exist.",
    gvjs_kZ = "The visualization is not ready yet.",
    gvjs_lZ = "bottom_left",
    gvjs_mZ = "feature",
    gvjs_nZ = "featureClick",
    gvjs_oZ = "featureHover",
    gvjs_pZ = "featureMove",
    gvjs_qZ = "google.visualization.GeoChart.mapExists",
    gvjs_rZ = "google.visualization.GeoChart.setMapsSource",
    gvjs_sZ = "kavrayskiy-vii",
    gvjs_tZ = "magnifyingGlassBorder",
    gvjs_uZ = "magnifyingGlassTriangle",
    gvjs_vZ = "marker",
    gvjs_wZ = "markerClick",
    gvjs_xZ = "markerHover",
    gvjs_yZ = "mercator",
    gvjs_zZ = "natural",
    gvjs_AZ = "top_left";
gvjs_dJ.prototype.xW = gvjs_V(68, function() {
    var a = this,
        b = gvjs_v(this.lines, function(c) {
            var d = a.anchor ? a.anchor : {
                    x: 0,
                    y: 0
                },
                e = gvjs_VA(c.x + d.x, c.length, a.ld);
            c = gvjs_VA(c.y + d.y, a.ja.fontSize, a.Pc);
            return e.start == e.end || c.start == c.end ? null : new gvjs_B(c.start, e.end, c.end, e.start)
        });
    b = gvjs_De(b, function(c) {
        return null != c
    });
    return gvjs_$B(b)
});
gvjs_XA.prototype.cw = gvjs_V(36, function() {
    return !1
});
gvjs_TB.prototype.cw = gvjs_V(35, function() {
    return !0
});

function gvjs_BZ(a) {
    return Math.min(a.width, a.height)
}
var gvjs_mla = {
        gBa: gvjs_yd,
        HAa: gvjs_bd,
        TEXT: gvjs_m,
        YF: gvjs_ub
    },
    gvjs_nla = {
        IM: gvjs_S,
        MM: gvjs_U
    },
    gvjs_ola = ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CS", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN",
        "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "SZ", gvjs_us, "TG", "TH", "TJ", "TL", "TM", "TN", "TO", gvjs_vs, "TT", "TV", "TW", "TZ",
        "UA", "UG", "UM", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "YE", "YU", "ZA", "ZM", "ZW"
    ],
    gvjs_pla = ["ad", "ae", "af", "ag", "al", "am", "ao", "ar", "as", "at", "au", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bw", "by", "bz", "ca", "cd", "cf", "cg", "ch", "ci", "cl", "cm", "co", "cr", "cu", "cv", "cw", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "fi", "fj", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gl", "gm", "gn", "gp", "gq", "gr", "gt", "gw", "gy", "hk",
        "hn", "hr", "ht", "hu", gvjs_5c, "ie", "il", gvjs_Fp, "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "md", "me", "mf", "mg", "mh", "mk", "ml", "mm", "mn", "mp", "mq", "mr", "ms", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sh", "si", "sj", "sk", "sl", "sm",
        "sn", "so", "sr", "ss", "st", "sv", "sx", "sy", "sz", "tc", "td", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "us", "uy", "uz", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xk", "ye", "yt", "za", "zm", "zw"
    ];

function gvjs_qla(a) {
    var b = gvjs_ola;
    "1" === gvjs_QT && (b = gvjs_pla, a = a.toLowerCase());
    return 0 <= gvjs_Iy(b, a)
};

function gvjs_CZ(a) {
    this.selection = new gvjs_$n;
    this.iw = this.Nj = this.iI = this.ff = null;
    if (null != a) {
        this.selection.setSelection(a.selection);
        var b = new gvjs_Aj([a]);
        this.ff = b.cb("focusedFeature");
        this.iI = b.cb("focusedMarker");
        if (null != b.pb("elaborated")) {
            a = b.Aa("elaborated.rowId");
            var c = b.Dq("elaborated.isDisputed"),
                d = b.Aa("elaborated.origin.x");
            b = b.Aa("elaborated.origin.y");
            null != a && null != d && null != b && null != c && (this.Nj = {
                oj: a,
                gJ: c,
                origin: {
                    x: d,
                    y: b
                }
            })
        }
    }
}
gvjs_CZ.prototype.clone = function() {
    var a = new gvjs_CZ;
    a.selection = this.selection.clone();
    a.ff = gvjs_0e(this.ff);
    a.Nj = gvjs_0e(this.Nj);
    a.iw = gvjs_0e(this.iw);
    return a
};
gvjs_CZ.prototype.equals = function(a) {
    return gvjs_Bi(this) == gvjs_Bi(a)
};
var gvjs_DZ = {
    Wza: "continents",
    DBa: "subcontinents",
    Xza: gvjs_qT,
    eBa: gvjs_wT,
    NAa: "metros"
};

function gvjs_EZ(a) {
    this.m = a || {}
}
gvjs_EZ.prototype.project = function() {
    return []
};
gvjs_EZ.prototype.bZ = function() {
    return 1.618
};
gvjs_EZ.prototype.set = function(a, b) {
    this.m[a] = b
};
gvjs_EZ.prototype.Zc = function() {
    return gvjs_0e(this.m)
};

function gvjs_FZ(a) {
    var b = 0,
        c = 0;
    if (a.boundingBox) {
        var d = a.boundingBox.lo;
        c = a.boundingBox.hi;
        b = (c[0] - d[0]) / 2 + d[0];
        c = (c[1] - d[1]) / 2 + d[1]
    }
    d = [29.5, 45.5];
    b = {
        parallels: d,
        origin: {
            lat: b,
            lng: c
        }
    };
    c = b.origin;
    a.origin && Object.assign(c, a.origin);
    Object.assign(b, a);
    b.origin = c;
    b.parallels && 0 !== b.parallels.length ? 2 > b.parallels.length && (b.parallels[1] = Math.abs(b.parallels[0] - d[0]) > Math.abs(b.parallels[0] - d[1]) ? d[0] : d[1]) : b.parallels = d;
    this.m = a || {};
    this.V1 = b.origin.lat / (180 / Math.PI);
    this.$R = b.origin.lng / (180 / Math.PI);
    this.bp = gvjs_v(b.parallels, function(e) {
        return e / (180 / Math.PI)
    })
}
gvjs_o(gvjs_FZ, gvjs_EZ);
gvjs_FZ.prototype.project = function(a) {
    var b = this;
    return gvjs_v(arguments, function(c) {
        var d = c[0] / (180 / Math.PI),
            e = .5 * (Math.sin(b.bp[0]) + Math.sin(b.bp[1]));
        c = e * (c[1] / (180 / Math.PI) - b.$R);
        var f = Math.cos(b.bp[0]);
        f = f * f + 2 * e * Math.sin(b.bp[0]);
        d = Math.sqrt(f - 2 * e * Math.sin(d)) / e;
        return {
            x: 180 / Math.PI * Math.sin(c) * d,
            y: 180 / Math.PI * (Math.sqrt(f - 2 * e * Math.sin(b.V1)) / e - d * Math.cos(c))
        }
    })
};

function gvjs_GZ(a) {
    this.m = a || {}
}
gvjs_o(gvjs_GZ, gvjs_EZ);
gvjs_GZ.prototype.bZ = function() {
    return 2.2
};
gvjs_GZ.prototype.project = function(a) {
    return gvjs_v(arguments, function(b) {
        var c = b[0] / (180 / Math.PI);
        return {
            x: b[1] / (180 / Math.PI) * 3 / (2 * Math.PI) * Math.sqrt(Math.PI * Math.PI / 3 - c * c) * (180 / Math.PI),
            y: c
        }
    })
};

function gvjs_HZ(a) {
    var b = 0,
        c = 0;
    if (a.boundingBox) {
        var d = a.boundingBox.lo;
        c = a.boundingBox.hi;
        b = (c[0] - d[0]) / 2 + d[0];
        c = (c[1] - d[1]) / 2 + d[1]
    }
    d = [20, 50];
    b = {
        parallels: d,
        origin: {
            lat: b,
            lng: c
        }
    };
    c = b.origin;
    a.origin && Object.assign(c, a.origin);
    Object.assign(b, a);
    b.origin = c;
    b.parallels && 0 !== b.parallels.length ? 2 > b.parallels.length && (b.parallels[1] = Math.abs(b.parallels[0] - d[0]) > Math.abs(b.parallels[0] - d[1]) ? d[0] : d[1]) : b.parallels = d;
    this.m = a || {};
    this.V1 = b.origin.lat / (180 / Math.PI);
    this.$R = b.origin.lng / (180 / Math.PI);
    this.bp =
        gvjs_v(b.parallels, function(e) {
            return e / (180 / Math.PI)
        })
}
gvjs_o(gvjs_HZ, gvjs_EZ);
gvjs_HZ.prototype.project = function(a) {
    var b = this;
    return gvjs_v(arguments, function(c) {
        var d = c[1] / (180 / Math.PI),
            e = Math.log(1 / Math.cos(b.bp[1]) * Math.cos(b.bp[0])) / Math.log(1 / Math.tan(.25 * Math.PI + .5 * b.bp[0]) * Math.tan(.25 * Math.PI + .5 * b.bp[1])),
            f = Math.cos(b.bp[0]) * Math.pow(Math.tan(.25 * Math.PI + .5 * b.bp[0]), e) / e;
        c = f * Math.pow(1 / Math.tan(.25 * Math.PI + c[0] / (180 / Math.PI) * .5), e);
        return {
            x: 180 / Math.PI * Math.sin(e * (d - b.$R)) * c,
            y: f * Math.pow(1 / Math.tan(.25 * Math.PI + .5 * b.V1), e) - 180 / Math.PI * Math.cos(e * (d - b.$R)) * c
        }
    })
};

function gvjs_IZ(a) {
    return 180 / Math.PI * (Math.atan(Math.exp(a / (180 / Math.PI))) - Math.PI / 4) * 2
}

function gvjs_JZ() {
    this.Ir = {}
}
gvjs_JZ.prototype.track = function(a) {
    var b = this;
    gvjs_u(arguments, function(c) {
        for (var d in c)
            if (c.hasOwnProperty(d)) {
                d in b.Ir || (b.Ir[d] = {
                    min: Infinity,
                    max: -Infinity
                });
                if (!b.Ir[d].min || c[d] < b.Ir[d].min) b.Ir[d].min = c[d];
                if (!b.Ir[d].max || c[d] > b.Ir[d].max) b.Ir[d].max = c[d]
            }
    })
};
gvjs_JZ.prototype.getBounds = function(a) {
    return {
        min: this.Ir[a].min,
        max: this.Ir[a].max
    }
};

function gvjs_KZ(a) {
    this.m = a || {}
}
gvjs_o(gvjs_KZ, gvjs_EZ);
gvjs_KZ.prototype.project = function(a) {
    return gvjs_v(arguments, function(b) {
        return {
            x: b[1],
            y: 180 / Math.PI * Math.log(Math.tan(b[0] / 180 * .5 * Math.PI + Math.PI / 4))
        }
    })
};
var gvjs_rla = {
        sza: "albers",
        yAa: gvjs_sZ,
        BAa: "lambert",
        MAa: gvjs_yZ
    },
    gvjs_LZ = {};
gvjs_LZ.mercator = gvjs_KZ;
gvjs_LZ[gvjs_sZ] = gvjs_GZ;
gvjs_LZ.albers = gvjs_FZ;
gvjs_LZ.lambert = gvjs_HZ;
var gvjs_sla = {
        NONE: gvjs_f,
        TOP_LEFT: gvjs_AZ,
        TOP_RIGHT: "top_right",
        BOTTOM_LEFT: gvjs_lZ,
        BOTTOM_RIGHT: "bottom_right"
    },
    gvjs_tla = {
        NONE: gvjs_f,
        fBa: gvjs_xT,
        Gza: "bounds",
        HM: gvjs_ut
    };

function gvjs_ula(a) {
    return gvjs_my(a, "projection", {
        name: gvjs_yZ
    }, function(b) {
        b = typeof b === gvjs_l ? b : (gvjs_lj(b) || {}).name;
        b = gvjs_Hj(b, gvjs_rla);
        if (!b) throw Error('The projection you specified, "' + b + '", is not valid.');
        return {
            name: b
        }
    })
}
var gvjs_MZ = {
    region: gvjs_CT,
    resolution: gvjs_qT,
    domain: "COM",
    displayMode: gvjs_ub,
    showGeocodeWarnings: !1,
    backgroundColor: {
        fill: gvjs_Ox,
        stroke: "#666",
        strokeWidth: 0
    },
    datalessRegionColor: "F5F5F5",
    defaultColor: "267114",
    markerOpacity: 1,
    selectionMode: gvjs_Ww,
    fontName: gvjs_2r,
    geocodingContext: gvjs_xT,
    tooltip: {
        isHtml: !1,
        textStyle: {
            fontName: gvjs_2r,
            fontSize: 13,
            color: gvjs_rt
        },
        trigger: gvjs_xu,
        showDisputedText: !1,
        showTitle: !0
    },
    colorAxis: {
        minValue: null,
        maxValue: null,
        values: null
    },
    sizeAxis: {
        minValue: null,
        maxValue: null,
        minSize: 3,
        maxSize: 12
    },
    legend: {
        position: gvjs_lZ,
        orientation: gvjs_S,
        textStyle: {
            color: gvjs_rt,
            auraColor: gvjs_Ox
        }
    },
    marker: {
        style: {
            stroke: {
                color: gvjs_yr,
                width: 1
            }
        }
    },
    projection: gvjs_yZ,
    keepAspectRatio: !0,
    magnifyingGlass: {
        enable: !0,
        zoomFactor: 5
    }
};

function gvjs_NZ(a) {
    gvjs_F.call(this);
    this.Sd = a;
    this.aF = null;
    this.Tfa = !0;
    this.nI = null;
    this.er = new gvjs_LT;
    this.isa = /^([a-zA-Z][a-zA-Z]|[a-zA-Z][a-zA-Z]\-[a-zA-Z0-9](|[a-zA-Z0-9](|[a-zA-Z0-9]))|\d\d\d)$/;
    this.psa = /^\d\d\d$/
}
gvjs_o(gvjs_NZ, gvjs_F);
gvjs_ = gvjs_NZ.prototype;
gvjs_.U3 = function(a) {
    this.aF = a;
    null != this.Ysa && this.Ysa(a)
};

function gvjs_vla(a, b, c, d, e, f) {
    a.Tfa = e;
    if (0 === b.ca()) gvjs_pl(function() {
        f([], [], !0)
    });
    else switch (c.JV) {
        case gvjs_9c:
            a.qX(b, c, f);
            break;
        case gvjs_xd:
            gvjs_wla(a, b, c, d, f);
            break;
        case "address":
            a.pX(b, c, d, f)
    }
}
gvjs_.qX = function(a, b, c) {
    for (var d = [], e = 0; e < a.ca(); e++) {
        var f = a.getValue(e, b.sD),
            g = a.getValue(e, b.yD);
        d[e] = null == f || null == g ? null : {
            lat: gvjs_gg(f),
            lng: gvjs_gg(g)
        }
    }
    gvjs_pl(function() {
        c([], d, !0)
    })
};

function gvjs_wla(a, b, c, d, e) {
    for (var f = [], g = 0; g < b.ca(); g++) f.push(b.getValue(g, c.KK));
    "metros" == d.resolution || "continents" == d.resolution || "subcontinents" == d.resolution ? a.oX(d, f, e) : a.rX(d, f, e)
}
gvjs_.oX = function(a, b, c) {
    a = gvjs_hf(a.region, "US") && "metros" == a.resolution;
    for (var d = [], e = 0; e < b.length; e++) {
        var f = gvjs_gg(b[e]);
        a && this.psa.test(f) && (f = "US-" + f);
        d.push(f.toUpperCase())
    }
    gvjs_pl(function() {
        c(d, [], !0)
    })
};
gvjs_.rX = function(a, b, c) {
    var d = this,
        e = a.region;
    var f = a.resolution == gvjs_wT && gvjs_qla(e) ? e : "countries_en";
    if (a.resolution == gvjs_wT && "US" == e)
        for (a = 0; a < b.length; ++a) {
            var g = b[a];
            2 == g.length && (b[a] = "US-" + g)
        }
    gvjs_RT(f, function(h) {
        h = d.WW(b, h);
        for (var k = [], l = 0; l < b.length; l++)
            if (null == h[l]) {
                var m = b[l];
                k.push({
                    address: m,
                    Fea: l,
                    Aca: null
                });
                h[l] = m
            }
        0 == k.length ? c(h, [], !0) : (c(h, [], !1), gvjs_OZ(d, k, e, c, h))
    })
};
gvjs_.WW = function(a, b) {
    for (var c = [], d = 0; d < a.length; ++d) {
        var e = gvjs_kf(gvjs_gg(a[d])).toLowerCase(),
            f = b && gvjs_TT(b, e);
        e = f ? f : this.isa.test(e) ? e.toUpperCase() : null;
        c.push(e)
    }
    return c
};

function gvjs_PZ(a, b) {
    a.Tfa && a.Sd && gvjs_8x(a.Sd, b)
}
gvjs_.pX = function(a, b, c, d) {
    var e = [];
    c = c.region;
    2 == c.length && (c = c.toUpperCase(), c = c.replace(/GB/, "UK"), c = c.replace(/RU/, "SU"), c = c.replace(/TP/, "TL"));
    for (var f = 0; f < a.ca(); f++) {
        var g = gvjs_gg(a.getValue(f, b.fG));
        gvjs_QZ(this, c) && (g += " " + c);
        e.push({
            address: g,
            Aca: f,
            Fea: null
        })
    }
    gvjs_OZ(this, e, c, d, [])
};

function gvjs_QZ(a, b) {
    return b == gvjs_CT || gvjs_Yy(b) ? !1 : a.nI === gvjs_xT || a.nI === gvjs_ut
}

function gvjs_xla(a) {
    var b = Infinity,
        c = Infinity,
        d = -Infinity,
        e = -Infinity;
    if (null != a.aF && 0 !== a.aF.views.length) return gvjs_u(a.aF.views, function(f) {
        f = f.Ju;
        b = Math.min(b, f.kh[0]);
        c = Math.min(b, f.kh[1]);
        d = Math.max(d, f.xi[0]);
        e = Math.max(d, f.xi[1])
    }), {
        lo: {
            lat: b,
            lng: c
        },
        hi: {
            lat: d,
            lng: e
        }
    }
}

function gvjs_OZ(a, b, c, d, e) {
    for (var f = [], g = [], h = 0; h < b.length; h++) {
        var k = {
            address: b[h].address
        };
        gvjs_QZ(a, c) && (k.region = c);
        "bounds" !== a.nI && a.nI !== gvjs_ut || (k.bounds = gvjs_xla(a));
        g.push(k)
    }
    var l = gvjs_Le(b);
    a.er.create(g, function(m) {
        return a.XZ(l, d, e, f, m)
    }, 1)
}
gvjs_.XZ = function(a, b, c, d, e) {
    for (var f = e.length, g = 0; g < f; g++) {
        var h = a[g],
            k = h.address,
            l = h.Fea;
        h = h.Aca;
        if (e[g] && e[g][0]) {
            var m = e[g][0];
            null != l && (c[l] = gvjs_yla(m), c[l] || (gvjs_PZ(this, gvjs_iZ + k + '"'), c[l] = k));
            null != h && (d[h] = {
                lat: m.geometry.location.lat(),
                lng: m.geometry.location.lng()
            })
        } else null != l && (c[l] = null), null != h && (d[h] = null), gvjs_PZ(this, gvjs_iZ + k + '"')
    }
    gvjs_Ne(a, 0, f);
    (a = 0 == a.length) && gvjs_Ge(c, function(n) {
        return null === n
    }) && gvjs_Ge(d, function(n) {
        return null === n
    }) && gvjs_PZ(this, gvjs_oT);
    b(c, d, a)
};

function gvjs_yla(a) {
    var b = gvjs_Yx(a.address_components, function(c) {
        return 0 <= gvjs_Be(c.types, "country")
    });
    if (!b) return null;
    b = b.short_name;
    "US" == b && (a = gvjs_Yx(a.address_components, function(c) {
        return 0 <= gvjs_Be(c.types, "administrative_area_level_1")
    })) && (b = "US-" + a.short_name);
    return b
}
gvjs_.M = function() {
    this.er.cancel();
    gvjs_F.prototype.M.call(this)
};

function gvjs_RZ(a, b, c) {
    gvjs_F.call(this);
    var d = this;
    this.F = b;
    this.me = function(e, f) {
        return d.F.me(e, f)
    };
    this.Hi = a;
    this.VA = [];
    this.gb = c;
    this.Fd = {};
    this.nc = new gvjs_H;
    this.v0 = this.jw = this.Xu = this.Xv = this.Vs = this.mw = this.pD = null
}
gvjs_o(gvjs_RZ, gvjs_F);
gvjs_RZ.prototype.o = function(a, b) {
    gvjs_G(this.nc, a, b)
};

function gvjs_SZ(a, b) {
    var c = a.F;
    c.clear();
    var d = c.Lm(b.width, b.height);
    a.Fd = {};
    var e = c.Sa();
    gvjs_TZ(a, e, b, new gvjs_5(0, 0, b.width, b.height), !1);
    var f = c.Sa(),
        g = a.F,
        h = g.Sa();
    a.Vs = g.Sa();
    for (var k = 0; k < b.views.length; ++k) gvjs_UZ(a, h, b, b.views[k], !1), gvjs_VZ(a, b, b.views[k]);
    a.mw = g.Sa();
    gvjs_WZ(a, a.mw, b.FD, !1, b.Hj);
    g.appendChild(f, h);
    a.Vs && g.appendChild(f, a.Vs);
    g.appendChild(f, a.mw);
    g = b.$sa;
    f = c.ZG(f, a.cw() ? new gvjs_5(g.left, g.top, g.width - 1, g.height - 1) : g);
    a.Xu = c.Sa();
    gvjs_XZ(a, b);
    a.jw = c.Sa();
    gvjs_YZ(a, b);
    a.Xv = c.Sa();
    gvjs_ZZ(a, b);
    c.appendChild(d, e);
    c.appendChild(e, f);
    c.appendChild(e, a.Xu);
    c.appendChild(e, a.jw);
    c.appendChild(e, a.Xv);
    a.pD = b;
    gvjs_zla(a, d)
}

function gvjs__Z(a, b, c) {
    c = void 0 === c ? !1 : c;
    a.Xv && a.F.qc(a.Xv);
    gvjs_ZZ(a, b);
    if (c || !gvjs_Uz(a.pD.NC, b.NC))
        for (a.Vs && a.F.qc(a.Vs), c = 0; c < b.views.length; ++c) gvjs_VZ(a, b, b.views[c]);
    gvjs_Ala(a, b);
    a.Xu && a.F.qc(a.Xu);
    gvjs_XZ(a, b);
    a.v0 != (b.HJ ? b.HJ.Xo : null) && a.jw && (a.F.qc(a.jw), gvjs_YZ(a, b));
    a.pD = b
}

function gvjs_VZ(a, b, c) {
    var d = a.F.Sa();
    c = gvjs_De(c.features, function(f) {
        return gvjs_He(b.NC, f.id)
    });
    for (var e = 0; e < c.length; ++e) gvjs_Bla(a, d, b, c[e]);
    a.F.appendChild(a.Vs, d)
}

function gvjs_0Z(a, b) {
    var c = a.F;
    gvjs_u(gvjs_lh(a.mw.j()), function(d) {
        gvjs_u(gvjs_lh(d), function(e) {
            c.Re(e)
        }, this)
    }, a);
    gvjs_WZ(a, a.mw, b.FD, !1, b.Hj)
}

function gvjs_Bla(a, b, c, d) {
    a.cw() || (c = c.qC[d.id].Rb, gvjs_1Z(a, b, d, !1, !1, [gvjs_2Z, gvjs_Cla, c.fill]), 0 != d.Rm.length && (gvjs_1Z(a, b, d, !0, !1, [c.Rm]), gvjs_1Z(a, b, d, !1, !1, [c.border])))
}

function gvjs_YZ(a, b) {
    var c = b.HJ;
    if (c) {
        var d = a.jw,
            e = a.F,
            f = c.view.XD,
            g = f.left + f.width / 2,
            h = f.top + f.height / 2,
            k = f.width / 2,
            l = f.height / 2,
            m = c.Bca.x,
            n = c.Bca.y,
            p = new gvjs_3({
                fill: "808080",
                fillOpacity: .25
            }),
            q = new gvjs_SA;
        q.move(m, n);
        q.va(m, n + (h > n ? l : -l));
        q.va(m + (g > m ? k : -k), n);
        q.close();
        m = e.Ia(q, p, d);
        gvjs_3Z(a, m, gvjs_uZ, !0);
        m = new gvjs_3({
            fill: gvjs_Ox
        });
        m = e.Gl(g, h, k, l, m, d);
        gvjs_3Z(a, m, gvjs_tZ, !0);
        m = new gvjs_3({
            stroke: "bfbfbf",
            strokeWidth: 1.5
        });
        m = e.Gl(g, h, k, l, m, d);
        gvjs_3Z(a, m, gvjs_tZ, !0);
        m = e.Sa();
        f = e.ZG(m, new gvjs_5(f.left +
            3.5, f.top + 3.5, f.width - 7, f.height - 7), !0);
        e.appendChild(d, f);
        f = new gvjs_3({
            stroke: "cccccc",
            strokeWidth: 1.5
        });
        d = e.Gl(g, h, k - 3.5, l - 3.5, f, d);
        gvjs_3Z(a, d, gvjs_tZ, !0);
        d = c.view;
        gvjs_TZ(a, m, b, d.XD, !0);
        gvjs_UZ(a, m, b, d, !0);
        gvjs_WZ(a, m, c.FD, !0, b.Hj);
        a.v0 = c.Xo
    } else a.v0 = null
}

function gvjs_ZZ(a, b) {
    0 < a.VA.length && (gvjs_u(a.VA, function(c) {
        this.F.Re(c)
    }, a), a.VA = []);
    a.VA = 0 < b.qu.length ? gvjs_v(b.qu, function(c) {
        return c.html ? gvjs_IG(c, this.Hi.getContainer()) : gvjs_JG(c, this.F, this.Xv).j()
    }, a) : []
}

function gvjs_4Z(a, b) {
    gvjs_w(b.qC, function(c, d) {
        c = c.Rb;
        gvjs_5Z(this, d, gvjs_mZ, c.fill);
        gvjs_5Z(this, d, "disputed", c.Rm);
        gvjs_5Z(this, d, "border", c.border)
    }, a)
}

function gvjs_5Z(a, b, c, d) {
    b = [c, b].join(".");
    b = a.Fd[b];
    if (null != b)
        for (c = 0; c < b.length; ++c) a.F.rj(b[c], d)
}

function gvjs_zla(a, b) {
    function c(e) {
        var f = gvjs_Dla(a, e.target);
        if (f && f.QO) {
            var g = gvjs_Ela(e.type, f.type),
                h = f.elementType;
            f = gvjs_x(f.data);
            e.type == gvjs_kd ? f.Ro = !1 : e.type == gvjs_ld && (f.Ro = !0);
            f.xb = gvjs_qB(e);
            a.nc.dispatchEvent({
                type: g,
                elementType: h,
                data: f
            })
        }
    }
    var d = a.F;
    d.ic(b, gvjs_jd, c);
    d.ic(b, gvjs_kd, c);
    d.ic(b, gvjs_ld, c);
    d.ic(b, gvjs_Wt, c)
}

function gvjs_Ela(a, b) {
    switch (b) {
        case gvjs_mZ:
            switch (a) {
                case gvjs_Wt:
                    return gvjs_nZ;
                case gvjs_jd:
                    return gvjs_pZ;
                case gvjs_kd:
                case gvjs_ld:
                    return gvjs_oZ
            }
        case gvjs_vZ:
            switch (a) {
                case gvjs_Wt:
                    return gvjs_wZ;
                case gvjs_jd:
                    return "markerMove";
                case gvjs_kd:
                case gvjs_ld:
                    return gvjs_xZ
            }
    }
    return null
}

function gvjs_3Z(a, b, c, d) {
    gvjs_6Z(a, b, ["F", c, "1", d ? "1" : "0", "", "0"])
}

function gvjs_6Z(a, b, c) {
    c = c.join("#");
    a.F.kp(b, c)
}

function gvjs_Dla(a, b) {
    a = a.F.xv(b);
    if (!a || a == gvjs_Bs) return null;
    a = a.split("#");
    b = a[1];
    var c = "1" == a[2] ? !0 : !1,
        d = "1" == a[3] ? !0 : !1;
    switch (a[0]) {
        case "F":
            return {
                type: gvjs_mZ,
                elementType: b,
                QO: c,
                data: {
                    iJ: d,
                    featureId: a[4] ? a[4] : null,
                    gJ: "1" == a[5] ? !0 : !1
                }
            };
        case "M":
            return {
                type: gvjs_vZ,
                elementType: b,
                QO: c,
                data: {
                    iJ: d,
                    Xo: a[4],
                    oj: gvjs_jg(a[5]),
                    hD: "1" == a[6] ? !0 : !1
                }
            };
        default:
            return null
    }
}

function gvjs_TZ(a, b, c, d, e) {
    b = a.F.yb(d.left, d.top, d.width, d.height, c.xG, b);
    gvjs_3Z(a, b, "ocean", e)
}

function gvjs_UZ(a, b, c, d, e) {
    for (var f = a.F.Sa(), g = 0; g < d.features.length; ++g) {
        var h = a,
            k = d.features[g],
            l = e,
            m = c.qC[k.id].Rb;
        gvjs_1Z(h, f, k, !1, l, [m.fill], gvjs_mZ);
        0 != k.Rm.length && (gvjs_1Z(h, f, k, !0, l, [m.Rm], "disputed"), gvjs_1Z(h, f, k, !1, l, [m.border], "border"))
    }
    a.F.appendChild(b, f)
}

function gvjs_1Z(a, b, c, d, e, f, g) {
    var h = d ? c.Rm : c.polygons,
        k = c.id;
    (g = null != g ? [g, k].join(".") : null) && (a.Fd[g] = a.Fd[g] || []);
    for (k = 0; k < h.length; ++k) {
        var l = h[k],
            m = new gvjs_SA;
        gvjs_7Z(m, l.pL, gvjs_zZ);
        for (var n = 0; n < l.SI.length; n++) gvjs_7Z(m, l.SI[n], "reverse");
        l = m;
        if (0 < l.vc.length)
            for (m = 0; m < f.length; ++m)
                if (n = a.F.Ia(l, f[m], b)) gvjs_6Z(a, n, ["F", gvjs_mZ, c.QO ? "1" : "0", e ? "1" : "0", c.id, d ? "1" : "0"]), g && a.Fd[g].push(n)
    }
}

function gvjs_7Z(a, b, c) {
    b = b.points;
    var d = b.length;
    if (!(1 >= d)) {
        var e = c == gvjs_zZ ? 0 : d - 1;
        d = c == gvjs_zZ ? d : -1;
        c = c == gvjs_zZ ? 1 : -1;
        for (var f = e; f != d; f += c) {
            var g = b[f][0],
                h = b[f][1];
            f == e ? a.move(g, h) : a.va(g, h)
        }
        a.close()
    }
}

function gvjs_WZ(a, b, c, d, e) {
    var f = a.F;
    c = gvjs_Le(c);
    gvjs_Qe(c, function(m, n) {
        return n.size - m.size
    });
    for (var g = 0; g < c.length; ++g) {
        var h = c[g],
            k = f.Sa();
        gvjs_6Z(a, k, ["M", gvjs_vZ, "1", d ? "1" : "0", h.Xo, h.oj, h.hD ? "1" : "0"]);
        f.appendChild(b, k);
        if (a.gb.ZX === gvjs_m) {
            var l = new gvjs_ly({
                bb: e,
                fontSize: h.size,
                color: h.brush.fill,
                opacity: h.brush.fillOpacity,
                Lb: "",
                bold: !1,
                Ue: !1,
                Nc: !1
            });
            f.ce(h.label, h.x, h.y, 20, gvjs_0, gvjs_0, l, k)
        } else f.Ke(h.x, h.y, h.size, h.brush, k);
        h = [gvjs_vZ, h.Xo].join(".");
        a.Fd[h] = k.j()
    }
}

function gvjs_Ala(a, b) {
    var c = a.F,
        d = a.pD.OC;
    gvjs_u(d, function(e) {
        if (!gvjs_He(b.OC, e)) {
            e = [gvjs_vZ, e].join(".");
            e = gvjs_lh(this.Fd[e]);
            for (var f = 1; f < e.length; ++f) c.Re(e[f])
        }
    }, a);
    gvjs_u(b.OC, function(e) {
        if (!gvjs_He(d, e)) {
            e = [gvjs_vZ, e].join(".");
            e = this.Fd[e];
            var f = gvjs_mh(e).cloneNode(!0);
            c.rj(f, gvjs_2Z);
            e.appendChild(f)
        }
    }, a)
}

function gvjs_XZ(a, b) {
    if (b.Vi) {
        b = b.Vi;
        var c = a.F;
        a = a.Xu;
        gvjs_EG(b.XW, c, a);
        gvjs_FG(b.G0, c, a);
        gvjs_GG(b.V4, c, a)
    }
}
gvjs_RZ.prototype.M = function() {
    gvjs_li(this.nc);
    0 < this.VA.length && (gvjs_u(this.VA, function(a) {
        this.F.Re(a)
    }, this), this.VA = []);
    this.F.clear();
    gvjs_E(this.pD);
    this.pD = null;
    this.mw && this.F.Re(this.mw.j());
    this.mw = null;
    this.Vs && this.F.Re(this.Vs.j());
    this.Vs = null;
    this.Xv && this.F.Re(this.Xv.j());
    this.Xv = null;
    this.Xu && this.F.Re(this.Xu.j());
    this.Xu = null;
    this.jw && this.F.Re(this.jw.j());
    this.jw = null;
    gvjs_F.prototype.M.call(this)
};
gvjs_RZ.prototype.cw = function() {
    return this.F.cw()
};
var gvjs_2Z = new gvjs_3({
        strokeWidth: "3",
        stroke: gvjs_rt,
        strokeOpacity: "0.2"
    }),
    gvjs_Cla = new gvjs_3({
        strokeWidth: "1",
        stroke: gvjs_rt,
        strokeOpacity: "0.1"
    });

function gvjs_8Z(a, b) {
    var c = new gvjs_B(-5, -5, -5, -5);
    this.af = b.clone().expand(c);
    a = 2 * gvjs_BZ(a) / 5;
    this.W$ = new gvjs_A(a, a)
}

function gvjs_Fla(a, b) {
    var c = a.af;
    a = a.W$;
    var d = b.x;
    d + a.width > c.right && (d = b.x - a.width);
    var e = b.y - a.height;
    e < c.top && (e = b.y);
    return new gvjs_5(d, e, a.width, a.height)
}
gvjs_8Z.prototype.xW = function(a, b, c) {
    var d = b.D0,
        e = b.XD.Tb();
    b = parseFloat(a.lat);
    a = parseFloat(a.lng);
    a < d.kh[1] ? a += 360 : a > d.xi[1] && (a -= 360);
    c = gvjs_BZ(this.W$) / 2 / c / (e.height / (d.xi[0] - d.kh[0]));
    return {
        xi: [b + c, a + c],
        kh: [b - c, a - c]
    }
};

function gvjs_Gla(a, b) {
    var c = gvjs_Yx(a.FD, function(d) {
        return d.oj == b
    });
    if (!c) return !1;
    a = a.view.XD;
    c = gvjs_cz(new gvjs_z(c.x, c.y), new gvjs_z(a.left + a.width / 2, a.top + a.height / 2));
    a = gvjs_BZ(a.Tb()) / 2;
    return c < .9 * a
};

function gvjs_9Z(a, b, c, d) {
    this.kg = !a.cw() && gvjs_K(b, "magnifyingGlass.enable");
    this.K = c;
    this.zb = d;
    this.SB = this.mK = null
}
gvjs_9Z.prototype.handleEvent = function(a, b) {
    if (!this.kg) return !1;
    if (gvjs_Hla(this, a) || this.YZ(a, b)) return !0;
    b = a.elementType == gvjs_mZ;
    return a.data.iJ && b ? !0 : !1
};
gvjs_9Z.prototype.YZ = function(a, b) {
    var c = this;
    if (a.type != gvjs_xZ) return !1;
    if (a.data.Ro) {
        if (!a.data.hD) return !1;
        if (b && gvjs_Gla(b, a.data.oj)) return !0;
        gvjs_$Z(this);
        this.mK = setTimeout(function() {
            c.mK = null;
            c.K.iw = {
                Xo: a.data.Xo,
                oj: a.data.oj
            };
            gvjs_LK(c.zb, 0)
        }, 300);
        return !0
    }
    gvjs_$Z(this);
    return !1
};

function gvjs_Hla(a, b) {
    if (!a.K.iw) return !1;
    switch (b.type) {
        case gvjs_wZ:
        case gvjs_nZ:
            return b.data.iJ ? a = !1 : (gvjs_a_(a), a = !0), a;
        case gvjs_xZ:
        case gvjs_oZ:
            if (b.data.Ro) {
                var c = b.elementType == gvjs_vZ,
                    d = b.elementType == gvjs_uZ;
                b.data.iJ && !d ? gvjs_b_(a) : c && (b.data.hD ? gvjs_b_(a) : gvjs_a_(a))
            } else null === a.SB && (c = b.elementType == gvjs_vZ, (b.data.iJ || c) && gvjs_c_(a));
            return !1;
        case gvjs_pZ:
            return b.elementType == gvjs_uZ ? (gvjs_c_(a), a = !0) : a = !1, a;
        default:
            return !1
    }
}

function gvjs_c_(a) {
    gvjs_b_(a);
    a.SB = setTimeout(function() {
        a.SB = null;
        gvjs_a_(a)
    }, 500)
}

function gvjs_a_(a) {
    a.K.iw = null;
    gvjs_LK(a.zb, 0)
}

function gvjs_$Z(a) {
    var b = gvjs_Oh().Vj();
    null !== a.mK && (b.clearTimeout(a.mK), a.mK = null)
}

function gvjs_b_(a) {
    var b = gvjs_Oh().Vj();
    null !== a.SB && (b.clearTimeout(a.SB), a.SB = null)
};

function gvjs_d_(a) {
    this.m = a || {}
}
gvjs_o(gvjs_d_, gvjs_EZ);
gvjs_d_.prototype.bZ = function() {
    return 1
};
gvjs_d_.prototype.project = function(a) {
    return gvjs_v(arguments, function(b) {
        return {
            x: b[1],
            y: b[0]
        }
    })
};

function gvjs_Ila(a, b, c, d, e, f) {
    this.m = a;
    var g = gvjs_ula(a);
    this.I2 = new gvjs_LZ[g.name](g);
    this.ga = b;
    this.Pa = c;
    var h = gvjs_fy(gvjs_qy(a, gvjs_ht));
    g = b - h;
    h = c - h;
    this.ms = new gvjs_5(Math.round((b - g) / 2), Math.round((c - h) / 2), g, h);
    g = this.ms;
    if (a.Dq("keepAspectRatio")) {
        h = g.width;
        var k = g.height,
            l = this.I2.bZ(),
            m = Math.min(h, Math.round(k * l));
        l = Math.min(k, Math.round(h / l));
        g = new gvjs_5(Math.round((h - m) / 2) + g.left, Math.round((k - l) / 2) + g.top, m, l)
    } else g = g.clone();
    this.lw = g;
    this.Zd = d;
    this.Z = e;
    this.gb = f;
    this.n9 = gvjs_Oj(a,
        gvjs_zp, Math.round(Math.pow(2 * (this.ms.width + this.ms.height), 1 / 3)));
    this.bta = gvjs_oy(a, ["marker.style.stroke.color", "marker.style.stroke"], gvjs_yr);
    this.cta = gvjs_Oj(a, "marker.style.stroke.width", 1);
    this.PX = gvjs_J(a, gvjs_yp);
    this.rs = gvjs_e_(this);
    this.tL = gvjs_f_(this);
    d = a.fa(gvjs_rv);
    this.kra = gvjs_me(d) == gvjs_h;
    this.XQ = gvjs_J(a, gvjs_uv, gvjs_lZ, gvjs_sla);
    this.fca = gvjs_ny(a, "legend.bar.length", 1 / 3);
    this.VQ = gvjs_J(a, "legend.orientation", gvjs_S, gvjs_nla);
    this.ica = gvjs_ry(a, gvjs_vv, {
        bb: this.PX,
        fontSize: this.n9
    });
    this.G1 = a.cb("legend.numberFormat");
    this.yma = gvjs_oy(a, gvjs_rT, "");
    this.sO = gvjs_oy(a, gvjs_sT, "");
    this.w8 = gvjs_Jla(this);
    this.qxa = gvjs_Kla(this);
    d = gvjs_ry(a, gvjs_px);
    e = gvjs_ry(a, gvjs_px, {
        bold: !0
    });
    this.tF = gvjs_J(a, gvjs_qx, gvjs_xu, gvjs_mC);
    this.wz = this.tF != gvjs_f;
    this.pu = {
        Hd: d,
        bold: e
    };
    d = gvjs_K(a, "tooltip.showDisputedText");
    this.qya = gvjs_K(a, "tooltip.showTitle");
    this.oya = d ? "%s's administration (under dispute)" : "%s";
    this.Q_ = gvjs_K(a, gvjs_nx);
    this.Dma = 10;
    this.R2 = this.Nq = this.FF = null;
    this.O7 = gvjs_yr;
    this.BK =
        null;
    this.ata = gvjs_ny(a, "markerOpacity");
    this.Xsa = new gvjs_8Z(this.lw.Tb(), new gvjs_B(0, b, c, 0))
}

function gvjs_Lla(a, b) {
    for (var c = 0, d = a.FF.length; c < d; c++)
        for (var e = a.FF[c].NX.features, f = 0, g = e.length; f < g; f++) {
            var h = e[f];
            if (h.id == b) return h
        }
    return null
}

function gvjs_Mla(a, b) {
    var c = gvjs_g_(a, a.yma),
        d = {};
    gvjs_u(b.views, function(e) {
        gvjs_u(e.features, function(f) {
            d[f.id] = {
                Rb: c
            }
        }, this)
    }, a);
    return d
}

function gvjs_h_(a, b) {
    for (var c = new gvjs_JZ, d = 1; 10 > d; d++) {
        var e = (a.xi[1] - a.kh[1]) / 10 * d + a.kh[1],
            f = (a.xi[0] - a.kh[0]) / 10 * d + a.kh[0];
        e = b.project([f, a.kh[1]], [f, a.xi[1]], [a.kh[0], e], [a.xi[0], e]);
        c.track.apply(c, e)
    }
    a = c.getBounds("x");
    c = c.getBounds("y");
    return {
        xi: [c.max, a.max],
        kh: [c.min, a.min]
    }
}

function gvjs_Nla(a, b, c) {
    var d = new gvjs_5(b.hza * a.lw.width + a.lw.left, b.pza * a.lw.height + a.lw.top, b.scale * a.lw.width, b.scale * a.lw.height),
        e = a.BK[c],
        f = gvjs_h_(b.Ju, e);
    return {
        id: String(c),
        Ju: f,
        D0: b.Ju,
        XD: d,
        features: gvjs_v(b.features, function(g) {
            return gvjs_i_(a, f, d, e, g)
        })
    }
}

function gvjs_i_(a, b, c, d, e) {
    for (a = gvjs_Ola(a, gvjs_Rz(gvjs_Oz(e.polygons), gvjs_Oz(e.Rm))); a[1] > b.xi[1];) a[1] -= 360;
    for (; a[1] < b.kh[1];) a[1] += 360;
    return {
        id: e.id,
        center: gvjs_j_(b, c, d, a),
        polygons: gvjs_v(e.polygons, function(f) {
            return gvjs_k_(b, c, d, f)
        }),
        Rm: gvjs_v(e.Rm, function(f) {
            return gvjs_k_(b, c, d, f)
        }),
        QO: "__DISPUTED__All" != e.id
    }
}

function gvjs_Ola(a, b) {
    var c = 0,
        d = 0,
        e = 0;
    gvjs_Pz(b, function(f) {
        gvjs_u(f.pL, function(g) {
            c += g[0];
            d += gvjs_3y(g[1], 360);
            e++
        }, this)
    }, a);
    return [c / e, d / e]
}

function gvjs_k_(a, b, c, d) {
    return {
        pL: gvjs_l_(a, b, c, d.pL),
        SI: gvjs_v(d.SI, function(e) {
            return gvjs_l_(a, b, c, e)
        })
    }
}

function gvjs_l_(a, b, c, d) {
    return {
        points: gvjs_v(d, function(e) {
            return gvjs_j_(a, b, c, e)
        })
    }
}

function gvjs_j_(a, b, c, d) {
    var e = a.kh;
    a = a.xi;
    var f = b.width,
        g = b.height,
        h = b.left;
    b = b.top;
    c = c.project(d)[0];
    return [h + f * (c.x - e[1]) / (a[1] - e[1]), b + g * (1 - (c.y - e[0]) / (a[0] - e[0]))]
}

function gvjs_Pla(a, b) {
    var c = [];
    a.Nq = [];
    for (var d = gvjs_v(a.FF, function(l) {
            return l.NX
        }), e = 0; e < b.length; ++e) {
        var f = b[e],
            g = {
                location: f,
                SX: {}
            };
        if (null != f) {
            f = gvjs_m_(a, e, f, d);
            gvjs_Me(c, f);
            for (var h = 0; h < f.length; h++) {
                var k = f[h];
                g.SX[k.Xo] = k
            }
        }
        a.Nq.push(g)
    }
    gvjs_Qla(c);
    return c
}

function gvjs_Qla(a) {
    for (var b = 0; b < a.length; b++) {
        for (var c = a[b], d = new gvjs_z(c.x, c.y), e = 0, f = 0; f < a.length; f++)
            if (b != f) {
                var g = a[f],
                    h = gvjs_cz(d, new gvjs_z(g.x, g.y));
                h < c.size + g.size && (e += c.size + g.size - h)
            }
        c.hD = e > c.size
    }
}

function gvjs_m_(a, b, c, d) {
    var e = a.qxa(b),
        f = a.w8(b);
    if (null == f) return [];
    f = new gvjs_3({
        stroke: a.bta,
        strokeWidth: a.cta,
        fill: f,
        fillOpacity: a.ata
    });
    var g = parseFloat(c.lat),
        h = [];
    c = parseFloat(c.lng);
    c = [c, c + 360, c - 360];
    for (var k = 0; k < d.length; ++k) {
        var l = d[k],
            m = a.BK[k],
            n = l.D0;
        if (!(g < n.kh[0] || g > n.xi[0])) {
            for (var p = 0; p < c.length; ++p) {
                var q = c[p];
                if (!(q < n.kh[1] || q > n.xi[1])) {
                    q = gvjs_j_(l.Ju, l.XD, m, [g, q]);
                    var r = String(b + "-" + l.id + "-" + p),
                        t = gvjs_vZ;
                    if (null != a.gb.FJ && 0 <= a.gb.FJ) t = a.Z.Ha(b, a.gb.FJ);
                    else if (null != a.gb.fG &&
                        0 <= a.gb.fG) t = a.Z.Ha(b, a.gb.fG);
                    else if (null != a.gb.KK && 0 <= a.gb.KK) t = a.Z.Ha(b, a.gb.KK);
                    else if (null != a.gb.sD && null != a.gb.yD && 0 <= a.gb.sD && 0 <= a.gb.yD) {
                        t = a.Z.getValue(b, a.gb.sD);
                        var u = a.Z.getValue(b, a.gb.yD);
                        t = gvjs_n_(t, "S", "N") + " " + gvjs_n_(u, "W", "E")
                    }
                    h.push({
                        Xo: r,
                        label: t,
                        oj: b,
                        x: q[0],
                        y: q[1],
                        size: e,
                        brush: f,
                        hD: !1
                    })
                }
            }
            if (0 < h.length) break
        }
    }
    return h
}

function gvjs_Rla(a, b, c) {
    var d = a.Nq,
        e = d[c],
        f = e.SX[b];
    if (!f.hD) return null;
    var g = Number(b.split("-")[1]),
        h = a.FF[g],
        k = a.BK[g],
        l = gvjs_L(a.m, "magnifyingGlass.zoomFactor"),
        m = a.Xsa,
        n = m.xW(e.location, h.NX, l);
    e = new gvjs_z(f.x, f.y);
    var p = gvjs_Fla(m, e);
    k = gvjs_h_(n, k);
    var q = new gvjs_d_;
    c = {
        id: g + "-" + c + "-mag",
        Ju: k,
        D0: n,
        XD: p,
        features: gvjs_v(h.features, function(r) {
            return gvjs_i_(a, n, p, q, r)
        })
    };
    g = [];
    for (h = 0; h < d.length; h++) k = d[h].location, null != k && gvjs_Me(g, gvjs_m_(a, h, k, [c]));
    return {
        Xo: b,
        Bca: e,
        view: c,
        FD: g
    }
}

function gvjs_o_(a, b) {
    if (!a.kra || null == a.rs || !a.rs.pl) return null;
    var c = a.ica.fontSize,
        d = a.ms.width,
        e = a.ms.height,
        f = {
            top: 0,
            left: 0,
            width: a.VQ == gvjs_S ? d * a.fca : e * a.fca,
            height: 1.5 * c,
            orientation: a.VQ,
            ja: a.ica,
            zca: gvjs_rt,
            numberFormat: a.G1
        };
    f.top = a.XQ === gvjs_AZ || "top_right" === a.XQ ? 3 * c : a.VQ === gvjs_U ? e - c - f.width : e - c - f.height;
    f.left = a.XQ === gvjs_AZ || a.XQ === gvjs_lZ ? .5 * c : a.VQ == gvjs_U ? d - c - f.height : d - c - f.width;
    f.left += a.ms.left;
    f.top += a.ms.top;
    return gvjs_0H(a.rs, f, b, a.Zd)
}

function gvjs_p_(a, b) {
    for (var c = null, d = 0; d < a.Z.ca(); ++d) {
        var e = a.Z.getValue(d, b);
        c = gvjs_8B(c, e)
    }
    return c
}

function gvjs_Jla(a) {
    var b = a.gb.Yu;
    return null != b ? function(c) {
        c = a.Z.getValue(c, b);
        return null != c ? gvjs_XH(a.rs, c) : a.sO
    } : function() {
        return a.sO
    }
}

function gvjs_Kla(a) {
    var b = a.gb.XE;
    return null != b ? function(c) {
        c = a.Z.getValue(c, b);
        return gvjs_MI(a.tL, c)
    } : function() {
        return a.Dma
    }
}

function gvjs_e_(a) {
    var b = a.gb.Yu;
    if (null == b) return null;
    b = gvjs_p_(a, b);
    return gvjs__H(a.m, b)
}

function gvjs_f_(a) {
    var b = a.gb.XE;
    b = null != b ? gvjs_p_(a, b) : null;
    return gvjs_NI(a.m, b)
}

function gvjs_Sla(a, b) {
    var c = {
        NC: [],
        OC: []
    };
    null != b.ff && (c.NC = [b.ff]);
    null != b.iI && (c.OC = [b.iI]);
    c.qu = [];
    var d = a.wz && (a.tF === gvjs_ut || a.tF === gvjs_Jw);
    gvjs_u(gvjs_bo(b.selection), function(h) {
        var k = gvjs_q_(this, h, !1),
            l = this.Zd,
            m = this.pu.Hd.fontSize,
            n = new gvjs_B(0, this.ga - 1, this.Pa - 1, 0),
            p = this.Nq[h];
        h = (h = this.R2[h]) && gvjs_Lla(this, h);
        var q = null,
            r = null;
        h ? (c.NC.push(h.id), d && (q = r = new gvjs_z(h.center[0], h.center[1]), c.qu.push(gvjs_kG(k, l, !1, r, n, q, void 0, this.Q_)))) : p && gvjs_w(p.SX, function(t, u) {
            c.OC.push(u);
            d && c.qu.push(gvjs_kG(k, l, !1, new gvjs_z(t.x - m, t.y - m), n, new gvjs_z(t.x, t.y), void 0, this.Q_))
        }, this)
    }, a);
    if (null != b.Nj) {
        if (a.wz && (a.tF === gvjs_ut || a.tF === gvjs_xu)) {
            var e = gvjs_q_(a, b.Nj.oj, b.Nj.gJ),
                f = a.pu.Hd.fontSize,
                g = new gvjs_z(b.Nj.origin.x, b.Nj.origin.y);
            c.qu.push(gvjs_kG(e, a.Zd, !1, new gvjs_z(g.x - f, g.y - f), new gvjs_B(0, a.ga - 1, a.Pa - 1, 0), g, void 0, a.Q_))
        }
        null != a.gb.Yu && (e = {
            value: a.Z.getValue(b.Nj.oj, a.gb.Yu)
        }, c.Vi = gvjs_o_(a, [e]))
    }
    null != b.iw && (c.HJ = gvjs_Rla(a, b.iw.Xo, b.iw.oj));
    return c
}

function gvjs_n_(a, b, c) {
    b = 0 <= a ? c : b;
    a = Math.abs(a);
    c = Math.floor(a);
    a = 60 * (a - c);
    var d = Math.floor(a);
    return c + "\u00b0" + d + "'" + Math.round(60 * (a - d)) + '"' + b
}

function gvjs_q_(a, b, c) {
    var d = a.gb,
        e = a.Z,
        f = {
            entries: []
        };
    if (null != d.FJ) var g = e.Ha(b, d.FJ);
    else switch (d.JV) {
        case gvjs_9c:
            c = e.getValue(b, d.sD);
            g = e.getValue(b, d.yD);
            g = gvjs_n_(c, "S", "N") + " " + gvjs_n_(g, "W", "E");
            break;
        case gvjs_xd:
            g = e.Ha(b, d.KK);
            c && (g = gvjs_NB(a.oya, g));
            break;
        case "address":
            g = e.Ha(b, d.fG);
            break;
        default:
            g = ""
    }
    a.qya && (c = gvjs_hG(g, a.pu.bold), f.entries.push(c));
    c = null != d.m5 ? e.getStringValue(b, d.m5) : null;
    if (null != c)
        if (d = d.m5, e.Bd(d, gvjs_av) || e.getProperty(b, d, gvjs_av)) f.entries.push(gvjs_hG(c,
            a.pu.Hd, void 0, void 0, void 0, void 0, void 0, !0));
        else
            for (b = c.split("\n"), e = 0; e < b.length; e++) d = gvjs_hG(b[e], a.pu.Hd), f.entries.push(d);
    else null != d.Yu && (c = e.Ga(d.Yu), g = e.Ha(b, d.Yu), c = gvjs_hG(g, a.pu.bold, c, a.pu.Hd), f.entries.push(c)), null != d.XE && d.XE != d.Yu && (c = e.Ga(d.XE), b = e.Ha(b, d.XE), a = gvjs_hG(b, a.pu.bold, c, a.pu.Hd), f.entries.push(a));
    return f
}

function gvjs_g_(a, b) {
    var c = b === gvjs_f ? [255, 255, 255] : gvjs_vj(b);
    c = gvjs_uj(gvjs_1z(c, .1));
    return {
        fill: new gvjs_3({
            stroke: c,
            fill: b
        }),
        Rm: new gvjs_3({
            stroke: gvjs_f,
            pattern: new gvjs_$x(gvjs_rw, b, b == a.O7 ? gvjs_Br : a.O7)
        }),
        border: new gvjs_3({
            stroke: c
        })
    }
};

function gvjs_r_(a, b, c, d, e, f, g, h, k) {
    gvjs_F.call(this);
    var l = this;
    this.cm = a;
    this.m = b;
    this.ga = c;
    this.Pa = d;
    this.gb = f;
    this.K = g;
    this.Vm = null;
    this.O2 = !1;
    this.uva = h;
    this.Xm = k;
    this.L4 = !1;
    this.VX = null;
    this.X6 = !1;
    this.zb = new gvjs_KK(function() {
        return l.Qt()
    });
    this.CD = new gvjs_9F(3);
    this.uO = [!1, !1, !1];
    this.BD = new gvjs_Ila(this.m, this.ga, this.Pa, this.cm.me, e, this.gb);
    this.pca = new gvjs_9Z(a, b, g, this.zb);
    this.Q9 = gvjs_K(b, "enableRegionInteractivity", f.ZX == gvjs_yd);
    this.M9 = gvjs_K(b, "enableMarkerInteractivity", f.ZX ==
        gvjs_bd);
    this.S2()
}
gvjs_o(gvjs_r_, gvjs_F);
gvjs_ = gvjs_r_.prototype;
gvjs_.U3 = function(a, b) {
    var c = this.BD,
        d = c.m;
    c.FF = [];
    c.BK = [];
    for (var e = [], f = 0, g = a.views.length; f < g; f++) {
        var h = a.views[f],
            k = c.I2.Zc();
        k.boundingBox = {
            lo: h.Ju.kh,
            hi: h.Ju.xi
        };
        k = new c.I2.constructor(k);
        c.BK.push(k);
        k = gvjs_Nla(c, h, f);
        e.push(k);
        c.FF.push({
            features: h.features,
            NX: k
        })
    }
    a = {
        width: c.ga,
        height: c.Pa,
        $sa: c.lw,
        FE: gvjs_J(d, gvjs_Kw, gvjs_Ww, gvjs_lC),
        CEa: c.tF,
        xG: gvjs_qy(d, gvjs_ht),
        baa: d.mz(gvjs_Qu),
        title: {
            text: gvjs_J(d, gvjs_fx),
            ja: gvjs_ry(d, gvjs_ix, {
                bb: c.PX,
                fontSize: c.n9
            }),
            lines: [],
            align: gvjs_2,
            tooltip: ""
        },
        views: e,
        qC: gvjs_Mla(c, a),
        NC: [],
        OC: [],
        FD: [],
        Vi: null,
        HJ: null,
        Hj: c.PX
    };
    this.nL(0, a);
    this.L4 = !0;
    this.Xm("mapLoaded", b);
    null != this.VX ? this.VX() : this.Qt()
};

function gvjs_Tla(a, b, c, d, e, f) {
    function g() {
        a.X6 = d;
        if (null != e) {
            a.Vm = null;
            var h = a.BD;
            h.Z = e;
            h.rs = gvjs_e_(h);
            h.tL = gvjs_f_(h)
        }
        null != f && (a.K = f, a.pca.K = f);
        h = a.BD;
        h.R2 = [];
        for (var k = {}, l = 0; l < h.Z.ca(); ++l) {
            var m = b[l];
            h.R2.push(m);
            if (null != m) {
                var n = h.w8(l);
                null != n && (k[m] = {
                    oj: l,
                    Rb: gvjs_g_(h, n)
                })
            }
        }
        h = {
            qC: k,
            FD: gvjs_Pla(h, c),
            Vi: gvjs_o_(h, [])
        };
        a.nL(1, h);
        a.Qt()
    }
    a.O2 = !1;
    a.L4 ? g() : a.VX = g
}
gvjs_.setSelection = function(a) {
    this.K.selection.setSelection(a);
    gvjs_LK(this.zb, 1)
};
gvjs_.getSelection = function() {
    return this.K.selection.getSelection()
};
gvjs_.Qt = function() {
    if (this.L4) {
        if (null == this.Vm || !this.Vm.equals(this.K)) {
            var a = gvjs_Sla(this.BD, this.K);
            this.nL(2, a)
        }
        a = this.CD.compact();
        if (this.uO[0]) gvjs_SZ(this.cm, a);
        else if (this.uO[1]) {
            var b = this.cm;
            gvjs_4Z(b, a);
            gvjs_0Z(b, a);
            gvjs__Z(b, a, !0)
        } else gvjs__Z(this.cm, a);
        this.uO = [!1, !1, !1];
        this.Vm = this.K.clone();
        !this.O2 && this.X6 && (this.uva(), this.O2 = !0)
    }
};

function gvjs_s_(a, b) {
    null != a.K.Nj && b.data.xb && (a.K.Nj.origin = {
        x: b.data.xb.x,
        y: b.data.xb.y
    }, gvjs_LK(a.zb, 3))
}
gvjs_.et = function(a, b) {
    a = this.CD.compact().FE == gvjs_Ww;
    null != b ? (gvjs_ty(this.K.selection, b, a), this.Xm(gvjs_k, {})) : (b = 0 < this.K.selection.getSelection().length, this.K.selection.clear(), b && this.Xm(gvjs_k, {}));
    this.zb && gvjs_LK(this.zb, 50)
};

function gvjs_t_(a, b) {
    var c = a.CD.compact();
    return a.pca.handleEvent(b, c ? c.HJ : null)
}
gvjs_.S2 = function() {
    var a = this;
    this.cm.o(gvjs_nZ, function(b) {
        if (!gvjs_t_(a, b) && a.Q9) {
            var c = b.data.featureId;
            null !== c && a.Xm("regionClick", {
                region: c
            });
            c = gvjs_u_(a, c);
            a.et(b, c)
        }
    });
    this.cm.o(gvjs_oZ, function(b) {
        if (!gvjs_t_(a, b) && a.Q9) {
            var c = b.data.featureId;
            null !== c && (b.data.Ro ? (a.K.ff = c, c = gvjs_u_(a, c), a.K.Nj = null != c ? {
                oj: c,
                gJ: b.data.gJ,
                origin: {
                    x: b.data.xb.x,
                    y: b.data.xb.y
                }
            } : null) : (a.K.ff = null, a.K.Nj = null), gvjs_LK(a.zb, 50))
        }
    });
    this.cm.o(gvjs_pZ, function(b) {
        gvjs_t_(a, b) || gvjs_s_(a, b)
    });
    this.cm.o(gvjs_wZ,
        function(b) {
            gvjs_t_(a, b) || a.M9 && a.et(b, b.data.oj)
        });
    this.cm.o(gvjs_xZ, function(b) {
        !gvjs_t_(a, b) && a.M9 && (b.data.Ro ? (a.K.iI = b.data.Xo, a.K.Nj = {
            oj: b.data.oj,
            gJ: !1,
            origin: {
                x: b.data.xb.x,
                y: b.data.xb.y
            }
        }) : (a.K.iI = null, a.K.Nj = null), gvjs_LK(a.zb, 50))
    });
    this.cm.o("markerMove", function(b) {
        gvjs_s_(a, b)
    })
};

function gvjs_u_(a, b) {
    if (null === b) return null;
    a = a.CD.compact();
    return a.qC[b] ? a.qC[b].oj : null
}
gvjs_.nL = function(a, b) {
    gvjs_$F(this.CD, a, b);
    this.uO[a] = !0
};
gvjs_.M = function() {
    gvjs_E(this.zb);
    this.zb = null;
    gvjs_E(this.cm);
    this.cm = null;
    gvjs_E(this.BD);
    this.BD = null;
    gvjs_F.prototype.M.call(this)
};
var gvjs_v_ = {},
    gvjs_w_ = {},
    gvjs_x_ = null,
    gvjs_y_ = null;

function gvjs_Ula(a, b, c) {
    "" !== a && (gvjs_y_ = a = a.replace(/\/$/, ""));
    gvjs_z_("info", "mapList", function(d) {
        gvjs_A_ = d;
        b()
    }, c)
}

function gvjs_Vla(a) {
    gvjs_y_ = "https://www.gstatic.com/charts/geochart/" + a
}
gvjs_Vla("10");

function gvjs_z_(a, b, c, d) {
    gvjs_fn(gvjs_y_ + "/" + a + "/" + (b + ".js")).then(function(e) {
        e = e.replace(/^[\s\S]*google_visualization_geochart_[^=]*\s*=\s*/g, "");
        e = e.replace(/;[\s]*$/g, "");
        e = JSON.parse(e);
        c && c(e);
        return e
    }, function(e) {
        d && d(e)
    })
}

function gvjs_Wla(a, b) {
    if (null == b) throw Error("Callback is null or undefined");
    var c = gvjs_Xla(a),
        d = gvjs_Yla(a);
    if (void 0 !== gvjs_w_[d]) setTimeout(function() {
        return b(gvjs_w_[d])
    }, 0);
    else if (void 0 !== gvjs_v_[d]) gvjs_v_[d].push(b);
    else {
        gvjs_v_[d] = [b];
        var e = function(f) {
            for (; gvjs_v_[d] && 0 < gvjs_v_[d].length;) gvjs_v_[d].shift()(f)
        };
        gvjs_z_("mapfiles", c, function(f) {
            f = {
                views: gvjs_v(f.views, gvjs_Zla)
            };
            gvjs_w_[d] = f;
            e(f)
        }, function() {
            e(null)
        })
    }
}

function gvjs__la(a) {
    var b = null[gvjs_y_];
    null != b ? a(b) : gvjs_z_("info", "boundingBoxes", function(c) {
        b = gvjs_v(c, gvjs_0la);
        a(b)
    }, function() {
        a(null)
    })
}

function gvjs_Xla(a) {
    var b = "";
    "COM" != a.domain && (b = a.domain + "_");
    return "" + b + a.region + "_" + gvjs_1la(a.resolution)
}

function gvjs_Yla(a) {
    a = gvjs_Xla(a);
    return gvjs_y_ + ":" + a
}

function gvjs_1la(a) {
    null == gvjs_x_ && (gvjs_x_ = {
        continents: "REGIONS",
        subcontinents: "SUBREGIONS",
        countries: gvjs_mT,
        provinces: "PROVINCES",
        metros: "METROS"
    });
    return gvjs_x_[a]
}
var gvjs_A_ = null;

function gvjs_2la(a) {
    if (!gvjs_A_) return !1;
    var b = a.domain,
        c = a.region;
    a = gvjs_1la(a.resolution);
    if (b = gvjs_A_[b])
        if (b = b[a]) return 0 <= gvjs_Iy(b, c);
    return !1
}

function gvjs_Zla(a) {
    for (var b = gvjs_v(a.features, gvjs_3la), c = {}, d = [], e = 0; e < b.length; e++) {
        var f = b[e],
            g = f.id;
        gvjs_hf(g, "__DISPUTED__") ? c[g] = f : d.push(f)
    }
    for (b = 0; b < d.length; b++) e = d[b], f = c["__DISPUTED__" + e.id], e.Rm = f ? f.polygons : [];
    if (c = c.__DISPUTED__All) c.Rm = c.polygons, d.push(c);
    return {
        features: d,
        Ju: gvjs_4la(a.boundingBox),
        hza: a.xoffset,
        pza: a.yoffset,
        scale: a.scale
    }
}

function gvjs_3la(a) {
    return {
        id: a.id,
        polygons: gvjs_v(a.polygons, gvjs_5la),
        Rm: []
    }
}

function gvjs_5la(a) {
    return gvjs_ne(a) ? {
        pL: gvjs_B_(a),
        SI: []
    } : {
        pL: gvjs_B_(a.shell),
        SI: gvjs_v(a.holes, gvjs_B_)
    }
}

function gvjs_B_(a) {
    return gvjs_v(a, function(b) {
        return [gvjs_IZ(b[0]), parseFloat(b[1])]
    })
}

function gvjs_4la(a) {
    return {
        xi: [gvjs_IZ(a.hi[0]), parseFloat(a.hi[1])],
        kh: [gvjs_IZ(a.lo[0]), parseFloat(a.lo[1])]
    }
}

function gvjs_0la(a) {
    return {
        region: a.region,
        resolution: a.resolution,
        domain: a.domain,
        Uka: gvjs_v(a.boundingBoxes, gvjs_4la)
    }
};

function gvjs_C_(a, b, c, d) {
    var e = gvjs_J(c, gvjs_xT);
    if (e != gvjs_ub) d(gvjs_D_(e, c));
    else if (b.JV != gvjs_9c) d(gvjs_D_(gvjs_CT, c));
    else {
        var f = c.cb(gvjs_yT, gvjs_DZ),
            g = c.cb(gvjs_mu),
            h = [];
        for (e = 0; e < a.ca(); ++e) h.push({
            lat: a.getValue(e, b.sD),
            lng: a.getValue(e, b.yD)
        });
        gvjs__la(function(k) {
            if (k) {
                a: {
                    for (var l = 0; l < k.length; ++l) {
                        var m = k[l];
                        if (null == f || m.resolution == f)
                            if (null == g || m.domain == g) {
                                for (var n = !0, p = 0; p < h.length; ++p) {
                                    for (var q = h[p], r = !1, t = m.Uka, u = 0; u < t.length; ++u)
                                        if (gvjs_6la(q, t[u])) {
                                            r = !0;
                                            break
                                        }
                                    if (!r) {
                                        n = !1;
                                        break
                                    }
                                }
                                if (n) {
                                    k = {
                                        region: m.region,
                                        resolution: m.resolution,
                                        domain: m.domain
                                    };
                                    break a
                                }
                            }
                    }
                    k = null
                }
                null != k ? d(k) : d(gvjs_D_(gvjs_CT, c))
            }
            else d(null)
        })
    }
}

function gvjs_D_(a, b) {
    var c = gvjs_J(b, gvjs_yT, gvjs_qT, gvjs_DZ);
    b = gvjs_J(b, gvjs_mu);
    a = {
        region: a,
        resolution: c,
        domain: b
    };
    return gvjs_2la(a) || "COM" != a.domain && (a.domain = "COM", gvjs_2la(a)) ? a : null
}

function gvjs_6la(a, b) {
    return a.lat > b.kh[0] && a.lat < b.xi[0] && gvjs_Fe([-360, 0, 360], function(c) {
        return a.lng + c > b.kh[1] && a.lng + c < b.xi[1]
    })
};
var gvjs_7la = gvjs_D.removeAll;

function gvjs_E_(a) {
    gvjs_Qn.call(this, a);
    this.Ak = this.ab = null;
    this.Hz = new gvjs_NZ(this.Hg);
    this.f0 = "";
    this.eb = this.Bk = null
}
gvjs_o(gvjs_E_, gvjs_Qn);

function gvjs_8la(a) {
    null == a && (a = {});
    a = new gvjs_Aj([a, gvjs_MZ]);
    var b = gvjs_J(a, gvjs_xT);
    return null != gvjs_D_(b, a)
}

function gvjs_F_(a, b, c) {
    a = a || "";
    var d = gvjs_G_ && a === gvjs_H_;
    gvjs_H_ = a;
    b ? d ? b() : gvjs_Ula(a, function() {
        gvjs_G_ = !0;
        b()
    }, c) : gvjs_G_ = !1
}
gvjs_ = gvjs_E_.prototype;
gvjs_.Rd = function(a, b, c, d) {
    var e = this;
    c = void 0 === c ? {} : c;
    gvjs_7la(this.container);
    this.Bk = a;
    gvjs_E(this.Hz);
    this.Hz = new gvjs_NZ(this.Hg);
    c = gvjs_Li(gvjs_Ii(c));
    a = [c];
    var f = c.theme || [];
    Array.isArray(f) || (f = [f]);
    for (var g = 0; g < f.length; ++g) {
        var h = void 0;
        if (typeof f[g] === gvjs_l) h = gvjs_4F(f[g]);
        else if (gvjs_r(f[g])) h = f[g];
        else throw Error("Theme should be a theme name or an options object.");
        a.push(h)
    }
    a.push(gvjs_MZ);
    var k = gvjs_7K(),
        l = [];
    gvjs_u(a, function(t) {
        l.push.apply(l, gvjs_Vz(t, k))
    });
    var m = new gvjs_Aj(a),
        n = new gvjs_CZ(d);
    this.eb = this.Bv(this.container, m);
    d = gvjs_J(m, "displayMode", gvjs_ub, gvjs_mla);
    var p = (new gvjs_Tl).Ac(b, d, this.Hg);
    if (null != p) {
        var q = gvjs_Bi({
                options: c,
                format: p,
                size: this.eb
            }),
            r = this.Bk(function(t) {
                if (null == t) throw Error(gvjs_jZ);
                gvjs_9la(this, b, p, m, q, n, t)
            }, this);
        c = gvjs_H_;
        c = gvjs_J(m, "mapsSource", c);
        "" === c && (d = gvjs_J(m, "geochartVersion", "10"), gvjs_Vla(d));
        d = gvjs_J(m, "regioncoderVersion", "0");
        gvjs_PT(d);
        gvjs_F_(c, function() {
            l.length && e.Lh ? (e.Lh.promise.then(function() {
                gvjs_C_(b, p, m,
                    r)
            }, null, e), gvjs_sy(e, function() {
                gvjs_C_(b, p, m, r)
            }), new gvjs_6K(l, e.Lh)) : gvjs_C_(b, p, m, r)
        })
    }
};
gvjs_.ah = function() {
    if (!this.Ak) throw Error("Must draw chart before calling getImageURI.");
    var a = gvjs_3g(this.container).createElement(gvjs_Ob),
        b = gvjs_1B(a, this.eb),
        c = new gvjs_MB(a),
        d = new gvjs_rB(a, b);
    b = this.Ak;
    c = new gvjs_RZ(c, d, b.cm.gb);
    b = b.CD.compact();
    gvjs_SZ(c, b);
    gvjs_4Z(c, b);
    gvjs_0Z(c, b);
    gvjs__Z(c, b, !0);
    gvjs__Z(c, b);
    return a.childNodes[0].toDataURL(gvjs_bv)
};
gvjs_.Bv = function(a, b) {
    a = this.La(b, -1);
    b = this.getHeight(b, -1); - 1 == a && -1 == b ? (a = 556, b = 347) : -1 == a ? a = Math.round(556 * b / 347) : -1 == b && (b = Math.round(347 * a / 556));
    return new gvjs_A(a, b)
};

function gvjs_9la(a, b, c, d, e, f, g) {
    var h = gvjs_K(d, "showGeocodeWarnings");
    if (a.f0 == e) gvjs_$la(a, !1, d, b, c, g, h, f, e);
    else {
        if (null != a.ab) a.ab.update(a.eb, a.Bk);
        else {
            var k = gvjs_K(d, gvjs_Eu);
            a.ab = new gvjs_3B(a.container, a.eb, a.Bk, k)
        }
        a.ab.rl(function() {
            var l = a.ab.Oa(),
                m = a.ab.yq();
            gvjs_ama(a, b, c, d, e, f, g, h, m, l)
        }, a.Bk)
    }
}

function gvjs_ama(a, b, c, d, e, f, g, h, k, l) {
    k = new gvjs_RZ(k, l, c);
    null != a.Ak && gvjs_E(a.Ak);
    l = a.eb;
    gvjs_E(a.Ak);
    a.Ak = new gvjs_r_(k, d, l.width, l.height, b, c, f, function() {
        gvjs_I(a, gvjs_i, {})
    }, function(m, n) {
        gvjs_I(a, m, n)
    });
    gvjs_$la(a, !0, d, b, c, g, h, f, e)
}

function gvjs_$la(a, b, c, d, e, f, g, h, k) {
    function l() {
        gvjs_vla(a.Hz, d, e, f, g, n)
    }
    c = gvjs_J(c, "geocodingContext", gvjs_xT, gvjs_tla);
    var m = "bounds" === c || c === gvjs_ut,
        n = a.Bk(function(p, q, r) {
            gvjs_Tla(a.Ak, p, q, r, d, h)
        });
    a.Hz.nI = c;
    b && (a.Hz.aF = null, gvjs_Wla(f, a.Bk(function(p) {
        null != p ? (a.Ak.U3(p, f), m && (a.Hz.U3(p), l()), a.f0 = k) : a.Hg.Sc(gvjs_jZ)
    })));
    m || (a.Hz.aF = null, l())
}
gvjs_.setSelection = function(a) {
    null != this.Ak ? this.Ak.setSelection(a) : this.Hg.Sc(gvjs_kZ)
};
gvjs_.getSelection = function() {
    if (null != this.Ak) return this.Ak.getSelection();
    this.Hg.Sc(gvjs_kZ);
    return []
};
gvjs_.He = function() {
    this.f0 = "";
    gvjs_E(this.Ak);
    this.Ak = null;
    gvjs_E(this.ab);
    this.ab = null
};
var gvjs_H_ = "",
    gvjs_G_ = !1;
gvjs_q(gvjs_nc, gvjs_E_, void 0);
gvjs_E_.prototype.draw = gvjs_E_.prototype.draw;
gvjs_E_.prototype.getImageURI = gvjs_E_.prototype.ah;
gvjs_E_.prototype.setSelection = gvjs_E_.prototype.setSelection;
gvjs_E_.prototype.getSelection = gvjs_E_.prototype.getSelection;
gvjs_E_.prototype.clearChart = gvjs_E_.prototype.Jb;
gvjs_q(gvjs_qZ, gvjs_8la, void 0);
gvjs_q(gvjs_rZ, gvjs_F_, void 0);
gvjs_q(gvjs_nc, gvjs_E_, void 0);
gvjs_E_.prototype.draw = gvjs_E_.prototype.draw;
gvjs_E_.prototype.getImageURI = gvjs_E_.prototype.ah;
gvjs_E_.prototype.setSelection = gvjs_E_.prototype.setSelection;
gvjs_E_.prototype.getSelection = gvjs_E_.prototype.getSelection;
gvjs_E_.prototype.clearChart = gvjs_E_.prototype.Jb;
gvjs_q(gvjs_qZ, gvjs_8la, void 0);
gvjs_q(gvjs_rZ, gvjs_F_, void 0);