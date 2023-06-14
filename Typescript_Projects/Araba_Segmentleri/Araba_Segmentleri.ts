interface Arayuz {
    benzin_tüketimini_hesapla(): void;
    vergili_fiyatını_bul(): void;
}

abstract class Anasayfa implements Arayuz {

    araba_adi: string;
    fiyat: number;
    vergi_maliyeti!: number;
    vergili_fiyat!: number;

    constructor(araba_adi: string, fiyat: number) {
        this.araba_adi = araba_adi;
        this.fiyat = fiyat;
    }


    abstract benzin_tüketimini_hesapla(): void;
    abstract vergili_fiyatını_bul(): void;

}

class Alt_Segment extends Anasayfa {

    vites_turu: string;
    motor_hacmi: number;

    constructor(araba_adi: string, fiyat: number, vites_turu: string, motor_hacmi: number) {
        super(araba_adi, fiyat);
        this.vites_turu = vites_turu;
        this.motor_hacmi = motor_hacmi;
    }

    benzin_tüketimini_hesapla(): void {
        if (this.vites_turu == "otomatik") {
            console.log("Bu araç otomatik vites olduğu için daha çok yakıt tüketir.");
        }
        else if (this.vites_turu == "manuel") {
            console.log("Bu araç manuel vites olduğu için daha az yakıt tüketir.");
        }
        else {
            console.log("Lütfen değer olarak sadece 'otomatik' veya 'manuel' giriniz.");
        }
    }
    vergili_fiyatını_bul(): void {

        if (this.motor_hacmi >= 2.0) {
            this.vergi_maliyeti = this.fiyat * 0.30;
            this.vergili_fiyat = this.fiyat + this.vergi_maliyeti;

            console.log("Bu aracın motor hacmi 2.0 veya onun üstüdür, bundan dolayı araca %30 ÖTV uygulanacaktır. Aracın vergili fiyatı " + this.vergili_fiyat + " TL tutuyor");

        }
        else {
            console.log("Bu aracın motor hacmi 2.0'ın altında olduğu için araca ÖTV uygulanmayacaktır. Aracın fiyatı hâlâ " + this.fiyat + " TL'dir");
        }
    }

}


class Ust_Segment extends Anasayfa {

    yakit_turu!: string;

    constructor(araba_adi: string, fiyat: number, yakit_turu: string) {
        super(araba_adi, fiyat);
        this.yakit_turu = yakit_turu;
    }


    benzin_tüketimini_hesapla(): void {

        if (this.yakit_turu == "benzin") {
            console.log("Bu araba benzinli olduğu için en çok yakıt tüketen arabadır.");
        }
        else if (this.yakit_turu == "dizel") {
            console.log("Bu araba dizel olduğu için benzinden daha az yakıt, lpgliden daha çok yakıt tüketir.");
        }
        else if (this.yakit_turu == "lpg") {
            console.log("Bu arada lpgli olduğu için en az yakıt tüketen arabadır.");
        }
        else {
            console.log("Lütfen sadece 'benzin', 'dizel', 'lpg' yazınız.");
        }
    }

    vergili_fiyatını_bul(): void {
        if (this.fiyat >= 1000000) {

            this.vergi_maliyeti = this.fiyat * 0.80;
            this.vergili_fiyat = this.fiyat + this.vergi_maliyeti;

            console.log("Bu aracın fiyatı 1000000 TL'yi aştığı için araca %80 ÖTV eklenmiştir. Aracın vergili fiyatı " + this.vergili_fiyat + " TL tutuyor");
        }
        else {
            console.log("Bu aracın fiyatı 1000000 TL'yi aşmadığı için araca ÖTV uygulanmayacaktır.");
        }
    }

}


const araba1 = new Alt_Segment("Hyundai i20", 200540, "manuel", 1.5);
araba1.benzin_tüketimini_hesapla();
araba1.vergili_fiyatını_bul();


const araba2 = new Ust_Segment("Ford Mustang", 10845600, "dizel");
araba2.benzin_tüketimini_hesapla();
araba2.vergili_fiyatını_bul();

