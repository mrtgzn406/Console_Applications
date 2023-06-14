
class anasayfa {

    constructor(bursOrani) {
        this.bursOrani = bursOrani;
    }
    bursluFiyat;


    bolum_ozelliklerini_getir() {
        console.log("anasayfa'nın bolum_ozelliklerini_getir() fonksiyonu alt sınıflara uygulanmadı");
    };

    burslu_fiyati_hesapla() {
        console.log("anasayfa'nın burslu_fiyati_hesapla() fonksiyonu alt sınıflara uygulanmadı");
    };




}


class adalet extends anasayfa {
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


class bilgisayar extends anasayfa {
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







class mekatronik extends anasayfa {
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




const adalet1 = new adalet(37);
adalet1.bolum_ozelliklerini_getir();
adalet1.burslu_fiyati_hesapla();

const adalet2 = new adalet(113);
adalet2.burslu_fiyati_hesapla();


const bilgisayar1 = new bilgisayar(100);
bilgisayar1.bolum_ozelliklerini_getir();
bilgisayar1.burslu_fiyati_hesapla();

const bilgisayar2 = new bilgisayar(21);
bilgisayar2.burslu_fiyati_hesapla();



const mekatronik1 = new mekatronik(47);
mekatronik1.bolum_ozelliklerini_getir();
mekatronik1.burslu_fiyati_hesapla();

const mekatronik2 = new mekatronik(79);
mekatronik2.burslu_fiyati_hesapla();

