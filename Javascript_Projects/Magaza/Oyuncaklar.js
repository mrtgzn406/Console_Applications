import { Anasayfa } from "./Anasayfa.js";

export class Oyuncaklar extends Anasayfa {
    constructor(urunKodu, urunAdi, urunAgirligi, yutulabilirMi) {
        super(...arguments);
        this.yutulabilirMi = yutulabilirMi;
    }

    genel_ozellikleri_goster() {
        console.log(`Bu oyuncağın ürün kodu ${this.urunKodu}, ürün adı ${this.urunAdi} , ürün ağırlığı: ${this.urunAgirligi} kilogram, ürünün menşei ${this.urununMensei} olarak gözükmektedir`);
    }

    nasil_satilacak() {
        if (this.yutulabilirMi == true) {
            console.log("Bu oyuncakta yutulabilir parça vardır, çocuğunuz oyuncakla oynarken dikkatli olun.");

        } else if (this.yutulabilirMi == false) {
            console.log("Bu oyuncakta yutulabilir parça yoktur, çocuğunuz oyuncakla rahatlıkla oynayabilir.");

        } else {
            console.log("Lütfen sadece 'true' veya 'false' cevabını veriniz.");
        }
    }
}