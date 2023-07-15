

export class Anasayfa {

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