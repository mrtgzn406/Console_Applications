import { Anasayfa } from "./Anasayfa.js";

export class Yapı_Malzemeleri extends Anasayfa {
    urunler = ["çekiç", "balta", "çivi", "masa", "sunta", "boya", "testere", "metre"];
    kampanyaliUrun;

    constructor(urunKodu, urunAdi, urunAgirligi) {
        super(...arguments);
    }


    genel_ozellikleri_goster() {
        console.log(`Bu yapı malzemesinin ürün kodu ${this.urunKodu}, ürün adı ${this.urunAdi} , ürün ağırlığı: ${this.urunAgirligi} kilogram, ürünün menşei ${this.urununMensei} olarak gözükmektedir`);
    }

    nasil_satilacak() {
        for (let i of this.urunler) {

            if (this.urunler[i] == "çekiç" || this.urunler[i] == "çivi" || this.urunler[i] == "sunta") {
                this.kampanyaliUrun = this.urunler[i];
                console.log("Yapı malzemesi bölümünün " + this.kampanyaliUrun + " kategorisinde 20.01.2023 tarhine kadar kampanya var");
            }
        }
    }
}