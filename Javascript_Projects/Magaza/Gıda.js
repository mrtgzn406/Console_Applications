import { Anasayfa } from "./Anasayfa.js";

export class Gıda extends Anasayfa {

    constructor(urunKodu, urunAdi, urunAgirligi, rafOmru) {
        super(...arguments);
        this.rafOmru = rafOmru;

    }

    genel_ozellikleri_goster() {
        console.log(`Bu gıdanın ürün kodu ${this.urunKodu}, ürün adı ${this.urunAdi} , ürün ağırlığı: ${this.urunAgirligi} kilogram, urunun menşei ${this.urununMensei}, ürünün raf ömrü ise ${this.rafOmru} gün olarak gözükmektedir`);
    }


    nasil_satilacak() {

        if (this.rafOmru <= 5) {
            console.log("Bu gıda ürünü satılamaz, ürünün raf ömrü geçmiş veya geçmek üzere");
        }
        else {
            console.log("Bu gıda ürünü satılabilir, raf ömrü yeterli.");
        }
    }
}