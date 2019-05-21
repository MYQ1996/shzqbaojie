function resetCardPC() {
    $(".trainCenterSearchCenterNoResult").css("display", "none"), $("#tcSearchInput").val(""), $(".trainCenterSearchCenterRight").css("display", "none"), $("#trainCenterSearchCenterRightImg1").attr("src", ""), $("#trainCenterSearchCenterRightImg2").attr("src", ""), $("#trainCenterSearchCenterRightImg3").attr("src", ""), $("#trainCenterSearchCenterRightImg4").attr("src", ""), $(".trainCenterSearchCenterDiv").css("width", "410px")
}

function resetCardPhone() {
    $(".trainCenterSearchCenterNoResult").css("display", "none"), $("#tcSearchInput2").val(""), $(".trainCenterSearchCenterRight").css("display", "none"), $("#trainCenterSearchCenterBottomImg1").attr("src", ""), $("#trainCenterSearchCenterBottomImg2").attr("src", "")
}

function resizeScreen() {
    $(window).width() >= 750 ? ($(".phonebanner").show(), $(".trainCentertPhoneBody").css("margin-top", "45px"), $(".trainCentertPhoneBody").css("margin-bottom", "45px")) : $(window).width() <= 750 && ($(".phonebanner").hide(), $(".trainCentertPhoneBody").css("margin-top", ""), $(".trainCentertPhoneBody").css("margin-bottom", ""))
}

