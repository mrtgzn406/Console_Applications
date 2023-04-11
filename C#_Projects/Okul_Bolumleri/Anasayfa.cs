namespace Okul_Bolumleri
{
    public abstract class Anasayfa : Arayuz
    {
        public double bursOrani, bursluFiyat;
        public abstract void bolumOzellikleriniGetir();
        public abstract void bursluFiyatiHesapla();

        static void Main(string[] args)
        {
            Bilgisayar ogrenci1 = new Bilgisayar();

            ogrenci1.bolumOzellikleriniGetir();

            ogrenci1.bursOrani = 50;
            ogrenci1.bursluFiyatiHesapla();

            ogrenci1.bursOrani = 90;
            ogrenci1.bursluFiyatiHesapla();
            // -----------------------------------------------------------------------
            Console.WriteLine();


            Adalet ogrenci2 = new Adalet();

            ogrenci2.bolumOzellikleriniGetir();

            ogrenci2.bursOrani = 85;
            ogrenci2.bursluFiyatiHesapla();

            ogrenci2.bursOrani = 101;
            ogrenci2.bursluFiyatiHesapla();
            // -----------------------------------------------------------------------
            Console.WriteLine();


            Mekatronik ogrenci3 = new Mekatronik();

            ogrenci3.bolumOzellikleriniGetir();

            ogrenci3.bursOrani = 32;
            ogrenci3.bursluFiyatiHesapla();

            ogrenci3.bursOrani = 75;
            ogrenci3.bursluFiyatiHesapla();



        }

    }
}