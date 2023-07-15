// import { Anasayfa } from "./Anasayfa";
import { Gıda } from "./Gıda.js";
import { Kozmetik } from "./Kozmetik.js";
import { Oyuncaklar } from "./Oyuncaklar.js";
import { Yapı_Malzemeleri } from "./Yapı_Malzemeleri.js";

function main (){

    const gida1 = new Gıda(549854, "Dana Antrikot", 4.4, 10);
    gida1.genel_ozellikleri_goster();
    gida1.nasil_satilacak();

    const gida2 = new Gıda(264981, "Kuzu Pirzola", 3.1, 4);
    gida2.genel_ozellikleri_goster();
    gida2.nasil_satilacak();



    const kozmetik1 = new Kozmetik(487956, "İpek Şampuan", 0.7, "hijyen");
    kozmetik1.genel_ozellikleri_goster();
    kozmetik1.nasil_satilacak();

    const kozmetik2 = new Kozmetik(569824, "Kırmızı Ruj", 0.03, "makyaj");
    kozmetik2.genel_ozellikleri_goster();
    kozmetik2.nasil_satilacak();


    const oyuncak1 = new Oyuncaklar(948564, "Uzaktan Kumandalı Araba", 0.1, false);
    oyuncak1.genel_ozellikleri_goster();
    oyuncak1.nasil_satilacak();

    const oyuncak2 = new Oyuncaklar(874169, "Barbie Bebek Seti", 0.16, true);
    oyuncak2.genel_ozellikleri_goster();
    oyuncak2.nasil_satilacak();


    const malzeme1 = new Yapı_Malzemeleri(156496, "Sunta", 6.4);
    malzeme1.genel_ozellikleri_goster();
    malzeme1.nasil_satilacak();

    const malzeme2 = new Yapı_Malzemeleri(214597, "Balta", 1);
    malzeme2.genel_ozellikleri_goster();
    malzeme2.nasil_satilacak();
}

main();