var eredmenyek = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
];
function objektumosTombKeszito(tomb) {
    var olimpiaEredmenyek = [];
    for (var _i = 0, tomb_1 = tomb; _i < tomb_1.length; _i++) {
        var elem = tomb_1[_i];
        var obj = {
            Helyezés: 0,
            Sportolószám: 0,
            Sportág: "",
            Versenyszám: ""
        };
        obj.Helyezés = parseInt(elem.split(' ')[0]);
        obj.Sportolószám = parseInt(elem.split(' ')[1]);
        obj.Sportág = elem.split(' ')[2];
        obj.Versenyszám = elem.split(' ')[3];
        olimpiaEredmenyek.push(obj);
    }
    return olimpiaEredmenyek;
}
var olimpiaEredmenyekObjektumokTombben = objektumosTombKeszito(eredmenyek);
function hanyPontszerzoHelyezes(eredmenyek) {
    return "Pontszerz\u0151 helyez\u00E9sek sz\u00E1ma: ".concat(eredmenyek.length);
}
function eremSzamlalo(eredmenyek) {
    var eremObjektum = {
        Arany: 0,
        Ezüst: 0,
        Bronz: 0,
        Összesen: 0
    };
    for (var _i = 0, eredmenyek_1 = eredmenyek; _i < eredmenyek_1.length; _i++) {
        var eredmeny = eredmenyek_1[_i];
        if (eredmeny.Helyezés == 1) {
            eremObjektum.Arany += 1;
            eremObjektum.Összesen += 1;
        }
        else if (eredmeny.Helyezés == 2) {
            eremObjektum.Ezüst += 1;
            eremObjektum.Összesen += 1;
        }
        else if (eredmeny.Helyezés == 3) {
            eremObjektum.Bronz += 1;
            eremObjektum.Összesen += 1;
        }
    }
    return eremObjektum;
}
function olimpiaiPontokSzama(eredmenyek) {
    var olimpiaiPontokOsszesen = 0;
    for (var _i = 0, eredmenyek_2 = eredmenyek; _i < eredmenyek_2.length; _i++) {
        var eredmeny = eredmenyek_2[_i];
        if (eredmeny.Helyezés == 1) {
            olimpiaiPontokOsszesen += 7;
        }
        else if (eredmeny.Helyezés == 2) {
            olimpiaiPontokOsszesen += 5;
        }
        else if (eredmeny.Helyezés == 3) {
            olimpiaiPontokOsszesen += 4;
        }
        else if (eredmeny.Helyezés == 4) {
            olimpiaiPontokOsszesen += 3;
        }
        else if (eredmeny.Helyezés == 5) {
            olimpiaiPontokOsszesen += 2;
        }
        else if (eredmeny.Helyezés == 6) {
            olimpiaiPontokOsszesen += 1;
        }
    }
    return "Olimpiai pontok sz\u00E1ma: ".concat(olimpiaiPontokOsszesen);
}
;
function tornaVsUszasEremMennyiseg(eredmenyek) {
    var sportAgak = {};
    for (var _i = 0, eredmenyek_3 = eredmenyek; _i < eredmenyek_3.length; _i++) {
        var eredmeny = eredmenyek_3[_i];
        if (!(eredmeny.Sportág in sportAgak)) {
            sportAgak[eredmeny.Sportág] = 0;
        }
    }
    for (var _a = 0, eredmenyek_4 = eredmenyek; _a < eredmenyek_4.length; _a++) {
        var eredmeny = eredmenyek_4[_a];
        if (eredmeny.Helyezés < 4 && eredmeny.Sportág in sportAgak) {
            sportAgak[eredmeny.Sportág] += 1;
        }
    }
    if (sportAgak.torna > sportAgak.uszas) {
        return "Torna sportágban szereztek több érmet";
    }
    else if (sportAgak.torna < sportAgak.uszas) {
        return "Úszás sportágban szereztek több érmet";
    }
    else {
        return "Egyenlő volt az érmek száma";
    }
}
function legtobbSportolo(eredmenyek) {
    var legnagyobbSportolószám = [0, 0];
    eredmenyek.forEach(function (eredmeny, index) {
        if (eredmeny.Sportolószám > legnagyobbSportolószám[0]) {
            legnagyobbSportolószám[0] = eredmeny.Sportolószám;
            legnagyobbSportolószám[1] = index;
        }
    });
    return eredmenyek[legnagyobbSportolószám[1]];
}
