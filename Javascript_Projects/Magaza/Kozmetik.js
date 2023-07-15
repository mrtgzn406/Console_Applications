import { Anasayfa } from "./Anasayfa.js";

export class Kozmetik extends Anasayfa {
    constructor(urunKodu, urunAdi, urunAgirliği, kozmetikTuru) {
        super(...arguments);
        this.kozmetikTuru = kozmetikTuru;

    }

    genel_ozellikleri_goster() {
        console.log(`Bu kozmetik ürününün ürün kodu ${this.urunKodu}, ürün adı ${this.urunAdi} , ürün ağırlığı: ${this.urunAgirligi} kilogram, ürünün menşei ${this.urununMensei}, ürünün kozmetik türü ise ${this.kozmetikTuru} olarak gözükmektedir`);
    }

    nasil_satilacak() {
        switch (this.kozmetikTuru) {
            case "hijyen":
                console.log("Kozmetik bölümünün hijyen reyonunda bu hafta %50 indirim var");
                break;
            case "makyaj":
                console.log("Kozmetik bölümünün makyaj reyonunda bu hafta %20 indirim var");
                break;
            default: "Bu girilen kozmetik türünde herhangi bir indirip bulunmamaktadır";
        }
    }

}