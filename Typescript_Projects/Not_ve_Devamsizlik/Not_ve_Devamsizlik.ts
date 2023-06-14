interface Arayuz {
    notumu_hesapla(): void;
    yoklama_durumumu_goster(): void;
}


abstract class Anasayfa implements Arayuz {

    devamsizlik!: number;
    devamsizlikHakki!: number;
    ortalama!: number;



    abstract notumu_hesapla(): void;
    abstract yoklama_durumumu_goster(): void;

}


class Lise extends Anasayfa {
    sinav1!: number;
    sinav2!: number;
    sozluNotu!: number;
    gun!: number;

    constructor(sinav1: number, sinav2: number, sozluNotu: number, devamsizlik: number) {
        super();
        this.sinav1 = sinav1;
        this.sinav2 = sinav2;
        this.sozluNotu = sozluNotu;
        this.devamsizlik = devamsizlik;
    }





    notumu_hesapla(): void {
        this.ortalama = (this.sinav1 + this.sinav2 + this.sozluNotu) / 3;

        if (this.ortalama >= 50 && this.ortalama <= 100) {
            console.log("Bu sınıfı eğer devamsızlık hakkınızı aşmadıysanız geçtiniz.");
        }
        else if (this.ortalama >= 0 && this.ortalama < 50) {
            console.log("Bu sınıfı genel not ortalamanız 50 aşağısında olduğu için geçemediniz, sınıfta kaldınız.");

        }
        else {
            console.log("Not skalasının dışına çıktınız, lütfen 0 ila 100 arasında bir not giriniz.");
        }
    }
    yoklama_durumumu_goster(): void {

        this.devamsizlikHakki = 20;

        if (this.devamsizlik > this.devamsizlikHakki) {

            console.log("Bu sınıftaki toplam devamsızlık hakkınızı aştığınızdan dolayı sınıfta kaldınız. ");
        }
        else if (this.devamsizlik == this.devamsizlikHakki) {
            console.log("Bu sınıf için devamsızlık hakkınızı doldurdunuz, daha fazla devamsızlık sınıfta kalmanıza sebep olur.");

        }
        else if (this.devamsizlik < this.devamsizlikHakki) {


            this.gun = this.devamsizlikHakki - this.devamsizlik;

            console.log("Bu sınıf için şu an " + this.gun + " gün devamsızlık hakkınız bulunmaktadır.");
        }
        else {
            console.log("Hatalı giriş. Lütfen devamsızlığı 0'dan büyük bir tam sayı olarak giriniz.");
        }
    }

}

class Universite extends Anasayfa {

    vize!: number;
    final!: number;
    gun!: number;

    constructor(vize: number, final: number, devamsizlik: number) {
        super();
        this.vize = vize;
        this.final = final;
        this.devamsizlik = devamsizlik;
    }

    notumu_hesapla(): void {

        this.ortalama = (this.vize * 0.40) + (this.final * 0.60);

        if (this.ortalama >= 60 && this.ortalama <= 100) {
            console.log("Bu dersi eğer devamsızlık hakkınızı aşmadıysanız geçtiniz.");
        }
        else if (this.ortalama >= 45 && this.ortalama < 60) {
            console.log("Bu dersten eğer devamsızlık hakkınızı aşmadıysanız ve ağırlıklı genel not ortalamanız 2.0 ve üzerindeyse sorumlu geçebilirsiniz, değilse kalırsınız.");

        }
        else if (this.ortalama >= 0 && this.ortalama < 45) {
            console.log("Not ortalamanız çok düşük olduğu için bu dersten kaldınız. Dersi tekrar almanız gerek.");
        }
        else {
            console.log("Not skalasının dışına çıktınız, lütfen 0 ila 100 arasında bir not giriniz.");
        }
    }


    yoklama_durumumu_goster(): void {
        this.devamsizlikHakki = 27;

        if (this.devamsizlik > this.devamsizlikHakki) {

            console.log("Bu ders için devamsızlık hakkınızı aştığınızdan dolayı dersten kaldınız. ");
        }
        else if (this.devamsizlik == this.devamsizlikHakki) {
            console.log("Bu ders için devamsızlık hakkınızı doldurdunuz, daha fazla devamsızlık dersten kalmanıza sebep olur.");

        }
        else if (this.devamsizlik < this.devamsizlikHakki) {

            this.gun = this.devamsizlikHakki - this.devamsizlik;

            console.log("Bu ders için şu an " + this.gun + " gün devamsızlık hakkınız bulunmaktadır.");
        }
        else {
            console.log("Hatalı giriş. Lütfen devamsızlığı 0'dan büyük bir tam sayı olarak giriniz.");
        }
    }
}


const ogrenci1 = new Lise(74, 80, 100, 15);
ogrenci1.notumu_hesapla();
ogrenci1.yoklama_durumumu_goster();


const ogrenci2 = new Universite(40, 94, 19);
ogrenci2.notumu_hesapla();
ogrenci2.yoklama_durumumu_goster();



