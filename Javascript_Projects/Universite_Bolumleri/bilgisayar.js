import { anasayfa } from "./anasayfa.js";

export class bilgisayar extends anasayfa {
    constructor(bursOrani) {
        super(bursOrani);
    }
    bolumUcreti = 40000;
    bolumunEgitimDili = "İngilizce";

    bolum_ozelliklerini_getir() {
        console.log("Bilgisayar Programcılığı bölümünün üniversite ücreti = " + this.bolumUcreti + " TL, " + "eğitim dili " + this.bolumunEgitimDili + " olarak belirlendi.");
        console.log("Not: Bu bölümde yalnızca %25, %50, %75 ve %100 burs seçenekleri bulunmaktadır. Diğer burs oranları kabul edilmeyecektir.");
    }

    burslu_fiyati_hesapla() {
        this.bursluFiyat = this.bolumUcreti - (this.bolumUcreti * (this.bursOrani / 100));

        if (this.bursOrani == 25 || this.bursOrani == 50 || this.bursOrani == 75 || this.bursOrani == 100) {
            console.log("Bu bölümün %" + this.bursOrani + " burslu hali = " + this.bursluFiyat + " TL'dir.");
        }
        else {
            console.log("Burs oranı limiti aşılıyor.");
        }
    }

}