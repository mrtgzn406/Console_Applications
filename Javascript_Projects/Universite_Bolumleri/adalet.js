import { anasayfa } from "./anasayfa.js";


export class adalet extends anasayfa {
    constructor(bursOrani) {
        super(bursOrani);
    }
    bolumUcreti = 20000;
    bolumKontenjani = 71;


    bolum_ozelliklerini_getir() {
        console.log(`Adalet bölümünün üniversite ücreti ${this.bolumUcreti} TL, maksimum öğrenci kontenjanı ise ${this.bolumKontenjani} kişidir`);

    }
    burslu_fiyati_hesapla() {
        this.bursluFiyat = this.bolumUcreti - (this.bolumUcreti * (this.bursOrani / 100));


        if (this.bursOrani > 0 && this.bursOrani <= 100) {
            console.log(`Bu bölümün burs orani % ${this.bursOrani}, burslu fiyatı ise ${this.bursluFiyat} TL'dir`);
        }
        else {
            console.log("Burs orani limiti aşılıyor");
        }
    }


}