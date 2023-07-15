import { anasayfa } from "./anasayfa.js";

export class mekatronik extends anasayfa {
    constructor(bursOrani) {
        super(bursOrani);
    }

    bolumUcreti = 30000;
    bursOraniLimiti = 50;

    bolum_ozelliklerini_getir() {
        console.log("Mekatronik bölümünün üniversite ücreti = " + this.bolumUcreti + " TL" +
            ", maksimum verebileceği burs oranı ise %" + this.bursOraniLimiti + " olarak gözükmektedir");
    }

    burslu_fiyati_hesapla() {
        this.bursluFiyat = this.bolumUcreti - (this.bolumUcreti * (this.bursOrani / 100));

        if (this.bursOrani > 0 && this.bursOrani <= this.bursOraniLimiti) {
            console.log("Bu bölümün %" + this.bursOrani + " burslu hali = " + this.bursluFiyat + " TL'dir");
        }
        else {
            console.log("Burs oranı %0'dan aşağıda veya %" + this.bursOraniLimiti + "'den daha yukarıda olamaz");
        }
    }

}