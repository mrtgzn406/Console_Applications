
class Anasayfa {

    urununMensei = "Türkiye";

    constructor(urunKodu, urunAdi, urunAgirligi) {
        this.urunKodu = urunKodu;
        this.urunAdi = urunAdi;
        this.urunAgirligi = urunAgirligi;
    }

    genel_ozellikleri_goster() {
        console.log("This genel_ozellikleri_goster(); method is not implemented by child classes");
    }

    nasil_satilacak() {
        console.log("This nasil_satilacak(); method is not implemented by child classes");
    }

}

class Gıda extends Anasayfa {

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


class Kozmetik extends Anasayfa {
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


class Oyuncaklar extends Anasayfa {
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

class Yapı_Malzemeleri extends Anasayfa {
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



