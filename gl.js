function startmain() {
    changedom(), firstclick = !0, icon_minimize_state = "closed", saveimgapropusk = !1, curvalueselprioritetvybora = "potipuprof"
}
function changedom() {
    columnpodbor.css("z-index", "1"), $("#calc_layers").hide(), $("#calc_loading").show(), updateWithQueryString($.deparam.fragment());
    var a = domnvidn.substr(0, 4);
    $("#columnhome").attr("class", domnvidn), $("#fonimg").attr("src", "img/" + a + "sverhu.jpg"), $("#calc_mansardokna").find("img").attr("src", "img/doma/" + domnvidn + "/dop/okna.png"), $("#calc_cvetnik").find("img").attr("src", "img/doma/" + domnvidn + "/dop/cvetnik.png"), $("#calc_ladder").find("img").attr("src", "img/doma/" + domnvidn + "/ladder/ral9006.png"), $("#calc_mostik").find("img").attr("src", "img/doma/" + domnvidn + "/mostik/ral9006.png"), $("#calc_chimney").find("img").attr("src", "img/doma/" + domnvidn + "/dop/chimney.png"), $("#calc_okna").find("img").attr("src", "img/doma/" + domnvidn + "/oknadveri/okna/white.png"), $("#domcsssverhu").attr("href", "css/" + a + "sverhu.css"), domchlist.find(".active").removeClass("active"), $("#domch0" + domnvidn.substr(3, 1)).addClass("active");
    for (var r = 2; 10 > r; r++)$("#tcs00" + r).find("img").attr("src", "img/sh/" + domnvidn + "/00" + r + ".jpg");
    for (var r = 10; 18 > r; r++)$("#tcs0" + r).find("img").attr("src", "img/sh/" + domnvidn + "/0" + r + ".jpg");
    domResize(), grafikaResize(), SaveImgAF(), $("#shablon").trigger("click"), $("#calc_loading").hide(), $("#calc_layers").show(), columnpodbor.css("z-index", "10")
}
function hasGarage() {
    return $.inArray(domnvidn, ar_hasgarage) > -1 ? !0 : !1
}
function changeinfolinks() {
    switch (hideinfoblock) {
        case"1":
            ar_fasad_text = {
                metal_ecobrus: "<span>Металлический сайдинг «ЭкоБрус GL»</span>",
                metal_blockhouse: "<span>Металлический сайдинг «Блок-хаус»</span>",
                metal_korabel: "<span>Металлический сайдинг «Корабельная доска»</span>",
                metal_vertical: "<span>Металлический сайдинг «Вертикаль GL»</span>",
                vinil_d4: "<span>Виниловый сайдинг D4</span>",
                vinil_d44: "<span>Виниловый сайдинг D4,4</span>",
                vinil_blockhouse: "<span>Виниловый сайдинг «Блок-хаус» D4,8</span>",
                vinil_vertical: "<span>Виниловый вертикальный сайдинг S6,3</span>",
                brick_norm: "<span >Кирпич</span>"
            }, ar_krovlya_text = {
                metal_kvinta: "<span>Металлочерепица Kvinta</span>",
                metal_classic: "<span>Металлочерепица Classic</span>",
                metal_country: "<span>Металлочерепица Country</span>",
                metal_quadroprofi: "<span>Металлочерепица Quadro Profi</span>",
                falcevaya_klickfalc: "<span>Фальцевая кровля Кликфальц</span>",
                profnastil_10r: "<span>Кровельный профнастил GL-10R</span>",
                profnastil_20r: "<span>Кровельный профнастил GL-20R</span>",
                profnastil_21r: "<span>Кровельный профнастил GL-21R</span>",
                profnastil_35r: "<span>Кровельный профнастил GL-35r</span>",
                profnastil_60r: "<span>Кровельный профнастил GL-60r</span>",
                profnastil_75r: "<span>Кровельный профнастил GL-75r</span>",
                komposit_grandline: "<span>Композитная черепица Grand Line</span>"
            }, ar_typepokr_text = {
                poliester: "<span>Полиэстер</span>",
                solano: "<span>Solano</span>",
                granite: "<span>Granite</span>",
                quarzit35: "<span>Quarzit (Quarzit35)</span>",
                quarzit30: "<span>Quarzit Lite (Quarzit30)</span>",
                colorityprint: "<span>Colority Print</span>",
                safari: "<span>Safari</span>"
            }, ar_vodostok_text = {gl12590: "<span>Grand Line 125x90</span>"}, ar_zabor_text = {modul_premplus: "<span>Модульные ограждения Премиум Плюс</span>"}
    }
}
function updateWithQueryString(a) {
    columnpodbor.css("z-index", "1");
    var r = {
        domn: "dom8vid1",
        cp: "cokolwandstein_dolomit",
        cpkr: "colorityprint",
        cc: "wsgr",
        sofc: "sofwt",
        oknanal: "sofwt",
        krylco: "sofwt",
        vp: "gl12590",
        vc: "ral9003",
        zp: "modul_premplus",
        zc: "ral6005",
        kp: "metal_classic",
        kpkr: "poliester",
        kc: "ral3009",
        fp: "vinil_d44",
        fpkr: "colorityprint",
        fc: "bezh",
        dobornfc: "bezh",
        dobornfgc: "vblue",
        fgp: "vinil_d4",
        fgpkr: "quarzit30",
        fgc: "vblue",
        kgp: "metal_kvinta",
        kgpkr: "poliester",
        kgc: "ral7005",
        cgp: "cokolmetal_vertical",
        cgpkr: "colorityprint",
        cgc: "kamen",
        dobchimc: "ral3009"
    };
    null != a.hideinfo && "1" == a.hideinfo && (hideinfoblock = "1", changeinfolinks()), null != a.domn ? domnvidn = a.domn : (a.domn = r.domn, jQuery.bbq.pushState(a)), curvalueselprioritetvybora = "potipuprof", sCurrentMenuid = "cokol", tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", null != a.cp && null != a.cpkr && null != a.cc && "metal_vertical" != a.cp ? tParamsUpdate("cokol", a.cp, a.cpkr, a.cc) : tParamsUpdate("cokol", r.cp, r.cpkr, r.cc), $("#cokol").trigger("click"), $("#" + tCokolTypeProfId).trigger("click"), $("#" + tCokolTypePokrId).trigger("click"), $("#" + tCokolColorId).trigger("click"), sCurrentMenuid = "doborn", null != a.sofc ? tParamsUpdate("sofity", "", "", a.sofc) : tParamsUpdate("sofity", "", "", r.sofc), $("#dobornsofity").trigger("click"), $("#" + tSofityColorId).trigger("click"), null != a.oknanal ? tParamsUpdate("oknanal", "", "", a.oknanal) : tParamsUpdate("oknanal", "", "", r.oknanal), $("#dobornoknanalich").trigger("click"), $("#" + tOknaNalichColorId).trigger("click"), "dom4vid1" == domnvidn ? $("#dobornkrylco").hide() : ($("#dobornkrylco").show(), null != a.krylco ? tParamsUpdate("krylco", "", "", a.krylco) : tParamsUpdate("krylco", "", "", r.krylco), $("#dobornkrylco").trigger("click"), $("#" + tKrylcoColorId).trigger("click")), sCurrentMenuid = "vodostok", null != a.vp && null != a.vc ? tParamsUpdate("vodostok", a.vp, "", a.vc) : tParamsUpdate("vodostok", "gl12590", "", r.vc), $("#vodostok").trigger("click"), $("#" + tVodostokTypeProfId).trigger("click"), $("#" + tVodostokColorId).trigger("click"), sCurrentMenuid = "zabor", tZaborTypeProfGreyId = "", null != a.zp && null != a.zc ? tParamsUpdate("zabor", a.zp, "", a.zc) : tParamsUpdate("zabor", r.zp, "", r.zc), $("#zabor").trigger("click"), $("#" + tZaborTypeProfId).trigger("click"), $("#" + tZaborColorId).trigger("click"), tFasadTypePokrGreyId = "", tKrovlyaTypePokrGreyId = "", tCurrentVidPos = "sverhu", curvalueselprioritetvybora = "potipuprof", null != a.kp && null != a.kpkr && null != a.kc ? tParamsUpdate("krovlya", a.kp, a.kpkr, a.kc) : tParamsUpdate("krovlya", r.kp, r.kpkr, r.kc), sCurrentMenuid = "krovlya", $("#krovlya").trigger("click"), $("#" + tKrovlyaTypeProfId).trigger("click"), $("#" + tKrovlyaTypePokrId).trigger("click"), $("#" + tKrovlyaColorId).trigger("click"), curvalueselprioritetvybora = "potipuprof", isdobornfasadauto = !1, null != a.fp && null != a.fpkr && null != a.fc ? tParamsUpdate("fasad", a.fp, a.fpkr, a.fc) : tParamsUpdate("fasad", r.fp, r.fpkr, r.fc), sCurrentMenuid = "fasad", $("#fasad").trigger("click"), $("#" + tFasadTypeProfId).trigger("click"), $("#" + tFasadTypePokrId).trigger("click"), $("#" + tFasadColorId).trigger("click"), null != a.fgp && null != a.fgpkr && null != a.fgc ? tParamsUpdate("fasad-garage", a.fgp, a.fgpkr, a.fgc) : tParamsUpdate("fasad-garage", r.fgp, r.fgpkr, r.fgc), $("#fasad").trigger("click"), hasGarage() && (domgarag = "-garage", $("#" + tFasadGaragTypeProfId).trigger("click"), $("#" + tFasadGaragTypePokrId).trigger("click"), $("#" + tFasadGaragColorId).trigger("click")), isdobornfasadauto = !0, null != a.dobornfc ? tParamsUpdate("dobornfasad", "", "", a.dobornfc) : tParamsUpdate("dobornfasad", "", "", r.dobornfc), null != a.dobornfgc ? tParamsUpdate("dobornfasad-garage", "", "", a.dobornfgc) : tParamsUpdate("dobornfasad-garage", "", "", tFasadGaragColorId), calc_nalichnik.find("img").attr("src", "img/doma/" + domnvidn + "/nalichnikfasad/" + tDobornFasadColorId + ".png"), hasGarage() && calc_nalichnik_garage.find("img").attr("src", "img/doma/" + domnvidn + "/nalichnikfasad-garage/" + tDobornFasadGarColorId + ".png"), PrintTableParams("dobornfasad"), PrintTableParams("dobornfasad-garage"), sCurrentMenuid = "krovlya", null != a.kgp && null != a.kgpkr && null != a.kgc ? tParamsUpdate("krovlya-garage", a.kgp, a.kgpkr, a.kgc) : tParamsUpdate("krovlya-garage", r.kgp, r.kgpkr, r.kgc), hasGarage() && ($("#krovlya").trigger("click"), domgarag = "-garage", $("#" + tKrovlyaGaragTypeProfId).trigger("click"), $("#" + tKrovlyaGaragTypePokrId).trigger("click"), $("#" + tKrovlyaGaragColorId).trigger("click")), sCurrentMenuid = "cokol", tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", null != a.cgp && null != a.cgpkr && null != a.cgc && "metal_vertical" != a.cgp ? tParamsUpdate("cokol-garage", a.cgp, a.cgpkr, a.cgc) : tParamsUpdate("cokol-garage", r.cgp, r.cgpkr, r.cgc), hasGarage() && (domgarag = "-garage", $("#cokol").trigger("click"), $("#" + tCokolGaragTypeProfId).trigger("click"), $("#" + tCokolGaragTypePokrId).trigger("click"), $("#" + tCokolGaragColorId).trigger("click")), domgarag = "", $(".cfor").hide(), columnpodbor.hide(), defaultsrc(), $("#columnmenu").find(".menucell").removeClass("active"), columnpodbor.css("z-index", "10")
}
function defaultsrc() {
    $("#fasad").find("img").attr("src", "img/online/fasad_g.png"), $("#krovlya").find("img").attr("src", "img/online/krovlya_g.png"), $("#cokol").find("img").attr("src", "img/online/cokol_g.png"), $("#vodostok").find("img").attr("src", "img/online/vodostok_g.png"), $("#zabor").find("img").attr("src", "img/online/zabor_g.png"), $("#doborn").find("img").attr("src", "img/online/doborn_g.png"), $("#shablon").find("img").attr("src", "img/online/menu_shablon_g.png")
}
function InitializeGlobalParams() {
    grandlineLogo = $("#grandline"), saveimga = $("#saveimga"), bottomrightarr = $("#bottomrightarr"), bottomleftarr = $("#bottomleftarr"), shablonrowleft = 374, tcslist = $("#tcslist"), ar_tcslist = tcslist.find(".shdom"), columnmenu = $("#columnmenu"), columnpodbor = $("#columnpodbor"), columnhome = $("#columnhome"), columnparams = $("#columnparams"), columndebug = $("#columndebug"), domnvidn = columnhome.attr("class"), idselprioritetvybora = $("#idselprioritetvybora"), rowshablontop = $("#rowshablontop"), rowshablonbottom = $("#rowshablonbottom"), dobornfasadauto = $("#dobornfasadauto"), leftarr = $("#leftarr"), rightarr = $("#rightarr"), shdom = $(".shdom"), domch = $(".domch"), domchlist = $("#domchlist"), menucell = $(".menucell"), allimages = $("#allimages"), calc_krovlya = $("#calc_krovlya"), calc_krovlya_garage = $("#calc_krovlya-garage"), calc_fasad_garage = $("#calc_fasad-garage"), calc_fasad = $("#calc_fasad"), calc_cokol = $("#calc_cokol"), calc_cokol_garage = $("#calc_cokol-garage"), calc_sofity = $("#calc_sofity"), calc_vodostok = $("#calc_vodostok"), calc_nalichnik = $("#calc_nalichnik"), calc_nalichnik_garage = $("#calc_nalichnik-garage"), calc_startplanka = $("#calc_startplanka"), calc_startplanka_garage = $("#calc_startplanka-garage"), calc_konek = $("#calc_konek"), calc_konek_garage = $("#calc_konek-garage"), calc_okna = $("#calc_okna"), calc_oknanalich = $("#calc_oknanalich"), calc_krylco = $("#calc_krylco"), calc_sneg = $("#calc_sneg"), calc_vent = $("#calc_vent"), calc_zabor = $("#calc_zabor"), calc_cvetnik = $("#calc_cvetnik"), calc_ladder = $("#calc_ladder"), calc_mostik = $("#calc_mostik"), calc_chimney = $("#calc_chimney"), calc_dob_chimney = $("#calc_dob_chimney"), calc_mansardokna = $("#calc_mansardokna"), calc_kol_chimney = $("#calc_kol_chimney"), ptrelem = $(".ptrelem"), podborselect = $("#podborselect"), podbordomgarag = $("#podbordomgarag"), podbortypeprofil = $("#podbortypeprofil"), podbortypecokol = $("#podbortypecokol"), podbortypepokr = $("#podbortypepokr"), podborcolor = $("#podborcolor"), podborcolormetal = $("#podborcolormetal"), podborcolorvinil = $("#podborcolorvinil"), podborcolorbrick = $("#podborcolorbrick"), podborcolorwandstein = $("#podborcolorwandstein"), podborinfo = $("#podborinfodel"), podborsettings = $("#podborsettings"), podbortypekrovlya = $("#podbortypekrovlya"), podborzabor = $("#podborzabor"), podborvodostok = $("#podborvodostok"), podbordoborn = $("#podbordoborn"), podborcolorsofity = $("#podborcolorsofity"), parVodostok = $("#parVodostok"), parFasad = $("#par_fasad"), parKrovlya = $("#par_krovlya"), parZabor = $("#parZabor"), podborcolorkomposit = $("#podborcolorkomposit"), mfasad = $("#fasad"), mkrovlya = $("#krovlya"), cforvinil = $("#cforvinil"), cforvinil2 = $("#cforvinil2"), cformetal = $("#cformetal"), cforbrick = $("#cforbrick"), cforkomposit = $("#cforkomposit"), tipkrovlitext = $("#tipkrovlitext"), tippokrtext = $("#tippokrtext"), tipproftext = $("#tipproftext"), tipcolortext = $("#tipcolortext"), tipzabortext = $("#tipzabortext"), tipvodostoktext = $("#tipvodostoktext"), tipproftextcokol = $("#tipproftextcokol"), hideinfoblock = "0", isdobornfasadauto = !0
}
function grafikaResize() {
    var a = windowHeight / 8 - 60;
    727 > windowHeight ? (menucell.css("height", windowHeight / 8), a > 0 ? menucell.find("img").css("padding-top", (windowHeight / 8 - 60) / 2) : menucell.find("img").css("padding-top", 0), grandlineLogo.css("height", windowHeight / 8), grandlineLogo.find("img").css("padding-top", 20)) : (menucell.css("height", 90), menucell.find("img").css("padding-top", 10), grandlineLogo.find("img").css("padding-top", 35)), divminicount = ar_tcslist.length, onedivminwidth = 100, skolkodivminvokne = Math.floor((windowWidth - 90 - 50 - shablonrowleft) / onedivminwidth), rightforarr = parseInt(tcslist.css("right").replace("px", "")), divminicount > skolkodivminvokne ? rightforarr > 96 * (divminicount - skolkodivminvokne) && tcslist.animate({right: "-=96"}, 0) : tcslist.css("right", 0)
}
function tParamsUpdate(a, r, o, e) {
    switch (a) {
        case"fasad":
            tFasadTypeProfId = r, tFasadTypePokrId = o, tFasadColorId = e;
            break;
        case"dobornfasad":
            tDobornFasadColorId = e;
            break;
        case"dobornfasad-garage":
            tDobornFasadGarColorId = e;
            break;
        case"fasad-garage":
            tFasadGaragTypeProfId = r, tFasadGaragTypePokrId = o, tFasadGaragColorId = e;
            break;
        case"krovlya":
            tKrovlyaTypeProfId = r, tKrovlyaTypePokrId = o, tKrovlyaColorId = e;
            break;
        case"krovlya-garage":
            tKrovlyaGaragTypeProfId = r, tKrovlyaGaragTypePokrId = o, tKrovlyaGaragColorId = e;
            break;
        case"zabor":
            tZaborTypeProfId = r, tZaborColorId = e;
            break;
        case"vodostok":
            tVodostokTypeProfId = r, tVodostokColorId = e;
            break;
        case"cokol":
            tCokolTypeProfId = r, tCokolTypePokrId = o, tCokolColorId = e;
            break;
        case"cokol-garage":
            tCokolGaragTypeProfId = r, tCokolGaragTypePokrId = o, tCokolGaragColorId = e;
            break;
        case"sofity":
            tSofityColorId = e;
            break;
        case"oknanal":
            tOknaNalichColorId = e;
            break;
        case"krylco":
            tKrylcoColorId = e
    }
}
function PrintTableParams(a) {
    switch (a) {
        case"fasad":
            var r, o, e;
            r = null == ar_fasad_text[tFasadTypeProfId] ? tFasadTypeProfId : ar_fasad_text[tFasadTypeProfId], o = null == ar_typepokr_text[tFasadTypePokrId] ? tFasadTypePokrId : ar_typepokr_text[tFasadTypePokrId], e = null == ar_color_text[tFasadColorId] ? tFasadColorId : ar_color_text[tFasadColorId], r.indexOf("metal") > -1 ? parFasad.html(r + " | " + o + " | " + e) : "ifasad" == tFasadColorId ? parFasad.html('<a href="http://www.grandline.ru/shop/fasad/fasadnye-paneli/ya-fasad/" target="blank" class="infa" alt="Я-Фасад" title="Я-Фасад">Я-Фасад</a>') : parFasad.html(r + " | " + e), isdobornfasadauto ? (tDobornFasadColorId = tFasadColorId, calc_nalichnik.find("img").attr("src", "img/doma/" + domnvidn + "/nalichnikfasad/" + tDobornFasadColorId + ".png"), PrintTableParams("dobornfasad")) : $.inArray(tDobornFasadColorId, ["brrbro", "brwhi", "bryell", "ifasad"]) > -1 && (isdobornfasadauto = !0, $("#dbfchinp").prop("checked", !0), tDobornFasadColorId = tFasadColorId, calc_nalichnik.find("img").attr("src", "img/doma/" + domnvidn + "/nalichnikfasad/" + tDobornFasadColorId + ".png"), PrintTableParams("dobornfasad")), qsArr.fp = tFasadTypeProfId, qsArr.fpkr = tFasadTypePokrId, qsArr.fc = tFasadColorId, jQuery.bbq.pushState(qsArr);
            break;
        case"dobornfasad":
            qsArr.dobornfc = tDobornFasadColorId, jQuery.bbq.pushState(qsArr);
            break;
        case"dobornfasad-garage":
            qsArr.dobornfgc = tDobornFasadGarColorId, jQuery.bbq.pushState(qsArr);
            break;
        case"fasad-garage":
            var l, t, i;
            l = null == ar_fasad_text[tFasadGaragTypeProfId] ? tFasadGaragTypeProfId : ar_fasad_text[tFasadGaragTypeProfId], t = null == ar_typepokr_text[tFasadGaragTypePokrId] ? tFasadGaragTypePokrId : ar_typepokr_text[tFasadGaragTypePokrId], i = null == ar_color_text[tFasadGaragColorId] ? tFasadGaragColorId : ar_color_text[tFasadGaragColorId], l.indexOf("metal") > -1, isdobornfasadauto ? (tDobornFasadGarColorId = tFasadGaragColorId, calc_nalichnik_garage.find("img").attr("src", "img/doma/" + domnvidn + "/nalichnikfasad-garage/" + tDobornFasadGarColorId + ".png"), PrintTableParams("dobornfasad-garage")) : $.inArray(tDobornFasadGarColorId, ["brrbro", "brwhi", "bryell", "ifasad"]) > -1 && (isdobornfasadauto = !0, $("#dbfchinp").prop("checked", !0), tDobornFasadGarColorId = tFasadColorId, calc_nalichnik_garage.find("img").attr("src", "img/doma/" + domnvidn + "/nalichnikfasad-garage/" + tDobornFasadGarColorId + ".png"), PrintTableParams("dobornfasad-garage")), qsArr.fgp = tFasadGaragTypeProfId, qsArr.fgpkr = tFasadGaragTypePokrId, qsArr.fgc = tFasadGaragColorId, jQuery.bbq.pushState(qsArr);
            break;
        case"krovlya":
            var s, d, c;
            s = null == ar_krovlya_text[tKrovlyaTypeProfId] ? tKrovlyaTypeProfId : ar_krovlya_text[tKrovlyaTypeProfId], d = null == ar_typepokr_text[tKrovlyaTypePokrId] ? tKrovlyaTypePokrId : ar_typepokr_text[tKrovlyaTypePokrId], c = null == ar_color_text[tKrovlyaColorId] ? tKrovlyaColorId : ar_color_text[tKrovlyaColorId], parKrovlya.html(s + " | " + d + " | " + c), calc_konek.find("img").attr("src", "img/doma/" + domnvidn + "/konek/" + tKrovlyaColorId + ".png"), calc_sneg.find("img").attr("src", "img/doma/" + domnvidn + "/sneg/" + tKrovlyaColorId + ".png"), calc_vent.find("img").attr("src", "img/doma/" + domnvidn + "/vent/" + tKrovlyaColorId + ".png"), calc_dob_chimney.find("img").attr("src", "img/doma/" + domnvidn + "/dob_chimney/" + tKrovlyaColorId + ".png"), calc_kol_chimney.find("img").attr("src", "img/doma/" + domnvidn + "/kol_chimney/" + tKrovlyaColorId + ".png"), qsArr.kp = tKrovlyaTypeProfId, qsArr.kpkr = tKrovlyaTypePokrId, qsArr.kc = tKrovlyaColorId, jQuery.bbq.pushState(qsArr);
            break;
        case"krovlya-garage":
            var p, n, k;
            p = null == ar_krovlya_text[tKrovlyaGaragTypeProfId] ? tKrovlyaGaragTypeProfId : ar_krovlya_text[tKrovlyaGaragTypeProfId], n = null == ar_typepokr_text[tKrovlyaGaragTypePokrId] ? tKrovlyaGaragTypePokrId : ar_typepokr_text[tKrovlyaGaragTypePokrId], k = null == ar_color_text[tKrovlyaGaragColorId] ? tKrovlyaGaragColorId : ar_color_text[tKrovlyaGaragColorId], calc_konek_garage.find("img").attr("src", "img/doma/" + domnvidn + "/konek-garage/" + tKrovlyaGaragColorId + ".png"), qsArr.kgp = tKrovlyaGaragTypeProfId, qsArr.kgpkr = tKrovlyaGaragTypePokrId, qsArr.kgc = tKrovlyaGaragColorId, jQuery.bbq.pushState(qsArr);
            break;
        case"vodostok":
            var f, y;
            f = null == ar_vodostok_text[tVodostokTypeProfId] ? tVodostokTypeProfId : ar_vodostok_text[tVodostokTypeProfId], y = null == ar_color_text[tVodostokColorId] ? tVodostokColorId : ar_color_text[tVodostokColorId], parVodostok.html(f + " | " + y), qsArr.vp = tVodostokTypeProfId, qsArr.vc = tVodostokColorId, jQuery.bbq.pushState(qsArr);
            break;
        case"zabor":
            var m, v;
            m = null == ar_zabor_text[tZaborTypeProfId] ? tZaborTypeProfId : ar_zabor_text[tZaborTypeProfId], v = null == ar_color_text[tZaborColorId] ? tZaborColorId : ar_color_text[tZaborColorId], parZabor.html(m + " | " + v), qsArr.zp = tZaborTypeProfId, qsArr.zc = tZaborColorId, jQuery.bbq.pushState(qsArr);
            break;
        case"cokol":
            qsArr.cp = tCokolTypeProfId, qsArr.cpkr = tCokolTypePokrId, qsArr.cc = tCokolColorId, calc_startplanka.find("img").attr("src", "img/doma/" + domnvidn + "/startplanka/" + tCokolColorId + ".png"), jQuery.bbq.pushState(qsArr);
            break;
        case"cokol-garage":
            qsArr.cgp = tCokolGaragTypeProfId, qsArr.cgpkr = tCokolGaragTypePokrId, qsArr.cgc = tCokolGaragColorId, calc_startplanka_garage.find("img").attr("src", "img/doma/" + domnvidn + "/startplanka-garage/" + tCokolGaragColorId + ".png"), jQuery.bbq.pushState(qsArr);
            break;
        case"sofity":
            qsArr.sofc = tSofityColorId, jQuery.bbq.pushState(qsArr);
            break;
        case"oknanalich":
            qsArr.oknanal = tOknaNalichColorId, jQuery.bbq.pushState(qsArr);
            break;
        case"krylco":
            qsArr.krylco = tKrylcoColorId, jQuery.bbq.pushState(qsArr);
            break;
        default:
            wrterr(domnvidn + "_Error_23")
    }
    1 != saveimgapropusk && SaveImgAF(), isRobot || (qsArrBack = qsArr, tCurrentShablon = "001")
}
function ChangeFasadDoborn(a) {
    switch (isdobornfasadauto = !1, $("#dbfchinp").prop("checked", !1), podborcolor.find(".frame").removeClass("active"), domgarag) {
        case"-garage":
            tDobornFasadGarColorId = a;
            break;
        case"":
            tDobornFasadColorId = a
    }
    $("#" + a).find(".frame").addClass("active"), $("#calc_nalichnik" + domgarag).find("img").attr("src", "img/doma/" + domnvidn + "/nalichnikfasad" + domgarag + "/" + a + ".png"), PrintTableParams("dobornfasad" + domgarag)
}
function SaveImgAF() {
    saveimga.attr("href", "http://grandline.ru/calculator/php/saveimage.php/?zabor=" + calc_zabor.find("img").attr("src") + "&cokol=" + calc_cokol.find("img").attr("src") + "&cokolgarage=" + calc_cokol_garage.find("img").attr("src") + "&fasad=" + calc_fasad.find("img").attr("src") + "&fasadgarage=" + calc_fasad_garage.find("img").attr("src") + "&nalichnikfasad=" + calc_nalichnik.find("img").attr("src") + "&nalichnikfasadgarage=" + calc_nalichnik_garage.find("img").attr("src") + "&startplanka=" + calc_startplanka.find("img").attr("src") + "&startplankagarage=" + calc_startplanka_garage.find("img").attr("src") + "&okna=" + calc_okna.find("img").attr("src") + "&oknanalich=" + calc_oknanalich.find("img").attr("src") + "&sofity=" + calc_sofity.find("img").attr("src") + "&krylco=" + calc_krylco.find("img").attr("src") + "&krovlya=" + calc_krovlya.find("img").attr("src") + "&krovlyagarage=" + calc_krovlya_garage.find("img").attr("src") + "&vodostok=" + calc_vodostok.find("img").attr("src") + "&konek=" + calc_konek.find("img").attr("src") + "&konekgarage=" + calc_konek_garage.find("img").attr("src") + "&vent=" + calc_vent.find("img").attr("src") + "&sneg=" + calc_sneg.find("img").attr("src") + "&cvetnik=" + calc_cvetnik.find("img").attr("src") + "&ladder=" + calc_ladder.find("img").attr("src") + "&mostik=" + calc_mostik.find("img").attr("src") + "&mansardokna=" + calc_mansardokna.find("img").attr("src") + "&chimney=" + calc_chimney.find("img").attr("src") + "&dob_chimney=" + calc_dob_chimney.find("img").attr("src") + "&kol_chimney=" + calc_kol_chimney.find("img").attr("src") + "&domnvidn=" + domnvidn)
}
function DrawColumnPodbor(a) {
    switch (a) {
        case"fasadpotipuprof":
            switch ($(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), hasGarage() && (podbordomgarag.show(), $("#mgarag").find("img").attr("src", "img/online/radiounch.png"), $("#mdom").find("img").attr("src", "img/online/radioch.png")), podborselect.show(), podbortypeprofil.show(), podbortypepokr.show(), podborcolor.show(), podborinfo.show(), cformetal.hide(), cforkomposit.hide(), cforvinil.hide(), cforvinil2.hide(), cforbrick.hide(), rowshablontop.hide(), rowshablonbottom.hide(), tipproftext.html("2. Выберите тип профиля"), tippokrtext.html("3. Выберите тип покрытия"), tipcolortext.html("4. Выберите цвет"), sActivePodborMaterial = tFasadTypeProfId.substr(0, tFasadTypeProfId.indexOf("_")), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", hasGarage() && podborselect.insertAfter(podbordomgarag), podbortypeprofil.insertAfter(podborselect), podbortypepokr.insertAfter(podbortypeprofil), podborcolor.insertAfter(podbortypepokr), podborcolorwandstein.hide(), podborcolorkomposit.hide(), podborcolorsofity.hide(), sActivePodborMaterial) {
                case"metal":
                    podborcolormetal.show(), podborcolorvinil.hide(), podborcolorbrick.hide(), $("#" + tFasadTypeProfId).trigger("click"), $("#" + tFasadTypePokrId).trigger("click"), $("#" + tFasadColorId).trigger("click");
                    break;
                case"vinil":
                    podborcolormetal.hide(), podborcolorbrick.hide(), podborcolorvinil.show(), podbortypepokr.hide(), $("#" + tFasadTypeProfId).trigger("click"), $("#" + tFasadColorId).trigger("click");
                    break;
                case"brick":
                    podborcolormetal.hide(), podborcolorvinil.hide(), podborcolorbrick.show(), podbortypepokr.hide(), $("#" + tFasadTypeProfId).trigger("click"), $("#" + tFasadColorId).trigger("click")
            }
            $.each(ar_profil_id.vinil, function (a, r) {
                $("#" + r).find(".overlayd").removeClass("active")
            }), $.each(ar_profil_id.metal, function (a, r) {
                $("#" + r).find(".overlayd").removeClass("active")
            }), $.each(ar_profil_id.brick, function (a, r) {
                $("#" + r).find(".overlayd").removeClass("active")
            }), podbortypeprofil.find(".overlayd").removeClass("active");
            break;
        case"fasadpocvetu":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), rowshablontop.hide(), rowshablonbottom.hide(), hasGarage() && (podbordomgarag.show(), $("#mgarag").find("img").attr("src", "img/online/radiounch.png"), $("#mdom").find("img").attr("src", "img/online/radioch.png")), podborselect.show(), podbortypeprofil.show(), podbortypepokr.show(), podborcolor.show(), podborinfo.show(), podborcolormetal.show(), podborcolorvinil.show(), podborcolorbrick.show(), podborsettings.hide(), podbortypekrovlya.hide(), cforvinil.html("для винила"), cforvinil2.hide(), cforvinil.show(), cformetal.show(), cforkomposit.hide(), cforbrick.show(), tipproftext.html("4. Выберите тип профиля"), tippokrtext.html("3. Выберите тип покрытия"), tipcolortext.html("2. Выберите цвет"), podborcolorwandstein.hide(), podborcolorkomposit.hide(), podborcolorsofity.hide(), hasGarage() && podborselect.insertAfter(podbordomgarag), podborcolor.insertAfter(podborselect), podbortypepokr.insertAfter(podborcolor), podbortypeprofil.insertAfter(podbortypepokr), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", podborcolor.find(".overlayd").removeClass("active"), $("#aluzinc").find(".overlayd").addClass("active"), $("#" + tFasadColorId).trigger("click"), $("#" + tFasadTypePokrId).trigger("click");
            break;
        case"dobornpotipuprof":
            $(".podborcell").hide(), podbordoborn.show(), podborcolor.show(), podborcolorsofity.show(), tipcolortext.html("2. Выберите цвет"), podborcolorsofity.show(), podborcolor.insertAfter(podbordoborn), podborcolorwandstein.hide(), podborcolorkomposit.hide(), cforbrick.hide(), rowshablontop.hide(), rowshablonbottom.hide(), $("#dobornfasad").trigger("click");
            break;
        case"dobornotherpocvetu":
            dobornfasadauto.hide(), $(".cfor").hide(), podborcolorsofity.show(), podborcolormetal.hide(), podborcolorvinil.hide(), podborcolorkomposit.hide();
            break;
        case"dobornfasadpocvetu":
            switch (dobornfasadauto.show(), $("#cink").hide(), $("#aluzinc").hide(), podborcolor.show(), podborcolormetal.show(), podborcolorvinil.show(), podborcolorbrick.hide(), cforvinil.show(), podborcolorsofity.hide(), cformetal.show(), cforkomposit.hide(), podborcolorkomposit.hide(), podborcolor.find(".overlayd").removeClass("active"), podborcolor.find(".frame").removeClass("active"), domgarag) {
                case"":
                    $("#" + tDobornFasadColorId).find(".frame").addClass("active");
                    break;
                case"-garage":
                    $("#" + tDobornFasadGarColorId).find(".frame").addClass("active")
            }
            break;
        case"fasad-garagepotipuprof":
            switch ($(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), hasGarage() && (podbordomgarag.show(), $("#mgarag").find("img").attr("src", "img/online/radioch.png"), $("#mdom").find("img").attr("src", "img/online/radiounch.png")), podborselect.show(), podbortypeprofil.show(), podbortypepokr.show(), podborcolor.show(), podborinfo.show(), cformetal.hide(), cforkomposit.hide(), cforvinil.hide(), cforvinil2.hide(), cforbrick.hide(), rowshablontop.hide(), rowshablonbottom.hide(), tipproftext.html("2. Выберите тип профиля"), tippokrtext.html("3. Выберите тип покрытия"), tipcolortext.html("4. Выберите цвет"), sActivePodborMaterial = tFasadGaragTypeProfId.substr(0, tFasadGaragTypeProfId.indexOf("_")), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", "dom4vid1" == domnvidn && podborselect.insertAfter(podbordomgarag), podbortypeprofil.insertAfter(podborselect), podbortypepokr.insertAfter(podbortypeprofil), podborcolor.insertAfter(podbortypepokr), podborcolorwandstein.hide(), podborcolorkomposit.hide(), podborcolorsofity.hide(), sActivePodborMaterial) {
                case"metal":
                    podborcolormetal.show(), podborcolorvinil.hide(), podborcolorbrick.hide(), $("#" + tFasadGaragTypeProfId).trigger("click"), $("#" + tFasadGaragTypePokrId).trigger("click"), $("#" + tFasadGaragColorId).trigger("click");
                    break;
                case"vinil":
                    podborcolormetal.hide(), podborcolorbrick.hide(), podborcolorvinil.show(), podbortypepokr.hide(), $("#" + tFasadGaragTypeProfId).trigger("click"), $("#" + tFasadGaragColorId).trigger("click");
                    break;
                case"brick":
                    podborcolormetal.hide(), podborcolorvinil.hide(), podborcolorbrick.show(), podbortypepokr.hide(), $("#" + tFasadGaragTypeProfId).trigger("click"), $("#" + tFasadGaragColorId).trigger("click")
            }
            $.each(ar_profil_id.vinil, function (a, r) {
                $("#" + r).find(".overlayd").removeClass("active")
            }), $.each(ar_profil_id.metal, function (a, r) {
                $("#" + r).find(".overlayd").removeClass("active")
            }), $.each(ar_profil_id.brick, function (a, r) {
                $("#" + r).find(".overlayd").removeClass("active")
            }), podbortypeprofil.find(".overlayd").removeClass("active");
            break;
        case"fasad-garagepocvetu":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), rowshablontop.hide(), rowshablonbottom.hide(), hasGarage() && (podbordomgarag.show(), $("#mgarag").find("img").attr("src", "img/online/radioch.png"), $("#mdom").find("img").attr("src", "img/online/radiounch.png")), podborselect.show(), podbortypeprofil.show(), podbortypepokr.show(), podborcolor.show(), podborinfo.show(), podborcolormetal.show(), podborcolorvinil.show(), podborcolorbrick.show(), podborsettings.hide(), podbortypekrovlya.hide(), cforvinil.html("для винила"), cforvinil2.hide(), cforvinil.show(), cformetal.show(), cforkomposit.hide(), cforbrick.show(), podborcolorkomposit.hide(), tipproftext.html("4. Выберите тип профиля"), tippokrtext.html("3. Выберите тип покрытия"), tipcolortext.html("2. Выберите цвет"), podborcolorwandstein.hide(), podborcolorsofity.hide(), hasGarage() && podborselect.insertAfter(podbordomgarag), podborcolor.insertAfter(podborselect), podbortypepokr.insertAfter(podborcolor), podbortypeprofil.insertAfter(podbortypepokr), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", podborcolor.find(".overlayd").removeClass("active"), $("#aluzinc").find(".overlayd").addClass("active"), $("#" + tFasadGaragColorId).trigger("click"), $("#" + tFasadGaragTypePokrId).trigger("click");
            break;
        case"krovlyapotipuprof":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), rowshablontop.hide(), rowshablonbottom.hide(), hasGarage() && (podbordomgarag.show(), $("#mgarag").find("img").attr("src", "img/online/radiounch.png"), $("#mdom").find("img").attr("src", "img/online/radioch.png")), podborselect.show(), podbortypeprofil.hide(), podbortypekrovlya.show(), podbortypepokr.show(), podborcolor.show(), podborinfo.show(), podborcolormetal.show(), podborcolorvinil.hide(), podborcolorbrick.hide(), tipkrovlitext.html("2. Выберите тип кровли"), tippokrtext.html("3. Выберите тип покрытия"), tipcolortext.html("4. Выберите цвет"), podborcolorwandstein.hide(), podborcolorkomposit.hide(), podborcolorsofity.hide(), podbortypekrovlya.find(".framegrey").removeClass("active"), tKrovlyaTypeProfGreyId = "", podbortypepokr.find(".framegrey").removeClass("active"), tKrovlyaTypePokrGreyId = "", podborsettings.hide(), cforvinil2.hide(), cforvinil.hide(), cformetal.hide(), cforkomposit.hide(), hasGarage() && podborselect.insertAfter(podbordomgarag), podbortypekrovlya.insertAfter(podborselect), podbortypepokr.insertAfter(podbortypekrovlya), podborcolor.insertAfter(podbortypepokr), $("#" + tKrovlyaTypeProfId).trigger("click"), $("#" + tKrovlyaTypePokrId).trigger("click"), $("#" + tKrovlyaColorId).trigger("click"), $.each(ar_profil_id.vinil, function (a, r) {
                $("#" + r).find(".overlayd").removeClass("active")
            }), $.each(ar_profil_id.metal, function (a, r) {
                $("#" + r).find(".overlayd").removeClass("active")
            }), podbortypekrovlya.find(".overlayd").removeClass("active");
            break;
        case"krovlyapocvetu":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), rowshablontop.hide(), rowshablonbottom.hide(), hasGarage() && (podbordomgarag.show(), $("#mgarag").find("img").attr("src", "img/online/radiounch.png"), $("#mdom").find("img").attr("src", "img/online/radioch.png")), podborselect.show(), podbortypekrovlya.show(), podbortypeprofil.hide(), podbortypepokr.show(), podborcolor.show(), podborinfo.show(), podborcolormetal.show(), podborcolorvinil.hide(), podborcolorbrick.hide(), cforbrick.hide(), podborsettings.hide(), tipkrovlitext.html("4. Выберите тип кровли"), tippokrtext.html("3. Выберите тип покрытия"), tipcolortext.html("2. Выберите цвет"), podborcolorwandstein.hide(), podborcolorkomposit.show(), podborcolorsofity.hide(), cforvinil.hide(), cforvinil2.hide(), cformetal.show(), cforkomposit.show(), hasGarage() && podborselect.insertAfter(podbordomgarag), podborcolor.insertAfter(podborselect), podbortypepokr.insertAfter(podborcolor), podbortypekrovlya.insertAfter(podbortypepokr), podbortypekrovlya.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tKrovlyaTypeProfGreyId = "", podborcolor.find(".overlayd").removeClass("active"), $("#aluzinc").find(".overlayd").addClass("active"), $("#" + tKrovlyaColorId).trigger("click"), $("#" + tKrovlyaTypePokrId).trigger("click");
            break;
        case"krovlya-garagepotipuprof":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), rowshablontop.hide(), rowshablonbottom.hide(), hasGarage() && (podbordomgarag.show(), $("#mgarag").find("img").attr("src", "img/online/radioch.png"), $("#mdom").find("img").attr("src", "img/online/radiounch.png")), podborselect.show(), podbortypeprofil.hide(), podbortypekrovlya.show(), podbortypepokr.show(), podborcolor.show(), podborinfo.show(), podborcolormetal.show(), podborcolorvinil.hide(), podborcolorbrick.hide(), tipkrovlitext.html("2. Выберите тип кровли"), tippokrtext.html("3. Выберите тип покрытия"), tipcolortext.html("4. Выберите цвет"), podborcolorwandstein.hide(), podborcolorsofity.hide(), podbortypekrovlya.find(".framegrey").removeClass("active"), tKrovlyaGaragTypeProfGreyId = "", podbortypepokr.find(".framegrey").removeClass("active"), tKrovlyaGaragTypePokrGreyId = "", podborsettings.hide(), podborcolorkomposit.show(),
                cforvinil.hide(), cforvinil2.hide(), cformetal.hide(), cforkomposit.hide(), hasGarage() && podborselect.insertAfter(podbordomgarag), podbortypekrovlya.insertAfter(podborselect), podbortypepokr.insertAfter(podbortypekrovlya), podborcolor.insertAfter(podbortypepokr), $("#" + tKrovlyaGaragTypeProfId).trigger("click"), $("#" + tKrovlyaGaragTypePokrId).trigger("click"), $("#" + tKrovlyaGaragColorId).trigger("click"), $.each(ar_profil_id.vinil, function (a, r) {
                $("#" + r).find(".overlayd").removeClass("active")
            }), $.each(ar_profil_id.metal, function (a, r) {
                $("#" + r).find(".overlayd").removeClass("active")
            }), podbortypekrovlya.find(".overlayd").removeClass("active");
            break;
        case"krovlya-garagepocvetu":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), rowshablontop.hide(), rowshablonbottom.hide(), hasGarage() && (podbordomgarag.show(), $("#mgarag").find("img").attr("src", "img/online/radioch.png"), $("#mdom").find("img").attr("src", "img/online/radiounch.png")), podborselect.show(), podbortypekrovlya.show(), podbortypeprofil.hide(), podbortypepokr.show(), podborcolor.show(), podborinfo.show(), podborcolormetal.show(), podborcolorvinil.hide(), podborcolorbrick.hide(), cforbrick.hide(), podborsettings.hide(), tipkrovlitext.html("4. Выберите тип кровли"), tippokrtext.html("3. Выберите тип покрытия"), tipcolortext.html("2. Выберите цвет"), podborcolorwandstein.hide(), podborcolorsofity.hide(), cforvinil.hide(), cforvinil2.hide(), cformetal.hide(), cforkomposit.show(), podborcolorkomposit.show(), hasGarage() && podborselect.insertAfter(podbordomgarag), podborcolor.insertAfter(podborselect), podbortypepokr.insertAfter(podborcolor), podbortypekrovlya.insertAfter(podbortypepokr), podbortypekrovlya.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tKrovlyaGaragTypeProfGreyId = "", podborcolor.find(".overlayd").removeClass("active"), $("#aluzinc").find(".overlayd").addClass("active"), $("#" + tKrovlyaGaragColorId).trigger("click"), $("#" + tKrovlyaGaragTypePokrId).trigger("click");
            break;
        case"zaborpotipuprof":
            rowshablontop.hide(), rowshablonbottom.hide(), $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), podborzabor.show(), podborcolor.show(), podborcolormetal.show(), podborcolorvinil.hide(), podborcolorbrick.hide(), cforbrick.hide(), podborinfo.show(), cforvinil.hide(), cforvinil2.hide(), cformetal.hide(), cforkomposit.hide(), podborcolorkomposit.hide(), tipzabortext.html("1. Выберите тип ограждения"), tipcolortext.html("2. Выберите цвет"), podborcolorwandstein.hide(), podborcolorsofity.hide(), podborzabor.insertAfter(podborselect), podborcolor.insertAfter(podborzabor), podborzabor.find(".overlayd").removeClass("active"), podborcolor.find(".overlayd").removeClass("active"), podborzabor.find(".framegray").removeClass("active"), podborzabor.find(".frame").removeClass("active"), podborcolor.find(".frame").removeClass("active"), tZaborTypeProfGreyId = "", $("#" + tZaborTypeProfId).trigger("click"), $("#" + tZaborColorId).trigger("click");
            break;
        case"krovlaccesspotipuprof":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), rowshablontop.hide(), podborcolorkomposit.hide(), rowshablonbottom.hide();
            break;
        case"cokolpotipuprof":
            $(".podborcell").hide(), $("#cinkpokr").show(), $("#cink").show(), podborselect.hide(), hasGarage() && (podbordomgarag.show(), $("#mgarag").find("img").attr("src", "img/online/radiounch.png"), $("#mdom").find("img").attr("src", "img/online/radioch.png")), podbortypecokol.show(), podborcolor.show(), podborinfo.show(), cformetal.hide(), cforkomposit.hide(), podborcolorkomposit.hide(), cforvinil.hide(), cforvinil2.hide(), podborcolorvinil.hide(), podborcolorbrick.hide(), cforbrick.hide(), rowshablontop.hide(), rowshablonbottom.hide(), sActivePodborMaterial = tCokolTypeProfId.substr(0, tCokolTypeProfId.indexOf("_")), tipproftextcokol.html("1. Выберите тип профиля"), podbortypecokol.find(".framegrey").removeClass("active"), tCokolTypeProfGreyId = "", podbortypepokr.find(".framegrey").removeClass("active"), tCokolTypePokrGreyId = "", podbortypecokol.find(".overlayd").removeClass("active"), podbortypepokr.find(".overlayd").removeClass("active"), podborcolor.find(".overlayd").removeClass("active"), hasGarage() && podborselect.insertAfter(podbordomgarag), podbortypecokol.insertAfter(podborselect), podbortypepokr.insertAfter(podbortypecokol), podborcolor.insertAfter(podbortypepokr), podborcolorsofity.hide(), (sActivePodborMaterial.indexOf("cokolmetal") > -1 || sActivePodborMaterial.indexOf("cokolprofnastil") > -1) && (tippokrtext.html("2. Выберите тип покрытия"), tipcolortext.html("3. Выберите цвет"), podborcolormetal.show(), podborcolorwandstein.hide(), podbortypepokr.show(), $("#" + tCokolTypeProfId).trigger("click"), $("#" + tCokolTypePokrId).trigger("click"), $("#" + tCokolColorId).trigger("click")), sActivePodborMaterial.indexOf("cokolwandstein") > -1 && (podborcolormetal.hide(), podborcolorwandstein.show(), podbortypepokr.hide(), tipcolortext.html("2. Выберите цвет"), $("#" + tCokolTypeProfId).trigger("click"), $("#" + tCokolColorId).trigger("click"));
            break;
        case"cokol-garagepotipuprof":
            $(".podborcell").hide(), $("#cinkpokr").show(), $("#cink").show(), hasGarage() && (podbordomgarag.show(), $("#mgarag").find("img").attr("src", "img/online/radioch.png"), $("#mdom").find("img").attr("src", "img/online/radiounch.png")), podborselect.hide(), podbortypecokol.show(), podborcolor.show(), podborinfo.show(), cformetal.hide(), cforkomposit.hide(), podborcolorkomposit.hide(), cforvinil.hide(), cforvinil2.hide(), podborcolorvinil.hide(), podborcolorbrick.hide(), cforbrick.hide(), rowshablontop.hide(), rowshablonbottom.hide(), sActivePodborMaterial = tCokolGaragTypeProfId.substr(0, tCokolGaragTypeProfId.indexOf("_")), tipproftextcokol.html("1. Выберите тип профиля"), podbortypecokol.find(".framegrey").removeClass("active"), tCokolGaragTypeProfGreyId = "", podbortypepokr.find(".framegrey").removeClass("active"), tCokolGaragTypePokrGreyId = "", podbortypecokol.find(".overlayd").removeClass("active"), podbortypepokr.find(".overlayd").removeClass("active"), podborcolor.find(".overlayd").removeClass("active"), hasGarage() && podborselect.insertAfter(podbordomgarag), podbortypecokol.insertAfter(podborselect), podbortypepokr.insertAfter(podbortypecokol), podborcolor.insertAfter(podbortypepokr), podborcolorsofity.hide(), (sActivePodborMaterial.indexOf("cokolmetal") > -1 || sActivePodborMaterial.indexOf("cokolprofnastil") > -1) && (tippokrtext.html("2. Выберите тип покрытия"), tipcolortext.html("3. Выберите цвет"), podborcolormetal.show(), podborcolorwandstein.hide(), podbortypepokr.show(), $("#" + tCokolGaragTypeProfId).trigger("click"), $("#" + tCokolGaragTypePokrId).trigger("click"), $("#" + tCokolGaragColorId).trigger("click")), sActivePodborMaterial.indexOf("cokolwandstein") > -1 && (podborcolormetal.hide(), podborcolorwandstein.show(), podbortypepokr.hide(), tipcolortext.html("2. Выберите цвет"), $("#" + tCokolGaragTypeProfId).trigger("click"), $("#" + tCokolGaragColorId).trigger("click"));
            break;
        case"proempotipuprof":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), rowshablontop.hide(), podborcolorkomposit.hide(), rowshablonbottom.hide();
            break;
        case"vodostokpotipuprof":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), podborvodostok.show(), podborcolor.show(), podborcolormetal.show(), podborcolorvinil.hide(), podborcolorbrick.hide(), cforbrick.hide(), podborinfo.show(), cforvinil.hide(), cforvinil2.hide(), cformetal.hide(), cforkomposit.hide(), podborcolorkomposit.hide(), rowshablontop.hide(), rowshablonbottom.hide(), tipvodostoktext.html("1. Выберите тип водостока"), tipcolortext.html("2. Выберите цвет"), podborcolorwandstein.hide(), podborcolorsofity.hide(), podborvodostok.find(".overlayd").removeClass("active"), podborcolor.find(".overlayd").removeClass("active"), podborvodostok.insertAfter(podborselect), podborcolor.insertAfter(podborvodostok), $("#" + tVodostokTypeProfId).trigger("click"), $("#" + tVodostokColorId).trigger("click");
            break;
        case"shablonpotipuprof":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), rowshablontop.show(), podborcolorkomposit.hide(), rowshablonbottom.show(), tcslist.find(".active").removeClass("active"), $("#tcs" + tCurrentShablon).addClass("active");
            break;
        case"settpotipuprof":
            $(".podborcell").hide(), $("#cinkpokr").hide(), $("#cink").hide(), podborcolorkomposit.hide(), rowshablontop.hide(), rowshablonbottom.hide(), podborsettings.show()
    }
}
function wrterr(a) {
    var r = {WhoCall: a};
    $.getJSON("/calculator/php/wrterrtest.php", r, update)
}
function update(a) {
}
function ReadShablon(a) {
    a = a.substr(16, a.indexOf(".") - 16);
    var r = {
        "002": {
            cp: "cokolwandstein_but",
            cpkr: "poliester",
            cc: "wsdarkbrn",
            sofc: "sofbrn",
            vp: "gl12590",
            vc: "ral8017",
            zp: "modul_premplus",
            zc: "ral8017",
            kp: "metal_kvinta",
            kpkr: "poliester",
            kc: "ral8017",
            fp: "metal_blockhouse",
            fpkr: "colorityprint",
            fc: "svetloederevo",
            oknanal: "sofbrn",
            krylco: "sofbrn",
            fgp: "vinil_d4",
            fgpkr: "poliester",
            fgc: "vgrey",
            kgp: "metal_kvinta",
            kgpkr: "poliester",
            kgc: "ral3005",
            cgp: "cokolmetal_vertical",
            cgpkr: "poliester",
            cgc: "ral7004",
            fgp: "metal_ecobrus",
            fgpkr: "poliester",
            fgc: "ral9003",
            kgp: "metal_kvinta",
            kgpkr: "poliester",
            kgc: "ral3005",
            cgp: "cokolmetal_vertical",
            cgpkr: "poliester",
            cgc: "rr32",
            dobornfc: "svetloederevo"
        },
        "003": {
            cp: "cokolwandstein_but",
            cpkr: "poliester",
            cc: "wsdarkbrn",
            sofc: "sofbrn",
            vp: "gl12590",
            vc: "ral8017",
            zp: "modul_premplus",
            zc: "ral8017",
            kp: "metal_kvinta",
            kpkr: "poliester",
            kc: "ral8017",
            fp: "vinil_d4",
            fpkr: "colorityprint",
            fc: "bezh",
            oknanal: "sofbrn",
            krylco: "sofbrn",
            fgp: "vinil_d44",
            fgpkr: "poliester",
            fgc: "crem",
            kgp: "profnastil_20r",
            kgpkr: "poliester",
            kgc: "rr11",
            cgp: "cokolwandstein_but",
            cgpkr: "poliester",
            cgc: "wsbzh",
            dobornfc: "sofbrn"
        },
        "004": {
            cp: "cokolwandstein_parfir",
            cpkr: "poliester",
            cc: "wsgranat",
            sofc: "sofwt",
            vp: "gl12590",
            vc: "ral3005",
            zp: "modul_premplus",
            zc: "ral3005",
            kp: "metal_country",
            kpkr: "poliester",
            kc: "ral3005",
            fp: "vinil_d4",
            fpkr: "colorityprint",
            fc: "bezh",
            oknanal: "sofwt",
            krylco: "sofwt",
            fgp: "vinil_d4",
            fgpkr: "poliester",
            fgc: "bezh",
            kgp: "metal_classic",
            kgpkr: "poliester",
            kgc: "ral3005",
            cgp: "cokolwandstein_parfir",
            cgpkr: "poliester",
            cgc: "wsgranat",
            dobornfc: "bezh"
        },
        "005": {
            cp: "cokolwandstein_kirp",
            cpkr: "poliester",
            cc: "wspesoch",
            sofc: "sofwt",
            vp: "gl12590",
            vc: "ral9003",
            zp: "modul_premplus",
            zc: "ral8017",
            kp: "metal_country",
            kpkr: "poliester",
            kc: "ral5021",
            fp: "vinil_d44",
            fpkr: "poliester",
            fc: "vyellow",
            oknanal: "sofwt",
            krylco: "sofwt",
            fgp: "vinil_d44",
            fgpkr: "poliester",
            fgc: "karamel",
            kgp: "metal_classic",
            kgpkr: "poliester",
            kgc: "ral9006",
            cgp: "cokolwandstein_kirp",
            cgpkr: "poliester",
            cgc: "wszz",
            dobornfc: "vyellow"
        },
        "006": {
            cp: "cokolwandstein_but",
            cpkr: "poliester",
            cc: "wsoliv",
            vp: "gl12590",
            vc: "ral9003",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_kvinta",
            kpkr: "poliester",
            kc: "ral6005",
            fp: "vinil_d4",
            fpkr: "poliester",
            fc: "vgreen",
            sofc: "sofwt",
            oknanal: "sofwt",
            krylco: "sofwt",
            fgp: "vinil_d4",
            fgpkr: "poliester",
            fgc: "vgreen",
            kgp: "metal_classic",
            kgpkr: "poliester",
            kgc: "ral6005",
            cgp: "cokolwandstein_but",
            cgpkr: "poliester",
            cgc: "wsoliv",
            dobornfc: "vgreen"
        },
        "007": {
            cp: "cokolprofnastil_c8",
            cpkr: "poliester",
            cc: "ral5005",
            vp: "gl12590",
            vc: "ral9003",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_classic",
            kpkr: "safari",
            kc: "blue",
            fp: "vinil_d4",
            fpkr: "poliester",
            fc: "bel",
            sofc: "sofwt",
            oknanal: "sofwt",
            krylco: "sofwt",
            fgp: "vinil_d4",
            fgpkr: "poliester",
            fgc: "bel",
            kgp: "falcevaya_klickfalc",
            kgpkr: "velur",
            kgc: "ral5005",
            cgp: "cokolprofnastil_c8",
            cgpkr: "poliester",
            cgc: "ral5005",
            dobornfc: "sofwt"
        },
        "008": {
            cp: "cokolwandstein_dolomit",
            cpkr: "poliester",
            cc: "wsbzh",
            vp: "gl12590",
            vc: "ral6005",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_classic",
            kpkr: "safari",
            kc: "green",
            fp: "metal_vertical",
            fpkr: "colorityprint",
            fc: "svetloederevo",
            sofc: "sofbrn",
            oknanal: "sofbrn",
            krylco: "sofbrn",
            fgp: "metal_vertical",
            fgpkr: "quarzit30",
            fgc: "ral3011",
            kgp: "metal_classic",
            kgpkr: "granite",
            kgc: "cuprumsteel",
            cgp: "cokolwandstein_dolomit",
            cgpkr: "poliester",
            cgc: "wsbzh",
            dobornfc: "svetloederevo"
        },
        "009": {
            cp: "cokolwandstein_but",
            cpkr: "poliester",
            cc: "wsoliv",
            vp: "gl12590",
            vc: "ral9003",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_classic",
            kpkr: "poliester",
            kc: "rr11",
            fp: "vinil_blockhouse",
            fpkr: "poliester",
            fc: "vanil",
            sofc: "sofwt",
            oknanal: "sofwt",
            krylco: "sofwt",
            fgp: "brick_norm",
            fgpkr: "poliester",
            fgc: "bryell",
            kgp: "profnastil_60r",
            kgpkr: "poliester",
            kgc: "ral9002",
            cgp: "cokolwandstein_but",
            cgpkr: "poliester",
            cgc: "wsbzh",
            dobornfc: "vanil"
        },
        "010": {
            cp: "cokolwandstein_kirp",
            cpkr: "colorityprint",
            cc: "wsdarkbrn",
            vp: "gl12590",
            vc: "ral8017",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_country",
            kpkr: "quarzit35",
            kc: "ral8004",
            fp: "metal_blockhouse",
            fpkr: "colorityprint",
            fc: "svetloederevo",
            sofc: "sofbrn",
            oknanal: "sofbrn",
            krylco: "sofbrn",
            fgp: "brick_norm",
            fgpkr: "poliester",
            fgc: "brrbro",
            kgp: "metal_classic",
            kgpkr: "safari",
            kgc: "brown",
            cgp: "cokolwandstein_kirp",
            cgpkr: "poliester",
            cgc: "wsdarkbrn",
            dobornfc: "svetloederevo"
        },
        "011": {
            cp: "cokolwandstein_but",
            cpkr: "poliester",
            cc: "wsoliv",
            sofc: "sofwt",
            oknanal: "sofwt",
            krylco: "sofwt",
            vp: "gl12590",
            vc: "ral9003",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_kvinta",
            kpkr: "poliester",
            kc: "ral6005",
            fp: "metal_ecobrus",
            fpkr: "poliester",
            fc: "ral9006",
            fgp: "vinil_d4",
            fgpkr: "poliester",
            fgc: "karamel",
            kgp: "falcevaya_klickfalc",
            kgpkr: "poliester",
            kgc: "ral8017",
            cgp: "cokolprofnastil_c8",
            cgpkr: "velur",
            cgc: "ral8017",
            dobornfc: "ral9006"
        },
        "012": {
            cp: "cokolwandstein_but",
            cpkr: "poliester",
            cc: "wsdarkbrn",
            sofc: "sofbrn",
            oknanal: "sofbrn",
            krylco: "sofbrn",
            vp: "gl12590",
            vc: "ral9003",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_kvinta",
            kpkr: "safari",
            kc: "green",
            fp: "vinil_d44",
            fpkr: "poliester",
            fc: "temnbezh",
            fgp: "vinil_d4",
            fgpkr: "poliester",
            fgc: "vgrey",
            kgp: "metal_kvinta",
            kgpkr: "poliester",
            kgc: "ral5005",
            cgp: "cokolmetal_vertical",
            cgpkr: "poliester",
            cgc: "ral7004",
            dobornfc: "sofbrn"
        },
        "013": {
            cp: "cokolmetal_vertical",
            cpkr: "colorityprint",
            cc: "kamen",
            sofc: "sofwt",
            oknanal: "sofwt",
            vp: "gl12590",
            vc: "ral9003",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_kvinta",
            kpkr: "poliester",
            kc: "ral7005",
            fp: "vinil_d4",
            fpkr: "colorityprint",
            fc: "vgrey",
            fgp: "vinil_d4",
            fgpkr: "quarzit30",
            fgc: "vblue",
            dobornfc: "vgrey",
            dobornfgc: "vblue",
            kgp: "metal_kvinta",
            kgpkr: "poliester",
            kgc: "ral7005",
            cgp: "cokolmetal_vertical",
            cgpkr: "colorityprint",
            cgc: "kamen",
            krylco: "sofwt"
        },
        "014": {
            cp: "cokolmetal_vertical",
            cpkr: "colorityprint",
            cc: "kamen",
            sofc: "sofwt",
            oknanal: "sofwt",
            vp: "gl12590",
            vc: "ral9003",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_classic",
            kpkr: "poliester",
            kc: "ral7005",
            fp: "vinil_d4",
            fpkr: "colorityprint",
            fc: "crem",
            fgp: "vinil_d4",
            fgpkr: "quarzit30",
            fgc: "crem",
            dobornfc: "crem",
            dobornfgc: "crem",
            kgp: "metal_kvinta",
            kgpkr: "poliester",
            kgc: "ral7005",
            cgp: "cokolmetal_vertical",
            cgpkr: "colorityprint",
            cgc: "kamen",
            krylco: "sofwt"
        },
        "015": {
            cp: "cokolprofnastil_c10",
            cpkr: "poliester",
            cc: "ral7004",
            sofc: "sofwt",
            oknanal: "sofwt",
            vp: "gl12590",
            vc: "ral9003",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "profnastil_21r",
            kpkr: "poliester",
            kc: "ral7004",
            fp: "metal_vertical",
            fpkr: "poliester",
            fc: "ral5021",
            fgp: "metal_vertical",
            fgpkr: "poliester",
            fgc: "ral5021",
            dobornfc: "ral5021",
            dobornfgc: "ral5021",
            kgp: "profnastil_21r",
            kgpkr: "poliester",
            kgc: "ral7004",
            cgp: "cokolprofnastil_c10",
            cgpkr: "poliester",
            cgc: "ral7004",
            krylco: "sofwt"
        },
        "016": {
            cp: "cokolprofnastil_c8",
            cpkr: "poliester",
            cc: "rr32",
            sofc: "sofwt",
            oknanal: "sofwt",
            vp: "gl12590",
            vc: "ral9003",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_country",
            kpkr: "safari",
            kc: "blue",
            fp: "vinil_d44",
            fpkr: "colorityprint",
            fc: "crem",
            fgp: "vinil_d44",
            fgpkr: "colorityprint",
            fgc: "crem",
            dobornfc: "crem",
            dobornfgc: "crem",
            kgp: "metal_country",
            kgpkr: "safari",
            kgc: "blue",
            cgp: "cokolprofnastil_c10",
            cgpkr: "poliester",
            cgc: "rr32",
            krylco: "sofbrn"
        },
        "017": {
            cp: "cokolprofnastil_c8",
            cpkr: "safari",
            cc: "pink",
            sofc: "sofbrn",
            oknanal: "sofwt",
            vp: "gl12590",
            vc: "ral3005",
            zp: "modul_premplus",
            zc: "ral6005",
            kp: "metal_quadroprofi",
            kpkr: "safari",
            kc: "pink",
            fp: "vinil_d44",
            fpkr: "poliester",
            fc: "pers",
            fgp: "vinil_d44",
            fgpkr: "poliester",
            fgc: "pers",
            dobornfc: "pers",
            dobornfgc: "pers",
            kgp: "metal_quadroprofi",
            kgpkr: "safari",
            kgc: "pink",
            cgp: "cokolprofnastil_c10",
            cgpkr: "safari",
            cgc: "pink",
            krylco: "sofwt"
        }
    };
    tCurrentShablon = a, qsArr = "001" != a ? r[a] : qsArrBack, qsArr.domn = domnvidn, jQuery.bbq.pushState(qsArr), isRobot = !0, updateWithQueryString(qsArr), isRobot = !1, rowshablontop.show(), rowshablonbottom.show(), $("#shablon").addClass("active"), $("#shablon").find("img").attr("src", "img/online/menu_shablon_r.png")
}
function domResize() {
    switch (windowWidth = columnhome.width() - 90, windowHeight = columnhome.height(), pageItogoWidth = imgIshWidth, pageItogoHeight = imgIshHeight, windowHeight > imgIshHeight ? windowWidth > imgIshWidth ? (pageItogoHeight = imgIshHeight, pageItogoWidth = imgIshWidth, koefCurrentUm = 1) : (pageItogoWidth = windowWidth, koefCurrentUm = pageItogoWidth / imgIshWidth, pageItogoHeight = koefCurrentUm * imgIshHeight) : windowWidth > imgIshWidth ? (pageItogoHeight = windowHeight, koefCurrentUm = pageItogoHeight / imgIshHeight, pageItogoWidth = koefCurrentUm * imgIshWidth) : windowWidth / imgIshWidth > windowHeight / imgIshHeight ? (pageItogoHeight = windowHeight, koefCurrentUm = pageItogoHeight / imgIshHeight, pageItogoWidth = koefCurrentUm * imgIshWidth) : (pageItogoWidth = windowWidth, koefCurrentUm = pageItogoWidth / imgIshWidth, pageItogoHeight = koefCurrentUm * imgIshHeight), allimages.css("width", pageItogoWidth), allimages.css("height", pageItogoHeight), rowshablontop.css("width", windowWidth - 90), rowshablonbottom.css("width", windowWidth - shablonrowleft), rowshablonbottom.css("margin-left", 90 + shablonrowleft), bottomleftarr.css("left", 84 + shablonrowleft), domnvidn) {
        case"dom1vid1":
            calc_krovlya.css("width", 1056 * koefCurrentUm), calc_krovlya.css("height", 525 * koefCurrentUm), calc_fasad.css("width", 1030 * koefCurrentUm), calc_fasad.css("height", 670 * koefCurrentUm), calc_cokol.css("width", 1030 * koefCurrentUm), calc_cokol.css("height", 240 * koefCurrentUm), calc_sofity.css("width", 1106 * koefCurrentUm), calc_sofity.css("height", 493 * koefCurrentUm), calc_vodostok.css("width", 1214 * koefCurrentUm), calc_vodostok.css("height", 465 * koefCurrentUm), calc_nalichnik.css("width", 1071 * koefCurrentUm), calc_nalichnik.css("height", 677 * koefCurrentUm), calc_startplanka.css("width", 1040 * koefCurrentUm), calc_startplanka.css("height", 175 * koefCurrentUm), calc_konek.css("width", 1219 * koefCurrentUm), calc_konek.css("height", 521 * koefCurrentUm), calc_okna.css("width", 826 * koefCurrentUm), calc_okna.css("height", 503 * koefCurrentUm), calc_oknanalich.css("width", 878 * koefCurrentUm), calc_oknanalich.css("height", 515 * koefCurrentUm), calc_krylco.css("width", 353 * koefCurrentUm), calc_krylco.css("height", 415 * koefCurrentUm), calc_sneg.css("width", 852 * koefCurrentUm), calc_sneg.css("height", 398 * koefCurrentUm), calc_vent.css("width", 713 * koefCurrentUm), calc_vent.css("height", 143 * koefCurrentUm), calc_zabor.css("width", 1920 * koefCurrentUm), calc_zabor.css("height", 350 * koefCurrentUm), calc_cvetnik.css("width", 695 * koefCurrentUm), calc_cvetnik.css("height", 189 * koefCurrentUm), calc_mansardokna.css("width", 472 * koefCurrentUm), calc_mansardokna.css("height", 201 * koefCurrentUm);
            break;
        case"dom2vid1":
            calc_krovlya.css("width", 1182 * koefCurrentUm), calc_krovlya.css("height", 352 * koefCurrentUm), calc_fasad.css("width", 1315 * koefCurrentUm), calc_fasad.css("height", 587 * koefCurrentUm), calc_cokol.css("width", 1312 * koefCurrentUm), calc_cokol.css("height", 266 * koefCurrentUm), calc_sofity.css("width", 1483 * koefCurrentUm), calc_sofity.css("height", 482 * koefCurrentUm), calc_vodostok.css("width", 1460 * koefCurrentUm), calc_vodostok.css("height", 536 * koefCurrentUm), calc_nalichnik.css("width", 1454 * koefCurrentUm), calc_nalichnik.css("height", 737 * koefCurrentUm), calc_startplanka.css("width", 1313 * koefCurrentUm), calc_startplanka.css("height", 183 * koefCurrentUm), calc_konek.css("width", 1458 * koefCurrentUm), calc_konek.css("height", 364 * koefCurrentUm), calc_okna.css("width", 1064 * koefCurrentUm), calc_okna.css("height", 482 * koefCurrentUm), calc_oknanalich.css("width", 1207 * koefCurrentUm), calc_oknanalich.css("height", 659 * koefCurrentUm), calc_krylco.css("width", 250 * koefCurrentUm), calc_krylco.css("height", 476 * koefCurrentUm), calc_sneg.css("width", 900 * koefCurrentUm), calc_sneg.css("height", 280 * koefCurrentUm), calc_vent.css("width", 665 * koefCurrentUm), calc_vent.css("height", 178 * koefCurrentUm), calc_zabor.css("width", 1920 * koefCurrentUm), calc_zabor.css("height", 266 * koefCurrentUm), calc_cvetnik.css("width", 1085 * koefCurrentUm), calc_cvetnik.css("height", 410 * koefCurrentUm), calc_mansardokna.css("width", 663 * koefCurrentUm), calc_mansardokna.css("height", 191 * koefCurrentUm);
            break;
        case"dom3vid1":
            calc_krovlya.css("width", 1289 * koefCurrentUm), calc_krovlya.css("height", 510 * koefCurrentUm), calc_fasad.css("width", 1162 * koefCurrentUm), calc_fasad.css("height", 694 * koefCurrentUm), calc_cokol.css("width", 1162 * koefCurrentUm), calc_cokol.css("height", 198 * koefCurrentUm), calc_sofity.css("width", 1233 * koefCurrentUm), calc_sofity.css("height", 496 * koefCurrentUm), calc_vodostok.css("width", 1346 * koefCurrentUm), calc_vodostok.css("height", 680 * koefCurrentUm), calc_nalichnik.css("width", 1162 * koefCurrentUm), calc_nalichnik.css("height", 630 * koefCurrentUm), calc_startplanka.css("width", 1162 * koefCurrentUm), calc_startplanka.css("height", 141 * koefCurrentUm), calc_konek.css("width", 1360 * koefCurrentUm), calc_konek.css("height", 510 * koefCurrentUm), calc_okna.css("width", 1155 * koefCurrentUm), calc_okna.css("height", 538 * koefCurrentUm), calc_oknanalich.css("width", 1119 * koefCurrentUm), calc_oknanalich.css("height", 552 * koefCurrentUm), calc_krylco.css("width", 278 * koefCurrentUm), calc_krylco.css("height", 306 * koefCurrentUm), calc_sneg.css("width", 538 * koefCurrentUm), calc_sneg.css("height", 212 * koefCurrentUm), calc_vent.css("width", 713 * koefCurrentUm), calc_vent.css("height", 143 * koefCurrentUm), calc_zabor.css("width", 1920 * koefCurrentUm), calc_zabor.css("height", 253 * koefCurrentUm), calc_cvetnik.css("width", 74 * koefCurrentUm), calc_cvetnik.css("height", 48 * koefCurrentUm);
            break;
        case"dom4vid1":
            calc_krovlya.css("width", 990 * koefCurrentUm), calc_krovlya.css("height", 390 * koefCurrentUm), calc_krovlya_garage.css("width", 500 * koefCurrentUm), calc_krovlya_garage.css("height", 250 * koefCurrentUm), calc_fasad_garage.css("width", 400 * koefCurrentUm), calc_fasad_garage.css("height", 300 * koefCurrentUm), calc_fasad.css("width", 890 * koefCurrentUm), calc_fasad.css("height", 680 * koefCurrentUm), calc_cokol.css("width", 1028 * koefCurrentUm), calc_cokol.css("height", 300 * koefCurrentUm), calc_cokol_garage.css("width", 401 * koefCurrentUm), calc_cokol_garage.css("height", 183 * koefCurrentUm), calc_sofity.css("width", 1365 * koefCurrentUm), calc_sofity.css("height", 420 * koefCurrentUm), calc_vodostok.css("width", 1400 * koefCurrentUm), calc_vodostok.css("height", 660 * koefCurrentUm), calc_nalichnik.css("width", 890 * koefCurrentUm), calc_nalichnik.css("height", 600 * koefCurrentUm), calc_nalichnik_garage.css("width", 280 * koefCurrentUm), calc_nalichnik_garage.css("height", 260 * koefCurrentUm), calc_startplanka.css("width", 884 * koefCurrentUm), calc_startplanka.css("height", 260 * koefCurrentUm), calc_startplanka_garage.css("width", 399 * koefCurrentUm), calc_startplanka_garage.css("height", 132 * koefCurrentUm), calc_konek.css("width", 990 * koefCurrentUm), calc_konek.css("height", 360 * koefCurrentUm), calc_konek_garage.css("width", 530 * koefCurrentUm), calc_konek_garage.css("height", 260 * koefCurrentUm), calc_okna.css("width", 830 * koefCurrentUm), calc_okna.css("height", 560 * koefCurrentUm), calc_oknanalich.css("width", 1220 * koefCurrentUm), calc_oknanalich.css("height", 590 * koefCurrentUm), calc_krylco.css("width", 278 * koefCurrentUm), calc_krylco.css("height", 306 * koefCurrentUm), calc_sneg.css("width", 538 * koefCurrentUm), calc_sneg.css("height", 212 * koefCurrentUm), calc_vent.css("width", 713 * koefCurrentUm), calc_vent.css("height", 143 * koefCurrentUm), calc_zabor.css("width", 1920 * koefCurrentUm), calc_zabor.css("height", 260 * koefCurrentUm), calc_cvetnik.css("width", 1710 * koefCurrentUm), calc_cvetnik.css("height", 215 * koefCurrentUm);
            break;
        case"dom6vid1":
            calc_krovlya.css("width", 1429 * koefCurrentUm), calc_krovlya.css("height", 590 * koefCurrentUm), calc_fasad.css("width", 1136 * koefCurrentUm), calc_fasad.css("height", 781 * koefCurrentUm), calc_cokol.css("width", 1235 * koefCurrentUm), calc_cokol.css("height", 320 * koefCurrentUm), calc_sofity.css("width", 1431 * koefCurrentUm), calc_sofity.css("height", 577 * koefCurrentUm), calc_vodostok.css("width", 1470 * koefCurrentUm), calc_vodostok.css("height", 712 * koefCurrentUm), calc_nalichnik.css("width", 1133 * koefCurrentUm), calc_nalichnik.css("height", 627 * koefCurrentUm), calc_startplanka.css("width", 1237 * koefCurrentUm), calc_startplanka.css("height", 248 * koefCurrentUm), calc_konek.css("width", 1434 * koefCurrentUm), calc_konek.css("height", 603 * koefCurrentUm), calc_okna.css("width", 1088 * koefCurrentUm), calc_okna.css("height", 549 * koefCurrentUm), calc_oknanalich.css("width", 1088 * koefCurrentUm), calc_oknanalich.css("height", 549 * koefCurrentUm), calc_krylco.css("width", 1384 * koefCurrentUm), calc_krylco.css("height", 682 * koefCurrentUm), calc_sneg.css("width", 538 * koefCurrentUm), calc_sneg.css("height", 212 * koefCurrentUm), calc_vent.css("width", 713 * koefCurrentUm), calc_vent.css("height", 143 * koefCurrentUm), calc_zabor.css("width", 1920 * koefCurrentUm), calc_zabor.css("height", 272 * koefCurrentUm), calc_cvetnik.css("width", 1920 * koefCurrentUm), calc_cvetnik.css("height", 280 * koefCurrentUm);
            break;
        case"dom8vid1":
            calc_krovlya.css("width", 1144 * koefCurrentUm), calc_krovlya.css("height", 449 * koefCurrentUm), calc_fasad.css("width", 1047 * koefCurrentUm), calc_fasad.css("height", 770 * koefCurrentUm), calc_cokol.css("width", 1047 * koefCurrentUm), calc_cokol.css("height", 263 * koefCurrentUm), calc_sofity.css("width", 1142 * koefCurrentUm), calc_sofity.css("height", 481 * koefCurrentUm), calc_vodostok.css("width", 1162 * koefCurrentUm), calc_vodostok.css("height", 605 * koefCurrentUm), calc_nalichnik.css("width", 1053 * koefCurrentUm), calc_nalichnik.css("height", 593 * koefCurrentUm), calc_startplanka.css("width", 1046 * koefCurrentUm), calc_startplanka.css("height", 230 * koefCurrentUm), calc_konek.css("width", 1137 * koefCurrentUm), calc_konek.css("height", 461 * koefCurrentUm), calc_okna.css("width", 840 * koefCurrentUm), calc_okna.css("height", 553 * koefCurrentUm), calc_oknanalich.css("width", 840 * koefCurrentUm), calc_oknanalich.css("height", 553 * koefCurrentUm), calc_krylco.css("width", 425 * koefCurrentUm), calc_krylco.css("height", 454 * koefCurrentUm), calc_sneg.css("width", 533 * koefCurrentUm), calc_sneg.css("height", 131 * koefCurrentUm), calc_vent.css("width", 325 * koefCurrentUm), calc_vent.css("height", 42 * koefCurrentUm), calc_zabor.css("width", 1920 * koefCurrentUm), calc_zabor.css("height", 342 * koefCurrentUm), calc_cvetnik.css("width", 1882 * koefCurrentUm), calc_cvetnik.css("height", 436 * koefCurrentUm), calc_ladder.css("width", 361 * koefCurrentUm), calc_ladder.css("height", 640 * koefCurrentUm), calc_mostik.css("width", 360 * koefCurrentUm), calc_mostik.css("height", 67 * koefCurrentUm), calc_chimney.css("width", 296 * koefCurrentUm), calc_chimney.css("height", 200 * koefCurrentUm), calc_dob_chimney.css("width", 296 * koefCurrentUm), calc_dob_chimney.css("height", 124 * koefCurrentUm), calc_kol_chimney.css("width", 296 * koefCurrentUm), calc_kol_chimney.css("height", 25 * koefCurrentUm)
    }
}
function dbfch() {
    if ($("#dbfchinp").attr("checked"))switch (isdobornfasadauto = !0, podborcolor.find(".frame").removeClass("active"), tDobornFasadColorId = tFasadColorId, tDobornFasadGarColorId = tFasadGaragColorId, calc_nalichnik.find("img").attr("src", "img/doma/" + domnvidn + "/nalichnikfasad/" + tDobornFasadColorId + ".png"), hasGarage() && calc_nalichnik_garage.find("img").attr("src", "img/doma/" + domnvidn + "/nalichnikfasad-garage/" + tDobornFasadGarColorId + ".png"), PrintTableParams("dobornfasad"), PrintTableParams("dobornfasad-garage"), domgarag) {
        case"":
            $("#" + tDobornFasadColorId).find(".frame").addClass("active");
            break;
        case"-garage":
            $("#" + tDobornFasadGarColorId).find(".frame").addClass("active")
    } else isdobornfasadauto = !1
}
function FEnableOnlyExistPokr(a, r) {
    podbortypepokr.find(".overlayd").removeClass("active"), $.each(ar_typepokr, function (o, e) {
        sFullPathToImage = a + "/" + r.replace("_", "/") + "/" + e, $.inArray(sFullPathToImage, ar_element_exist_typepokr[a]) > -1 || $("#" + e).find(".overlayd").addClass("active")
    })
}
function FPodborFindFrRem() {
    podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active")
}
function ptrelemProfilClickFasadByProfil(a) {
    switch (sClickedPodborMaterial = sClickedPodborPtrId.substr(0, sClickedPodborPtrId.indexOf("_"))) {
        case"metal":
            switch (podbortypepokr.show(), podborcolorvinil.hide(), podborcolorbrick.hide(), podborcolormetal.show(), FEnableOnlyExistPokr("fasad", sClickedPodborPtrId), domgarag) {
                case"":
                    sActivePodborMaterial = tFasadTypeProfId.substr(0, tFasadTypeProfId.indexOf("_"));
                    break;
                case"-garage":
                    sActivePodborMaterial = tFasadGaragTypeProfId.substr(0, tFasadGaragTypeProfId.indexOf("_"))
            }
            switch (sActivePodborMaterial) {
                case"metal":
                    switch (domgarag) {
                        case"":
                            sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadTypePokrId + "/" + tFasadColorId;
                            break;
                        case"-garage":
                            sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadGaragTypePokrId + "/" + tFasadGaragColorId
                    }
                    if ($.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1) {
                        switch (domgarag) {
                            case"":
                                sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadTypePokrId + "/" + tFasadColorId;
                                break;
                            case"-garage":
                                sFullPathToImage = "fasad-garage/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadGaragTypePokrId + "/" + tFasadGaragColorId
                        }
                        switch (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad" + domgarag).find("img").attr("src", sFullPathToImage), FPodborFindFrRem(), a.find(".frame").addClass("active"), domgarag) {
                            case"":
                                tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadTypeProfId = sClickedPodborPtrId, PrintTableParams("fasad"), $("#" + tFasadTypePokrId).find(".frame").addClass("active"), $("#" + tFasadColorId).find(".frame").addClass("active"), $("#" + tFasadTypePokrId).trigger("click");
                                break;
                            case"-garage":
                                tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragTypeProfId = sClickedPodborPtrId, PrintTableParams("fasad-garage"), $("#" + tFasadGaragTypePokrId).find(".frame").addClass("active"), $("#" + tFasadGaragColorId).find(".frame").addClass("active"), $("#" + tFasadGaragTypePokrId).trigger("click")
                        }
                    } else {
                        switch (podbortypeprofil.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                            case"":
                                tFasadTypeProfGreyId = sClickedPodborPtrId, sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadTypePokrId;
                                break;
                            case"-garage":
                                tFasadGaragTypeProfGreyId = sClickedPodborPtrId, sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadGaragTypePokrId
                        }
                        if ($.inArray(sFullPathToImage, ar_element_exist_typepokr.fasad) > -1)switch (domgarag) {
                            case"":
                                $("#" + tFasadTypePokrId).trigger("click"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadTypePokrGreyId = "", $("#" + tFasadTypePokrId).find(".frame").addClass("active");
                                break;
                            case"-garage":
                                $("#" + tFasadGaragTypePokrId).trigger("click"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadGaragTypePokrGreyId = "", $("#" + tFasadGaragTypePokrId).find(".frame").addClass("active")
                        } else {
                            switch (domgarag) {
                                case"":
                                    tFasadTypePokrGreyId = "";
                                    break;
                                case"-garage":
                                    tFasadGaragTypePokrGreyId = ""
                            }
                            podbortypepokr.find(".framegrey").removeClass("active"), $.each(ar_color.metal, function (a, r) {
                                $("#" + r).find(".overlayd").addClass("active")
                            })
                        }
                    }
                    break;
                case"vinil":
                    switch (podbortypeprofil.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                        case"":
                            tFasadTypeProfGreyId = sClickedPodborPtrId;
                            break;
                        case"-garage":
                            tFasadGaragTypeProfGreyId = sClickedPodborPtrId
                    }
                    switch ($.each(ar_color.metal, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    }), domgarag) {
                        case"":
                            "" == tFasadTypePokrGreyId ? $("#poliester").trigger("click") : $("#" + tFasadTypePokrGreyId).trigger("click");
                            break;
                        case"-garage":
                            "" == tFasadGaragTypePokrGreyId ? $("#poliester").trigger("click") : $("#" + tFasadGaragTypePokrGreyId).trigger("click")
                    }
                    break;
                case"brick":
                    switch (podbortypepokr.show(), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), podbortypeprofil.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                        case"":
                            tFasadTypeProfGreyId = sClickedPodborPtrId;
                            break;
                        case"-garage":
                            tFasadGaragTypeProfGreyId = sClickedPodborPtrId
                    }
                    switch ($.each(ar_color.metal, function (a, r) {
                        $("#" + r).find(".overlayd").removeClass("active")
                    }), domgarag) {
                        case"":
                            tFasadTypePokrGreyId = "poliester", $("#" + tFasadTypePokrGreyId).trigger("click");
                            break;
                        case"-garage":
                            tFasadGaragTypePokrGreyId = "poliester", $("#" + tFasadGaragTypePokrGreyId).trigger("click")
                    }
                    break;
                default:
                    wrterr(domnvidn + "_Error_02")
            }
            break;
        case"vinil":
            switch (podbortypepokr.hide(),
                podborcolorvinil.show(), podborcolormetal.hide(), podborcolorbrick.hide(), podborcolorvinil.find(".overlayd").removeClass("active"), $.each(ar_color.vinil, function (a, r) {
                sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.vinil) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), domgarag) {
                case"":
                    sActivePodborMaterial = tFasadTypeProfId.substr(0, tFasadTypeProfId.indexOf("_"));
                    break;
                case"-garage":
                    sActivePodborMaterial = tFasadGaragTypeProfId.substr(0, tFasadGaragTypeProfId.indexOf("_"))
            }
            switch (sActivePodborMaterial) {
                case"metal":
                    switch (podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podborcolorvinil.find(".frame").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                        case"":
                            tFasadTypeProfGreyId = sClickedPodborPtrId;
                            break;
                        case"-garage":
                            tFasadGaragTypeProfGreyId = sClickedPodborPtrId
                    }
                    break;
                case"vinil":
                    switch (domgarag) {
                        case"":
                            sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadColorId;
                            break;
                        case"-garage":
                            sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadGaragColorId
                    }
                    if ($.inArray(sFullPathToImage, ar_element_exist_color_fasad.vinil) > -1) {
                        switch (domgarag) {
                            case"":
                                sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadColorId;
                                break;
                            case"-garage":
                                sFullPathToImage = "fasad-garage/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadGaragColorId
                        }
                        switch (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad" + domgarag).find("img").attr("src", sFullPathToImage), domgarag) {
                            case"":
                                tFasadTypePokrGreyId = "", tFasadTypeProfGreyId = "", podbortypeprofil.find(".framegrey").removeClass("active"), podbortypeprofil.find(".frame").removeClass("active"), tFasadTypeProfId = sClickedPodborPtrId, a.find(".frame").addClass("active"), podborcolorvinil.find(".frame").removeClass("active"), $("#" + tFasadColorId).find(".frame").addClass("active");
                                break;
                            case"-garage":
                                tFasadGaragTypePokrGreyId = "", tFasadGaragTypeProfGreyId = "", podbortypeprofil.find(".framegrey").removeClass("active"), podbortypeprofil.find(".frame").removeClass("active"), tFasadGaragTypeProfId = sClickedPodborPtrId, a.find(".frame").addClass("active"), podborcolorvinil.find(".frame").removeClass("active"), $("#" + tFasadGaragColorId).find(".frame").addClass("active")
                        }
                        PrintTableParams("fasad" + domgarag)
                    } else switch (podbortypeprofil.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                        case"":
                            tFasadTypeProfGreyId = sClickedPodborPtrId;
                            break;
                        case"-garage":
                            tFasadGaragTypeProfGreyId = sClickedPodborPtrId
                    }
                    break;
                case"brick":
                    switch (podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.hide(), podborcolorvinil.find(".frame").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                        case"":
                            tFasadTypeProfGreyId = sClickedPodborPtrId;
                            break;
                        case"-garage":
                            tFasadGaragTypeProfGreyId = sClickedPodborPtrId
                    }
            }
            break;
        case"brick":
            switch (podbortypepokr.hide(), podborcolormetal.hide(), podborcolorvinil.hide(), podborcolorbrick.show(), podborcolorbrick.find(".overlayd").removeClass("active"), $.each(ar_color.brick, function (a, r) {
                sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.brick) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), domgarag) {
                case"":
                    sActivePodborMaterial = tFasadTypeProfId.substr(0, tFasadTypeProfId.indexOf("_"));
                    break;
                case"-garage":
                    sActivePodborMaterial = tFasadGaragTypeProfId.substr(0, tFasadGaragTypeProfId.indexOf("_"))
            }
            switch (sActivePodborMaterial) {
                case"metal":
                    switch (podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.hide(), podborcolorvinil.find(".framegrey").removeClass("active"), podborcolorvinil.hide(), podborcolorbrick.show(), podborcolorvinil.find(".frame").removeClass("active"), podborcolorvinil.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                        case"":
                            tFasadTypeProfGreyId = sClickedPodborPtrId;
                            break;
                        case"-garage":
                            tFasadGaragTypeProfGreyId = sClickedPodborPtrId
                    }
                    break;
                case"vinil":
                    switch (podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.hide(), podborcolorvinil.find(".framegrey").removeClass("active"), podborcolorvinil.hide(), podborcolorbrick.show(), podborcolorvinil.find(".frame").removeClass("active"), podborcolorvinil.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                        case"":
                            tFasadTypeProfGreyId = sClickedPodborPtrId;
                            break;
                        case"-garage":
                            tFasadGaragTypeProfGreyId = sClickedPodborPtrId
                    }
                    break;
                case"brick":
                    switch (domgarag) {
                        case"":
                            sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadColorId;
                            break;
                        case"-garage":
                            sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadGaragColorId
                    }
                    if ($.inArray(sFullPathToImage, ar_element_exist_color_fasad.brick) > -1) {
                        switch (domgarag) {
                            case"":
                                sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadColorId;
                                break;
                            case"-garage":
                                sFullPathToImage = "fasad-garage/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadGaragColorId
                        }
                        switch (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad" + domgarag).find("img").attr("src", sFullPathToImage), domgarag) {
                            case"":
                                tFasadTypePokrGreyId = "", tFasadTypeProfGreyId = "", podbortypeprofil.find(".framegrey").removeClass("active"), podbortypeprofil.find(".frame").removeClass("active"), tFasadTypeProfId = sClickedPodborPtrId, a.find(".frame").addClass("active"), podborcolorbrick.find(".frame").removeClass("active"), $("#" + tFasadColorId).find(".frame").addClass("active");
                                break;
                            case"-garage":
                                tFasadGaragTypePokrGreyId = "", tFasadGaragTypeProfGreyId = "", podbortypeprofil.find(".framegrey").removeClass("active"), podbortypeprofil.find(".frame").removeClass("active"), tFasadGaragTypeProfId = sClickedPodborPtrId, a.find(".frame").addClass("active"), podborcolorbrick.find(".frame").removeClass("active"), $("#" + tFasadGaragColorId).find(".frame").addClass("active")
                        }
                        PrintTableParams("fasad" + domgarag)
                    } else switch (podbortypeprofil.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                        case"":
                            tFasadTypeProfGreyId = sClickedPodborPtrId;
                            break;
                        case"-garage":
                            tFasadGaragTypeProfGreyId = sClickedPodborPtrId
                    }
            }
            break;
        default:
            wrterr(domnvidn + "_Error_03")
    }
}
function ptrelemProfilClickFasadByCvet(a) {
    switch (sClickedPodborMaterial = sClickedPodborPtrId.substr(0, sClickedPodborPtrId.indexOf("_")), domgarag) {
        case"":
            switch (sClickedPodborMaterial) {
                case"metal":
                    sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadTypePokrId + "/" + tFasadColorId;
                    break;
                case"vinil":
                    sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadColorId;
                    break;
                case"brick":
                    sFullPathToImage = "fasad/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadColorId
            }
            tFasadTypeProfId = sClickedPodborPtrId, tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "";
            break;
        case"-garage":
            switch (sClickedPodborMaterial) {
                case"metal":
                    sFullPathToImage = "fasad-garage/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadGaragTypePokrId + "/" + tFasadGaragColorId;
                    break;
                case"vinil":
                    sFullPathToImage = "fasad-garage/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadGaragColorId;
                    break;
                case"brick":
                    sFullPathToImage = "fasad-garage/" + sClickedPodborPtrId.replace("_", "/") + "/" + tFasadGaragColorId
            }
            tFasadGaragTypeProfId = sClickedPodborPtrId, tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = ""
    }
    sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad" + domgarag).find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), PrintTableParams("fasad" + domgarag)
}
function ptrelemPokrClickFasadByProfil(a) {
    switch (domgarag) {
        case"":
            sActivePodborMaterial = tFasadTypeProfId.substr(0, tFasadTypeProfId.indexOf("_"));
            break;
        case"-garage":
            sActivePodborMaterial = tFasadGaragTypeProfId.substr(0, tFasadGaragTypeProfId.indexOf("_"))
    }
    switch (sActivePodborMaterial) {
        case"metal":
            switch (podborcolor.find(".overlayd").removeClass("active"), domgarag) {
                case"":
                    "" == tFasadTypeProfGreyId ? ($.each(ar_color.metal, function (a, r) {
                        sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }), sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadColorId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypepokr.find(".frame").removeClass("active"), podbortypeprofil.find(".frame").removeClass("active"), tFasadTypePokrId = sClickedPodborPtrId, podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", $("#" + tFasadTypeProfId).find(".frame").addClass("active"), $("#" + tFasadColorId).find(".frame").addClass("active"), PrintTableParams("fasad")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tFasadTypePokrGreyId = sClickedPodborPtrId)) : ($.each(ar_color.metal, function (a, r) {
                        sFullPathToImage = "fasad/" + tFasadTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }), sFullPathToImage = "fasad/" + tFasadTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadColorId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), tFasadTypePokrId = sClickedPodborPtrId, podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", $("#" + tFasadTypeProfId).find(".frame").addClass("active"), $("#" + tFasadColorId).find(".frame").addClass("active"), PrintTableParams("fasad")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tFasadTypePokrGreyId = sClickedPodborPtrId));
                    break;
                case"-garage":
                    "" == tFasadGaragTypeProfGreyId ? ($.each(ar_color.metal, function (a, r) {
                        sFullPathToImage = "fasad/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }), sFullPathToImage = "fasad/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 ? (sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podbortypepokr.find(".frame").removeClass("active"), podbortypeprofil.find(".frame").removeClass("active"), tFasadGaragTypePokrId = sClickedPodborPtrId, podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), $("#" + tFasadGaragColorId).find(".frame").addClass("active"), PrintTableParams("fasad-garage")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tFasadGaragTypePokrGreyId = sClickedPodborPtrId)) : ($.each(ar_color.metal, function (a, r) {
                        sFullPathToImage = "fasad/" + tFasadGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }), sFullPathToImage = "fasad/" + tFasadGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 ? (sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), tFasadGaragTypePokrId = sClickedPodborPtrId, podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), $("#" + tFasadGaragColorId).find(".frame").addClass("active"), PrintTableParams("fasad-garage")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tFasadGaragTypePokrGreyId = sClickedPodborPtrId))
            }
            break;
        case"vinil":
            switch (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                case"":
                    tFasadTypePokrGreyId = sClickedPodborPtrId, "" != tFasadTypePokrGreyId && "" != tFasadTypeProfGreyId && (podborcolor.find(".overlayd").removeClass("active"), $.each(ar_color.metal, function (a, r) {
                        sFullPathToImage = "fasad/" + tFasadTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }));
                    break;
                case"-garage":
                    tFasadGaragTypePokrGreyId = sClickedPodborPtrId, "" != tFasadGaragTypePokrGreyId && "" != tFasadGaragTypeProfGreyId && (podborcolor.find(".overlayd").removeClass("active"), $.each(ar_color.metal, function (a, r) {
                        sFullPathToImage = "fasad/" + tFasadGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }))
            }
            break;
        case"brick":
            switch (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), domgarag) {
                case"":
                    tFasadTypePokrGreyId = sClickedPodborPtrId, "" != tFasadTypePokrGreyId && "" != tFasadTypeProfGreyId && (podborcolor.find(".overlayd").removeClass("active"), $.each(ar_color.metal, function (a, r) {
                        sFullPathToImage = "fasad/" + tFasadTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }));
                    break;
                case"-garage":
                    tFasadGaragTypePokrGreyId = sClickedPodborPtrId, "" != tFasadGaragTypePokrGreyId && "" != tFasadGaragTypeProfGreyId && (podborcolor.find(".overlayd").removeClass("active"), $.each(ar_color.metal, function (a, r) {
                        sFullPathToImage = "fasad/" + tFasadGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }))
            }
            break;
        default:
            wrterr(domnvidn + "_Error_07")
    }
}
function ptrelemPokrClickKrovlyaByProfil(a) {
    switch (domgarag) {
        case"":
            podborcolor.find(".overlayd").removeClass("active"), sActivePodborMaterial = "" == tKrovlyaTypeProfGreyId ? tKrovlyaTypeProfId.substr(0, tKrovlyaTypeProfId.indexOf("_")) : tKrovlyaTypeProfGreyId.substr(0, tKrovlyaTypeProfGreyId.indexOf("_")), "" == tKrovlyaTypeProfGreyId ? $.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "krovlya/" + tKrovlyaTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }) : $.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "krovlya/" + tKrovlyaTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), sFullPathToImage = "" == tKrovlyaTypeProfGreyId ? "krovlya/" + tKrovlyaTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tKrovlyaColorId : "krovlya/" + tKrovlyaTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tKrovlyaColorId, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya").find("img").attr("src", sFullPathToImage), tKrovlyaTypePokrId = sClickedPodborPtrId, "" == tKrovlyaTypeProfGreyId || (tKrovlyaTypeProfId = tKrovlyaTypeProfGreyId), podbortypekrovlya.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), podborcolor.find(".frame").removeClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), $("#" + tKrovlyaTypeProfId).find(".frame").addClass("active"), $("#" + tKrovlyaColorId).find(".frame").addClass("active"), tKrovlyaTypeProfGreyId = "", tKrovlyaTypePokrGreyId = "", PrintTableParams("krovlya")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tKrovlyaTypePokrGreyId = sClickedPodborPtrId, "" == tKrovlyaTypeProfGreyId ? $("#" + tKrovlyaTypeProfId).find(".frame").addClass("active") : $("#" + tKrovlyaTypeProfGreyId).find(".framegrey").addClass("active"), $("#" + tKrovlyaColorId).find(".frame").addClass("active"));
            break;
        case"-garage":
            podborcolor.find(".overlayd").removeClass("active"), sActivePodborMaterial = "" == tKrovlyaGaragTypeProfGreyId ? tKrovlyaGaragTypeProfId.substr(0, tKrovlyaGaragTypeProfId.indexOf("_")) : tKrovlyaGaragTypeProfGreyId.substr(0, tKrovlyaGaragTypeProfGreyId.indexOf("_")), "" == tKrovlyaGaragTypeProfGreyId ? $.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "krovlya/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }) : $.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "krovlya/" + tKrovlyaGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), sFullPathToImage = "" == tKrovlyaGaragTypeProfGreyId ? "krovlya/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tKrovlyaGaragColorId : "krovlya/" + tKrovlyaGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tKrovlyaGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 ? (sFullPathToImage = "" == tKrovlyaGaragTypeProfGreyId ? "krovlya-garage/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tKrovlyaGaragColorId : "krovlya-garage/" + tKrovlyaGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tKrovlyaGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya-garage").find("img").attr("src", sFullPathToImage), tKrovlyaGaragTypePokrId = sClickedPodborPtrId, "" == tKrovlyaGaragTypeProfGreyId || (tKrovlyaGaragTypeProfId = tKrovlyaGaragTypeProfGreyId), podbortypekrovlya.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), podborcolor.find(".frame").removeClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), $("#" + tKrovlyaGaragTypeProfId).find(".frame").addClass("active"), $("#" + tKrovlyaGaragColorId).find(".frame").addClass("active"), tKrovlyaGaragTypeProfGreyId = "", tKrovlyaGaragTypePokrGreyId = "", PrintTableParams("krovlya-garage")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tKrovlyaGaragTypePokrGreyId = sClickedPodborPtrId, "" == tKrovlyaGaragTypeProfGreyId ? $("#" + tKrovlyaGaragTypeProfId).find(".frame").addClass("active") : $("#" + tKrovlyaGaragTypeProfGreyId).find(".framegrey").addClass("active"), $("#" + tKrovlyaGaragColorId).find(".frame").addClass("active"))
    }
}
function ptrelemPokrClickCokolByProfil(a) {
    switch (domgarag) {
        case"":
            sActivePodborMaterial = tCokolTypeProfId.substr(0, tCokolTypeProfId.indexOf("_")), (sActivePodborMaterial.indexOf("cokolmetal") > -1 || sActivePodborMaterial.indexOf("cokolprofnastil") > -1) && (podborcolormetal.find(".overlayd").removeClass("active"), "" == tCokolTypeProfGreyId ? ($.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), sFullPathToImage = "cokol/" + tCokolTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 ? (podborcolormetal.find(".frame").removeClass("active"), sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol").find("img").attr("src", sFullPathToImage), podbortypepokr.find(".frame").removeClass("active"), podbortypecokol.find(".frame").removeClass("active"), tCokolTypePokrId = sClickedPodborPtrId, podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", $("#" + tCokolTypeProfId).find(".frame").addClass("active"), $("#" + tCokolColorId).find(".frame").addClass("active"), PrintTableParams("cokol")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolTypePokrGreyId = sClickedPodborPtrId)) : ($.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sClickedPodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), sFullPathToImage = "cokol/" + tCokolTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[tCokolTypeProfGreyId.substr(0, tCokolTypeProfGreyId.indexOf("_"))]) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol").find("img").attr("src", sFullPathToImage), tCokolTypePokrId = sClickedPodborPtrId, podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypecokol.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", $("#" + tCokolTypeProfId).find(".frame").addClass("active"), $("#" + tCokolColorId).find(".frame").addClass("active"), PrintTableParams("cokol")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolTypePokrGreyId = sClickedPodborPtrId))), sActivePodborMaterial.indexOf("cokolwandstein") > -1 && ("" == tCokolTypeProfGreyId || (podborcolormetal.find(".overlayd").removeClass("active"), sClickedPodborMaterial = tCokolTypeProfGreyId.substr(0, tCokolTypeProfGreyId.indexOf("_")), $.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sClickedPodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), podbortypepokr.find(".framegrey").removeClass("active"), tCokolTypePokrGreyId = sClickedPodborPtrId, a.find(".framegrey").addClass("active")));
            break;
        case"-garage":
            sActivePodborMaterial = tCokolGaragTypeProfId.substr(0, tCokolGaragTypeProfId.indexOf("_")), (sActivePodborMaterial.indexOf("cokolmetal") > -1 || sActivePodborMaterial.indexOf("cokolprofnastil") > -1) && (podborcolormetal.find(".overlayd").removeClass("active"), "" == tCokolGaragTypeProfGreyId ? ($.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), sFullPathToImage = "cokol/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 ? (sFullPathToImage = "cokol-garage/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolGaragColorId, podborcolormetal.find(".frame").removeClass("active"), sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol-garage").find("img").attr("src", sFullPathToImage), podbortypepokr.find(".frame").removeClass("active"), podbortypecokol.find(".frame").removeClass("active"), tCokolGaragTypePokrId = sClickedPodborPtrId, podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", $("#" + tCokolGaragTypeProfId).find(".frame").addClass("active"), $("#" + tCokolGaragColorId).find(".frame").addClass("active"), PrintTableParams("cokol-garage")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolGaragTypePokrGreyId = sClickedPodborPtrId)) : ($.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sClickedPodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), sFullPathToImage = "cokol/" + tCokolGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[tCokolGaragTypeProfGreyId.substr(0, tCokolGaragTypeProfGreyId.indexOf("_"))]) > -1 ? (sFullPathToImage = "cokol-garage/" + tCokolGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol-garage").find("img").attr("src", sFullPathToImage), tCokolGaragTypePokrId = sClickedPodborPtrId, podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypecokol.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", $("#" + tCokolGaragTypeProfId).find(".frame").addClass("active"), $("#" + tCokolGaragColorId).find(".frame").addClass("active"), PrintTableParams("cokol-garage")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolGaragTypePokrGreyId = sClickedPodborPtrId))), sActivePodborMaterial.indexOf("cokolwandstein") > -1 && ("" == tCokolGaragTypeProfGreyId || (podborcolormetal.find(".overlayd").removeClass("active"), sClickedPodborMaterial = tCokolGaragTypeProfGreyId.substr(0, tCokolGaragTypeProfGreyId.indexOf("_")), $.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sClickedPodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), podbortypepokr.find(".framegrey").removeClass("active"), tCokolGaragTypePokrGreyId = sClickedPodborPtrId, a.find(".framegrey").addClass("active")))
    }
}
function ptrelemPokrClickFacadByCvet(a) {
    podbortypepokr.find(".frame").removeClass("active"), podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), $.each(ar_profil_id.metal, function (a, r) {
        $("#" + r).find(".overlayd").addClass("active")
    });
    var r, o = "";
    switch (domgarag) {
        case"":
            r = sClickedPodborPtrId + "/" + tFasadColorId, $.each(ar_element_exist_color_fasad.metal, function (a, e) {
                e.indexOf(r) > -1 && (o = e.substr(6, e.indexOf(r) - 7), o = o.replace("/", "_"), $("#" + o).find(".overlayd").removeClass("active"))
            }), sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadColorId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadTypePokrId = sClickedPodborPtrId, $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad")) : (sFullPathToImage = "fasad/" + o.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadTypePokrId = sClickedPodborPtrId, tFasadTypeProfId = o, $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad"));
            break;
        case"-garage":
            r = sClickedPodborPtrId + "/" + tFasadGaragColorId, $.each(ar_element_exist_color_fasad.metal, function (a, e) {
                e.indexOf(r) > -1 && (o = e.substr(6, e.indexOf(r) - 7), o = o.replace("/", "_"), $("#" + o).find(".overlayd").removeClass("active"))
            }), sFullPathToImage = "fasad/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 ? (sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragTypePokrId = sClickedPodborPtrId, $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad-garage")) : (sFullPathToImage = "fasad-garage/" + o.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tFasadGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragTypePokrId = sClickedPodborPtrId, tFasadGaragTypeProfId = o, $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad-garage"))
    }
}
function ptrelemPokrClickKrovlyaByCvet(a) {
    switch (domgarag) {
        case"":
            podbortypepokr.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tKrovlyaTypePokrId = sClickedPodborPtrId, tKrovlyaTypeProfGreyId = "", tKrovlyaTypePokrGreyId = "", podbortypekrovlya.find(".frame").removeClass("active"), podbortypekrovlya.find(".overlayd").addClass("active");
            var r = "", o = tKrovlyaTypePokrId + "/" + tKrovlyaColorId;
            $.each(ar_element_exist_color_krovlya.metal, function (a, e) {
                e.indexOf(o) > -1 && (r = e.substr(8), r = r.substr(0, r.indexOf(o) - 1), r = r.replace("/", "_"), $("#" + r).find(".overlayd").removeClass("active"))
            }), $.each(ar_element_exist_color_krovlya.falcevaya, function (a, e) {
                e.indexOf(o) > -1 && (r = e.substr(8), r = r.substr(0, r.indexOf(o) - 1), r = r.replace("/", "_"), $("#" + r).find(".overlayd").removeClass("active"))
            }), $.each(ar_element_exist_color_krovlya.profnastil, function (a, e) {
                e.indexOf(o) > -1 && (r = e.substr(8), r = r.substr(0, r.indexOf(o) - 1), r = r.replace("/", "_"), $("#" + r).find(".overlayd").removeClass("active"))
            }), sActivePodborMaterial = tKrovlyaTypeProfId.substr(0, tKrovlyaTypeProfId.indexOf("_")), sFullPathToImage = "krovlya/" + tKrovlyaTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tKrovlyaColorId, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 || (tKrovlyaTypeProfId = r), sFullPathToImage = "krovlya/" + tKrovlyaTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tKrovlyaColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya").find("img").attr("src", sFullPathToImage),
                $("#" + tKrovlyaTypeProfId).find(".frame").addClass("active"), $("#" + tKrovlyaTypePokrId).find(".frame").addClass("active"), PrintTableParams("krovlya");
            break;
        case"-garage":
            podbortypepokr.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tKrovlyaGaragTypePokrId = sClickedPodborPtrId, tKrovlyaGaragTypeProfGreyId = "", tKrovlyaGaragTypePokrGreyId = "", podbortypekrovlya.find(".frame").removeClass("active"), podbortypekrovlya.find(".overlayd").addClass("active");
            var r = "", o = tKrovlyaGaragTypePokrId + "/" + tKrovlyaGaragColorId;
            $.each(ar_element_exist_color_krovlya.metal, function (a, e) {
                e.indexOf(o) > -1 && (r = e.substr(8), r = r.substr(0, r.indexOf(o) - 1), r = r.replace("/", "_"), $("#" + r).find(".overlayd").removeClass("active"))
            }), $.each(ar_element_exist_color_krovlya.falcevaya, function (a, e) {
                e.indexOf(o) > -1 && (r = e.substr(8), r = r.substr(0, r.indexOf(o) - 1), r = r.replace("/", "_"), $("#" + r).find(".overlayd").removeClass("active"))
            }), $.each(ar_element_exist_color_krovlya.profnastil, function (a, e) {
                e.indexOf(o) > -1 && (r = e.substr(8), r = r.substr(0, r.indexOf(o) - 1), r = r.replace("/", "_"), $("#" + r).find(".overlayd").removeClass("active"))
            }), sActivePodborMaterial = tKrovlyaGaragTypeProfId.substr(0, tKrovlyaGaragTypeProfId.indexOf("_")), sFullPathToImage = "krovlya/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tKrovlyaGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 || (tKrovlyaGaragTypeProfId = r), sFullPathToImage = "krovlya-garage/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tKrovlyaGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya-garage").find("img").attr("src", sFullPathToImage), $("#" + tKrovlyaGaragTypeProfId).find(".frame").addClass("active"), $("#" + tKrovlyaGaragTypePokrId).find(".frame").addClass("active"), PrintTableParams("krovlya-garage")
    }
}
function ptrelemPokrClickCokolByCvet(a) {
    switch (domgarag) {
        case"":
            sActivePodborMaterial = tCokolTypeProfId.substr(0, tCokolTypeProfId.indexOf("_")), (sActivePodborMaterial.indexOf("cokolmetal") > -1 || sActivePodborMaterial.indexOf("cokolprofnastil") > -1) && (podborcolormetal.find(".overlayd").removeClass("active"), "" == tCokolTypeProfGreyId ? ($.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), sFullPathToImage = "cokol/" + tCokolTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 ? (podborcolormetal.find(".frame").removeClass("active"), sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol").find("img").attr("src", sFullPathToImage), podbortypepokr.find(".frame").removeClass("active"), podbortypecokol.find(".frame").removeClass("active"), tCokolTypePokrId = sClickedPodborPtrId, podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", $("#" + tCokolTypeProfId).find(".frame").addClass("active"), $("#" + tCokolColorId).find(".frame").addClass("active"), PrintTableParams("cokol")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolTypePokrGreyId = sClickedPodborPtrId)) : ($.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sClickedPodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), sFullPathToImage = "cokol/" + tCokolTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[tCokolTypeProfGreyId.substr(0, tCokolTypeProfGreyId.indexOf("_"))]) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol").find("img").attr("src", sFullPathToImage), tCokolTypePokrId = sClickedPodborPtrId, podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypecokol.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", $("#" + tCokolTypeProfId).find(".frame").addClass("active"), $("#" + tCokolColorId).find(".frame").addClass("active"), PrintTableParams("cokol")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolTypePokrGreyId = sClickedPodborPtrId))), sActivePodborMaterial.indexOf("cokolwandstein") > -1 && ("" == tCokolTypeProfGreyId || (podborcolormetal.find(".overlayd").removeClass("active"), sClickedPodborMaterial = tCokolTypeProfGreyId.substr(0, tCokolTypeProfGreyId.indexOf("_")), $.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sClickedPodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), podbortypepokr.find(".framegrey").removeClass("active"), tCokolTypePokrGreyId = sClickedPodborPtrId, a.find(".framegrey").addClass("active")));
            break;
        case"-garage":
            sActivePodborMaterial = tCokolGaragTypeProfId.substr(0, tCokolGaragTypeProfId.indexOf("_")), (sActivePodborMaterial.indexOf("cokolmetal") > -1 || sActivePodborMaterial.indexOf("cokolprofnastil") > -1) && (podborcolormetal.find(".overlayd").removeClass("active"), "" == tCokolGaragTypeProfGreyId ? ($.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), sFullPathToImage = "cokol/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 ? (sFullPathToImage = "cokol-garage/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolGaragColorId, podborcolormetal.find(".frame").removeClass("active"), sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol-garage").find("img").attr("src", sFullPathToImage), podbortypepokr.find(".frame").removeClass("active"), podbortypecokol.find(".frame").removeClass("active"), tCokolTypePokrId = sClickedPodborPtrId, podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", $("#" + tCokolGaragTypeProfId).find(".frame").addClass("active"), $("#" + tCokolGaragColorId).find(".frame").addClass("active"), PrintTableParams("cokol-garage")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolGaragTypePokrGreyId = sClickedPodborPtrId)) : ($.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sClickedPodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), sFullPathToImage = "cokol/" + tCokolGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[tCokolGaragTypeProfGreyId.substr(0, tCokolGaragTypeProfGreyId.indexOf("_"))]) > -1 ? (sFullPathToImage = "cokol-garage/" + tCokolGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + tCokolGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol-garage").find("img").attr("src", sFullPathToImage), tCokolGaragTypePokrId = sClickedPodborPtrId, podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypecokol.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", $("#" + tCokolGaragTypeProfId).find(".frame").addClass("active"), $("#" + tCokolGaragColorId).find(".frame").addClass("active"), PrintTableParams("cokol-garage")) : (podbortypepokr.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolGaragTypePokrGreyId = sClickedPodborPtrId))), sActivePodborMaterial.indexOf("cokolwandstein") > -1 && ("" == tCokolGaragTypeProfGreyId || (podborcolormetal.find(".overlayd").removeClass("active"), sClickedPodborMaterial = tCokolGaragTypeProfGreyId.substr(0, tCokolGaragTypeProfGreyId.indexOf("_")), $.each(ar_color.metal, function (a, r) {
                sFullPathToImage = "cokol/" + tCokolGaragTypeProfGreyId.replace("_", "/") + "/" + sClickedPodborPtrId + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sClickedPodborMaterial]) > -1 || $("#" + r).find(".overlayd").addClass("active")
            }), podbortypepokr.find(".framegrey").removeClass("active"), tCokolGaragTypePokrGreyId = sClickedPodborPtrId, a.find(".framegrey").addClass("active")))
    }
}
function ptrelemColorClickFasadByProfil(a) {
    switch (sClickedColorMaterial = a.parent().attr("id"), domgarag) {
        case"":
            switch (sClickedColorMaterial) {
                case"podborcolormetal":
                    "" == tFasadTypeProfGreyId && "" != tFasadTypePokrGreyId && (tFasadTypePokrId = tFasadTypePokrGreyId), "" != tFasadTypeProfGreyId && "" != tFasadTypePokrGreyId && (tFasadTypeProfId = tFasadTypeProfGreyId, tFasadTypePokrId = tFasadTypePokrGreyId), "" != tFasadTypeProfGreyId && "" == tFasadTypePokrGreyId && (tFasadTypeProfId = tFasadTypeProfGreyId), sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + tFasadTypePokrId + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadTypePokrId).find(".frame").addClass("active"), $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad")) : wrterr(domnvidn + "_Error_12_sfullpath=" + sFullPathToImage);
                    break;
                case"podborcolorvinil":
                    "" == tFasadTypeProfGreyId || (tFasadTypeProfId = tFasadTypeProfGreyId), sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.vinil) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad")) : wrterr(domnvidn + "_Error_13");
                    break;
                case"podborcolorbrick":
                    "" == tFasadTypeProfGreyId || (tFasadTypeProfId = tFasadTypeProfGreyId), sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.brick) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.hide(), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad")) : wrterr(domnvidn + "_Error_13");
                    break;
                default:
                    wrterr(domnvidn + "_Error_14")
            }
            break;
        case"-garage":
            switch (sClickedColorMaterial) {
                case"podborcolormetal":
                    "" == tFasadGaragTypeProfGreyId && "" != tFasadGaragTypePokrGreyId && (tFasadGaragTypePokrId = tFasadGaragTypePokrGreyId), "" != tFasadGaragTypeProfGreyId && "" != tFasadGaragTypePokrGreyId && (tFasadGaragTypeProfId = tFasadGaragTypeProfGreyId, tFasadGaragTypePokrId = tFasadGaragTypePokrGreyId), "" != tFasadGaragTypeProfGreyId && "" == tFasadGaragTypePokrGreyId && (tFasadGaragTypeProfId = tFasadGaragTypeProfGreyId), sFullPathToImage = "fasad/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + tFasadGaragTypePokrId + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1 ? (sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + tFasadGaragTypePokrId + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragColorId = sClickedPodborPtrId, podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadGaragTypePokrId).find(".frame").addClass("active"), $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad-garage")) : wrterr(domnvidn + "_Error_12_sfullpath=" + sFullPathToImage);
                    break;
                case"podborcolorvinil":
                    switch (domgarag) {
                        case"":
                            "" == tFasadTypeProfGreyId || (tFasadTypeProfId = tFasadTypeProfGreyId), sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.vinil) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad")) : wrterr(domnvidn + "_Error_13");
                            break;
                        case"-garage":
                            "" == tFasadGaragTypeProfGreyId || (tFasadGaragTypeProfId = tFasadGaragTypeProfGreyId), sFullPathToImage = "fasad/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.vinil) > -1 ? (sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragColorId = sClickedPodborPtrId, podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad-garage")) : wrterr(domnvidn + "_Error_13")
                    }
                    break;
                case"podborcolorbrick":
                    switch (domgarag) {
                        case"":
                            "" == tFasadTypeProfGreyId || (tFasadTypeProfId = tFasadTypeProfGreyId), sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.brick) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.hide(), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad")) : wrterr(domnvidn + "_Error_13");
                            break;
                        case"-garage":
                            "" == tFasadGaragTypeProfGreyId || (tFasadGaragTypeProfId = tFasadGaragTypeProfGreyId), sFullPathToImage = "fasad/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.brick) > -1 ? (sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.hide(), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragColorId = sClickedPodborPtrId, podbortypeprofil.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad-garage")) : wrterr(domnvidn + "_Error_13")
                    }
                    break;
                default:
                    wrterr(domnvidn + "_Error_14")
            }
    }
}
function ptrelemColorClickKrovlyaByProfil(a) {
    if ($.inArray(sClickedPodborPtrId, ar_color.komposit) > -1)switch (domgarag) {
        case"":
            tKrovlyaTypeProfId = "komposit_grandline", sFullPathToImage = "krovlya/" + tKrovlyaTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya.komposit) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), podbortypekrovlya.find(".frame").removeClass("active"), $("#" + tKrovlyaTypeProfId).find(".frame").addClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), tKrovlyaTypeProfGreyId = "", tKrovlyaTypePokrGreyId = "", tKrovlyaColorId = sClickedPodborPtrId, tKrovlyaTypePokrId = "", PrintTableParams("krovlya")) : wrterr(domnvidn + "_Error_15__3");
            break;
        case"-garage":
            tKrovlyaGaragTypeProfId = "komposit_grandline", sFullPathToImage = "krovlya/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya.komposit) > -1 ? (sFullPathToImage = "krovlya-garage/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya-garage").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), podbortypekrovlya.find(".frame").removeClass("active"), $("#" + tKrovlyaGaragTypeProfId).find(".frame").addClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), tKrovlyaGaragTypeProfGreyId = "", tKrovlyaGaragTypePokrGreyId = "", tKrovlyaGaragColorId = sClickedPodborPtrId, tKrovlyaGaragTypePokrId = "", PrintTableParams("krovlya-garage")) : (console.log(sFullPathToImage), wrterr(domnvidn + "_Error_15__3"))
    } else switch (domgarag) {
        case"":
            "" == tKrovlyaTypeProfGreyId && "" != tKrovlyaTypePokrGreyId && (tKrovlyaTypePokrId = tKrovlyaTypePokrGreyId), "" != tKrovlyaTypeProfGreyId && "" != tKrovlyaTypePokrGreyId && (tKrovlyaTypeProfId = tKrovlyaTypeProfGreyId, tKrovlyaTypePokrId = tKrovlyaTypePokrGreyId, sActivePodborMaterial = tKrovlyaTypeProfId.substr(0, tKrovlyaTypeProfId.indexOf("_"))), "" != tKrovlyaTypeProfGreyId && "" == tKrovlyaTypePokrGreyId && (tKrovlyaTypeProfId = tKrovlyaTypeProfGreyId, sActivePodborMaterial = tKrovlyaTypeProfId.substr(0, tKrovlyaTypeProfId.indexOf("_"))), sFullPathToImage = "krovlya/" + tKrovlyaTypeProfId.replace("_", "/") + "/" + tKrovlyaTypePokrId + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tKrovlyaTypeProfGreyId = "", tKrovlyaTypePokrGreyId = "", tKrovlyaColorId = sClickedPodborPtrId, podbortypekrovlya.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tKrovlyaTypePokrId).find(".frame").addClass("active"), $("#" + tKrovlyaTypeProfId).find(".frame").addClass("active"), podborcolorkomposit.find(".frame").removeClass("active"), PrintTableParams("krovlya")) : wrterr(domnvidn + "_Error_15__1");
            break;
        case"-garage":
            "" == tKrovlyaGaragTypeProfGreyId && "" != tKrovlyaGaragTypePokrGreyId && (tKrovlyaGaragTypePokrId = tKrovlyaGaragTypePokrGreyId), "" != tKrovlyaGaragTypeProfGreyId && "" != tKrovlyaGaragTypePokrGreyId && (tKrovlyaGaragTypeProfId = tKrovlyaGaragTypeProfGreyId, tKrovlyaGaragTypePokrId = tKrovlyaGaragTypePokrGreyId, sActivePodborMaterial = tKrovlyaGaragTypeProfId.substr(0, tKrovlyaGaragTypeProfId.indexOf("_"))), "" != tKrovlyaGaragTypeProfGreyId && "" == tKrovlyaGaragTypePokrGreyId && (tKrovlyaGaragTypeProfId = tKrovlyaGaragTypeProfGreyId, sActivePodborMaterial = tKrovlyaGaragTypeProfId.substr(0, tKrovlyaGaragTypeProfId.indexOf("_"))), sFullPathToImage = "krovlya/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + tKrovlyaGaragTypePokrId + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 ? (sFullPathToImage = "krovlya-garage/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + tKrovlyaGaragTypePokrId + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya-garage").find("img").attr("src", sFullPathToImage), podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tKrovlyaGaragTypeProfGreyId = "", tKrovlyaGaragTypePokrGreyId = "", tKrovlyaGaragColorId = sClickedPodborPtrId, podbortypekrovlya.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tKrovlyaGaragTypePokrId).find(".frame").addClass("active"), $("#" + tKrovlyaGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("krovlya-garage")) : wrterr(domnvidn + "_Error_15__2")
    }
}
function ptrelemColorClickCokolByProfil(a) {
    switch (domgarag) {
        case"":
            switch (sClickedColorMaterial = a.parent().attr("id")) {
                case"podborcolormetal":
                    "" == tCokolTypeProfGreyId && "" != tCokolTypePokrGreyId && (tCokolTypePokrId = tCokolTypePokrGreyId), "" != tCokolTypeProfGreyId && "" != tCokolTypePokrGreyId && (tCokolTypeProfId = tCokolTypeProfGreyId, tCokolTypePokrId = tCokolTypePokrGreyId), "" != tCokolTypeProfGreyId && "" == tCokolTypePokrGreyId && (tCokolTypeProfId = tCokolTypeProfGreyId), sFullPathToImage = "cokol/" + tCokolTypeProfId.replace("_", "/") + "/" + tCokolTypePokrId + "/" + sClickedPodborPtrId, sActivePodborMaterial = tCokolTypeProfId.substr(0, tCokolTypeProfId.indexOf("_")), $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol").find("img").attr("src", sFullPathToImage), podborcolormetal.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", tCokolColorId = sClickedPodborPtrId, podbortypecokol.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tCokolTypePokrId).find(".frame").addClass("active"), $("#" + tCokolTypeProfId).find(".frame").addClass("active"), PrintTableParams("cokol")) : wrterr(domnvidn + "_Error_12_2_cokol_sfullpath=" + sFullPathToImage);
                    break;
                case"podborcolorwandstein":
                    "" == tCokolTypeProfGreyId || (tCokolTypeProfId = tCokolTypeProfGreyId), sFullPathToImage = "cokol/" + tCokolTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol.cokolwandstein) > -1 && (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol").find("img").attr("src", sFullPathToImage), podborcolorwandstein.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypecokol.find(".framegrey").removeClass("active"), tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", tCokolColorId = sClickedPodborPtrId, podbortypecokol.find(".frame").removeClass("active"), $("#" + tCokolTypeProfId).find(".frame").addClass("active"), PrintTableParams("cokol"))
            }
            break;
        case"-garage":
            switch (sClickedColorMaterial = a.parent().attr("id")) {
                case"podborcolormetal":
                    "" == tCokolGaragTypeProfGreyId && "" != tCokolGaragTypePokrGreyId && (tCokolGaragTypePokrId = tCokolGaragTypePokrGreyId), "" == tCokolGaragTypeProfGreyId && "" == tCokolGaragTypePokrGreyId, "" != tCokolGaragTypeProfGreyId && "" != tCokolGaragTypePokrGreyId && (tCokolGaragTypeProfId = tCokolGaragTypeProfGreyId, tCokolGaragTypePokrId = tCokolGaragTypePokrGreyId), "" != tCokolGaragTypeProfGreyId && "" == tCokolGaragTypePokrGreyId && (tCokolGaragTypeProfId = tCokolGaragTypeProfGreyId), sFullPathToImage = "cokol/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + tCokolGaragTypePokrId + "/" + sClickedPodborPtrId, sActivePodborMaterial = tCokolGaragTypeProfId.substr(0, tCokolGaragTypeProfId.indexOf("_")), $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 ? (sFullPathToImage = "cokol-garage/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + tCokolGaragTypePokrId + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol-garage").find("img").attr("src", sFullPathToImage), podborcolormetal.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", tCokolGaragColorId = sClickedPodborPtrId, podbortypecokol.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tCokolGaragTypePokrId).find(".frame").addClass("active"), $("#" + tCokolGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("cokol-garage")) : wrterr(domnvidn + "_Error_12_2_cokol_sfullpath=" + sFullPathToImage);
                    break;
                case"podborcolorwandstein":
                    "" == tCokolGaragTypeProfGreyId || (tCokolGaragTypeProfId = tCokolGaragTypeProfGreyId), sFullPathToImage = "cokol/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol.cokolwandstein) > -1 && (sFullPathToImage = "cokol-garage/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol-garage").find("img").attr("src", sFullPathToImage), podborcolorwandstein.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypecokol.find(".framegrey").removeClass("active"), tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", tCokolGaragColorId = sClickedPodborPtrId, podbortypecokol.find(".frame").removeClass("active"), $("#" + tCokolGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("cokol-garage"))
            }
    }
}
function ptrelemColorClickZaborByProfil(a) {
    podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tZaborColorId = sClickedPodborPtrId, sFullPathToImage = "zabor/" + tZaborTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_zabor").find("img").attr("src", sFullPathToImage), PrintTableParams("zabor")
}
function ptrelemColorClickVodostokByProfil(a) {
    podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tVodostokColorId = sClickedPodborPtrId, sFullPathToImage = "vodostok/" + tVodostokTypeProfId + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_vodostok").find("img").attr("src", sFullPathToImage), PrintTableParams("vodostok")
}
function ptrelemColorClickDobornByProfil(a) {
    switch (sActiveDobornColor = a.parent().attr("id"), sActiveDobornColor) {
        case"podborcolorsofity":
            switch (sActiveDobornPtrId) {
                case"dobornsofity":
                    podborcolorsofity.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tSofityColorId = sClickedPodborPtrId, sFullPathToImage = "sofity/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_sofity").find("img").attr("src", sFullPathToImage), PrintTableParams("sofity");
                    break;
                case"dobornoknanalich":
                    podborcolorsofity.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tOknaNalichColorId = sClickedPodborPtrId, sFullPathToImage = "oknadveri/oknanalich/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_oknanalich").find("img").attr("src", sFullPathToImage), PrintTableParams("oknanalich");
                    break;
                case"dobornkrylco":
                    podborcolorsofity.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tKrylcoColorId = sClickedPodborPtrId, sFullPathToImage = "oknadveri/krylco/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krylco").find("img").attr("src", sFullPathToImage), PrintTableParams("krylco");
                    break;
                case"dobornfasad":
                    ChangeFasadDoborn(sClickedPodborPtrId)
            }
            break;
        case"podborcolormetal":
            ChangeFasadDoborn(sClickedPodborPtrId);
            break;
        case"podborcolorvinil":
            ChangeFasadDoborn(sClickedPodborPtrId);
            break;
        default:
            wrterr(domnvidn + "_Error_61")
    }
}
function ptrelemColorClickFasadByCvet(a) {
    switch (podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), sClickedColorMaterial = a.parent().attr("id"), $.each(ar_typepokr, function (a, r) {
        $("#" + r).find(".overlayd").addClass("active")
    }), domgarag) {
        case"":
            switch (sClickedColorMaterial) {
                case"podborcolormetal":
                    if ($.each(ar_profil_id.metal, function (a, r) {
                            $("#" + r).find(".overlayd").removeClass("active")
                        }), $.each(ar_profil_id.vinil, function (a, r) {
                            $("#" + r).find(".overlayd").addClass("active")
                        }), $.each(ar_profil_id.brick, function (a, r) {
                            $("#" + r).find(".overlayd").addClass("active")
                        }), sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + tFasadTypePokrId + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1) {
                        sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadTypePokrId).find(".frame").addClass("active");
                        var r = "";
                        $.each(ar_element_exist_color_fasad.metal, function (a, o) {
                            o.indexOf(sClickedPodborPtrId) > -1 && (r = o.substr(12), r = r.substr(r.indexOf("/") + 1), r = r.substr(0, r.indexOf("/")), $("#" + r).find(".overlayd").removeClass("active"))
                        }), PrintTableParams("fasad"), $("#" + tFasadTypePokrId).trigger("click")
                    } else {
                        var r = "", o = "";
                        $.each(ar_element_exist_color_fasad.metal, function (a, e) {
                            e.indexOf(sClickedPodborPtrId) > -1 && (r = e.substr(12), r = r.substr(r.indexOf("/") + 1), o = e.substr(6), o = o.substr(0, o.indexOf(r) - 1), r = r.substr(0, r.indexOf("/")), $("#" + r).find(".overlayd").removeClass("active"))
                        }), tFasadTypeProfId = o.replace("/", "_"), tFasadTypePokrId = r, sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + tFasadTypePokrId + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png",
                            $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadTypePokrId).find(".frame").addClass("active"), PrintTableParams("fasad"), $("#" + tFasadTypePokrId).trigger("click")
                    }
                    break;
                case"podborcolorvinil":
                    podbortypepokr.find(".frame").removeClass("active"), $.each(ar_profil_id.vinil, function (a, r) {
                        $("#" + r).find(".overlayd").removeClass("active")
                    }), $.each(ar_profil_id.metal, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    }), $.each(ar_profil_id.brick, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    }), podbortypeprofil.find(".frame").removeClass("active");
                    var e = "";
                    $.each(ar_profil_id.vinil, function (a, r) {
                        sFullPathToImage = "fasad/" + r.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.vinil) > -1 ? e = r : $("#" + r).find(".overlayd").addClass("active")
                    }), sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.vinil) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad")) : (tFasadTypeProfId = e, sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad"));
                    break;
                case"podborcolorbrick":
                    podbortypepokr.find(".frame").removeClass("active"), $.each(ar_profil_id.vinil, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    }), $.each(ar_profil_id.metal, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    }), $.each(ar_profil_id.brick, function (a, r) {
                        $("#" + r).find(".overlayd").removeClass("active")
                    }), podbortypeprofil.find(".frame").removeClass("active");
                    var e = "";
                    $.each(ar_profil_id.brick, function (a, r) {
                        sFullPathToImage = "fasad/" + r.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.brick) > -1 ? e = r : $("#" + r).find(".overlayd").addClass("active")
                    }), sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.brick) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad")) : (tFasadTypeProfId = e, sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad"));
                    break;
                default:
                    wrterr(domnvidn + "_Error_17")
            }
            break;
        case"-garage":
            switch (sClickedColorMaterial) {
                case"podborcolormetal":
                    if ($.each(ar_profil_id.metal, function (a, r) {
                            $("#" + r).find(".overlayd").removeClass("active")
                        }), $.each(ar_profil_id.vinil, function (a, r) {
                            $("#" + r).find(".overlayd").addClass("active")
                        }), $.each(ar_profil_id.brick, function (a, r) {
                            $("#" + r).find(".overlayd").addClass("active")
                        }), sFullPathToImage = "fasad/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + tFasadGaragTypePokrId + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.metal) > -1) {
                        sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + tFasadGaragTypePokrId + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragColorId = sClickedPodborPtrId, podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadGaragTypePokrId).find(".frame").addClass("active");
                        var r = "";
                        $.each(ar_element_exist_color_fasad.metal, function (a, o) {
                            o.indexOf(sClickedPodborPtrId) > -1 && (r = o.substr(12), r = r.substr(r.indexOf("/") + 1), r = r.substr(0, r.indexOf("/")), $("#" + r).find(".overlayd").removeClass("active"))
                        }), PrintTableParams("fasad-garage"), $("#" + tFasadGaragTypePokrId).trigger("click")
                    } else {
                        var r = "", o = "";
                        $.each(ar_element_exist_color_fasad.metal, function (a, e) {
                            e.indexOf(sClickedPodborPtrId) > -1 && (r = e.substr(12), r = r.substr(r.indexOf("/") + 1), o = e.substr(6), o = o.substr(0, o.indexOf(r) - 1), r = r.substr(0, r.indexOf("/")), $("#" + r).find(".overlayd").removeClass("active"))
                        }), tFasadGaragTypeProfId = o.replace("/", "_"), tFasadGaragTypePokrId = r, sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + tFasadGaragTypePokrId + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragColorId = sClickedPodborPtrId, podbortypepokr.find(".frame").removeClass("active"), $("#" + tFasadGaragTypePokrId).find(".frame").addClass("active"), PrintTableParams("fasad-garage"), $("#" + tFasadGaragTypePokrId).trigger("click")
                    }
                    break;
                case"podborcolorvinil":
                    podbortypepokr.find(".frame").removeClass("active"), $.each(ar_profil_id.vinil, function (a, r) {
                        $("#" + r).find(".overlayd").removeClass("active")
                    }), $.each(ar_profil_id.metal, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    }), $.each(ar_profil_id.brick, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    }), podbortypeprofil.find(".frame").removeClass("active");
                    var e = "";
                    switch ($.each(ar_profil_id.vinil, function (a, r) {
                        sFullPathToImage = "fasad/" + r.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.vinil) > -1 ? e = r : $("#" + r).find(".overlayd").addClass("active")
                    }), domgarag) {
                        case"":
                            sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.vinil) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad")) : (tFasadTypeProfId = e, sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad"));
                            break;
                        case"-garage":
                            sFullPathToImage = "fasad/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.vinil) > -1 ? (sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragColorId = sClickedPodborPtrId, $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad-garage")) : (tFasadGaragTypeProfId = e, sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragColorId = sClickedPodborPtrId, $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad-garage"))
                    }
                    break;
                case"podborcolorbrick":
                    podbortypepokr.find(".frame").removeClass("active"), $.each(ar_profil_id.vinil, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    }), $.each(ar_profil_id.metal, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    }), $.each(ar_profil_id.brick, function (a, r) {
                        $("#" + r).find(".overlayd").removeClass("active")
                    }), podbortypeprofil.find(".frame").removeClass("active");
                    var e = "";
                    switch ($.each(ar_profil_id.brick, function (a, r) {
                        sFullPathToImage = "fasad/" + r.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.brick) > -1 ? e = r : $("#" + r).find(".overlayd").addClass("active")
                    }), domgarag) {
                        case"":
                            sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.brick) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad")) : (tFasadTypeProfId = e, sFullPathToImage = "fasad/" + tFasadTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadTypeProfGreyId = "", tFasadTypePokrGreyId = "", tFasadColorId = sClickedPodborPtrId, $("#" + tFasadTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad"));
                            break;
                        case"-garage":
                            sFullPathToImage = "fasad/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_fasad.brick) > -1 ? (sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragColorId = sClickedPodborPtrId, $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad-garage")) : (tFasadGaragTypeProfId = e, sFullPathToImage = "fasad-garage/" + tFasadGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_fasad-garage").find("img").attr("src", sFullPathToImage), podbortypeprofil.find(".framegrey").removeClass("active"), tFasadGaragTypeProfGreyId = "", tFasadGaragTypePokrGreyId = "", tFasadGaragColorId = sClickedPodborPtrId, $("#" + tFasadGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("fasad-garage"))
                    }
                    break;
                default:
                    wrterr(domnvidn + "_Error_17")
            }
    }
}
function ptrelemColorClickKrovlyaByCvet(a) {
    if ($.inArray(sClickedPodborPtrId, ar_color.komposit) > -1)switch (domgarag) {
        case"":
            podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tKrovlyaColorId = sClickedPodborPtrId, tKrovlyaTypeProfId = "komposit_grandline", tKrovlyaTypePokrId = "", tKrovlyaTypePokrGreyId = "", tKrovlyaTypeProfGreyId = "", podbortypepokr.find(".overlayd").addClass("active"), podbortypepokr.find(".frame").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypekrovlya.find(".overlayd").addClass("active"), podbortypekrovlya.find(".frame").removeClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), $("#komposit_grandline").find(".overlayd").removeClass("active"), $("#komposit_grandline").find(".framegrey").removeClass("active"), $("#komposit_grandline").find(".frame").addClass("active"), sActivePodborMaterial = "komposit", sFullPathToImage = "img/doma/" + domnvidn + "/krovlya/komposit/grandline/" + sClickedPodborPtrId + ".png", $("#calc_krovlya").find("img").attr("src", sFullPathToImage), PrintTableParams("krovlya");
            break;
        case"-garage":
            podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tKrovlyaGaragColorId = sClickedPodborPtrId, tKrovlyaGaragTypeProfId = "komposit_grandline", tKrovlyaGaragTypePokrId = "", tKrovlyaGaragTypePokrGreyId = "", tKrovlyaGaragTypeProfGreyId = "", podbortypepokr.find(".overlayd").addClass("active"), podbortypepokr.find(".frame").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypekrovlya.find(".overlayd").addClass("active"), podbortypekrovlya.find(".frame").removeClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), $("#komposit_grandline").find(".overlayd").removeClass("active"), $("#komposit_grandline").find(".framegrey").removeClass("active"), $("#komposit_grandline").find(".frame").addClass("active"), sActivePodborMaterial = "komposit", sFullPathToImage = "img/doma/" + domnvidn + "/krovlya-garage/komposit/grandline/" + sClickedPodborPtrId + ".png", $("#calc_krovlya-garage").find("img").attr("src", sFullPathToImage), PrintTableParams("krovlya-garage")
    } else switch (domgarag) {
        case"":
            podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tKrovlyaColorId = sClickedPodborPtrId, tKrovlyaTypePokrGreyId = "", tKrovlyaTypeProfGreyId = "", podbortypepokr.find(".overlayd").addClass("active");
            var r = "";
            $.each(ar_element_exist_color_krovlya.metal, function (a, o) {
                o.indexOf(sClickedPodborPtrId) > -1 && (r = o.substr(14), r = r.substr(r.indexOf("/") + 1), r = r.substr(0, r.indexOf("/")), $("#" + r).find(".overlayd").removeClass("active"))
            }), $.each(ar_element_exist_color_krovlya.falcevaya, function (a, o) {
                o.indexOf(sClickedPodborPtrId) > -1 && (r = o.substr(18), r = r.substr(r.indexOf("/") + 1), r = r.substr(0, r.indexOf("/")), $("#" + r).find(".overlayd").removeClass("active"))
            }), $.each(ar_element_exist_color_krovlya.profnastil, function (a, o) {
                o.indexOf(sClickedPodborPtrId) > -1 && (r = o.substr(19), r = r.substr(r.indexOf("/") + 1), r = r.substr(0, r.indexOf("/")), $("#" + r).find(".overlayd").removeClass("active"))
            }), sActivePodborMaterial = tKrovlyaTypeProfId.substr(0, tKrovlyaTypeProfId.indexOf("_")), sFullPathToImage = "krovlya/" + tKrovlyaTypeProfId.replace("_", "/") + "/" + tKrovlyaTypePokrId + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 || (tKrovlyaTypePokrId = r, sFullPathToImage = "krovlya/" + tKrovlyaTypeProfId.replace("_", "/") + "/" + tKrovlyaTypePokrId + "/" + sClickedPodborPtrId), sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya").find("img").attr("src", sFullPathToImage), podbortypepokr.find(".frame").removeClass("active"), $("#" + tKrovlyaTypePokrId).find(".frame").addClass("active"), PrintTableParams("krovlya"), $("#" + tKrovlyaTypePokrId).trigger("click");
            break;
        case"-garage":
            podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tKrovlyaGaragColorId = sClickedPodborPtrId, tKrovlyaGaragTypePokrGreyId = "", tKrovlyaGaragTypeProfGreyId = "", podbortypepokr.find(".overlayd").addClass("active");
            var r = "";
            $.each(ar_element_exist_color_krovlya.metal, function (a, o) {
                o.indexOf(sClickedPodborPtrId) > -1 && (r = o.substr(14), r = r.substr(r.indexOf("/") + 1), r = r.substr(0, r.indexOf("/")), $("#" + r).find(".overlayd").removeClass("active"))
            }), $.each(ar_element_exist_color_krovlya.falcevaya, function (a, o) {
                o.indexOf(sClickedPodborPtrId) > -1 && (r = o.substr(18), r = r.substr(r.indexOf("/") + 1), r = r.substr(0, r.indexOf("/")), $("#" + r).find(".overlayd").removeClass("active"))
            }), $.each(ar_element_exist_color_krovlya.profnastil, function (a, o) {
                o.indexOf(sClickedPodborPtrId) > -1 && (r = o.substr(19), r = r.substr(r.indexOf("/") + 1), r = r.substr(0, r.indexOf("/")), $("#" + r).find(".overlayd").removeClass("active"))
            }), sActivePodborMaterial = tKrovlyaGaragTypeProfId.substr(0, tKrovlyaGaragTypeProfId.indexOf("_")), sFullPathToImage = "krovlya/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + tKrovlyaGaragTypePokrId + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sActivePodborMaterial]) > -1 ? sFullPathToImage = "krovlya-garage/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + tKrovlyaGaragTypePokrId + "/" + sClickedPodborPtrId : (tKrovlyaGaragTypePokrId = r, sFullPathToImage = "krovlya-garage/" + tKrovlyaGaragTypeProfId.replace("_", "/") + "/" + tKrovlyaGaragTypePokrId + "/" + sClickedPodborPtrId), sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya-garage").find("img").attr("src", sFullPathToImage), podbortypepokr.find(".frame").removeClass("active"), $("#" + tKrovlyaGaragTypePokrId).find(".frame").addClass("active"), PrintTableParams("krovlya-garage"), $("#" + tKrovlyaGaragTypePokrId).trigger("click")
    }
}
function ptrelemColorClickZaborByCvet(a) {
    podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tZaborColorId = sClickedPodborPtrId, sFullPathToImage = "zabor/" + tZaborTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_zabor").find("img").attr("src", sFullPathToImage), PrintTableParams("zabor")
}
function ptrelemColorClickVodostokByCvet(a) {
    podborcolor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tVodostokColorId = sClickedPodborPtrId, sFullPathToImage = "vodostok/" + tVodostokTypeProfId + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_vodostok").find("img").attr("src", sFullPathToImage), PrintTableParams("vodostok")
}
function ptrelemColorClickCokolByCvet(a) {
    switch (domgarag) {
        case"":
            switch (sClickedColorMaterial = a.parent().attr("id")) {
                case"podborcolormetal":
                    "" == tCokolTypeProfGreyId && "" != tCokolTypePokrGreyId && (tCokolTypePokrId = tCokolTypePokrGreyId), "" != tCokolTypeProfGreyId && "" != tCokolTypePokrGreyId && (tCokolTypeProfId = tCokolTypeProfGreyId, tCokolTypePokrId = tCokolTypePokrGreyId), "" != tCokolTypeProfGreyId && "" == tCokolTypePokrGreyId && (tCokolTypeProfId = tCokolTypeProfGreyId), sFullPathToImage = "cokol/" + tCokolTypeProfId.replace("_", "/") + "/" + tCokolTypePokrId + "/" + sClickedPodborPtrId, sActivePodborMaterial = tCokolTypeProfId.substr(0, tCokolTypeProfId.indexOf("_")), $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol").find("img").attr("src", sFullPathToImage), podborcolormetal.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", tCokolColorId = sClickedPodborPtrId, podbortypecokol.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tCokolTypePokrId).find(".frame").addClass("active"), $("#" + tCokolTypeProfId).find(".frame").addClass("active"), PrintTableParams("cokol")) : wrterr(domnvidn + "_Error_12_2_cokol_sfullpath=" + sFullPathToImage);
                    break;
                case"podborcolorwandstein":
                    "" == tCokolTypeProfGreyId || (tCokolTypeProfId = tCokolTypeProfGreyId), sFullPathToImage = "cokol/" + tCokolTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol.cokolwandstein) > -1 && (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol").find("img").attr("src", sFullPathToImage), podborcolorwandstein.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypecokol.find(".framegrey").removeClass("active"), tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", tCokolColorId = sClickedPodborPtrId, podbortypecokol.find(".frame").removeClass("active"), $("#" + tCokolTypeProfId).find(".frame").addClass("active"), PrintTableParams("cokol"))
            }
            break;
        case"-garage":
            switch (sClickedColorMaterial = a.parent().attr("id")) {
                case"podborcolormetal":
                    "" == tCokolGaragTypeProfGreyId && "" != tCokolGaragTypePokrGreyId && (tCokolGaragTypePokrId = tCokolGaragTypePokrGreyId), "" == tCokolGaragTypeProfGreyId && "" == tCokolGaragTypePokrGreyId, "" != tCokolGaragTypeProfGreyId && "" != tCokolGaragTypePokrGreyId && (tCokolGaragTypeProfId = tCokolGaragTypeProfGreyId, tCokolGaragTypePokrId = tCokolGaragTypePokrGreyId), "" != tCokolGaragTypeProfGreyId && "" == tCokolGaragTypePokrGreyId && (tCokolGaragTypeProfId = tCokolGaragTypeProfGreyId), sFullPathToImage = "cokol/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + tCokolGaragTypePokrId + "/" + sClickedPodborPtrId, sActivePodborMaterial = tCokolGaragTypeProfId.substr(0, tCokolGaragTypeProfId.indexOf("_")), $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sActivePodborMaterial]) > -1 ? (sFullPathToImage = "cokol-garage/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + tCokolGaragTypePokrId + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol-garage").find("img").attr("src", sFullPathToImage), podborcolormetal.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", tCokolGaragColorId = sClickedPodborPtrId, podbortypecokol.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), $("#" + tCokolGaragTypePokrId).find(".frame").addClass("active"), $("#" + tCokolGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("cokol-garage")) : wrterr(domnvidn + "_Error_12_2_cokol_sfullpath=" + sFullPathToImage);
                    break;
                case"podborcolorwandstein":
                    "" == tCokolGaragTypeProfGreyId || (tCokolGaragTypeProfId = tCokolGaragTypeProfGreyId), sFullPathToImage = "cokol/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol.cokolwandstein) > -1 && (sFullPathToImage = "cokol-garage/" + tCokolGaragTypeProfId.replace("_", "/") + "/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol-garage").find("img").attr("src", sFullPathToImage), podborcolorwandstein.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), podbortypecokol.find(".framegrey").removeClass("active"), tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", tCokolGaragColorId = sClickedPodborPtrId, podbortypecokol.find(".frame").removeClass("active"), $("#" + tCokolGaragTypeProfId).find(".frame").addClass("active"), PrintTableParams("cokol-garage"))
            }
    }
}
function ptrelemColorClickDobornByCvet(a) {
    switch (sActiveDobornColor = a.parent().attr("id"), sActiveDobornColor) {
        case"podborcolorsofity":
            switch (sActiveDobornPtrId) {
                case"dobornsofity":
                    podborcolorsofity.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tSofityColorId = sClickedPodborPtrId, sFullPathToImage = "sofity/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_sofity").find("img").attr("src", sFullPathToImage), PrintTableParams("sofity");
                    break;
                case"dobornoknanalich":
                    podborcolorsofity.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tOknaNalichColorId = sClickedPodborPtrId, sFullPathToImage = "oknadveri/oknanalich/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_oknanalich").find("img").attr("src", sFullPathToImage), PrintTableParams("oknanalich");
                    break;
                case"dobornkrylco":
                    podborcolorsofity.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tKrylcoColorId = sClickedPodborPtrId, sFullPathToImage = "oknadveri/krylco/" + sClickedPodborPtrId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krylco").find("img").attr("src", sFullPathToImage), PrintTableParams("krylco");
                    break;
                case"dobornfasad":
                    ChangeFasadDoborn(sClickedPodborPtrId)
            }
            break;
        case"podborcolormetal":
            ChangeFasadDoborn(sClickedPodborPtrId);
            break;
        case"podborcolorvinil":
            ChangeFasadDoborn(sClickedPodborPtrId);
            break;
        default:
            wrterr(domnvidn + "_Error_612")
    }
}
function ptrelemProfilClickKrovlyaDomByProfil(a) {
    "komposit_grandline" == sClickedPodborPtrId ? (podbortypepokr.hide(), podborcolormetal.hide(), podborcolorkomposit.show(), "komposit" == sActivePodborMaterial ? (podbortypekrovlya.find(".frame").removeClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), podborcolorkomposit.find(".active").removeClass("active"), $("#" + tKrovlyaColorId).find(".frame").addClass("active"), tKrovlyaTypeProfGreyId = "", tKrovlyaTypePokrGreyId = "", $("#" + tKrovlyaColorId).trigger("click")) : (podbortypekrovlya.find(".framegrey").removeClass("active"), a.find(".frame").removeClass("active"), a.find(".framegrey").addClass("active"), podborcolorkomposit.find(".active").removeClass("active"), tKrovlyaTypeProfGreyId = sClickedPodborPtrId, tKrovlyaTypePokrGreyId = "poliester")) : (podbortypepokr.show(), podborcolormetal.show(), podborcolorkomposit.hide(), "komposit" == sActivePodborMaterial ? (podbortypepokr.find(".frame").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), "" == tKrovlyaTypePokrGreyId && (tKrovlyaTypePokrGreyId = "poliester"), $("#" + tKrovlyaTypePokrGreyId).find(".framegrey").addClass("active"), tKrovlyaTypeProfGreyId = sClickedPodborPtrId, tKrovlyaTypePokrId = "", FEnableOnlyExistPokr("krovlya", sClickedPodborPtrId), sFullPathToImage = "krovlya/" + sClickedPodborPtrId.replace("_", "/") + "/" + tKrovlyaTypePokrGreyId, $.inArray(sFullPathToImage, ar_element_exist_typepokr.krovlya) > -1 ? $("#" + tKrovlyaTypePokrGreyId).trigger("click") : $.each(ar_color.metal, function (a, r) {
        $("#" + r).find(".overlayd").addClass("active")
    })) : (FEnableOnlyExistPokr("krovlya", sClickedPodborPtrId), "" == tKrovlyaTypePokrId && wrterr(domnvidn + "_Error_20"), sFullPathToImage = "" == tKrovlyaTypePokrGreyId ? "krovlya/" + sClickedPodborPtrId.replace("_", "/") + "/" + tKrovlyaTypePokrId + "/" + tKrovlyaColorId : "krovlya/" + sClickedPodborPtrId.replace("_", "/") + "/" + tKrovlyaTypePokrGreyId + "/" + tKrovlyaColorId, sClickedPodborMaterial = sClickedPodborPtrId.substr(0, sClickedPodborPtrId.indexOf("_")), $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sClickedPodborMaterial]) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya").find("img").attr("src", sFullPathToImage), podbortypekrovlya.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), "" == tKrovlyaTypePokrGreyId || (tKrovlyaTypePokrId = tKrovlyaTypePokrGreyId), $("#" + tKrovlyaTypePokrId).find(".frame").addClass("active"), tKrovlyaTypeProfId = sClickedPodborPtrId, tKrovlyaTypePokrGreyId = "", tKrovlyaTypeProfGreyId = "", PrintTableParams("krovlya"), $("#" + tKrovlyaTypePokrId).trigger("click")) : (podbortypekrovlya.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tKrovlyaTypeProfGreyId = sClickedPodborPtrId, $.each(ar_color.metal, function (a, r) {
        $("#" + r).find(".overlayd").addClass("active")
    }), "" == tKrovlyaTypePokrGreyId ? $("#" + tKrovlyaTypePokrId).trigger("click") : $("#" + tKrovlyaTypePokrGreyId).trigger("click"))))
}
function ptrelemProfilClickKrovlyaDomByCvet(a) {
    sFullPathToImage = "krovlya/" + sClickedPodborPtrId.replace("_", "/") + "/" + tKrovlyaTypePokrId + "/" + tKrovlyaColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya").find("img").attr("src", sFullPathToImage), tKrovlyaTypePokrGreyId = "", tKrovlyaTypeProfGreyId = "", tKrovlyaTypeProfId = sClickedPodborPtrId, podbortypekrovlya.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), PrintTableParams("krovlya")
}
function ptrelemProfilClickKrovlyaGarageByProfil(a) {
    sActivePodborMaterial = tKrovlyaGaragTypeProfId.substr(0, tKrovlyaGaragTypeProfId.indexOf("_")), "komposit_grandline" == sClickedPodborPtrId ? (podbortypepokr.hide(), podborcolormetal.hide(), podborcolorkomposit.show(), "komposit" == sActivePodborMaterial ? (podbortypekrovlya.find(".frame").removeClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), podborcolorkomposit.find(".active").removeClass("active"), $("#" + tKrovlyaGaragColorId).find(".frame").addClass("active"), tKrovlyaGaragTypeProfGreyId = "", tKrovlyaGaragTypePokrGreyId = "", $("#" + tKrovlyaGaragColorId).trigger("click")) : (podbortypekrovlya.find(".framegrey").removeClass("active"), a.find(".frame").removeClass("active"), a.find(".framegrey").addClass("active"), podborcolorkomposit.find(".active").removeClass("active"), tKrovlyaGaragTypeProfGreyId = sClickedPodborPtrId, tKrovlyaGaragTypePokrGreyId = "poliester")) : (podbortypepokr.show(), podborcolormetal.show(), podborcolorkomposit.hide(), "komposit" == sActivePodborMaterial ? (podbortypepokr.find(".frame").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypekrovlya.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), "" == tKrovlyaGaragTypePokrGreyId && (tKrovlyaGaragTypePokrGreyId = "poliester"), $("#" + tKrovlyaGaragTypePokrGreyId).find(".framegrey").addClass("active"), tKrovlyaGaragTypeProfGreyId = sClickedPodborPtrId, tKrovlyaGaragTypePokrId = "", FEnableOnlyExistPokr("krovlya", sClickedPodborPtrId), sFullPathToImage = "krovlya/" + sClickedPodborPtrId.replace("_", "/") + "/" + tKrovlyaGaragTypePokrGreyId, $.inArray(sFullPathToImage, ar_element_exist_typepokr.krovlya) > -1 ? $("#" + tKrovlyaGaragTypePokrGreyId).trigger("click") : $.each(ar_color.metal, function (a, r) {
        $("#" + r).find(".overlayd").addClass("active")
    })) : (FEnableOnlyExistPokr("krovlya", sClickedPodborPtrId), "" == tKrovlyaGaragTypePokrId && wrterr(domnvidn + "_Error_20"), sFullPathToImage = "" == tKrovlyaGaragTypePokrGreyId ? "krovlya/" + sClickedPodborPtrId.replace("_", "/") + "/" + tKrovlyaGaragTypePokrId + "/" + tKrovlyaGaragColorId : "krovlya/" + sClickedPodborPtrId.replace("_", "/") + "/" + tKrovlyaGaragTypePokrGreyId + "/" + tKrovlyaGaragColorId, sClickedPodborMaterial = sClickedPodborPtrId.substr(0, sClickedPodborPtrId.indexOf("_")), $.inArray(sFullPathToImage, ar_element_exist_color_krovlya[sClickedPodborMaterial]) > -1 ? (sFullPathToImage = "krovlya-garage/" + sClickedPodborPtrId.replace("_", "/") + "/" + tKrovlyaGaragTypePokrId + "/" + tKrovlyaGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya-garage").find("img").attr("src", sFullPathToImage), podbortypekrovlya.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), "" == tKrovlyaGaragTypePokrGreyId || (tKrovlyaGaragTypePokrId = tKrovlyaGaragTypePokrGreyId), $("#" + tKrovlyaGaragTypePokrId).find(".frame").addClass("active"), tKrovlyaGaragTypeProfId = sClickedPodborPtrId, tKrovlyaGaragTypePokrGreyId = "", tKrovlyaGaragTypeProfGreyId = "", $("#" + tKrovlyaGaragTypePokrId).trigger("click")) : (podbortypekrovlya.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tKrovlyaGaragTypeProfGreyId = sClickedPodborPtrId, $.each(ar_color.metal, function (a, r) {
        $("#" + r).find(".overlayd").addClass("active")
    }), "" == tKrovlyaGaragTypePokrGreyId ? $("#" + tKrovlyaGaragTypePokrId).trigger("click") : $("#" + tKrovlyaGaragTypePokrGreyId).trigger("click"))))
}
function ptrelemProfilClickKrovlyaGarageByCvet(a) {
    sFullPathToImage = "krovlya-garage/" + sClickedPodborPtrId.replace("_", "/") + "/" + tKrovlyaGaragTypePokrId + "/" + tKrovlyaGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_krovlya-garage").find("img").attr("src", sFullPathToImage), tKrovlyaGaragTypePokrGreyId = "", tKrovlyaGaragTypeProfGreyId = "", tKrovlyaGaragTypeProfId = sClickedPodborPtrId, podbortypekrovlya.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), PrintTableParams("krovlya-garage")
}
function ptrelemProfilClickZabor(a) {
    podborzabor.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tZaborTypeProfId = sClickedPodborPtrId, sFullPathToImage = "zabor/" + tZaborTypeProfId.replace("_", "/") + "/" + tZaborColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_zabor").find("img").attr("src", sFullPathToImage), $.each(ar_color.metal, function (a, r) {
        sFullPathToImage = "zabor/modul/premplus/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_zabor) > -1 || $("#" + r).find(".overlayd").addClass("active")
    }), PrintTableParams("zabor")
}
function ptrelemProfilClickVodostok(a) {
    podborvodostok.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tVodostokTypeProfId = sClickedPodborPtrId, sFullPathToImage = "vodostok/" + tVodostokTypeProfId + "/" + tVodostokColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_vodostok").find("img").attr("src", sFullPathToImage), $.each(ar_color.metal, function (a, r) {
        sFullPathToImage = "vodostok/gl12590/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_vodostok) > -1 || $("#" + r).find(".overlayd").addClass("active")
    }), PrintTableParams("vodostok")
}
function ptrelemProfilClickCokol(a) {
    switch (domgarag) {
        case"":
            var r = curvalueselprioritetvybora;
            switch (curvalueselprioritetvybora = "potipuprof", sActivePodborMaterial = tCokolTypeProfId.substr(0, tCokolTypeProfId.indexOf("_")), sClickedPodborMaterial = sClickedPodborPtrId.substr(0, sClickedPodborPtrId.indexOf("_")), curvalueselprioritetvybora) {
                case"potipuprof":
                    (sClickedPodborPtrId.indexOf("cokolmetal") > -1 || sClickedPodborPtrId.indexOf("cokolprofnastil") > -1) && (podborcolorwandstein.hide(), podborcolormetal.show(), tipcolortext.html("3. Выберите цвет"), podbortypepokr.show(), podborcolormetal.find(".overlayd").removeClass("active"), podbortypepokr.find(".overlayd").removeClass("active"), $.each(ar_typepokr, function (a, r) {
                        sFullPathToImage = "cokol/" + sClickedPodborPtrId.replace("_", "/") + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_typepokr.cokol) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }), (sActivePodborMaterial.indexOf("cokolmetal") > -1 || sActivePodborMaterial.indexOf("cokolprofnastil") > -1) && (sFullPathToImage = "cokol/" + sClickedPodborPtrId.replace("_", "/") + "/" + tCokolTypePokrId + "/" + tCokolColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sClickedPodborMaterial]) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol").find("img").attr("src", sFullPathToImage), podbortypecokol.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", tCokolTypeProfId = sClickedPodborPtrId, PrintTableParams("cokol"), $("#" + tCokolTypePokrId).find(".frame").addClass("active"), $("#" + tCokolColorId).find(".frame").addClass("active"), $("#" + tCokolTypePokrId).trigger("click")) : (podbortypecokol.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolTypeProfGreyId = sClickedPodborPtrId, sFullPathToImage = "cokol/" + sClickedPodborPtrId.replace("_", "/") + "/" + tCokolTypePokrId, $.inArray(sFullPathToImage, ar_element_exist_typepokr.cokol) > -1 ? ($("#" + tCokolTypePokrId).trigger("click"), podbortypepokr.find(".framegrey").removeClass("active"), tCokolTypePokrGreyId = "", $("#" + tCokolTypePokrId).find(".frame").addClass("active")) : (tCokolTypePokrGreyId = "", podbortypepokr.find(".framegrey").removeClass("active"), $.each(ar_color.metal, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    })))), sActivePodborMaterial.indexOf("cokolwandstein") > -1 && (podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), podborcolormetal.find(".frame").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolTypeProfGreyId = sClickedPodborPtrId, tCokolTypePokrGreyId = "poliester", $("#poliester").find(".framegrey").addClass("active"), tCokolTypePokrId = "", $("#poliester").trigger("click"))), sClickedPodborPtrId.indexOf("cokolwandstein") > -1 && (podbortypepokr.hide(), podborcolormetal.hide(), podborcolorwandstein.show(), podborcolorwandstein.find(".overlayd").removeClass("active"), $.each(ar_color.wandstein, function (a, r) {
                        sFullPathToImage = "cokol/" + sClickedPodborPtrId.replace("_", "/") + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol.cokolwandstein) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }), (sActivePodborMaterial.indexOf("cokolmetal") > -1 || sActivePodborMaterial.indexOf("cokolprofnastil") > -1) && (podbortypecokol.find(".framegrey").removeClass("active"), podborcolorwandstein.find(".frame").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolTypeProfGreyId = sClickedPodborPtrId, tipcolortext.html("2. Выберите цвет")), sActivePodborMaterial.indexOf("cokolwandstein") > -1 && (sFullPathToImage = "cokol/" + sClickedPodborPtrId.replace("_", "/") + "/" + tCokolColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol.cokolwandstein) > -1 ? (sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol").find("img").attr("src", sFullPathToImage), podbortypecokol.find(".framegrey").removeClass("active"), podbortypecokol.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tCokolTypeProfGreyId = "", tCokolTypePokrGreyId = "", tCokolTypeProfId = sClickedPodborPtrId, PrintTableParams("cokol")) : (podbortypecokol.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolTypeProfGreyId = sClickedPodborPtrId)));
                    break;
                case"pocvetu":
            }
            curvalueselprioritetvybora = r;
            break;
        case"-garage":
            var r = curvalueselprioritetvybora;
            switch (curvalueselprioritetvybora = "potipuprof", sActivePodborMaterial = tCokolGaragTypeProfId.substr(0, tCokolGaragTypeProfId.indexOf("_")), sClickedPodborMaterial = sClickedPodborPtrId.substr(0, sClickedPodborPtrId.indexOf("_")), curvalueselprioritetvybora) {
                case"potipuprof":
                    (sClickedPodborPtrId.indexOf("cokolmetal") > -1 || sClickedPodborPtrId.indexOf("cokolprofnastil") > -1) && (podborcolorwandstein.hide(), podborcolormetal.show(), tipcolortext.html("3. Выберите цвет"), podbortypepokr.show(), podborcolormetal.find(".overlayd").removeClass("active"), podbortypepokr.find(".overlayd").removeClass("active"), $.each(ar_typepokr, function (a, r) {
                        sFullPathToImage = "cokol/" + sClickedPodborPtrId.replace("_", "/") + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_typepokr.cokol) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }), (sActivePodborMaterial.indexOf("cokolmetal") > -1 || sActivePodborMaterial.indexOf("cokolprofnastil") > -1) && (sFullPathToImage = "cokol/" + sClickedPodborPtrId.replace("_", "/") + "/" + tCokolGaragTypePokrId + "/" + tCokolGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol[sClickedPodborMaterial]) > -1 ? (sFullPathToImage = "cokol-garage/" + sClickedPodborPtrId.replace("_", "/") + "/" + tCokolGaragTypePokrId + "/" + tCokolGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol-garage").find("img").attr("src", sFullPathToImage), podbortypecokol.find(".frame").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), a.find(".frame").addClass("active"), tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", tCokolGaragTypeProfId = sClickedPodborPtrId, PrintTableParams("cokol-garage"), $("#" + tCokolGaragTypePokrId).find(".frame").addClass("active"), $("#" + tCokolGaragColorId).find(".frame").addClass("active"), $("#" + tCokolGaragTypePokrId).trigger("click")) : (podbortypecokol.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolGaragTypeProfGreyId = sClickedPodborPtrId, sFullPathToImage = "cokol/" + sClickedPodborPtrId.replace("_", "/") + "/" + tCokolGaragTypePokrId, $.inArray(sFullPathToImage, ar_element_exist_typepokr.cokol) > -1 ? ($("#" + tCokolGaragTypePokrId).trigger("click"), podbortypepokr.find(".framegrey").removeClass("active"), tCokolGaragTypePokrGreyId = "", $("#" + tCokolGaragTypePokrId).find(".frame").addClass("active")) : (tCokolGaragTypePokrGreyId = "", podbortypepokr.find(".framegrey").removeClass("active"), $.each(ar_color.metal, function (a, r) {
                        $("#" + r).find(".overlayd").addClass("active")
                    })))), sActivePodborMaterial.indexOf("cokolwandstein") > -1 && (podbortypecokol.find(".framegrey").removeClass("active"), podbortypepokr.find(".framegrey").removeClass("active"), podbortypepokr.find(".frame").removeClass("active"), podborcolormetal.find(".frame").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolGaragTypeProfGreyId = sClickedPodborPtrId, tCokolGaragTypePokrGreyId = "poliester", $("#poliester").find(".framegrey").addClass("active"), tCokolGaragTypePokrId = "", $("#poliester").trigger("click"))), sClickedPodborPtrId.indexOf("cokolwandstein") > -1 && (podbortypepokr.hide(), podborcolormetal.hide(), podborcolorwandstein.show(), podborcolorwandstein.find(".overlayd").removeClass("active"), $.each(ar_color.wandstein, function (a, r) {
                        sFullPathToImage = "cokol/" + sClickedPodborPtrId.replace("_", "/") + "/" + r, $.inArray(sFullPathToImage, ar_element_exist_color_cokol.cokolwandstein) > -1 || $("#" + r).find(".overlayd").addClass("active")
                    }), (sActivePodborMaterial.indexOf("cokolmetal") > -1 || sActivePodborMaterial.indexOf("cokolprofnastil") > -1) && (podbortypecokol.find(".framegrey").removeClass("active"), podborcolorwandstein.find(".frame").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolGaragTypeProfGreyId = sClickedPodborPtrId, tipcolortext.html("2. Выберите цвет")), sActivePodborMaterial.indexOf("cokolwandstein") > -1 && (sFullPathToImage = "cokol/" + sClickedPodborPtrId.replace("_", "/") + "/" + tCokolGaragColorId, $.inArray(sFullPathToImage, ar_element_exist_color_cokol.cokolwandstein) > -1 ? (sFullPathToImage = "cokol-garage/" + sClickedPodborPtrId.replace("_", "/") + "/" + tCokolGaragColorId, sFullPathToImage = "img/doma/" + domnvidn + "/" + sFullPathToImage + ".png", $("#calc_cokol-garage").find("img").attr("src", sFullPathToImage), podbortypecokol.find(".framegrey").removeClass("active"), podbortypecokol.find(".frame").removeClass("active"), a.find(".frame").addClass("active"), tCokolGaragTypeProfGreyId = "", tCokolGaragTypePokrGreyId = "", tCokolGaragTypeProfId = sClickedPodborPtrId, PrintTableParams("cokol-garage")) : (podbortypecokol.find(".framegrey").removeClass("active"), a.find(".framegrey").addClass("active"), tCokolGaragTypeProfGreyId = sClickedPodborPtrId)));
                    break;
                case"pocvetu":
            }
            curvalueselprioritetvybora = r
    }
}
var columnmenu, columnpodbor, columnhome, columnparams, columndebug, menucell, podborselect, podbortypeprofil, podbortypekrovlya, podbortypepokr, podborcolor, podborcolormetal, podborcolorvinil, podborcolorbrick, podborcolorsofity, podborcolorwandstein, podbordomgarag, podborcolorkomposit, podborinfo, podborsettings, podborzabor, podborvodostok, podbortypecokol, podbordoborn, ptrelem, domnvidn, idselprioritetvybora, curvalueselprioritetvybora, domgarag = "", rowshablontop, rowshablonbottom, leftarr, rightarr, shdom, shablonrowleft, domchlist, dobornfasadauto, isdobornfasadauto, shablonNum, allimages, calc_krovlya, calc_krovlya_garage, calc_fasad_garage, calc_fasad, calc_cokol, calc_cokol_garage, calc_sofity, calc_vodostok, calc_nalichnik, calc_nalichnik_garage, calc_startplanka, calc_startplanka_garage, calc_konek, calc_konek_garage, calc_okna, calc_oknanalich, calc_krylco, calc_sneg, calc_vent, calc_zabor, calc_cvetnik, calc_ladder, calc_mostik, calc_chimney, calc_kol_chimney, calc_dob_chimney, calc_mansardokna, grandlineLogo, imgIshWidth = 1920, imgIshHeight = 1080, windowWidth, windowHeight, koefCurrentUm, pageItogoWidth, pageItogoHeight, saveimga, sFullPathToImage, firstclick = !1, saveimgapropusk = !0, ar_tcslist, tcslist_slidenum = 1, divminicount, onedivminwidth, hideinfoblock, skolkodivminvokne, rightforarr, ar_element_exist_color_fasad = {
    metal: ["fasad/metal/ecobrus/poliester/ral1014", "fasad/metal/ecobrus/poliester/ral1015", "fasad/metal/ecobrus/poliester/ral1018", "fasad/metal/ecobrus/poliester/ral3003", "fasad/metal/ecobrus/poliester/ral3005", "fasad/metal/ecobrus/poliester/ral3009", "fasad/metal/ecobrus/poliester/ral3011", "fasad/metal/ecobrus/poliester/ral5002", "fasad/metal/ecobrus/poliester/ral5005", "fasad/metal/ecobrus/poliester/ral5021", "fasad/metal/ecobrus/poliester/ral6002", "fasad/metal/ecobrus/poliester/ral6005", "fasad/metal/ecobrus/poliester/ral6019", "fasad/metal/ecobrus/poliester/ral6029", "fasad/metal/ecobrus/poliester/ral7004", "fasad/metal/ecobrus/poliester/ral7005", "fasad/metal/ecobrus/poliester/ral7024", "fasad/metal/ecobrus/poliester/ral8004", "fasad/metal/ecobrus/poliester/ral8017", "fasad/metal/ecobrus/poliester/ral9002", "fasad/metal/ecobrus/poliester/ral9003", "fasad/metal/ecobrus/poliester/ral9004", "fasad/metal/ecobrus/poliester/ral9006", "fasad/metal/ecobrus/poliester/rr11", "fasad/metal/ecobrus/poliester/rr32", "fasad/metal/ecobrus/granite/cuprumsteel", "fasad/metal/ecobrus/colorityprint/antiquedub", "fasad/metal/ecobrus/colorityprint/brazilv", "fasad/metal/ecobrus/colorityprint/kamen", "fasad/metal/ecobrus/colorityprint/kamenpes", "fasad/metal/ecobrus/colorityprint/korten", "fasad/metal/ecobrus/colorityprint/svetloederevo", "fasad/metal/ecobrus/quarzit30/ral7024", "fasad/metal/ecobrus/quarzit30/ral8017", "fasad/metal/ecobrus/quarzit30/ral3005", "fasad/metal/ecobrus/quarzit30/ral3009", "fasad/metal/ecobrus/quarzit30/ral3011", "fasad/metal/ecobrus/quarzit30/ral5005", "fasad/metal/ecobrus/quarzit30/ral6005", "fasad/metal/ecobrus/quarzit30/ral8004", "fasad/metal/ecobrus/quarzit30/ral8017", "fasad/metal/ecobrus/quarzit30/ral9005", "fasad/metal/ecobrus/quarzit30/rr11", "fasad/metal/ecobrus/quarzit30/rr32", "fasad/metal/ecobrus/quarzit35/ral3005", "fasad/metal/ecobrus/quarzit35/ral6005", "fasad/metal/ecobrus/quarzit35/ral7024", "fasad/metal/ecobrus/quarzit35/ral8004", "fasad/metal/ecobrus/quarzit35/rr32", "fasad/metal/ecobrus/quarzit35/ral8017", "fasad/metal/ecobrus/safari/blue", "fasad/metal/ecobrus/safari/brown", "fasad/metal/ecobrus/safari/green", "fasad/metal/ecobrus/safari/grey", "fasad/metal/ecobrus/safari/orange", "fasad/metal/ecobrus/safari/pink", "fasad/metal/ecobrus/solano/burano", "fasad/metal/ecobrus/solano/chocolatebrn", "fasad/metal/ecobrus/solano/junipergrn", "fasad/metal/blockhouse/granite/cuprumsteel", "fasad/metal/blockhouse/poliester/ral1014", "fasad/metal/blockhouse/poliester/ral1015", "fasad/metal/blockhouse/poliester/ral3003", "fasad/metal/blockhouse/poliester/ral3005", "fasad/metal/blockhouse/poliester/ral3009", "fasad/metal/blockhouse/poliester/ral3011", "fasad/metal/blockhouse/poliester/ral5002", "fasad/metal/blockhouse/poliester/ral5005", "fasad/metal/blockhouse/poliester/ral5021", "fasad/metal/blockhouse/poliester/ral6002", "fasad/metal/blockhouse/poliester/ral6005", "fasad/metal/blockhouse/poliester/ral6029", "fasad/metal/blockhouse/poliester/ral7004", "fasad/metal/blockhouse/poliester/ral7005", "fasad/metal/blockhouse/poliester/ral7024", "fasad/metal/blockhouse/poliester/ral8004", "fasad/metal/blockhouse/poliester/ral8017", "fasad/metal/blockhouse/poliester/ral9003", "fasad/metal/blockhouse/poliester/ral9004", "fasad/metal/blockhouse/poliester/ral9006", "fasad/metal/blockhouse/poliester/rr11", "fasad/metal/blockhouse/poliester/rr32", "fasad/metal/blockhouse/quarzit30/ral3005", "fasad/metal/blockhouse/quarzit30/ral3009", "fasad/metal/blockhouse/quarzit30/ral3011", "fasad/metal/blockhouse/quarzit30/ral5005", "fasad/metal/blockhouse/quarzit30/ral6005", "fasad/metal/blockhouse/quarzit30/ral7024", "fasad/metal/blockhouse/quarzit30/ral8004", "fasad/metal/blockhouse/quarzit30/ral8017", "fasad/metal/blockhouse/quarzit30/ral9005", "fasad/metal/blockhouse/quarzit30/rr11", "fasad/metal/blockhouse/quarzit30/rr32", "fasad/metal/blockhouse/quarzit35/ral3005", "fasad/metal/blockhouse/quarzit35/ral6005", "fasad/metal/blockhouse/quarzit35/ral7024", "fasad/metal/blockhouse/quarzit35/ral8004", "fasad/metal/blockhouse/quarzit35/ral8017", "fasad/metal/blockhouse/quarzit35/rr32", "fasad/metal/blockhouse/safari/blue", "fasad/metal/blockhouse/safari/brown", "fasad/metal/blockhouse/safari/green", "fasad/metal/blockhouse/safari/grey", "fasad/metal/blockhouse/safari/orange", "fasad/metal/blockhouse/safari/pink", "fasad/metal/blockhouse/colorityprint/antiquedub", "fasad/metal/blockhouse/colorityprint/brazilv", "fasad/metal/blockhouse/colorityprint/kamenpes", "fasad/metal/blockhouse/colorityprint/kamen", "fasad/metal/blockhouse/colorityprint/svetloederevo", "fasad/metal/korabel/granite/cuprumsteel", "fasad/metal/korabel/poliester/ral1014", "fasad/metal/korabel/poliester/ral1015", "fasad/metal/korabel/poliester/ral3003", "fasad/metal/korabel/poliester/ral3005", "fasad/metal/korabel/poliester/ral3009", "fasad/metal/korabel/poliester/ral3011", "fasad/metal/korabel/poliester/ral5002", "fasad/metal/korabel/poliester/ral5005", "fasad/metal/korabel/poliester/ral5021", "fasad/metal/korabel/poliester/ral6002", "fasad/metal/korabel/poliester/ral6005", "fasad/metal/korabel/poliester/ral6029", "fasad/metal/korabel/poliester/ral7004", "fasad/metal/korabel/poliester/ral7005", "fasad/metal/korabel/poliester/ral7024", "fasad/metal/korabel/poliester/ral8004", "fasad/metal/korabel/poliester/ral8017", "fasad/metal/korabel/poliester/ral9003", "fasad/metal/korabel/poliester/ral9004", "fasad/metal/korabel/poliester/ral9006", "fasad/metal/korabel/poliester/rr11", "fasad/metal/korabel/poliester/rr32", "fasad/metal/korabel/quarzit30/ral3005", "fasad/metal/korabel/quarzit30/ral3009", "fasad/metal/korabel/quarzit30/ral3011", "fasad/metal/korabel/quarzit30/ral5005", "fasad/metal/korabel/quarzit30/ral6005", "fasad/metal/korabel/quarzit30/ral7024", "fasad/metal/korabel/quarzit30/ral8004", "fasad/metal/korabel/quarzit30/ral8017", "fasad/metal/korabel/quarzit30/ral9005", "fasad/metal/korabel/quarzit30/rr11", "fasad/metal/korabel/quarzit30/rr32", "fasad/metal/korabel/quarzit35/ral3005", "fasad/metal/korabel/quarzit35/ral6005", "fasad/metal/korabel/quarzit35/ral7024", "fasad/metal/korabel/quarzit35/ral8004", "fasad/metal/korabel/quarzit35/ral8017", "fasad/metal/korabel/quarzit35/rr32", "fasad/metal/korabel/solano/burano", "fasad/metal/korabel/solano/chocolatebrn", "fasad/metal/korabel/solano/junipergrn", "fasad/metal/korabel/colorityprint/antiquedub", "fasad/metal/korabel/colorityprint/brazilv", "fasad/metal/korabel/colorityprint/kamenpes", "fasad/metal/korabel/colorityprint/kamen", "fasad/metal/korabel/colorityprint/svetloederevo", "fasad/metal/vertical/granite/cuprumsteel", "fasad/metal/vertical/poliester/ral1014", "fasad/metal/vertical/poliester/ral1015", "fasad/metal/vertical/poliester/ral1018", "fasad/metal/vertical/poliester/ral3003", "fasad/metal/vertical/poliester/ral3005", "fasad/metal/vertical/poliester/ral3009", "fasad/metal/vertical/poliester/ral3011", "fasad/metal/vertical/poliester/ral5002", "fasad/metal/vertical/poliester/ral5005", "fasad/metal/vertical/poliester/ral5021", "fasad/metal/vertical/poliester/ral5024", "fasad/metal/vertical/poliester/ral6002", "fasad/metal/vertical/poliester/ral6005", "fasad/metal/vertical/poliester/ral6019", "fasad/metal/vertical/poliester/ral6029", "fasad/metal/vertical/poliester/ral7004", "fasad/metal/vertical/poliester/ral7005", "fasad/metal/vertical/poliester/ral7024", "fasad/metal/vertical/poliester/ral8004", "fasad/metal/vertical/poliester/ral8017", "fasad/metal/vertical/poliester/ral9002", "fasad/metal/vertical/poliester/ral9003", "fasad/metal/vertical/poliester/ral9004", "fasad/metal/vertical/poliester/ral9006", "fasad/metal/vertical/poliester/rr11", "fasad/metal/vertical/poliester/rr32", "fasad/metal/vertical/quarzit30/ral3005", "fasad/metal/vertical/quarzit30/ral3009", "fasad/metal/vertical/quarzit30/ral3011", "fasad/metal/vertical/quarzit30/ral5005", "fasad/metal/vertical/quarzit30/ral6005", "fasad/metal/vertical/quarzit30/ral7024", "fasad/metal/vertical/quarzit30/ral8004", "fasad/metal/vertical/quarzit30/ral8017", "fasad/metal/vertical/quarzit30/ral9005", "fasad/metal/vertical/quarzit30/rr11", "fasad/metal/vertical/quarzit30/rr32", "fasad/metal/vertical/quarzit35/ral3005", "fasad/metal/vertical/quarzit35/ral6005", "fasad/metal/vertical/quarzit35/ral7024", "fasad/metal/vertical/quarzit35/ral8004", "fasad/metal/vertical/quarzit35/ral8017", "fasad/metal/vertical/quarzit35/rr32", "fasad/metal/vertical/safari/blue", "fasad/metal/vertical/safari/brown", "fasad/metal/vertical/safari/green", "fasad/metal/vertical/safari/grey", "fasad/metal/vertical/safari/orange", "fasad/metal/vertical/safari/pink", "fasad/metal/vertical/solano/burano", "fasad/metal/vertical/solano/chocolatebrn", "fasad/metal/vertical/solano/junipergrn", "fasad/metal/vertical/colorityprint/antiquedub", "fasad/metal/vertical/colorityprint/brazilv", "fasad/metal/vertical/colorityprint/kamenpes", "fasad/metal/vertical/colorityprint/kamen", "fasad/metal/vertical/colorityprint/svetloederevo"],
    vinil: ["fasad/vinil/blockhouse/bezh", "fasad/vinil/blockhouse/karamel", "fasad/vinil/blockhouse/morendub", "fasad/vinil/blockhouse/temnbezh", "fasad/vinil/blockhouse/vanil", "fasad/vinil/blockhouse/vtemndub", "fasad/vinil/d4/bel", "fasad/vinil/d4/bezh", "fasad/vinil/d4/crem", "fasad/vinil/d4/karamel", "fasad/vinil/d4/morendub", "fasad/vinil/d4/pers", "fasad/vinil/d4/temnbezh", "fasad/vinil/d4/vanil", "fasad/vinil/d4/vblue", "fasad/vinil/d4/vgreen", "fasad/vinil/d4/vgrey", "fasad/vinil/d4/vyellow", "fasad/vinil/d4/vgoldpes", "fasad/vinil/d4/vtemndub", "fasad/vinil/vertical/bel", "fasad/vinil/vertical/bezh", "fasad/vinil/vertical/vanil", "fasad/vinil/vertical/vgreen", "fasad/vinil/d44/bel", "fasad/vinil/d44/bezh", "fasad/vinil/d44/crem", "fasad/vinil/d44/karamel", "fasad/vinil/d44/morendub", "fasad/vinil/d44/pers", "fasad/vinil/d44/temnbezh", "fasad/vinil/d44/vanil", "fasad/vinil/d44/vblue", "fasad/vinil/d44/vgreen", "fasad/vinil/d44/vgrey", "fasad/vinil/d44/vyellow", "fasad/vinil/d44/vgoldpes", "fasad/vinil/d44/vtemndub"],
    brick: ["fasad/brick/norm/brwhi", "fasad/brick/norm/brrbro", "fasad/brick/norm/bryell", "fasad/brick/norm/ifasad"]
}, ar_element_exist_color_krovlya = {
    metal: ["krovlya/metal/kvinta/colorityprint/antiquedub", "krovlya/metal/kvinta/colorityprint/brazilv", "krovlya/metal/kvinta/colorityprint/kamen", "krovlya/metal/kvinta/colorityprint/kamenpes", "krovlya/metal/kvinta/colorityprint/korten", "krovlya/metal/kvinta/colorityprint/svetloederevo", "krovlya/metal/kvinta/granite/cuprumsteel", "krovlya/metal/kvinta/poliester/ral1014", "krovlya/metal/kvinta/poliester/ral1015", "krovlya/metal/kvinta/poliester/ral1018", "krovlya/metal/kvinta/poliester/ral3003", "krovlya/metal/kvinta/poliester/ral3005", "krovlya/metal/kvinta/poliester/ral3009", "krovlya/metal/kvinta/poliester/ral3011", "krovlya/metal/kvinta/poliester/ral5002", "krovlya/metal/kvinta/poliester/ral5005", "krovlya/metal/kvinta/poliester/ral5021", "krovlya/metal/kvinta/poliester/ral6002", "krovlya/metal/kvinta/poliester/ral6005", "krovlya/metal/kvinta/poliester/ral6019", "krovlya/metal/kvinta/poliester/ral6029", "krovlya/metal/kvinta/poliester/ral7004", "krovlya/metal/kvinta/poliester/ral7005", "krovlya/metal/kvinta/poliester/ral7024", "krovlya/metal/kvinta/poliester/ral8004", "krovlya/metal/kvinta/poliester/ral8017", "krovlya/metal/kvinta/poliester/ral9002", "krovlya/metal/kvinta/poliester/ral9003", "krovlya/metal/kvinta/poliester/ral9004", "krovlya/metal/kvinta/poliester/ral9006", "krovlya/metal/kvinta/poliester/rr11", "krovlya/metal/kvinta/poliester/rr32", "krovlya/metal/kvinta/quarzit30/ral3005", "krovlya/metal/kvinta/quarzit30/ral3011", "krovlya/metal/kvinta/quarzit30/ral7024", "krovlya/metal/kvinta/quarzit30/ral8017", "krovlya/metal/kvinta/quarzit30/rr32", "krovlya/metal/kvinta/quarzit30/ral3009", "krovlya/metal/kvinta/quarzit30/ral5005", "krovlya/metal/kvinta/quarzit30/ral6005", "krovlya/metal/kvinta/quarzit30/ral8004", "krovlya/metal/kvinta/quarzit30/ral9005", "krovlya/metal/kvinta/quarzit30/rr11", "krovlya/metal/kvinta/quarzit35/ral3005", "krovlya/metal/kvinta/quarzit35/ral6005", "krovlya/metal/kvinta/quarzit35/ral7024", "krovlya/metal/kvinta/quarzit35/ral8004", "krovlya/metal/kvinta/quarzit35/ral8017", "krovlya/metal/kvinta/quarzit35/rr32", "krovlya/metal/kvinta/safari/blue", "krovlya/metal/kvinta/safari/brown", "krovlya/metal/kvinta/safari/green", "krovlya/metal/kvinta/safari/grey", "krovlya/metal/kvinta/safari/orange", "krovlya/metal/kvinta/safari/pink", "krovlya/metal/kvinta/solano/burano", "krovlya/metal/kvinta/solano/chocolatebrn", "krovlya/metal/kvinta/solano/junipergrn", "krovlya/metal/kvinta/velur/ral3005", "krovlya/metal/kvinta/velur/ral3009", "krovlya/metal/kvinta/velur/ral3011", "krovlya/metal/kvinta/velur/ral5005", "krovlya/metal/kvinta/velur/ral6005", "krovlya/metal/kvinta/velur/ral6020", "krovlya/metal/kvinta/velur/ral7024", "krovlya/metal/kvinta/velur/ral8004", "krovlya/metal/kvinta/velur/ral8017", "krovlya/metal/kvinta/velur/ral9005", "krovlya/metal/kvinta/velur/rr32", "krovlya/metal/classic/granite/cuprumsteel", "krovlya/metal/classic/poliester/ral1014", "krovlya/metal/classic/poliester/ral1015", "krovlya/metal/classic/poliester/ral1018", "krovlya/metal/classic/poliester/ral3003", "krovlya/metal/classic/poliester/ral3005", "krovlya/metal/classic/poliester/ral3009", "krovlya/metal/classic/poliester/ral3011", "krovlya/metal/classic/poliester/ral5002", "krovlya/metal/classic/poliester/ral5005", "krovlya/metal/classic/poliester/ral5021", "krovlya/metal/classic/poliester/ral6002", "krovlya/metal/classic/poliester/ral6005", "krovlya/metal/classic/poliester/ral6019", "krovlya/metal/classic/poliester/ral6029", "krovlya/metal/classic/poliester/ral7004", "krovlya/metal/classic/poliester/ral7005", "krovlya/metal/classic/poliester/ral7024", "krovlya/metal/classic/poliester/ral8004", "krovlya/metal/classic/poliester/ral8017", "krovlya/metal/classic/poliester/ral9002", "krovlya/metal/classic/poliester/ral9003", "krovlya/metal/classic/poliester/ral9004", "krovlya/metal/classic/poliester/ral9006", "krovlya/metal/classic/poliester/rr11", "krovlya/metal/classic/poliester/rr32", "krovlya/metal/classic/quarzit30/ral7024", "krovlya/metal/classic/quarzit30/ral8017", "krovlya/metal/classic/quarzit30/ral3005", "krovlya/metal/classic/quarzit30/ral3009", "krovlya/metal/classic/quarzit30/ral3011", "krovlya/metal/classic/quarzit30/ral5005", "krovlya/metal/classic/quarzit30/ral6005", "krovlya/metal/classic/quarzit30/ral8004", "krovlya/metal/classic/quarzit30/rr32", "krovlya/metal/classic/quarzit30/ral9005", "krovlya/metal/classic/quarzit30/rr11", "krovlya/metal/classic/quarzit35/ral3005", "krovlya/metal/classic/quarzit35/ral6005", "krovlya/metal/classic/quarzit35/ral7024", "krovlya/metal/classic/quarzit35/ral8004", "krovlya/metal/classic/quarzit35/ral8017", "krovlya/metal/classic/quarzit35/rr32", "krovlya/metal/classic/safari/blue", "krovlya/metal/classic/safari/brown", "krovlya/metal/classic/safari/green", "krovlya/metal/classic/safari/grey", "krovlya/metal/classic/safari/orange", "krovlya/metal/classic/safari/pink", "krovlya/metal/classic/solano/burano", "krovlya/metal/classic/solano/chocolatebrn", "krovlya/metal/classic/solano/junipergrn", "krovlya/metal/classic/velur/ral3005", "krovlya/metal/classic/velur/ral3009", "krovlya/metal/classic/velur/ral5005", "krovlya/metal/classic/velur/ral6005", "krovlya/metal/classic/velur/ral6020", "krovlya/metal/classic/velur/ral7024", "krovlya/metal/classic/velur/ral8004", "krovlya/metal/classic/velur/ral8017", "krovlya/metal/classic/velur/ral9005", "krovlya/metal/classic/velur/rr32", "krovlya/metal/classic/colorityprint/antiquedub", "krovlya/metal/classic/colorityprint/brazilv", "krovlya/metal/classic/colorityprint/kamen", "krovlya/metal/classic/colorityprint/kamenpes", "krovlya/metal/classic/colorityprint/svetloederevo", "krovlya/metal/country/poliester/ral1014", "krovlya/metal/country/poliester/ral1015", "krovlya/metal/country/poliester/ral1018", "krovlya/metal/country/poliester/ral3003", "krovlya/metal/country/poliester/ral3005", "krovlya/metal/country/poliester/ral3009", "krovlya/metal/country/poliester/ral3011", "krovlya/metal/country/poliester/ral5002", "krovlya/metal/country/poliester/ral5005", "krovlya/metal/country/poliester/ral5021", "krovlya/metal/country/poliester/ral6002", "krovlya/metal/country/poliester/ral6005", "krovlya/metal/country/poliester/ral6019", "krovlya/metal/country/poliester/ral6029", "krovlya/metal/country/poliester/ral7004", "krovlya/metal/country/poliester/ral7005", "krovlya/metal/country/poliester/ral7024", "krovlya/metal/country/poliester/ral8004", "krovlya/metal/country/poliester/ral8017", "krovlya/metal/country/poliester/ral9002", "krovlya/metal/country/poliester/ral9003", "krovlya/metal/country/poliester/ral9004", "krovlya/metal/country/poliester/ral9006", "krovlya/metal/country/poliester/rr11", "krovlya/metal/country/poliester/rr32", "krovlya/metal/country/safari/blue", "krovlya/metal/country/safari/brown", "krovlya/metal/country/safari/green", "krovlya/metal/country/safari/grey", "krovlya/metal/country/safari/orange", "krovlya/metal/country/safari/pink", "krovlya/metal/country/colorityprint/antiquedub", "krovlya/metal/country/colorityprint/brazilv", "krovlya/metal/country/colorityprint/kamen", "krovlya/metal/country/colorityprint/kamenpes", "krovlya/metal/country/colorityprint/svetloederevo", "krovlya/metal/country/granite/cuprumsteel", "krovlya/metal/country/quarzit30/ral3005", "krovlya/metal/country/quarzit30/ral3009", "krovlya/metal/country/quarzit30/ral3011", "krovlya/metal/country/quarzit30/ral5005", "krovlya/metal/country/quarzit30/ral6005", "krovlya/metal/country/quarzit30/ral7024", "krovlya/metal/country/quarzit30/ral8004", "krovlya/metal/country/quarzit30/ral8017", "krovlya/metal/country/quarzit30/ral9005", "krovlya/metal/country/quarzit30/rr11", "krovlya/metal/country/quarzit30/rr32", "krovlya/metal/country/quarzit35/ral3005", "krovlya/metal/country/quarzit35/ral6005", "krovlya/metal/country/quarzit35/ral7024", "krovlya/metal/country/quarzit35/ral8004", "krovlya/metal/country/quarzit35/ral8017", "krovlya/metal/country/quarzit35/ral8019", "krovlya/metal/country/quarzit35/rr32", "krovlya/metal/country/velur/ral3005", "krovlya/metal/country/velur/ral3009", "krovlya/metal/country/velur/ral3011", "krovlya/metal/country/velur/ral5001", "krovlya/metal/country/velur/ral5005", "krovlya/metal/country/velur/ral6005", "krovlya/metal/country/velur/ral6020", "krovlya/metal/country/velur/ral7024", "krovlya/metal/country/velur/ral8004", "krovlya/metal/country/velur/ral8017", "krovlya/metal/country/velur/ral9005", "krovlya/metal/country/velur/rr32", "krovlya/metal/quadroprofi/granite/cuprumsteel", "krovlya/metal/quadroprofi/poliester/ral1014", "krovlya/metal/quadroprofi/poliester/ral1015", "krovlya/metal/quadroprofi/poliester/ral1018", "krovlya/metal/quadroprofi/poliester/ral3003", "krovlya/metal/quadroprofi/poliester/ral3005", "krovlya/metal/quadroprofi/poliester/ral3009", "krovlya/metal/quadroprofi/poliester/ral3011", "krovlya/metal/quadroprofi/poliester/ral5002", "krovlya/metal/quadroprofi/poliester/ral5005", "krovlya/metal/quadroprofi/poliester/ral5021", "krovlya/metal/quadroprofi/poliester/ral5024", "krovlya/metal/quadroprofi/poliester/ral6002", "krovlya/metal/quadroprofi/poliester/ral6005", "krovlya/metal/quadroprofi/poliester/ral6019", "krovlya/metal/quadroprofi/poliester/ral6029", "krovlya/metal/quadroprofi/poliester/ral7004", "krovlya/metal/quadroprofi/poliester/ral7005", "krovlya/metal/quadroprofi/poliester/ral7024", "krovlya/metal/quadroprofi/poliester/ral8004", "krovlya/metal/quadroprofi/poliester/ral8017", "krovlya/metal/quadroprofi/poliester/ral9002", "krovlya/metal/quadroprofi/poliester/ral9003", "krovlya/metal/quadroprofi/poliester/ral9004", "krovlya/metal/quadroprofi/poliester/ral9006", "krovlya/metal/quadroprofi/poliester/rr32", "krovlya/metal/quadroprofi/quarzit30/ral3005", "krovlya/metal/quadroprofi/quarzit30/ral3009", "krovlya/metal/quadroprofi/quarzit30/ral3011", "krovlya/metal/quadroprofi/quarzit30/ral5005", "krovlya/metal/quadroprofi/quarzit30/ral6005", "krovlya/metal/quadroprofi/quarzit30/ral7024", "krovlya/metal/quadroprofi/quarzit30/ral8004", "krovlya/metal/quadroprofi/quarzit30/ral8017", "krovlya/metal/quadroprofi/quarzit30/ral8019", "krovlya/metal/quadroprofi/quarzit30/ral9005", "krovlya/metal/quadroprofi/quarzit30/rr11", "krovlya/metal/quadroprofi/quarzit30/rr32", "krovlya/metal/quadroprofi/quarzit35/ral3005", "krovlya/metal/quadroprofi/quarzit35/ral6005", "krovlya/metal/quadroprofi/quarzit35/ral7024", "krovlya/metal/quadroprofi/quarzit35/ral8004", "krovlya/metal/quadroprofi/quarzit35/ral8017", "krovlya/metal/quadroprofi/quarzit35/ral8019", "krovlya/metal/quadroprofi/quarzit35/rr32", "krovlya/metal/quadroprofi/safari/blue", "krovlya/metal/quadroprofi/safari/brown", "krovlya/metal/quadroprofi/safari/green", "krovlya/metal/quadroprofi/safari/grey", "krovlya/metal/quadroprofi/safari/orange", "krovlya/metal/quadroprofi/safari/pink", "krovlya/metal/quadroprofi/solano/burano", "krovlya/metal/quadroprofi/solano/chocolatebrn", "krovlya/metal/quadroprofi/solano/junipergrn", "krovlya/metal/quadroprofi/velur/ral3005", "krovlya/metal/quadroprofi/velur/ral3009", "krovlya/metal/quadroprofi/velur/ral3011", "krovlya/metal/quadroprofi/velur/ral5001", "krovlya/metal/quadroprofi/velur/ral5005", "krovlya/metal/quadroprofi/velur/ral6005", "krovlya/metal/quadroprofi/velur/ral6020", "krovlya/metal/quadroprofi/velur/ral7024", "krovlya/metal/quadroprofi/velur/ral8004", "krovlya/metal/quadroprofi/velur/ral8017", "krovlya/metal/quadroprofi/velur/ral8019", "krovlya/metal/quadroprofi/velur/ral9005", "krovlya/metal/quadroprofi/velur/rr32", "krovlya/metal/quadroprofi/colorityprint/antiquedub", "krovlya/metal/quadroprofi/colorityprint/brazilv", "krovlya/metal/quadroprofi/colorityprint/kamen", "krovlya/metal/quadroprofi/colorityprint/kamenpes", "krovlya/metal/quadroprofi/colorityprint/korten", "krovlya/metal/quadroprofi/colorityprint/svetloederevo"],
    falcevaya: ["krovlya/falcevaya/klickfalc/colorityprint/antiquedub", "krovlya/falcevaya/klickfalc/colorityprint/brazilv", "krovlya/falcevaya/klickfalc/colorityprint/kamen", "krovlya/falcevaya/klickfalc/colorityprint/kamenpes", "krovlya/falcevaya/klickfalc/colorityprint/korten", "krovlya/falcevaya/klickfalc/colorityprint/svetloederevo", "krovlya/falcevaya/klickfalc/granite/cuprumsteel", "krovlya/falcevaya/klickfalc/poliester/ral1014", "krovlya/falcevaya/klickfalc/poliester/ral1015", "krovlya/falcevaya/klickfalc/poliester/ral1018", "krovlya/falcevaya/klickfalc/poliester/ral3003", "krovlya/falcevaya/klickfalc/poliester/ral3005", "krovlya/falcevaya/klickfalc/poliester/ral3009", "krovlya/falcevaya/klickfalc/poliester/ral3011", "krovlya/falcevaya/klickfalc/poliester/ral5002", "krovlya/falcevaya/klickfalc/poliester/ral5005", "krovlya/falcevaya/klickfalc/poliester/ral5021", "krovlya/falcevaya/klickfalc/poliester/ral6002", "krovlya/falcevaya/klickfalc/poliester/ral6005", "krovlya/falcevaya/klickfalc/poliester/ral6019", "krovlya/falcevaya/klickfalc/poliester/ral6029", "krovlya/falcevaya/klickfalc/poliester/ral7004", "krovlya/falcevaya/klickfalc/poliester/ral7005", "krovlya/falcevaya/klickfalc/poliester/ral7024", "krovlya/falcevaya/klickfalc/poliester/ral8004", "krovlya/falcevaya/klickfalc/poliester/ral8017", "krovlya/falcevaya/klickfalc/poliester/ral9002", "krovlya/falcevaya/klickfalc/poliester/ral9003", "krovlya/falcevaya/klickfalc/poliester/ral9004", "krovlya/falcevaya/klickfalc/poliester/ral9006", "krovlya/falcevaya/klickfalc/poliester/rr11", "krovlya/falcevaya/klickfalc/poliester/rr32", "krovlya/falcevaya/klickfalc/quarzit30/ral3005", "krovlya/falcevaya/klickfalc/quarzit30/ral3011", "krovlya/falcevaya/klickfalc/quarzit30/ral7024", "krovlya/falcevaya/klickfalc/quarzit30/ral8017", "krovlya/falcevaya/klickfalc/quarzit30/rr32", "krovlya/falcevaya/klickfalc/quarzit30/ral3009", "krovlya/falcevaya/klickfalc/quarzit30/ral5005", "krovlya/falcevaya/klickfalc/quarzit30/ral6005", "krovlya/falcevaya/klickfalc/quarzit30/rr11", "krovlya/falcevaya/klickfalc/quarzit30/ral8004", "krovlya/falcevaya/klickfalc/quarzit30/ral9005", "krovlya/falcevaya/klickfalc/quarzit35/ral3005", "krovlya/falcevaya/klickfalc/quarzit35/ral6005", "krovlya/falcevaya/klickfalc/quarzit35/ral7024", "krovlya/falcevaya/klickfalc/quarzit35/ral8004", "krovlya/falcevaya/klickfalc/quarzit35/ral8017", "krovlya/falcevaya/klickfalc/quarzit35/rr32", "krovlya/falcevaya/klickfalc/safari/blue", "krovlya/falcevaya/klickfalc/safari/brown", "krovlya/falcevaya/klickfalc/safari/green", "krovlya/falcevaya/klickfalc/safari/grey", "krovlya/falcevaya/klickfalc/safari/orange", "krovlya/falcevaya/klickfalc/safari/pink", "krovlya/falcevaya/klickfalc/solano/burano", "krovlya/falcevaya/klickfalc/solano/chocolatebrn", "krovlya/falcevaya/klickfalc/solano/junipergrn", "krovlya/falcevaya/klickfalc/velur/ral3005", "krovlya/falcevaya/klickfalc/velur/ral3009", "krovlya/falcevaya/klickfalc/velur/ral5005", "krovlya/falcevaya/klickfalc/velur/ral6005", "krovlya/falcevaya/klickfalc/velur/ral6020", "krovlya/falcevaya/klickfalc/velur/ral7024", "krovlya/falcevaya/klickfalc/velur/ral8004", "krovlya/falcevaya/klickfalc/velur/ral8017", "krovlya/falcevaya/klickfalc/velur/ral9005", "krovlya/falcevaya/klickfalc/velur/rr32", "krovlya/falcevaya/klickfalc/velur/ral3011"],
    profnastil: ["krovlya/profnastil/10r/granite/cuprumsteel", "krovlya/profnastil/10r/poliester/ral1014", "krovlya/profnastil/10r/poliester/ral1015", "krovlya/profnastil/10r/poliester/ral1018", "krovlya/profnastil/10r/poliester/ral3003", "krovlya/profnastil/10r/poliester/ral3005", "krovlya/profnastil/10r/poliester/ral3009", "krovlya/profnastil/10r/poliester/ral3011", "krovlya/profnastil/10r/poliester/ral5002", "krovlya/profnastil/10r/poliester/ral5005", "krovlya/profnastil/10r/poliester/ral5021", "krovlya/profnastil/10r/poliester/ral5024", "krovlya/profnastil/10r/poliester/ral6002", "krovlya/profnastil/10r/poliester/ral6005", "krovlya/profnastil/10r/poliester/ral6019", "krovlya/profnastil/10r/poliester/ral6029", "krovlya/profnastil/10r/poliester/ral7004", "krovlya/profnastil/10r/poliester/ral7005", "krovlya/profnastil/10r/poliester/ral7024", "krovlya/profnastil/10r/poliester/ral8004", "krovlya/profnastil/10r/poliester/ral8017", "krovlya/profnastil/10r/poliester/ral9002", "krovlya/profnastil/10r/poliester/ral9003", "krovlya/profnastil/10r/poliester/ral9004", "krovlya/profnastil/10r/poliester/ral9006", "krovlya/profnastil/10r/poliester/rr11", "krovlya/profnastil/10r/poliester/rr32", "krovlya/profnastil/10r/quarzit30/ral3005", "krovlya/profnastil/10r/quarzit30/ral3009", "krovlya/profnastil/10r/quarzit30/ral3011", "krovlya/profnastil/10r/quarzit30/ral5005", "krovlya/profnastil/10r/quarzit30/ral6005", "krovlya/profnastil/10r/quarzit30/ral7024", "krovlya/profnastil/10r/quarzit30/ral8004", "krovlya/profnastil/10r/quarzit30/ral8017", "krovlya/profnastil/10r/quarzit30/ral9005", "krovlya/profnastil/10r/quarzit30/rr11", "krovlya/profnastil/10r/quarzit30/rr32", "krovlya/profnastil/10r/quarzit35/ral3005", "krovlya/profnastil/10r/quarzit35/ral6005", "krovlya/profnastil/10r/quarzit35/ral7024", "krovlya/profnastil/10r/quarzit35/ral8004", "krovlya/profnastil/10r/quarzit35/ral8017", "krovlya/profnastil/10r/quarzit35/rr32", "krovlya/profnastil/10r/solano/burano", "krovlya/profnastil/10r/solano/chocolatebrn", "krovlya/profnastil/10r/solano/junipergrn", "krovlya/profnastil/10r/velur35/ral8017", "krovlya/profnastil/10r/colorityprint/antiquedub", "krovlya/profnastil/10r/colorityprint/brazilv", "krovlya/profnastil/10r/colorityprint/kamen", "krovlya/profnastil/10r/colorityprint/kamenpes", "krovlya/profnastil/10r/colorityprint/svetloederevo", "krovlya/profnastil/10r/safari/blue", "krovlya/profnastil/10r/safari/brown", "krovlya/profnastil/10r/safari/green", "krovlya/profnastil/10r/safari/grey", "krovlya/profnastil/10r/safari/orange", "krovlya/profnastil/10r/safari/pink", "krovlya/profnastil/10r/velur/ral3005", "krovlya/profnastil/10r/velur/ral3009", "krovlya/profnastil/10r/velur/ral3011", "krovlya/profnastil/10r/velur/ral5001", "krovlya/profnastil/10r/velur/ral5005", "krovlya/profnastil/10r/velur/ral6005", "krovlya/profnastil/10r/velur/ral6020", "krovlya/profnastil/10r/velur/ral7024", "krovlya/profnastil/10r/velur/ral8004", "krovlya/profnastil/10r/velur/ral8017", "krovlya/profnastil/10r/velur/ral9005", "krovlya/profnastil/10r/velur/rr32", "krovlya/profnastil/20r/granite/cuprumsteel", "krovlya/profnastil/20r/poliester/ral1014", "krovlya/profnastil/20r/poliester/ral1015", "krovlya/profnastil/20r/poliester/ral1018", "krovlya/profnastil/20r/poliester/ral3003", "krovlya/profnastil/20r/poliester/ral3005", "krovlya/profnastil/20r/poliester/ral3009", "krovlya/profnastil/20r/poliester/ral3011", "krovlya/profnastil/20r/poliester/ral5002", "krovlya/profnastil/20r/poliester/ral5005", "krovlya/profnastil/20r/poliester/ral5021", "krovlya/profnastil/20r/poliester/ral5024", "krovlya/profnastil/20r/poliester/ral6002", "krovlya/profnastil/20r/poliester/ral6005", "krovlya/profnastil/20r/poliester/ral6019", "krovlya/profnastil/20r/poliester/ral6029", "krovlya/profnastil/20r/poliester/ral7004", "krovlya/profnastil/20r/poliester/ral7005", "krovlya/profnastil/20r/poliester/ral7024", "krovlya/profnastil/20r/poliester/ral8004", "krovlya/profnastil/20r/poliester/ral8017", "krovlya/profnastil/20r/poliester/ral9002", "krovlya/profnastil/20r/poliester/ral9003", "krovlya/profnastil/20r/poliester/ral9004", "krovlya/profnastil/20r/poliester/ral9006", "krovlya/profnastil/20r/poliester/rr11", "krovlya/profnastil/20r/poliester/rr32", "krovlya/profnastil/20r/quarzit30/ral3005", "krovlya/profnastil/20r/quarzit30/ral3009", "krovlya/profnastil/20r/quarzit30/ral3011", "krovlya/profnastil/20r/quarzit30/ral5005", "krovlya/profnastil/20r/quarzit30/ral6005", "krovlya/profnastil/20r/quarzit30/ral7024", "krovlya/profnastil/20r/quarzit30/ral8004", "krovlya/profnastil/20r/quarzit30/ral8017", "krovlya/profnastil/20r/quarzit30/ral9005", "krovlya/profnastil/20r/quarzit30/rr11", "krovlya/profnastil/20r/quarzit30/rr32", "krovlya/profnastil/20r/quarzit35/ral3005", "krovlya/profnastil/20r/quarzit35/ral6005", "krovlya/profnastil/20r/quarzit35/ral7024", "krovlya/profnastil/20r/quarzit35/ral8004", "krovlya/profnastil/20r/quarzit35/ral8017", "krovlya/profnastil/20r/quarzit35/rr32", "krovlya/profnastil/20r/solano/burano", "krovlya/profnastil/20r/solano/chocolatebrn", "krovlya/profnastil/20r/solano/junipergrn", "krovlya/profnastil/20r/velur/ral3005", "krovlya/profnastil/20r/velur/ral3009", "krovlya/profnastil/20r/velur/ral3011", "krovlya/profnastil/20r/velur/ral5001", "krovlya/profnastil/20r/velur/ral5005", "krovlya/profnastil/20r/velur/ral6005", "krovlya/profnastil/20r/velur/ral6020", "krovlya/profnastil/20r/velur/ral7024", "krovlya/profnastil/20r/velur/ral8004", "krovlya/profnastil/20r/velur/ral8017", "krovlya/profnastil/20r/velur/ral9005", "krovlya/profnastil/20r/velur/rr32", "krovlya/profnastil/20r/colorityprint/svetloederevo", "krovlya/profnastil/20r/colorityprint/kamenpes", "krovlya/profnastil/20r/colorityprint/antiquedub", "krovlya/profnastil/20r/colorityprint/brazilv", "krovlya/profnastil/20r/colorityprint/kamen", "krovlya/profnastil/20r/safari/pink", "krovlya/profnastil/20r/safari/orange", "krovlya/profnastil/20r/safari/grey", "krovlya/profnastil/20r/safari/green", "krovlya/profnastil/20r/safari/brown", "krovlya/profnastil/20r/safari/blue", "krovlya/profnastil/21r/granite/cuprumsteel", "krovlya/profnastil/21r/poliester/ral1014", "krovlya/profnastil/21r/poliester/ral1015", "krovlya/profnastil/21r/poliester/ral1018", "krovlya/profnastil/21r/poliester/ral3003", "krovlya/profnastil/21r/poliester/ral3005", "krovlya/profnastil/21r/poliester/ral3009", "krovlya/profnastil/21r/poliester/ral3011", "krovlya/profnastil/21r/poliester/ral5002", "krovlya/profnastil/21r/poliester/ral5005", "krovlya/profnastil/21r/poliester/ral5021", "krovlya/profnastil/21r/poliester/ral5024", "krovlya/profnastil/21r/poliester/ral6002", "krovlya/profnastil/21r/poliester/ral6005", "krovlya/profnastil/21r/poliester/ral6019", "krovlya/profnastil/21r/poliester/ral6029", "krovlya/profnastil/21r/poliester/ral7004", "krovlya/profnastil/21r/poliester/ral7005", "krovlya/profnastil/21r/poliester/ral7024", "krovlya/profnastil/21r/poliester/ral8004", "krovlya/profnastil/21r/poliester/ral8017", "krovlya/profnastil/21r/poliester/ral9002", "krovlya/profnastil/21r/poliester/ral9003", "krovlya/profnastil/21r/poliester/ral9004", "krovlya/profnastil/21r/poliester/ral9006", "krovlya/profnastil/21r/poliester/rr11", "krovlya/profnastil/21r/poliester/rr32", "krovlya/profnastil/21r/quarzit30/ral3005", "krovlya/profnastil/21r/quarzit30/ral3009", "krovlya/profnastil/21r/quarzit30/ral3011", "krovlya/profnastil/21r/quarzit30/ral5005", "krovlya/profnastil/21r/quarzit30/ral6005", "krovlya/profnastil/21r/quarzit30/ral7024", "krovlya/profnastil/21r/quarzit30/ral8004", "krovlya/profnastil/21r/quarzit30/ral8017", "krovlya/profnastil/21r/quarzit30/ral9005", "krovlya/profnastil/21r/quarzit30/rr11", "krovlya/profnastil/21r/quarzit30/rr32", "krovlya/profnastil/21r/quarzit35/ral3005", "krovlya/profnastil/21r/quarzit35/ral6005", "krovlya/profnastil/21r/quarzit35/ral7024", "krovlya/profnastil/21r/quarzit35/ral8004", "krovlya/profnastil/21r/quarzit35/ral8017", "krovlya/profnastil/21r/quarzit35/rr32", "krovlya/profnastil/21r/solano/burano", "krovlya/profnastil/21r/solano/chocolatebrn", "krovlya/profnastil/21r/solano/junipergrn", "krovlya/profnastil/35r/granite/cuprumsteel", "krovlya/profnastil/35r/poliester/ral1014", "krovlya/profnastil/35r/poliester/ral1015", "krovlya/profnastil/35r/poliester/ral1018", "krovlya/profnastil/35r/poliester/ral3003", "krovlya/profnastil/35r/poliester/ral3005", "krovlya/profnastil/35r/poliester/ral3009", "krovlya/profnastil/35r/poliester/ral3011", "krovlya/profnastil/35r/poliester/ral5002", "krovlya/profnastil/35r/poliester/ral5005", "krovlya/profnastil/35r/poliester/ral5021", "krovlya/profnastil/35r/poliester/ral5024", "krovlya/profnastil/35r/poliester/ral6002", "krovlya/profnastil/35r/poliester/ral6005", "krovlya/profnastil/35r/poliester/ral6019", "krovlya/profnastil/35r/poliester/ral6029", "krovlya/profnastil/35r/poliester/ral7004", "krovlya/profnastil/35r/poliester/ral7005", "krovlya/profnastil/35r/poliester/ral7024", "krovlya/profnastil/35r/poliester/ral8004", "krovlya/profnastil/35r/poliester/ral8017", "krovlya/profnastil/35r/poliester/ral9002", "krovlya/profnastil/35r/poliester/ral9003", "krovlya/profnastil/35r/poliester/ral9004", "krovlya/profnastil/35r/poliester/ral9006", "krovlya/profnastil/35r/poliester/rr11", "krovlya/profnastil/35r/poliester/rr32", "krovlya/profnastil/35r/poliester/rr35r", "krovlya/profnastil/35r/quarzit30/ral3005", "krovlya/profnastil/35r/quarzit30/ral3009", "krovlya/profnastil/35r/quarzit30/ral3011", "krovlya/profnastil/35r/quarzit30/ral5005", "krovlya/profnastil/35r/quarzit30/ral6005", "krovlya/profnastil/35r/quarzit30/ral7024", "krovlya/profnastil/35r/quarzit30/ral8004", "krovlya/profnastil/35r/quarzit30/ral8017", "krovlya/profnastil/35r/quarzit30/ral9005", "krovlya/profnastil/35r/quarzit30/rr11", "krovlya/profnastil/35r/quarzit30/rr32", "krovlya/profnastil/35r/quarzit35/ral3005", "krovlya/profnastil/35r/quarzit35/ral6005", "krovlya/profnastil/35r/quarzit35/ral7024", "krovlya/profnastil/35r/quarzit35/ral8004", "krovlya/profnastil/35r/quarzit35/ral8017", "krovlya/profnastil/35r/quarzit35/rr32", "krovlya/profnastil/35r/solano/burano", "krovlya/profnastil/35r/solano/chocolatebrn", "krovlya/profnastil/35r/solano/junipergrn", "krovlya/profnastil/35r/velur/ral3005", "krovlya/profnastil/35r/velur/ral3009", "krovlya/profnastil/35r/velur/ral3011", "krovlya/profnastil/35r/velur/ral5001", "krovlya/profnastil/35r/velur/ral5005", "krovlya/profnastil/35r/velur/ral6005", "krovlya/profnastil/35r/velur/ral6020", "krovlya/profnastil/35r/velur/ral7024", "krovlya/profnastil/35r/velur/ral8004", "krovlya/profnastil/35r/velur/ral8017", "krovlya/profnastil/35r/velur/ral9005", "krovlya/profnastil/35r/velur/rr32", "krovlya/profnastil/35r/colorityprint/antiquedub", "krovlya/profnastil/35r/colorityprint/brazilv", "krovlya/profnastil/35r/colorityprint/kamen", "krovlya/profnastil/35r/colorityprint/kamenpes", "krovlya/profnastil/35r/colorityprint/svetloederevo", "krovlya/profnastil/35r/safari/blue", "krovlya/profnastil/35r/safari/brown", "krovlya/profnastil/35r/safari/green", "krovlya/profnastil/35r/safari/grey", "krovlya/profnastil/35r/safari/orange", "krovlya/profnastil/35r/safari/pink", "krovlya/profnastil/75r/poliester/ral1014", "krovlya/profnastil/75r/poliester/ral1015", "krovlya/profnastil/75r/poliester/ral1018", "krovlya/profnastil/75r/poliester/ral3003", "krovlya/profnastil/75r/poliester/ral3005", "krovlya/profnastil/75r/poliester/ral3009", "krovlya/profnastil/75r/poliester/ral3011", "krovlya/profnastil/75r/poliester/ral5002", "krovlya/profnastil/75r/poliester/ral5005", "krovlya/profnastil/75r/poliester/ral5021", "krovlya/profnastil/75r/poliester/ral5024", "krovlya/profnastil/75r/poliester/ral6002", "krovlya/profnastil/75r/poliester/ral6005", "krovlya/profnastil/75r/poliester/ral6019", "krovlya/profnastil/75r/poliester/ral6029", "krovlya/profnastil/75r/poliester/ral7004", "krovlya/profnastil/75r/poliester/ral7005", "krovlya/profnastil/75r/poliester/ral7024", "krovlya/profnastil/75r/poliester/ral8004", "krovlya/profnastil/75r/poliester/ral8017", "krovlya/profnastil/75r/poliester/ral9002", "krovlya/profnastil/75r/poliester/ral9003", "krovlya/profnastil/75r/poliester/ral9004", "krovlya/profnastil/75r/poliester/ral9006", "krovlya/profnastil/75r/poliester/rr11", "krovlya/profnastil/75r/poliester/rr32", "krovlya/profnastil/75r/colorityprint/antiquedub", "krovlya/profnastil/75r/colorityprint/brazilv", "krovlya/profnastil/75r/colorityprint/kamen", "krovlya/profnastil/75r/colorityprint/kamenpes", "krovlya/profnastil/75r/colorityprint/svetloederevo", "krovlya/profnastil/75r/safari/blue", "krovlya/profnastil/75r/safari/brown", "krovlya/profnastil/75r/safari/green", "krovlya/profnastil/75r/safari/grey", "krovlya/profnastil/75r/safari/orange", "krovlya/profnastil/75r/safari/pink", "krovlya/profnastil/60r/granite/cuprumsteel", "krovlya/profnastil/60r/poliester/ral1014", "krovlya/profnastil/60r/poliester/ral1015", "krovlya/profnastil/60r/poliester/ral1018", "krovlya/profnastil/60r/poliester/ral3003", "krovlya/profnastil/60r/poliester/ral3005", "krovlya/profnastil/60r/poliester/ral3009", "krovlya/profnastil/60r/poliester/ral3011", "krovlya/profnastil/60r/poliester/ral5002", "krovlya/profnastil/60r/poliester/ral5005", "krovlya/profnastil/60r/poliester/ral5021", "krovlya/profnastil/60r/poliester/ral5024", "krovlya/profnastil/60r/poliester/ral6002", "krovlya/profnastil/60r/poliester/ral6005", "krovlya/profnastil/60r/poliester/ral6019", "krovlya/profnastil/60r/poliester/ral6029", "krovlya/profnastil/60r/poliester/ral7004", "krovlya/profnastil/60r/poliester/ral7005", "krovlya/profnastil/60r/poliester/ral7024", "krovlya/profnastil/60r/poliester/ral8004", "krovlya/profnastil/60r/poliester/ral8017", "krovlya/profnastil/60r/poliester/ral9002", "krovlya/profnastil/60r/poliester/ral9003", "krovlya/profnastil/60r/poliester/ral9004", "krovlya/profnastil/60r/poliester/ral9006", "krovlya/profnastil/60r/poliester/rr11", "krovlya/profnastil/60r/poliester/rr32", "krovlya/profnastil/60r/quarzit30/ral3005", "krovlya/profnastil/60r/quarzit30/ral3009", "krovlya/profnastil/60r/quarzit30/ral3011", "krovlya/profnastil/60r/quarzit30/ral5005", "krovlya/profnastil/60r/quarzit30/ral6005", "krovlya/profnastil/60r/quarzit30/ral7024", "krovlya/profnastil/60r/quarzit30/ral8004", "krovlya/profnastil/60r/quarzit30/ral8017", "krovlya/profnastil/60r/quarzit30/ral9005", "krovlya/profnastil/60r/quarzit30/rr11", "krovlya/profnastil/60r/quarzit30/rr32", "krovlya/profnastil/60r/quarzit35/ral3005", "krovlya/profnastil/60r/quarzit35/ral6005", "krovlya/profnastil/60r/quarzit35/ral7024", "krovlya/profnastil/60r/quarzit35/ral8004", "krovlya/profnastil/60r/quarzit35/ral8017", "krovlya/profnastil/60r/quarzit35/rr32", "krovlya/profnastil/60r/solano/burano", "krovlya/profnastil/60r/solano/chocolatebrn", "krovlya/profnastil/60r/solano/junipergrn", "krovlya/profnastil/60r/colorityprint/antiquedub", "krovlya/profnastil/60r/colorityprint/brazilv", "krovlya/profnastil/60r/colorityprint/kamen", "krovlya/profnastil/60r/colorityprint/kamenpes", "krovlya/profnastil/60r/colorityprint/svetloederevo", "krovlya/profnastil/60r/safari/blue", "krovlya/profnastil/60r/safari/brown", "krovlya/profnastil/60r/safari/green", "krovlya/profnastil/60r/safari/grey", "krovlya/profnastil/60r/safari/orange", "krovlya/profnastil/60r/safari/pink", "krovlya/profnastil/60r/velur/ral3005", "krovlya/profnastil/60r/velur/ral3009", "krovlya/profnastil/60r/velur/ral3011", "krovlya/profnastil/60r/velur/ral5001", "krovlya/profnastil/60r/velur/ral5005", "krovlya/profnastil/60r/velur/ral6005", "krovlya/profnastil/60r/velur/ral6020", "krovlya/profnastil/60r/velur/ral7024", "krovlya/profnastil/60r/velur/ral8004", "krovlya/profnastil/60r/velur/ral8017", "krovlya/profnastil/60r/velur/ral9005", "krovlya/profnastil/60r/velur/rr32"],
    komposit: ["krovlya/komposit/grandline/kapuchino", "krovlya/komposit/grandline/kllatte", "krovlya/komposit/grandline/klraf", "krovlya/komposit/grandline/chokolad", "krovlya/komposit/grandline/mmokko", "krovlya/komposit/grandline/espresso"]
}, ar_element_exist_typepokr = {
    fasad: ["fasad/metal/ecobrus/poliester", "fasad/metal/ecobrus/granite", "fasad/metal/ecobrus/colorityprint", "fasad/metal/ecobrus/quarzit30", "fasad/metal/ecobrus/quarzit35", "fasad/metal/ecobrus/safari", "fasad/metal/ecobrus/solano", "fasad/metal/blockhouse/granite", "fasad/metal/blockhouse/poliester", "fasad/metal/blockhouse/quarzit30", "fasad/metal/blockhouse/quarzit35", "fasad/metal/blockhouse/safari", "fasad/metal/blockhouse/colorityprint", "fasad/metal/korabel/granite", "fasad/metal/korabel/poliester", "fasad/metal/korabel/quarzit30", "fasad/metal/korabel/quarzit35", "fasad/metal/korabel/solano", "fasad/metal/korabel/colorityprint", "fasad/metal/vertical/granite", "fasad/metal/vertical/poliester", "fasad/metal/vertical/quarzit30", "fasad/metal/vertical/quarzit35", "fasad/metal/vertical/safari", "fasad/metal/vertical/solano", "fasad/metal/vertical/colorityprint", "fasad/vinil/d44", "fasad/vinil/d44", "fasad/vinil/d44", "fasad/vinil/d44", "fasad/vinil/d44", "fasad/vinil/d44", "fasad/vinil/d44", "fasad/vinil/d44", "fasad/vinil/d44", "fasad/vinil/d44", "fasad/vinil/d44", "fasad/vinil/d44"],
    krovlya: ["krovlya/metal/kvinta/colorityprint", "krovlya/metal/kvinta/granite", "krovlya/metal/kvinta/poliester", "krovlya/metal/kvinta/quarzit30", "krovlya/metal/kvinta/quarzit35", "krovlya/metal/kvinta/safari", "krovlya/metal/kvinta/solano", "krovlya/metal/kvinta/velur", "krovlya/metal/classic/granite", "krovlya/metal/classic/poliester", "krovlya/metal/classic/quarzit30", "krovlya/metal/classic/quarzit35", "krovlya/metal/classic/safari", "krovlya/metal/classic/solano", "krovlya/metal/classic/velur", "krovlya/metal/classic/colorityprint", "krovlya/metal/country/poliester", "krovlya/metal/country/safari", "krovlya/metal/country/colorityprint", "krovlya/metal/country/granite", "krovlya/metal/country/quarzit30", "krovlya/metal/country/quarzit35", "krovlya/metal/country/velur", "krovlya/falcevaya/klickfalc/colorityprint", "krovlya/falcevaya/klickfalc/granite", "krovlya/falcevaya/klickfalc/poliester", "krovlya/falcevaya/klickfalc/quarzit30", "krovlya/falcevaya/klickfalc/quarzit35", "krovlya/falcevaya/klickfalc/safari", "krovlya/falcevaya/klickfalc/solano", "krovlya/falcevaya/klickfalc/velur", "krovlya/metal/quadroprofi/granite", "krovlya/metal/quadroprofi/poliester", "krovlya/metal/quadroprofi/quarzit30", "krovlya/metal/quadroprofi/quarzit35", "krovlya/metal/quadroprofi/safari", "krovlya/metal/quadroprofi/solano", "krovlya/metal/quadroprofi/colorityprint", "krovlya/metal/quadroprofi/velur", "krovlya/profnastil/10r/granite", "krovlya/profnastil/10r/poliester", "krovlya/profnastil/10r/quarzit30", "krovlya/profnastil/10r/quarzit35", "krovlya/profnastil/10r/solano", "krovlya/profnastil/10r/velur35", "krovlya/profnastil/10r/colorityprint", "krovlya/profnastil/10r/safari", "krovlya/profnastil/10r/velur", "krovlya/profnastil/20r/granite", "krovlya/profnastil/20r/poliester", "krovlya/profnastil/20r/quarzit30", "krovlya/profnastil/20r/quarzit35", "krovlya/profnastil/20r/solano", "krovlya/profnastil/20r/velur", "krovlya/profnastil/21r/granite", "krovlya/profnastil/20r/colorityprint", "krovlya/profnastil/20r/safari", "krovlya/profnastil/21r/poliester", "krovlya/profnastil/21r/quarzit30", "krovlya/profnastil/21r/quarzit35", "krovlya/profnastil/21r/solano", "krovlya/profnastil/35r/granite", "krovlya/profnastil/35r/poliester", "krovlya/profnastil/35r/quarzit30", "krovlya/profnastil/35r/quarzit35", "krovlya/profnastil/35r/solano", "krovlya/profnastil/35r/velur", "krovlya/profnastil/35r/colorityprint", "krovlya/profnastil/35r/safari", "krovlya/profnastil/75r/poliester", "krovlya/profnastil/75r/colorityprint", "krovlya/profnastil/75r/safari", "krovlya/profnastil/60r/granite", "krovlya/profnastil/60r/poliester", "krovlya/profnastil/60r/quarzit30", "krovlya/profnastil/60r/quarzit35", "krovlya/profnastil/60r/solano", "krovlya/profnastil/60r/colorityprint", "krovlya/profnastil/60r/safari", "krovlya/profnastil/60r/velur"],
    cokol: ["cokol/cokolmetal/vertical/granite", "cokol/cokolmetal/vertical/poliester", "cokol/cokolmetal/vertical/quarzit30", "cokol/cokolmetal/vertical/quarzit35", "cokol/cokolmetal/vertical/solano", "cokol/cokolmetal/vertical/velur", "cokol/cokolmetal/vertical/velur35", "cokol/cokolmetal/vertical/colorityprint", "cokol/cokolmetal/vertical/safari", "cokol/cokolmetal/vertical/cinkpokr", "cokol/cokolprofnastil/c8/granite", "cokol/cokolprofnastil/c8/poliester", "cokol/cokolprofnastil/c8/quarzit30", "cokol/cokolprofnastil/c8/quarzit35", "cokol/cokolprofnastil/c8/solano", "cokol/cokolprofnastil/c8/velur", "cokol/cokolprofnastil/c8/colorityprint", "cokol/cokolprofnastil/c8/safari", "cokol/cokolprofnastil/c8/cinkpokr", "cokol/cokolwandstein/but", "cokol/cokolwandstein/dolomit", "cokol/cokolwandstein/skol", "cokol/cokolwandstein/kirp", "cokol/cokolprofnastil/c10/colorityprint", "cokol/cokolprofnastil/c10/poliester", "cokol/cokolprofnastil/c10/quarzit30", "cokol/cokolprofnastil/c10/quarzit35", "cokol/cokolprofnastil/c10/safari", "cokol/cokolprofnastil/c10/solano", "cokol/cokolprofnastil/c10/velur35", "cokol/cokolprofnastil/c10/cinkpokr"]
}, ar_element_exist_color_zabor = ["zabor/modul/premplus/ral3005", "zabor/modul/premplus/ral6005", "zabor/modul/premplus/ral8017"], ar_element_exist_color_vodostok = ["vodostok/gl12590/aluzinc", "vodostok/gl12590/ral3005", "vodostok/gl12590/ral6005", "vodostok/gl12590/ral7024", "vodostok/gl12590/ral8017", "vodostok/gl12590/ral9003", "vodostok/gl12590/ral9005", "vodostok/gl12590/rr11", "vodostok/gl12590/rr29", "vodostok/gl12590/rr32"], ar_element_exist_color_cokol = {
    cokolmetal: ["cokol/cokolmetal/vertical/granite/cuprumsteel", "cokol/cokolmetal/vertical/poliester/ral1014", "cokol/cokolmetal/vertical/poliester/ral1015", "cokol/cokolmetal/vertical/poliester/ral1018", "cokol/cokolmetal/vertical/poliester/ral3003", "cokol/cokolmetal/vertical/poliester/ral3005", "cokol/cokolmetal/vertical/poliester/ral3009", "cokol/cokolmetal/vertical/poliester/ral3011", "cokol/cokolmetal/vertical/poliester/ral5002", "cokol/cokolmetal/vertical/poliester/ral5005", "cokol/cokolmetal/vertical/poliester/ral5021", "cokol/cokolmetal/vertical/poliester/ral5024", "cokol/cokolmetal/vertical/poliester/ral6002", "cokol/cokolmetal/vertical/poliester/ral6005", "cokol/cokolmetal/vertical/poliester/ral6019", "cokol/cokolmetal/vertical/poliester/ral6029", "cokol/cokolmetal/vertical/poliester/ral7004", "cokol/cokolmetal/vertical/poliester/ral7005", "cokol/cokolmetal/vertical/poliester/ral7024", "cokol/cokolmetal/vertical/poliester/ral8004", "cokol/cokolmetal/vertical/poliester/ral8017", "cokol/cokolmetal/vertical/poliester/ral9002", "cokol/cokolmetal/vertical/poliester/ral9003", "cokol/cokolmetal/vertical/poliester/ral9004", "cokol/cokolmetal/vertical/poliester/ral9006", "cokol/cokolmetal/vertical/poliester/rr11", "cokol/cokolmetal/vertical/poliester/rr32", "cokol/cokolmetal/vertical/quarzit30/ral3005", "cokol/cokolmetal/vertical/quarzit30/ral3009", "cokol/cokolmetal/vertical/quarzit30/ral3011", "cokol/cokolmetal/vertical/quarzit30/ral5005", "cokol/cokolmetal/vertical/quarzit30/ral6005", "cokol/cokolmetal/vertical/quarzit30/ral7024", "cokol/cokolmetal/vertical/quarzit30/ral8004", "cokol/cokolmetal/vertical/quarzit30/ral8017", "cokol/cokolmetal/vertical/quarzit30/ral9005", "cokol/cokolmetal/vertical/quarzit30/rr11", "cokol/cokolmetal/vertical/quarzit30/rr32", "cokol/cokolmetal/vertical/quarzit35/ral3005", "cokol/cokolmetal/vertical/quarzit35/ral6005", "cokol/cokolmetal/vertical/quarzit35/ral7024", "cokol/cokolmetal/vertical/quarzit35/ral8004", "cokol/cokolmetal/vertical/quarzit35/ral8017", "cokol/cokolmetal/vertical/quarzit35/rr32", "cokol/cokolmetal/vertical/solano/burano", "cokol/cokolmetal/vertical/solano/chocolatebrn", "cokol/cokolmetal/vertical/solano/junipergrn", "cokol/cokolmetal/vertical/velur/ral3005", "cokol/cokolmetal/vertical/velur/ral3009", "cokol/cokolmetal/vertical/velur/ral3011", "cokol/cokolmetal/vertical/velur/ral5001", "cokol/cokolmetal/vertical/velur/ral5005", "cokol/cokolmetal/vertical/velur/ral6005", "cokol/cokolmetal/vertical/velur/ral6020", "cokol/cokolmetal/vertical/velur/ral7024", "cokol/cokolmetal/vertical/velur/ral8004", "cokol/cokolmetal/vertical/velur/ral8017", "cokol/cokolmetal/vertical/velur/ral9005", "cokol/cokolmetal/vertical/velur/rr32", "cokol/cokolmetal/vertical/velur35/ral8017", "cokol/cokolmetal/vertical/colorityprint/antiquedub", "cokol/cokolmetal/vertical/colorityprint/brazilv", "cokol/cokolmetal/vertical/colorityprint/kamen", "cokol/cokolmetal/vertical/colorityprint/kamenpes", "cokol/cokolmetal/vertical/colorityprint/korten", "cokol/cokolmetal/vertical/colorityprint/svetloederevo", "cokol/cokolmetal/vertical/safari/pink", "cokol/cokolmetal/vertical/safari/orange", "cokol/cokolmetal/vertical/safari/green", "cokol/cokolmetal/vertical/safari/grey", "cokol/cokolmetal/vertical/safari/brown", "cokol/cokolmetal/vertical/safari/blue", "cokol/cokolmetal/vertical/cinkpokr/cink"],
    cokolprofnastil: ["cokol/cokolprofnastil/c8/granite/cuprumsteel", "cokol/cokolprofnastil/c8/poliester/ral1014", "cokol/cokolprofnastil/c8/poliester/ral1015", "cokol/cokolprofnastil/c8/poliester/ral1018", "cokol/cokolprofnastil/c8/poliester/ral3003", "cokol/cokolprofnastil/c8/poliester/ral3005", "cokol/cokolprofnastil/c8/poliester/ral3009", "cokol/cokolprofnastil/c8/poliester/ral3011", "cokol/cokolprofnastil/c8/poliester/ral5002", "cokol/cokolprofnastil/c8/poliester/ral5005", "cokol/cokolprofnastil/c8/poliester/ral5021", "cokol/cokolprofnastil/c8/poliester/ral5024", "cokol/cokolprofnastil/c8/poliester/ral6002", "cokol/cokolprofnastil/c8/poliester/ral6005", "cokol/cokolprofnastil/c8/poliester/ral6019", "cokol/cokolprofnastil/c8/poliester/ral6029", "cokol/cokolprofnastil/c8/poliester/ral7004", "cokol/cokolprofnastil/c8/poliester/ral7005", "cokol/cokolprofnastil/c8/poliester/ral7024", "cokol/cokolprofnastil/c8/poliester/ral8004", "cokol/cokolprofnastil/c8/poliester/ral8017", "cokol/cokolprofnastil/c8/poliester/ral9002", "cokol/cokolprofnastil/c8/poliester/ral9003", "cokol/cokolprofnastil/c8/poliester/ral9004", "cokol/cokolprofnastil/c8/poliester/ral9006", "cokol/cokolprofnastil/c8/poliester/rr11", "cokol/cokolprofnastil/c8/poliester/rr32", "cokol/cokolprofnastil/c8/quarzit30/ral3005", "cokol/cokolprofnastil/c8/quarzit30/ral3009", "cokol/cokolprofnastil/c8/quarzit30/ral3011", "cokol/cokolprofnastil/c8/quarzit30/ral5005", "cokol/cokolprofnastil/c8/quarzit30/ral6005", "cokol/cokolprofnastil/c8/quarzit30/ral7024", "cokol/cokolprofnastil/c8/quarzit30/ral8004", "cokol/cokolprofnastil/c8/quarzit30/ral8017", "cokol/cokolprofnastil/c8/quarzit30/ral9005", "cokol/cokolprofnastil/c8/quarzit30/rr11", "cokol/cokolprofnastil/c8/quarzit30/rr32", "cokol/cokolprofnastil/c8/quarzit35/ral3005", "cokol/cokolprofnastil/c8/quarzit35/ral6005", "cokol/cokolprofnastil/c8/quarzit35/ral7024", "cokol/cokolprofnastil/c8/quarzit35/ral8004", "cokol/cokolprofnastil/c8/quarzit35/ral8017", "cokol/cokolprofnastil/c8/quarzit35/rr32", "cokol/cokolprofnastil/c8/solano/burano", "cokol/cokolprofnastil/c8/solano/chocolatebrn", "cokol/cokolprofnastil/c8/solano/junipergrn", "cokol/cokolprofnastil/c8/velur/ral3005", "cokol/cokolprofnastil/c8/velur/ral3009", "cokol/cokolprofnastil/c8/velur/ral3011", "cokol/cokolprofnastil/c8/velur/ral5001", "cokol/cokolprofnastil/c8/velur/ral5005", "cokol/cokolprofnastil/c8/velur/ral6005", "cokol/cokolprofnastil/c8/velur/ral6020", "cokol/cokolprofnastil/c8/velur/ral7024", "cokol/cokolprofnastil/c8/velur/ral8004", "cokol/cokolprofnastil/c8/velur/ral8017", "cokol/cokolprofnastil/c8/velur/ral9005", "cokol/cokolprofnastil/c8/velur/rr32", "cokol/cokolprofnastil/c8/colorityprint/antiquedub", "cokol/cokolprofnastil/c8/colorityprint/brazilv", "cokol/cokolprofnastil/c8/colorityprint/svetloederevo", "cokol/cokolprofnastil/c8/colorityprint/kamen", "cokol/cokolprofnastil/c8/colorityprint/kamenpes", "cokol/cokolprofnastil/c8/safari/pink", "cokol/cokolprofnastil/c8/safari/grey", "cokol/cokolprofnastil/c8/safari/orange", "cokol/cokolprofnastil/c8/safari/brown", "cokol/cokolprofnastil/c8/safari/blue", "cokol/cokolprofnastil/c8/cinkpokr/cink", "cokol/cokolprofnastil/c8/safari/green", "cokol/cokolprofnastil/c10/colorityprint/antiquedub", "cokol/cokolprofnastil/c10/colorityprint/brazilv", "cokol/cokolprofnastil/c10/colorityprint/kamen", "cokol/cokolprofnastil/c10/colorityprint/kamenpes", "cokol/cokolprofnastil/c10/colorityprint/svetloederevo", "cokol/cokolprofnastil/c10/poliester/ral1014", "cokol/cokolprofnastil/c10/poliester/ral1015", "cokol/cokolprofnastil/c10/poliester/ral1018", "cokol/cokolprofnastil/c10/poliester/ral3003", "cokol/cokolprofnastil/c10/poliester/ral3005", "cokol/cokolprofnastil/c10/poliester/ral3009", "cokol/cokolprofnastil/c10/poliester/ral3011", "cokol/cokolprofnastil/c10/poliester/ral5002", "cokol/cokolprofnastil/c10/poliester/ral5005", "cokol/cokolprofnastil/c10/poliester/ral5021", "cokol/cokolprofnastil/c10/poliester/ral5024", "cokol/cokolprofnastil/c10/poliester/ral6002", "cokol/cokolprofnastil/c10/poliester/ral6005", "cokol/cokolprofnastil/c10/poliester/ral6019", "cokol/cokolprofnastil/c10/poliester/ral6029", "cokol/cokolprofnastil/c10/poliester/ral7004", "cokol/cokolprofnastil/c10/poliester/ral7005", "cokol/cokolprofnastil/c10/poliester/ral7024", "cokol/cokolprofnastil/c10/poliester/ral8004", "cokol/cokolprofnastil/c10/poliester/ral8017", "cokol/cokolprofnastil/c10/poliester/ral9002", "cokol/cokolprofnastil/c10/poliester/ral9003", "cokol/cokolprofnastil/c10/poliester/ral9004", "cokol/cokolprofnastil/c10/poliester/ral9006", "cokol/cokolprofnastil/c10/poliester/rr11", "cokol/cokolprofnastil/c10/poliester/rr32", "cokol/cokolprofnastil/c10/quarzit30/ral3005", "cokol/cokolprofnastil/c10/quarzit30/ral3009", "cokol/cokolprofnastil/c10/quarzit30/ral3011", "cokol/cokolprofnastil/c10/quarzit30/ral5005", "cokol/cokolprofnastil/c10/quarzit30/ral6005", "cokol/cokolprofnastil/c10/quarzit30/ral7024", "cokol/cokolprofnastil/c10/quarzit30/ral8004", "cokol/cokolprofnastil/c10/quarzit30/ral8017", "cokol/cokolprofnastil/c10/quarzit30/ral9005", "cokol/cokolprofnastil/c10/quarzit30/rr11", "cokol/cokolprofnastil/c10/quarzit30/rr32", "cokol/cokolprofnastil/c10/quarzit35/ral3005", "cokol/cokolprofnastil/c10/quarzit35/ral6005", "cokol/cokolprofnastil/c10/quarzit35/ral7024", "cokol/cokolprofnastil/c10/quarzit35/ral8004", "cokol/cokolprofnastil/c10/quarzit35/ral8017", "cokol/cokolprofnastil/c10/quarzit35/rr32", "cokol/cokolprofnastil/c10/safari/blue", "cokol/cokolprofnastil/c10/safari/brown", "cokol/cokolprofnastil/c10/safari/green", "cokol/cokolprofnastil/c10/safari/grey", "cokol/cokolprofnastil/c10/safari/orange", "cokol/cokolprofnastil/c10/safari/pink", "cokol/cokolprofnastil/c10/solano/burano", "cokol/cokolprofnastil/c10/solano/chocolatebrn", "cokol/cokolprofnastil/c10/solano/junipergrn", "cokol/cokolprofnastil/c10/velur20/ral3005", "cokol/cokolprofnastil/c10/velur20/ral3009", "cokol/cokolprofnastil/c10/velur20/ral3011", "cokol/cokolprofnastil/c10/velur20/ral5001", "cokol/cokolprofnastil/c10/velur20/ral5005", "cokol/cokolprofnastil/c10/velur20/ral6005", "cokol/cokolprofnastil/c10/velur20/ral6020", "cokol/cokolprofnastil/c10/velur20/ral7024", "cokol/cokolprofnastil/c10/velur20/ral8004", "cokol/cokolprofnastil/c10/velur20/ral8017", "cokol/cokolprofnastil/c10/velur20/ral9005", "cokol/cokolprofnastil/c10/velur20/rr32", "cokol/cokolprofnastil/c10/velur35/ral8017", "cokol/cokolprofnastil/c10/cinkpokr/cink"],
    cokolwandstein: ["cokol/cokolwandstein/but/wsbzh", "cokol/cokolwandstein/but/wswt", "cokol/cokolwandstein/but/wsoliv", "cokol/cokolwandstein/but/wspesoch", "cokol/cokolwandstein/but/wsdarkbrn", "cokol/cokolwandstein/dolomit/wsbzh", "cokol/cokolwandstein/dolomit/wswt", "cokol/cokolwandstein/dolomit/wsgr", "cokol/cokolwandstein/skol/wsbrn", "cokol/cokolwandstein/skol/wsbzh", "cokol/cokolwandstein/skol/wsdarkbrn", "cokol/cokolwandstein/skol/wssvbrn", "cokol/cokolwandstein/skol/wssvbzh", "cokol/cokolwandstein/skol/wswt", "cokol/cokolwandstein/kirp/wsdarkbrn", "cokol/cokolwandstein/kirp/wspesoch", "cokol/cokolwandstein/kirp/wsterrakota", "cokol/cokolwandstein/kirp/wswt", "cokol/cokolwandstein/kirp/wszz", "cokol/cokolwandstein/parfir/wsbrn", "cokol/cokolwandstein/parfir/wsdarkbrn", "cokol/cokolwandstein/parfir/wspesoch", "cokol/cokolwandstein/parfir/wsgranat", "cokol/cokolwandstein/parfir/wsbzh", "cokol/cokolwandstein/parfir/wswt"]
}, ar_element_exist_color_sofity = ["sofity/ral8017", "sofity/ral9010", "sofity/rr32"], ar_typepokr = ["solano", "quarzit35", "quarzit30", "granite", "colorityprint", "safari", "velur20", "velur", "poliester", "cinkpokr"], ar_color = {
    metal: ["ral1014", "ral1015", "ral1018", "ral3003", "ral3005", "ral3009", "ral3011", "ral5001", "ral5002", "ral5005", "ral5021", "ral6002", "ral6005", "ral6019", "ral6029", "ral7004", "ral7005", "ral7024", "ral8004", "ral8017", "ral9002", "ral9003", "ral9004", "ral9005", "ral9006", "rr11", "rr29", "rr32", "svetloederevo", "korten", "kamenpes", "kamen", "brazilv", "antiquedub", "blue", "brown", "green", "grey", "orange", "pink", "burano", "chocolatebrn", "junipergrn", "cuprumsteel", "aluzinc", "cink"],
    vinil: ["bel", "bezh", "vblue", "crem", "vgreen", "vgrey", "karamel", "morendub", "pers", "temnbezh", "vanil", "vyellow", "vgoldpes", "vtemndub"],
    brick: ["brrbro", "bryell", "brwhi", "ifasad"],
    wandstein: ["wsbzh", "wswt", "wsoliv", "wspesoch", "wsdarkbrn", "wsgr", "wsbrn", "wssvbrn", "wssvbzh", "wsterrakota", "wszz", "wsgranat"],
    komposit: ["kapuchino", "kllatte", "klraf", "chokolad", "mmokko", "espresso"]
}, ar_profil_id = {
    metal: ["metal_ecobrus", "metal_blockhouse", "metal_korabel", "metal_vertical"],
    vinil: ["vinil_d4", "vinil_blockhouse", "vinil_vertical", "vinil_d44"],
    brick: ["brick_norm"]
}, ar_fasad_text = {
    metal_ecobrus: '<a href="http://www.grandline.ru/shop/fasad/metallicheskij-sajding/metallosajding-ekobrus-gl/" target="blank" class="infa" alt="Металлический сайдинг «ЭкоБрус GL»" title="Металлический сайдинг «ЭкоБрус GL»">Металлический сайдинг «ЭкоБрус GL»</a>',
    metal_blockhouse: '<a href="http://www.grandline.ru/shop/fasad/metallicheskij-sajding/metallosajding-blok-haus-gl/" target="blank" class="infa" alt="Металлический сайдинг «Блок-хаус»" title="Металлический сайдинг «Блок-хаус»">Металлический сайдинг «Блок-хаус»</a>',
    metal_korabel: '<a href="http://www.grandline.ru/shop/fasad/metallicheskij-sajding/korabelnaya-doska-grand-line/" target="blank" class="infa" alt="Металлический сайдинг «Корабельная доска»" title="Металлический сайдинг «Корабельная доска»">Металлический сайдинг «Корабельная доска»</a>',
    metal_vertical: '<a href="http://www.grandline.ru/shop/fasad/metallicheskij-sajding/vertikal-grand-line/" target="blank" class="infa" alt="Металлический сайдинг «Вертикаль GL»" title="Металлический сайдинг «Вертикаль GL»">Металлический сайдинг «Вертикаль GL»</a>',
    vinil_d4: '<a href="http://www.grandline.ru/shop/fasad/sayding-viniloviy/sibirskij-brus/" target="blank" class="infa" alt="Виниловый сайдинг D4" title="Виниловый сайдинг D4">Виниловый сайдинг D4</a>',
    vinil_d44: '<a href="http://www.grandline.ru/shop/fasad/sayding-viniloviy/korabelnyj-brus/" target="blank" class="infa" alt="Виниловый сайдинг D4,4" title="Виниловый сайдинг D4,4">Виниловый сайдинг D4,4</a>',
    vinil_blockhouse: '<a href="http://www.grandline.ru/shop/fasad/sayding-viniloviy/karelskij-brus/" target="blank" class="infa" alt="Виниловый сайдинг «Блок-хаус» D4,8" title="Виниловый сайдинг «Блок-хаус» D4,8">Виниловый сайдинг «Блок-хаус» D4,8</a>',
    vinil_vertical: '<a href="http://www.grandline.ru/shop/fasad/sayding-viniloviy/sajding-vinilovyj-baltijskij/" target="blank" class="infa" alt="Виниловый вертикальный сайдинг S6,3" title="Виниловый вертикальный сайдинг S6,3">Виниловый вертикальный сайдинг S6,3</a>',
    brick_norm: "<span >Кирпич</span>"
}, ar_krovlya_text = {
    metal_kvinta: '<a href="http://www.grandline.ru/shop/krovlya/metallocherepitsa/metallocherepica-kvinta/" target="blank" class="infa" alt="Металлочерепица Kvinta" title="Металлочерепица Kvinta">Металлочерепица Kvinta</a>',
    metal_classic: '<a href="http://www.grandline.ru/shop/krovlya/metallocherepitsa/metallocherepica-classic/" target="blank" class="infa" alt="Металлочерепица Classic" title="Металлочерепица Classic">Металлочерепица Classic</a>',
    metal_country: '<a href="http://www.grandline.ru/shop/krovlya/metallocherepitsa/metallocherepica-country/" target="blank" class="infa" alt="Металлочерепица Country" title="Металлочерепица Country">Металлочерепица Country</a>',
    metal_quadroprofi: '<a href="http://www.grandline.ru/shop/krovlya/metallocherepitsa/metallocherepica-quadro-profi/" target="blank" class="infa" alt="Металлочерепица Quadro Profi" title="Металлочерепица Quadro Profi">Металлочерепица Quadro Profi</a>',
    falcevaya_klickfalc: '<a href="http://www.grandline.ru/shop/krovlya/falcevaya-krovlya/klikfalc/" target="blank" class="infa" alt="Фальцевая кровля Кликфальц" title="Фальцевая кровля Кликфальц">Фальцевая кровля Кликфальц</a>',
    profnastil_10r: '<a href="http://www.grandline.ru/shop/krovlya/krovelnyj-profnastil/gl-10r/" target="blank" class="infa" alt="Кровельный профнастил GL-10R" title="Кровельный профнастил GL-10R">Кровельный профнастил GL-10R</a>',
    profnastil_20r: '<a href="http://www.grandline.ru/shop/krovlya/krovelnyj-profnastil/gl-20r/" target="blank" class="infa" alt="Кровельный профнастил GL-20R" title="Кровельный профнастил GL-20R">Кровельный профнастил GL-20R</a>',
    profnastil_21r: '<a href="http://www.grandline.ru/shop/krovlya/krovelnyj-profnastil/gl-21r/" target="blank" class="infa" alt="Кровельный профнастил GL-21R" title="Кровельный профнастил GL-21R">Кровельный профнастил GL-21R</a>',
    profnastil_35r: '<a href="http://www.grandline.ru/shop/krovlya/krovelnyj-profnastil/gl-35r/" target="blank" class="infa" alt="Кровельный профнастил GL-35r" title="Кровельный профнастил GL-35r">Кровельный профнастил GL-35r</a>',
    profnastil_60r: '<a href="http://www.grandline.ru/shop/krovlya/krovelnyj-profnastil/gl-60r/" target="blank" class="infa" alt="Кровельный профнастил GL-60r" title="Кровельный профнастил GL-60r">Кровельный профнастил GL-60r</a>',
    profnastil_75r: '<a href="http://www.grandline.ru/shop/krovlya/krovelnyj-profnastil/gl-75r/" target="blank" class="infa" alt="Кровельный профнастил GL-75r" title="Кровельный профнастил GL-75r">Кровельный профнастил GL-75r</a>',
    komposit_grandline: '<a href="http://www.grandline.ru/shop/krovlya/kompozitnaya-cherepica/grand-line/" target="blank" class="infa" alt="Композитная черепица Grand Line" title="Композитная черепица Grand Line">Композитная черепица Grand Line</a>'
}, ar_typepokr_text = {
    poliester: '<a href="http://www.grandline.ru/documentation/poliester/" target="blank" class="infa" alt="Полиэстер" title="Полиэстер">Полиэстер</a>',
    solano: '<a href="http://www.grandline.ru/documentation/solano/" target="blank" class="infa" alt="Solano" title="Solano">Solano</a>',
    granite: '<a href="http://www.grandline.ru/documentation/granitehdx/" target="blank" class="infa" alt="Granite" title="Granite">Granite</a>',
    quarzit35: '<a href="http://www.grandline.ru/documentation/quarzit35/" target="blank" class="infa" alt="Quarzit (quarzit35)" title="Quarzit (quarzit35)">Quarzit (Quarzit35)</a>',
    quarzit30: '<a href="http://www.grandline.ru/documentation/quarzit30/" target="blank" class="infa" alt="Quarzit Lite (Quarzit30)" title="Quarzit Lite (Quarzit30)">Quarzit Lite (Quarzit30)</a>',
    colorityprint: '<a href="http://www.grandline.ru/documentation/colorityprint/" target="blank" class="infa" alt="Colority Print" title="Colority Print">Colority Print</a>',
    safari: '<a href="http://www.grandline.ru/documentation/safari/" target="blank" class="infa" alt="Safari" title="Safari">Safari</a>'
}, ar_color_text = {
    ral1014: "RAL 1014",
    ral1015: "RAL 1015",
    ral1018: "RAL 1018",
    ral3003: "RAL 3003",
    ral3005: "RAL 3005",
    ral3009: "RAL 3009",
    ral3011: "RAL 3011",
    ral5002: "RAL 5002",
    ral5005: "RAL 5005",
    ral5021: "RAL 5021",
    ral6002: "RAL 6002",
    ral6005: "RAL 6005",
    ral6019: "RAL 6019",
    ral6029: "RAL 6029",
    ral7004: "RAL 7004",
    ral7005: "RAL 7005",
    ral7024: "RAL 7024",
    ral8004: "RAL 8004",
    ral8017: "RAL 8017",
    ral9002: "RAL 9002",
    ral9003: "RAL 9003",
    ral9004: "RAL 9004",
    ral9005: "RAL 9005",
    ral9006: "RAL 9006",
    rr11: "RR 11",
    rr29: "RR 29",
    rr32: "RR 32",
    svetloederevo: "Светлое дерево",
    korten: "Кортен",
    kamenpes: "Камень-песчаник",
    kamen: "Камень",
    brazilv: "Бразильская вишня",
    antiquedub: "Дуб античный",
    blue: "Голубой",
    brown: "Коричневый",
    green: "Зелёный",
    grey: "Серый",
    orange: "Оранжевый",
    pink: "Розовый",
    burano: "Burano",
    chocolatebrn: "Chocolate Brown",
    junipergrn: "Juniper Green",
    cuprumsteel: "Cuprum Steel",
    aluzinc: "Aluzinc",
    bel: "Белый",
    bezh: "Бежевый",
    vblue: "Голубой",
    crem: "Кремовый",
    vgreen: "Зелёный",
    vgrey: "Серый",
    karamel: "Карамельный",
    morendub: "Дуб морёный",
    pers: "Персиковый",
    temnbezh: "Тёмно-бежевый",
    vanil: "Ванильный",
    vyellow: "Жёлтый",
    bryell: "Жёлтый",
    brrbro: "Красно-коричневый",
    brwhi: "Белый",
    ifasad: "Я-фасад",
    kapuchino: "Капучино",
    kllatte: "Кленовый латте",
    klraf: "Клубничный раф",
    chokolad: "Шоколад",
    mmokko: "Мятный мокко",
    espresso: "Эспрессо",
    vgoldpes: "Золотой песок premium",
    vtemndub: "Темный дуб ACA"
}, ar_vodostok_text = {gl12590: '<a href="http://www.grandline.ru/shop/vodostok/125x90/" class="infa" alt="Водосточная система Grand Line 125x90" title="Водосточная система Grand Line 125x90" target="blank">Grand Line 125x90</a>'}, ar_zabor_text = {modul_premplus: '<a href="http://www.grandline.ru/shop/zabory-i-ograzhdeniya/modulnye-ograzhdeniya/premium-plyus/" class="infa" alt="Модульные ограждения Grand Line Премиум Плюс" title="Модульные ограждения Grand Line Премиум Плюс" target="blank">Модульные ограждения Премиум Плюс</a>'}, ar_hasgarage = ["dom4vid1"], sClickedPodborCellId, sClickedPodborPtrId, sClickedPodborMaterial, sActivePodborMaterial, sClickedColorMaterial, sActiveDobornColorColor, sActiveDobornPtrId, tFasadTypeProfId, tFasadGaragTypeProfId, tFasadTypePokrId, tFasadGaragTypePokrId, tFasadColorId, tFasadGaragColorId, tFasadTypePokrGreyId, tFasadGaragTypePokrGreyId, tFasadTypeProfGreyId, tFasadGaragTypeProfGreyId, tKrovlyaTypeProfId, tKrovlyaTypePokrId, tKrovlyaTypeProfGreyId, tKrovlyaTypePokrGreyId, tKrovlyaColorId, tKrovlyaGaragTypeProfId, tKrovlyaGaragTypePokrId, tKrovlyaGaragTypeProfGreyId, tKrovlyaGaragTypePokrGreyId, tKrovlyaGaragColorId, tZaborTypeProfId, tZaborTypeProfGreyId, tZaborColorId, tVodostokTypeProfId, tVodostokColorId, tCokolTypeProfId, tCokolTypePokrId, tCokolColorId, tCokolTypePokrGreyId, tCokolTypeProfGreyId, tSofityColorId, tOknaNalichColorId, tKrylcoColorId, tDobornFasadColorId, tDobornFasadGarColorId, sCurrentMenuid, tCurrentShablon = "001", tCurrentVidPos, icon_minimize_state, bottomrightarr, bottomleftarr, tcslist, domch, parFasad, parKrovlya, parVodostok, parZabor, mfasad, mkrovlya, cforvinil, cforkomposit, cforvinil2, cformetal, cforbrick, qsArr = {}, qsArrBack = {}, isRobot = !1, tipkrovlitext, tippokrtext, tipproftext, tipcolortext, tipzabortext, tipvodostoktext, tipvodostoktext, tipproftextcokol;
$(window).load(function () {
    startmain()
}), $(window).resize(function () {
    domResize(), grafikaResize()
}), $(document).ready(function () {
    $("#calc_layers").hide(), $("#columnparams").hide(), InitializeGlobalParams(), menucell.click(function () {
        1 == firstclick && (firstclick = !1, columnparams.show(), $("#icon-minimize").trigger("click"));
        var a = $(this).find("img").attr("src"), r = $(this).hasClass("active");
        if ($("#columnmenu").find(".menucell").removeClass("active"), defaultsrc(), r)columnpodbor.hide(), podborsettings.hide(), rowshablontop.hide(), rowshablonbottom.hide(), $(this).find("img").attr("src", a.replace("_r", "_g")); else switch (columnpodbor.show(), $(this).addClass("active"), $(this).find("img").attr("src", a.replace("_g", "_r")), sCurrentMenuid = $(this).attr("id")) {
            case"fasad":
                var o = isdobornfasadauto;
                isdobornfasadauto = !1, DrawColumnPodbor("fasad" + domgarag + curvalueselprioritetvybora), isdobornfasadauto = o;
                break;
            case"krovlya":
                DrawColumnPodbor("krovlya" + domgarag + curvalueselprioritetvybora);
                break;
            case"krovlaccess":
                DrawColumnPodbor("krovlaccesspotipuprof");
                break;
            case"cokol":
                DrawColumnPodbor("cokol" + domgarag + "potipuprof");
                break;
            case"proem":
                DrawColumnPodbor("proempotipuprof");
                break;
            case"vodostok":
                DrawColumnPodbor("vodostokpotipuprof");
                break;
            case"zabor":
                DrawColumnPodbor("zaborpotipuprof");
                break;
            case"shablon":
                DrawColumnPodbor("shablonpotipuprof");
                break;
            case"doborn":
                DrawColumnPodbor("dobornpotipuprof");
                break;
            case"sett":
                DrawColumnPodbor("settpotipuprof");
                break;
            case"":
                break;
            default:
                wrterr(domnvidn + "_Error_01")
        }
    }), ptrelem.click(function () {
        if (!$(this).find(".overlayd").hasClass("active"))switch (sClickedPodborCellId = $(this).parent().parent().attr("id"), sClickedPodborPtrId = $(this).attr("id"), sClickedPodborCellId) {
            case"podbortypeprofil":
                switch (sCurrentMenuid) {
                    case"fasad":
                        switch (curvalueselprioritetvybora) {
                            case"potipuprof":
                                ptrelemProfilClickFasadByProfil($(this));
                                break;
                            case"pocvetu":
                                ptrelemProfilClickFasadByCvet($(this));
                                break;
                            default:
                                wrterr(domnvidn + "_Error_04")
                        }
                        break;
                    default:
                        wrterr(domnvidn + "_Error_05")
                }
                break;
            case"podbortypepokr":
                switch (curvalueselprioritetvybora) {
                    case"potipuprof":
                        switch (sCurrentMenuid) {
                            case"fasad":
                                ptrelemPokrClickFasadByProfil($(this));
                                break;
                            case"krovlya":
                                ptrelemPokrClickKrovlyaByProfil($(this));
                                break;
                            case"zabor":
                                wrterr(domnvidn + "_Error_08");
                                break;
                            case"cokol":
                                ptrelemPokrClickCokolByProfil($(this));
                                break;
                            default:
                                wrterr(domnvidn + "_Error_09")
                        }
                        break;
                    case"pocvetu":
                        switch (sCurrentMenuid) {
                            case"fasad":
                                ptrelemPokrClickFacadByCvet($(this));
                                break;
                            case"krovlya":
                                ptrelemPokrClickKrovlyaByCvet($(this));
                                break;
                            case"cokol":
                                ptrelemPokrClickCokolByCvet($(this));
                                break;
                            default:
                                wrterr(domnvidn + "_Error_10")
                        }
                        break;
                    default:
                        try {
                            wrterr(domnvidn + "_Error_11_sCurrentMenuid=" + sCurrentMenuid + "_curvalueselprioritetvybora=" + curvalueselprioritetvybora)
                        } catch (a) {
                            wrterr(domnvidn + "_Error_11_sCurrentMenuid=" + sCurrentMenuid)
                        }
                }
                break;
            case"podborcolor":
                switch (curvalueselprioritetvybora) {
                    case"potipuprof":
                        switch (sCurrentMenuid) {
                            case"fasad":
                                ptrelemColorClickFasadByProfil($(this));
                                break;
                            case"krovlya":
                                ptrelemColorClickKrovlyaByProfil($(this));
                                break;
                            case"zabor":
                                ptrelemColorClickZaborByProfil($(this));
                                break;
                            case"vodostok":
                                ptrelemColorClickVodostokByProfil($(this));
                                break;
                            case"cokol":
                                ptrelemColorClickCokolByProfil($(this));
                                break;
                            case"doborn":
                                ptrelemColorClickDobornByProfil($(this));
                                break;
                            default:
                                wrterr(domnvidn + "_Error_16")
                        }
                        break;
                    case"pocvetu":
                        switch (sCurrentMenuid) {
                            case"fasad":
                                ptrelemColorClickFasadByCvet($(this));
                                break;
                            case"krovlya":
                                ptrelemColorClickKrovlyaByCvet($(this));
                                break;
                            case"zabor":
                                ptrelemColorClickZaborByCvet($(this));
                                break;
                            case"vodostok":
                                ptrelemColorClickVodostokByCvet($(this));
                                break;
                            case"cokol":
                                ptrelemColorClickCokolByCvet($(this));
                                break;
                            case"doborn":
                                ptrelemColorClickDobornByCvet($(this));
                                break;
                            default:
                                wrterr(domnvidn + "_Error_18")
                        }
                        break;
                    default:
                        wrterr(domnvidn + "_Error_19")
                }
                break;
            case"podbortypekrovlya":
                switch (domgarag) {
                    case"":
                        switch (sActivePodborMaterial = tKrovlyaTypeProfId.substr(0, tKrovlyaTypeProfId.indexOf("_")), curvalueselprioritetvybora) {
                            case"potipuprof":
                                ptrelemProfilClickKrovlyaDomByProfil($(this));
                                break;
                            case"pocvetu":
                                ptrelemProfilClickKrovlyaDomByCvet($(this));
                                break;
                            default:
                                try {
                                    wrterr(domnvidn + "_Error_21_sCurrentMenuid=" + sCurrentMenuid + "_curvalueselprioritetvybora=" + curvalueselprioritetvybora)
                                } catch (a) {
                                    wrterr(domnvidn + "_Error_11_sCurrentMenuid=" + sCurrentMenuid)
                                }
                        }
                        break;
                    case"-garage":
                        switch (curvalueselprioritetvybora) {
                            case"potipuprof":
                                ptrelemProfilClickKrovlyaGarageByProfil($(this));
                                break;
                            case"pocvetu":
                                ptrelemProfilClickKrovlyaGarageByCvet($(this));
                                break;
                            default:
                                try {
                                    wrterr(domnvidn + "_Error_21_sCurrentMenuid=" + sCurrentMenuid + "_curvalueselprioritetvybora=" + curvalueselprioritetvybora)
                                } catch (a) {
                                    wrterr(domnvidn + "_Error_11_sCurrentMenuid=" + sCurrentMenuid)
                                }
                        }
                }
                break;
            case"podborzabor":
                ptrelemProfilClickZabor($(this));
                break;
            case"podborvodostok":
                ptrelemProfilClickVodostok($(this));
                break;
            case"podbortypecokol":
                ptrelemProfilClickCokol($(this));
                break;
            case"podbordoborn":
                var r = curvalueselprioritetvybora;
                switch (curvalueselprioritetvybora = "potipuprof", podbordoborn.find(".frame").removeClass("active"), $(this).find(".frame").addClass("active"), podborcolorsofity.find(".frame").removeClass("active"), sActiveDobornPtrId = sClickedPodborPtrId, sClickedPodborPtrId) {
                    case"dobornsofity":
                        DrawColumnPodbor("dobornotherpocvetu"), $("#" + tSofityColorId).trigger("click");
                        break;
                    case"dobornoknanalich":
                        DrawColumnPodbor("dobornotherpocvetu"), $("#" + tOknaNalichColorId).trigger("click");
                        break;
                    case"dobornkrylco":
                        DrawColumnPodbor("dobornotherpocvetu"), $("#" + tKrylcoColorId).trigger("click");
                        break;
                    case"dobornfasad":
                        DrawColumnPodbor("dobornfasadpocvetu")
                }
                curvalueselprioritetvybora = r;
                break;
            default:
                wrterr(domnvidn + "_Error_22")
        }
    }), $(".radioprioritet").click(function () {
        switch ($(".radioprioritet").find("img").attr("src", "img/online/radiounch.png"), $(this).find("img").attr("src", "img/online/radioch.png"), curvalueselprioritetvybora = $(this).attr("id")) {
            case"potipuprof":
                switch (sCurrentMenuid) {
                    case"fasad":
                        DrawColumnPodbor("fasad" + domgarag + "potipuprof");
                        break;
                    case"krovlya":
                        DrawColumnPodbor("krovlya" + domgarag + "potipuprof")
                }
                break;
            case"pocvetu":
                switch (sCurrentMenuid) {
                    case"fasad":
                        DrawColumnPodbor("fasad" + domgarag + "pocvetu");
                        break;
                    case"krovlya":
                        DrawColumnPodbor("krovlya" + domgarag + "pocvetu")
                }
        }
    }), $(".radiodomgarag").click(function () {
        switch ($(".radiodomgarag").find("img").attr("src", "img/online/radiounch.png"), $(this).find("img").attr("src", "img/online/radioch.png"), isdobornfasadauto = !1, sCurrentMenuid) {
            case"fasad":
                switch ($(this).attr("id")) {
                    case"mdom":
                        switch (domgarag = "", curvalueselprioritetvybora) {
                            case"potipuprof":
                                DrawColumnPodbor("fasadpotipuprof");
                                break;
                            case"pocvetu":
                                DrawColumnPodbor("fasadpocvetu")
                        }
                        break;
                    case"mgarag":
                        switch (domgarag = "-garage", curvalueselprioritetvybora) {
                            case"potipuprof":
                                DrawColumnPodbor("fasad-garagepotipuprof");
                                break;
                            case"pocvetu":
                                DrawColumnPodbor("fasad-garagepocvetu")
                        }
                }
                break;
            case"krovlya":
                switch ($(this).attr("id")) {
                    case"mdom":
                        switch (domgarag = "", curvalueselprioritetvybora) {
                            case"potipuprof":
                                DrawColumnPodbor("krovlyapotipuprof");
                                break;
                            case"pocvetu":
                                DrawColumnPodbor("krovlyapocvetu")
                        }
                        break;
                    case"mgarag":
                        switch (domgarag = "-garage", curvalueselprioritetvybora) {
                            case"potipuprof":
                                DrawColumnPodbor("krovlya-garagepotipuprof");
                                break;
                            case"pocvetu":
                                DrawColumnPodbor("krovlya-garagepocvetu")
                        }
                }
                break;
            case"cokol":
                switch ($(this).attr("id")) {
                    case"mdom":
                        switch (domgarag = "", curvalueselprioritetvybora) {
                            case"potipuprof":
                                DrawColumnPodbor("cokolpotipuprof");
                                break;
                            case"pocvetu":
                                DrawColumnPodbor("cokolpocvetu")
                        }
                        break;
                    case"mgarag":
                        switch (domgarag = "-garage", curvalueselprioritetvybora) {
                            case"potipuprof":
                                DrawColumnPodbor("cokol-garagepotipuprof");
                                break;
                            case"pocvetu":
                                DrawColumnPodbor("cokol-garagepocvetu")
                        }
                }
        }
        isdobornfasadauto = !0, $("#dbfchinp").prop("checked", !0)
    }), $("#icon-minimize").click(function () {
        "opened" == icon_minimize_state ? ($("#box-content").slideUp("fast"), icon_minimize_state = "closed", $("#spiconmin").html("Развернуть"), $("#icon-minimize").find("img").attr("src", "img/online/maximizeicon.png")) : (icon_minimize_state = "opened", $("#spiconmin").html("Свернуть"), $("#box-content").slideDown("fast"), $("#icon-minimize").find("img").attr("src", "img/online/minimizeicon.png"))
    }), leftarr.click(function () {
        var a = tcslist.find(".active").hasClass("first");
        if (a)tcslist.find(".active").removeClass("active"), tcslist.find(".last").addClass("active"); else {
            var r = tcslist.find(".active").prev();
            tcslist.find(".active").removeClass("active"), r.addClass("active")
        }
        ReadShablon(tcslist.find(".active").find("img").attr("src"))
    }), rightarr.click(function () {
        var a = tcslist.find(".active").hasClass("last");
        if (a)tcslist.find(".active").removeClass("active"), tcslist.find(".first").addClass("active"); else {
            var r = tcslist.find(".active").next();
            tcslist.find(".active").removeClass("active"), r.addClass("active")
        }
        ReadShablon(tcslist.find(".active").find("img").attr("src"))
    }), shdom.click(function () {
        isdobornfasadauto = !0, $("#dbfchinp").prop("checked", !0), domgarag = "", tcslist.find(".active").removeClass("active"), $(this).addClass("active");
        var a = curvalueselprioritetvybora;
        ReadShablon($(this).find("img").attr("src")), curvalueselprioritetvybora = a
    }), domch.click(function () {
        isdobornfasadauto = !0, $("#dbfchinp").prop("checked", !0), domgarag = "";
        var a = tCurrentShablon;
        domnvidn = "dom" + $(this).attr("id").substr(6, 1) + "vid1", qsArr.domn = domnvidn, jQuery.bbq.pushState(qsArr);
        var r = curvalueselprioritetvybora;
        $("#allimages").animate({opacity: 0}, 1, function () {
            changedom(), curvalueselprioritetvybora = r, tCurrentShablon = a, tcslist.find(".active").removeClass("active"), $("#tcs" + tCurrentShablon).addClass("active")
        }), $("#allimages").animate({opacity: 1}, 1500)
    }), bottomrightarr.click(function () {
        rightforarr = parseInt(tcslist.css("right").replace("px", "")), 96 * (divminicount - skolkodivminvokne) > rightforarr && tcslist.animate({right: "+=96"}, 0)
    }), bottomleftarr.click(function () {
        tcslist.css("right").replace("px", "") > 0 && (bottomrightarr.find("img").attr("src", "img/online/rightarr128r.png"), tcslist.animate({right: "-=96"}, 0))
    }), $(function () {
        var a = 15, r = 25, o = .9;
        ptrelem.mouseenter(function (e) {
            var l = $(this).attr("data-description");
            "" !== l && ($("body").append('<div id="tooltip">' + l + "</div>"), $("#tooltip").css("left", e.pageX + a), $("#tooltip").css("top", e.pageY + r), $("#tooltip").fadeIn("500"), $("#tooltip").fadeTo("10", o))
        }).mousemove(function (o) {
            var e, l, t = o.pageX, i = o.pageY;
            l = $(window).width() - (t + a + $("#tooltip").outerWidth() + 5), a > l && (t = o.pageX + l), e = $(window).height() - (i + r + $("#tooltip").outerHeight() + 5), r > e && (i = o.pageY + e), $("#tooltip").css("left", t + a), $("#tooltip").css("top", i + r)
        }).mouseleave(function () {
            $("body").children("div#tooltip").remove()
        })
    })
});