function footer(a) {
    a ? ($(".tabbox").css("position", ""), $(".footer").css("position", ""), $(".footer").css("bottom", "")) : ($(".tabbox").css("position", "relative"), $(".footer").css("position", "absolute"), $(".footer").css("bottom", "0"))
}
$(function () {
    function a() {
        return "placeholder" in document.createElement("input")
    }
    var c = {
        "430422197505127923": ["https://ayipic.ayibang.com/cms__2d702ca1d0c8325fca46ef7ff4924396_1519465313.jpg", "https://ayipic.ayibang.com/cms__3f45e18ef513c02357cf315f112a885b_1519465517.jpg"],
        "413021198409211346": ["https://ayipic.ayibang.com/cms__cebea63f7c78a4b9752609c070a482eb_1519465428.jpg", "https://ayipic.ayibang.com/cms__3f45e18ef513c02357cf315f112a885b_1519465517.jpg"],
        "513031197009288266": ["https://ayipic.ayibang.com/cms__59ef9aeb7e41f07e83c703571e359438_1519465404.jpg", "https://ayipic.ayibang.com/cms__3f45e18ef513c02357cf315f112a885b_1519465517.jpg"],
        "512224197302276025": ["https://ayipic.ayibang.com/cms__6a0efef4f89e540e949da1460de477c9_1519465382.jpg", "https://ayipic.ayibang.com/cms__3f45e18ef513c02357cf315f112a885b_1519465517.jpg"],
        "410923198007154341": ["https://ayipic.ayibang.com/cms__6d10045229ef7d111925abb4856d262b_1519465454.jpg", "https://ayipic.ayibang.com/cms__3f45e18ef513c02357cf315f112a885b_1519465517.jpg"],
        "412931197603182848": ["https://ayipic.ayibang.com/cms__037fa51feb85c99aa65851bf109a6183_1519465347.jpg", "https://ayipic.ayibang.com/cms__3f45e18ef513c02357cf315f112a885b_1519465517.jpg"],
        "140224197204249348": ["https://ayipic.ayibang.com/cms__e1826f47133cc1ac9e034262d1fdc955_1519465479.jpg", "https://ayipic.ayibang.com/cms__3f45e18ef513c02357cf315f112a885b_1519465517.jpg"],
        "432902196806088429": ["https://ayipic.ayibang.com/cms__91ffa79f9a0a473999e36d8c8c10bc11_1519465548.jpg", "https://ayipic.ayibang.com/cms__1a00da8aaf4a5b8675b612fad9d50ed0_1519466186.jpg"],
        "232326198305192981": ["https://ayipic.ayibang.com/cms__6d3a325a3c3010f8e96eb48b28111cf6_1519466093.jpg", "https://ayipic.ayibang.com/cms__1a00da8aaf4a5b8675b612fad9d50ed0_1519466186.jpg"],
        "511121197602276785": ["https://ayipic.ayibang.com/cms__b2a23415976e609b6cfafe118286aeab_1519466132.jpg", "https://ayipic.ayibang.com/cms__1a00da8aaf4a5b8675b612fad9d50ed0_1519466186.jpg"],
        130431198310280020: ["https://ayipic.ayibang.com/cms__59a18ff495c2ffbab35ad544b11075e4_1519803609.jpg", "https://ayipic.ayibang.com/cms__3f45e18ef513c02357cf315f112a885b_1519465517.jpg"],
        "41122319690119312X": ["https://ayipic.ayibang.com/cms__dca6df820787eadd9f760f6164b41b0e_1519466211.jpg", "https://ayipic.ayibang.com/cms__8a301ed6047de63683f4083d8fef6331_1519466352.jpg"],
        "410928197004064225": ["https://ayipic.ayibang.com/cms__4ed1709f16175ed2b32e5d6606fc967c_1519466262.jpg", "https://ayipic.ayibang.com/cms__8a301ed6047de63683f4083d8fef6331_1519466352.jpg"],
        "142124197402044227": ["https://ayipic.ayibang.com/cms__c24a2dc90f7e4322281c799050179f8d_1519466285.jpg", "https://ayipic.ayibang.com/cms__8a301ed6047de63683f4083d8fef6331_1519466352.jpg", "https://ayipic.ayibang.com/cms__0bcf074293f64f8f057118d68cdcb0d7_1521785587.jpg", "https://ayipic.ayibang.com/cms__ae70d022fa6bb21b77caaa5cfc8fea7d_1521792041.jpg", "https://ayipic.ayibang.com/cms__b20b845bb79f260a6aada22933806deb_1522810236.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg"],
        "210304196709292046": ["https://ayipic.ayibang.com/cms__f1ba1265dae0baacfffac99756da5206_1519466330.jpg", "https://ayipic.ayibang.com/cms__8a301ed6047de63683f4083d8fef6331_1519466352.jpg"],
        "142625197812183469": ["https://ayipic.ayibang.com/cms__9330c35d68e1bd45a8d1f0ac872c8ab7_1519466308.jpg", "https://ayipic.ayibang.com/cms__8a301ed6047de63683f4083d8fef6331_1519466352.jpg"],
        "42222319650808232X": ["https://ayipic.ayibang.com/cms__a03082ffc35c6d2d94814d938ce3ff72_1519466236.jpg", "https://ayipic.ayibang.com/cms__8a301ed6047de63683f4083d8fef6331_1519466352.jpg"],
        "142124197407021841": ["https://ayipic.ayibang.com/cms__2ef6d235d470c2e204e8f3d909937ae1_1519466386.jpg", "https://ayipic.ayibang.com/cms__5baa09a485a96ea8393065d857821677_1519466475.jpg", "https://ayipic.ayibang.com/cms__ba80b9fa256c7b5b20ea61b02c58d437_1519802553.jpg", "https://ayipic.ayibang.com/cms__c1033ded1796cd2985150e457a6f8fe1_1519728211.jpg"],
        "142124197110234221": ["https://ayipic.ayibang.com/cms__a95fa8bc6686b79daefe2a5bec0a1a97_1519466405.jpg", "https://ayipic.ayibang.com/cms__5baa09a485a96ea8393065d857821677_1519466475.jpg", "https://ayipic.ayibang.com/cms__45e60e3384b642ae55d651b0be32a0bc_1527239917.jpg", "https://ayipic.ayibang.com/cms__b6c5c1f22e79957690b9bf923800b72d_1527239947.jpg"],
        "420921197004072628": ["https://ayipic.ayibang.com/cms__4ed7303c701d0b7f17af5cf4b3c34151_1519466428.jpg", "https://ayipic.ayibang.com/cms__5baa09a485a96ea8393065d857821677_1519466475.jpg"],
        "130425198704274224": ["https://ayipic.ayibang.com/cms__4b1bb1eece97aafa571894ff6bc4f0b8_1519466448.jpg", "https://ayipic.ayibang.com/cms__5baa09a485a96ea8393065d857821677_1519466475.jpg"],
        "430312197411293025": ["https://ayipic.ayibang.com/cms__278001b11a5fed33311b90e9fc1d82ef_1519466722.jpg", "https://ayipic.ayibang.com/cms__669b5a1b58feabe0a06dfc0d2d511ec3_1519466765.jpg", "https://ayipic.ayibang.com/cms__2b174507eda926d5d6f4e1b249fe286c_1519802519.jpg", "https://ayipic.ayibang.com/cms__c1033ded1796cd2985150e457a6f8fe1_1519728211.jpg"],
        "372325196804102464": ["https://ayipic.ayibang.com/cms__89059d09ad22c33ec62d8311095a7dcc_1519466526.jpg", "https://ayipic.ayibang.com/cms__669b5a1b58feabe0a06dfc0d2d511ec3_1519466765.jpg", "https://ayipic.ayibang.com/cms__d5addf561f6f2b306d342377947c3302_1519802386.jpg", "https://ayipic.ayibang.com/cms__c1033ded1796cd2985150e457a6f8fe1_1519728211.jpg"],
        "132922197205030642": ["https://ayipic.ayibang.com/cms__5da1606e619721e216dc1a7fdff6a949_1519466683.jpg", "https://ayipic.ayibang.com/cms__669b5a1b58feabe0a06dfc0d2d511ec3_1519466765.jpg"],
        "130926198002102069": ["https://ayipic.ayibang.com/cms__eb492e9bb5fe7c01cff44663993bc6af_1519466622.jpg", "https://ayipic.ayibang.com/cms__669b5a1b58feabe0a06dfc0d2d511ec3_1519466765.jpg", "https://ayipic.ayibang.com/cms__93bb32ca23bf977c41d5fcc6de8c86a9_1519802442.jpg", "https://ayipic.ayibang.com/cms__c1033ded1796cd2985150e457a6f8fe1_1519728211.jpg"],
        "370421196412286426": ["https://ayipic.ayibang.com/cms__f9d5daea4e34c3779b76481ec259b72f_1519466647.jpg", "https://ayipic.ayibang.com/cms__669b5a1b58feabe0a06dfc0d2d511ec3_1519466765.jpg", "https://ayipic.ayibang.com/cms__57e14a5f7951c434e1116755f2bb674e_1519802486.jpg", "https://ayipic.ayibang.com/cms__c1033ded1796cd2985150e457a6f8fe1_1519728211.jpg"],
        "130984196705063646": ["https://ayipic.ayibang.com/cms__f3305136b18282d01eb3c8f1ecc01cfa_1519466704.jpg", "https://ayipic.ayibang.com/cms__669b5a1b58feabe0a06dfc0d2d511ec3_1519466765.jpg"],
        "413026197606180975": ["https://ayipic.ayibang.com/cms__dd0d8e0962042409273669832eb19cae_1519466746.jpg", "https://ayipic.ayibang.com/cms__669b5a1b58feabe0a06dfc0d2d511ec3_1519466765.jpg"],
        "130434197803095223": ["https://ayipic.ayibang.com/cms__9ac6d41508ff1982f7b4465e0b56558e_1519728115.jpg", "https://ayipic.ayibang.com/cms__c1033ded1796cd2985150e457a6f8fe1_1519728211.jpg"],
        "410622197202026065": ["https://ayipic.ayibang.com/cms__10965b3986e735a94b82b3c74796a66f_1521785627.jpg", "https://ayipic.ayibang.com/cms__ae70d022fa6bb21b77caaa5cfc8fea7d_1521792041.jpg", "https://ayipic.ayibang.com/cms__1944c595e52d0ff323139e5862d22a20_1522811439.jpg", "https://ayipic.ayibang.com/cms__91c4ce953565e003dc581c08c1037473_1522811566.jpg"],
        "370406199304250020": ["https://ayipic.ayibang.com/cms__d001c4e5025b43a3265033f843008df9_1521785643.jpg", "https://ayipic.ayibang.com/cms__ae70d022fa6bb21b77caaa5cfc8fea7d_1521792041.jpg"],
        "142124197202081242": ["https://ayipic.ayibang.com/cms__4d0e11f33135016c0f3ababb79c53362_1521785672.jpg", "https://ayipic.ayibang.com/cms__ae70d022fa6bb21b77caaa5cfc8fea7d_1521792041.jpg", "https://ayipic.ayibang.com/cms__3d7a31c18584ab6d7a34cc8dfc6521e0_1522810908.jpg", "https://ayipic.ayibang.com/cms__b9ea6b30444bdaae89e44c8675d9d90d_1522810848.jpg"],
        "410527197512204628": ["https://ayipic.ayibang.com/cms__a70b3d6d6fa0b250d238de8050698d12_1521785697.jpg", "https://ayipic.ayibang.com/cms__ae70d022fa6bb21b77caaa5cfc8fea7d_1521792041.jpg"],
        "321324196801130025": ["https://ayipic.ayibang.com/cms__3eb21e52b00eace1f847a9f17c0ff3e5_1522059608.png", "https://ayipic.ayibang.com/cms__1a00da8aaf4a5b8675b612fad9d50ed0_1519466186.jpg", "https://ayipic.ayibang.com/cms__54e8bb7c1344f2b1fa755d99531b8641_1522809836.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg"],
        "130525197801295124": ["https://ayipic.ayibang.com/cms__e629d2c981d40571f31cb044825b845e_1522809880.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg"],
        "132226197807296023": ["https://ayipic.ayibang.com/cms__d0a97dcdc1a36d45940346b2d4f0ca55_1522809920.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg"],
        "132226197001121523": ["https://ayipic.ayibang.com/cms__c4bdcabded503f92207254caf1d1cd1b_1522810092.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg"],
        "230227197404111328": ["https://ayipic.ayibang.com/cms__09e5c7ed08ba5997e47e424d84a42e5f_1522810260.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg"],
        "13222619800403602X": ["https://ayipic.ayibang.com/cms__265182ba37edb43216c49e1f576b027b_1522810276.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg"],
        "320924197612314841": ["https://ayipic.ayibang.com/cms__6d165f92ee95a7caf4302f4c9cc1b004_1522810302.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg"],
        "230227197607031344": ["https://ayipic.ayibang.com/cms__ff8c1620c2f396e42cbd596fd7f2eb60_1522810363.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg"],
        "142731197605246343": ["https://ayipic.ayibang.com/cms__5278e14f203033e1d5f08f74e58476c1_1522810923.jpg", "https://ayipic.ayibang.com/cms__b9ea6b30444bdaae89e44c8675d9d90d_1522810848.jpg"],
        "360313197506302041": ["https://ayipic.ayibang.com/cms__3d473ece5246b4b2d2f8f949b184781b_1522810938.jpg", "https://ayipic.ayibang.com/cms__b9ea6b30444bdaae89e44c8675d9d90d_1522810848.jpg"],
        "420922198102152323": ["https://ayipic.ayibang.com/cms__c804c312f3835f0887d9cb4fa4544767_1522810954.jpg", "https://ayipic.ayibang.com/cms__b9ea6b30444bdaae89e44c8675d9d90d_1522810848.jpg"],
        "231025196612285421": ["https://ayipic.ayibang.com/cms__c2e7232c2ce7bb93e8558f7b810425d7_1522810995.jpg", "https://ayipic.ayibang.com/cms__b9ea6b30444bdaae89e44c8675d9d90d_1522810848.jpg"],
        "232128196503202629": ["https://ayipic.ayibang.com/cms__eb6749027d931c6f225b409ea2852fd9_1522811083.jpg", "https://ayipic.ayibang.com/cms__b9ea6b30444bdaae89e44c8675d9d90d_1522810848.jpg"],
        "370827197011080106": ["https://ayipic.ayibang.com/cms__0db6ac6c2cd60a6e891e567ccf5b2722_1522811011.jpg", "https://ayipic.ayibang.com/cms__b9ea6b30444bdaae89e44c8675d9d90d_1522810848.jpg"],
        "11022419631008484X": ["https://ayipic.ayibang.com/cms__80342a67077e2d55bc7c6148d611b86c_1522811414.jpg", "https://ayipic.ayibang.com/cms__91c4ce953565e003dc581c08c1037473_1522811566.jpg"],
        "230227197203292126": ["https://ayipic.ayibang.com/cms__641ea4209f04b4be760ca4e20ff65df3_1522811460.jpg", "https://ayipic.ayibang.com/cms__91c4ce953565e003dc581c08c1037473_1522811566.jpg"],
        "37142119840502222X": ["https://ayipic.ayibang.com/cms__9979033c13632457352246e3ba1e6d3d_1522811477.jpg", "https://ayipic.ayibang.com/cms__91c4ce953565e003dc581c08c1037473_1522811566.jpg", "https://ayipic.ayibang.com/cms__6cb2489382a18e96fce880bb0baae53b_1523347885.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg", "https://ayipic.ayibang.com/cms__e58678fb0815b560b6890a2a5e62f8d0_1524709326.jpg", "https://ayipic.ayibang.com/cms__a62b54cafafbe98d76250e699ea4a94b_1524709204.jpg"],
        "130430198304050329": ["https://ayipic.ayibang.com/cms__1508b57c8d2738d7223efa5fefd31ccf_1522811499.jpg", "https://ayipic.ayibang.com/cms__91c4ce953565e003dc581c08c1037473_1522811566.jpg", "https://ayipic.ayibang.com/cms__0c159a1447b3e8e3dbe1e6ec43fd099f_1522810337.jpg", "https://ayipic.ayibang.com/cms__19d3999111f0afabd1e5151026e120bc_1522809808.jpg"],
        "130435198310043426": ["https://ayipic.ayibang.com/cms__4092f3d3b4b8d8475896da540a9b54c5_1523347934.jpg", "https://ayipic.ayibang.com/cms__91c4ce953565e003dc581c08c1037473_1522811566.jpg", "https://ayipic.ayibang.com/cms__2c1330a3b359e833545d28dee14ad8b4_1524709365.jpg", "https://ayipic.ayibang.com/cms__a62b54cafafbe98d76250e699ea4a94b_1524709204.jpg"],
        "220182197606094527": ["https://ayipic.ayibang.com/cms__1120e7c73337c91e3b070aec59a626a4_1522811537.jpg", "https://ayipic.ayibang.com/cms__91c4ce953565e003dc581c08c1037473_1522811566.jpg", "https://ayipic.ayibang.com/cms__65715f130e4a10e9832580c6799b62b7_1524709603.jpg", "https://ayipic.ayibang.com/cms__a62b54cafafbe98d76250e699ea4a94b_1524709204.jpg"],
        "511112197004201226": ["https://ayipic.ayibang.com/cms__f830351f8b88af74768618880ef14d06_1524709225.jpg", "https://ayipic.ayibang.com/cms__a62b54cafafbe98d76250e699ea4a94b_1524709204.jpg"],
        "130621197102200325": ["https://ayipic.ayibang.com/cms__d237271fcce10269cb3d20d3aac7493c_1524709244.jpg", "https://ayipic.ayibang.com/cms__a62b54cafafbe98d76250e699ea4a94b_1524709204.jpg"],
        "132226197310031521": ["https://ayipic.ayibang.com/cms__236fb27ce8d81fb30609dded0dd48803_1524709271.jpg", "https://ayipic.ayibang.com/cms__a62b54cafafbe98d76250e699ea4a94b_1524709204.jpg"],
        "412723198502232969": ["https://ayipic.ayibang.com/cms__07f7153d7a4099dba906ce7fce653049_1524709493.jpg", "https://ayipic.ayibang.com/cms__a62b54cafafbe98d76250e699ea4a94b_1524709204.jpg"],
        "362137198210222145": ["https://ayipic.ayibang.com/cms__a046013ad952f64f52d0d780850b32bc_1527239933.jpg", "https://ayipic.ayibang.com/cms__b6c5c1f22e79957690b9bf923800b72d_1527239947.jpg "],
        "411381199003068506": ["https://ayipic.ayibang.com/cms__06eac93608ee48ec2e523d840bbcac01_1532484933.jpg", "https://ayipic.ayibang.com/cms__20de86ae5cefc0eb4836ea1b183f1ada_1532485055.jpg", "https://ayipic.ayibang.com/cms__c81cc9e959bf8d6b8c20896cc14d677a_1532484953.jpg", "https://ayipic.ayibang.com/cms__20de86ae5cefc0eb4836ea1b183f1ada_1532485055.jpg"],
        "130425198407074226": ["https://ayipic.ayibang.com/cms__772deb388dd44083422a051248697c1c_1532484995.jpg", "https://ayipic.ayibang.com/cms__20de86ae5cefc0eb4836ea1b183f1ada_1532485055.jpg"],
        "142623197612173423": ["https://ayipic.ayibang.com/cms__6fc4018d5229ab2a5e04eb1ae38202c3_1532484974.jpg", "https://ayipic.ayibang.com/cms__20de86ae5cefc0eb4836ea1b183f1ada_1532485055.jpg "]
    };
    $(".phonebanner").css("margin-top", "0rem"), $(".tabbox>div").css("margin-top", "0rem");
    var e = $("#certificateQuery"),
        t = $("#trainCenterButtonSearch"),
        i = $("#trainCenterButtonSearch2");
    e.on("click", function () {
        $("#trainCentertTabFirst").removeClass("on"), $("#trainCentertTabSecond").addClass("on"), $("#trainCenterAbout").css("display", "none"), $(".trainCentertPhoneTitle").css("display", "none"), $(window).width() <= 750 ? ($(".trainCenterSearchBodyPC").css("display", "none"), $(".trainCenterSearchBodyPhone").css("display", "block"), resetCardPhone(), footer()) : ($(".trainCenterSearchBodyPhone").css("display", "none"), $(".trainCenterSearchBodyPC").css("display", "block"), resetCardPC())
    }), $(".aboutnav li").click(function () {
        var a = $(this).index();
        $(this).addClass("on").siblings("ul li").removeClass("on"), $(".tabbox>div").eq(a).show().siblings().hide(), $(window).width() <= 750 ? resetCardPhone() : resetCardPC()
    }), t.on("click", function () {
        $(".trainCenterSearchCenterRight").css("height", "480px"), $("#trainCenterSearchCenterRightImg1").attr("src", ""), $("#trainCenterSearchCenterRightImg2").attr("src", ""), $("#trainCenterSearchCenterRightImg3").attr("src", ""), $("#trainCenterSearchCenterRightImg4").attr("src", ""), $("#trainCenterSearchCenterRightImg5").attr("src", ""), $("#trainCenterSearchCenterRightImg6").attr("src", "");
        var a = $(".trainCenterSearchCenterDiv");
        $(".trainCenterSearchCenterNoResult").css("display", "none");
        var e = $("#tcSearchInput").val();
        return e ? c[e] ? ($(".trainCenterSearchCenterRight").css("display", "block"), $("#trainCenterSearchCenterRightImg1").attr("src", c[e][0]), $("#trainCenterSearchCenterRightImg2").attr("src", c[e][1]), c[e][2] && ($("#trainCenterSearchCenterRightImg3").attr("src", c[e][2]), $(".trainCenterSearchCenterRight").css("height", "auto")), c[e][3] && $("#trainCenterSearchCenterRightImg4").attr("src", c[e][3]), c[e][4] && $("#trainCenterSearchCenterRightImg5").attr("src", c[e][4]), c[e][5] && $("#trainCenterSearchCenterRightImg6").attr("src", c[e][5]), void a.css("width", "935px")) : ($(".trainCenterSearchCenterNoResult").css("display", "block"), $(".trainCenterSearchCenterNoResult").text("娌℃湁鏌ュ埌鐩稿叧鐨勭粨鏋�"), $(".trainCenterSearchCenterRight").css("display", "none"), $("#trainCenterSearchCenterRightImg1").attr("src", ""), $("#trainCenterSearchCenterRightImg2").attr("src", ""), $("#trainCenterSearchCenterRightImg3").attr("src", ""), $("#trainCenterSearchCenterRightImg4").attr("src", ""), $("#trainCenterSearchCenterRightImg5").attr("src", ""), $("#trainCenterSearchCenterRightImg6").attr("src", ""), void a.css("width", "410px")) : ($(".trainCenterSearchCenterNoResult").css("display", "block"), void $(".trainCenterSearchCenterNoResult").text("璇疯緭鍏ヨ韩浠借瘉鍙�"))
    }), i.on("click", function () {
        $("#trainCenterSearchCenterBottomImg1").attr("src", ""), $("#trainCenterSearchCenterBottomImg2").attr("src", ""), $("#trainCenterSearchCenterBottomImg3").attr("src", ""), $("#trainCenterSearchCenterBottomImg4").attr("src", ""), $("#trainCenterSearchCenterBottomImg5").attr("src", ""), $("#trainCenterSearchCenterBottomImg6").attr("src", ""), $(".trainCenterSearchCenterNoResult").css("display", "none"), $(".trainCenterSearchImgDiv").css("display", "none");
        var a = $("#tcSearchInput2").val();
        return a ? c[a] ? (footer(!0), $(".trainCenterSearchImgDiv").css("display", "block"), $("#trainCenterSearchCenterBottomImg1").attr("src", c[a][0]), $("#trainCenterSearchCenterBottomImg2").attr("src", c[a][1]), c[a][2] && ($("#trainCenterSearchCenterBottomImg3").attr("src", c[a][2]), $(".trainCenterSearchCenterRight").css("height", "auto")), c[a][3] && $("#trainCenterSearchCenterBottomImg4").attr("src", c[a][3]), c[a][4] && $("#trainCenterSearchCenterBottomImg5").attr("src", c[a][4]), void(c[a][5] && $("#trainCenterSearchCenterBottomImg6").attr("src", c[a][5]))) : ($(".trainCenterSearchCenterNoResult").css("display", "block"), $(".trainCenterSearchCenterNoResult").text("娌℃湁鏌ュ埌鐩稿叧鐨勭粨鏋�"), $("#trainCenterSearchCenterBottomImg1").attr("src", ""), $("#trainCenterSearchCenterBottomImg2").attr("src", ""), $("#trainCenterSearchCenterBottomImg3").attr("src", ""), $("#trainCenterSearchCenterBottomImg4").attr("src", ""), $("#trainCenterSearchCenterBottomImg5").attr("src", ""), void $("#trainCenterSearchCenterBottomImg6").attr("src", "")) : ($(".trainCenterSearchCenterNoResult").css("display", "block"), void $(".trainCenterSearchCenterNoResult").text("璇疯緭鍏ヨ韩浠借瘉鍙�"))
    });
    var s = $(".menu"),
        n = $(".nav"),
        p = $(".closebtn"),
        b = !0,
        r = $(".feedback"),
        _ = $("#activityon"),
        g = $(".hiring");
    navigator.userAgent.indexOf("UCBrowser") > -1 && $(".uc").focus(function () {
        $(".enterbottom").removeClass("on"), $(".phoneline").removeClass("last")
    }), s.on("tap", function () {
        n.show(), s.toggleClass("close"), n.toggleClass("on"), "menu close" == $(this).attr("class") ? (b = !0, document.addEventListener("touchmove", function (a) {
            b && (a.preventDefault(), a.stopPropagation())
        })) : b = !1
    }), p.click(function () {
        $("#phoneHtml").show(), $(".cengbox").hide(), $(".serviceurl").attr("src", ""), b = !1, $("html,body").removeClass("ovfHiden"), g.removeClass("on"), _.addClass("on")
    }), $(".say").click(function () {
        r.show(), a() || $("[placeholder]").focus(function () {
            var a = $(this);
            a.val() == a.attr("placeholder") && (a.val(""), a.removeClass("placeholder"))
        }).blur(function () {
            var a = $(this);
            ("" == a.val() || a.val() == a.attr("placeholder")) && (a.addClass("placeholder"), a.val(a.attr("placeholder")))
        }).blur()
    }), $(".leftlist p").click(function () {
        var a = $(this).index();
        $(this).addClass("on").siblings().removeClass("on"), $(".righttext div").eq(a).show().siblings().hide()
    }), $(window).resize(function () {
        resizeScreen()
    }), resizeScreen(), $("#toAboutOur").click(function () {
        window.location.href = "aboutOur.html"
    }), $("#toAyzp").click(function () {
        window.location.href = "ayzp.html"
    })
});