using System.Collections.Specialized;

namespace Magaza
{
    public abstract class Anasayfa : Arayuz
    {
        public int urunKodu;
        public string urunAdi;
        public float urunAgirligi;
        public string urunMensei;


        public Anasayfa(int kodu, string adi, float agirligi, string mensei)
        {
            this.urunKodu = kodu;
            this.urunAdi = adi;
            this.urunAgirligi = agirligi;
            this.urunMensei = mensei;
        }

        public abstract void nasilSatilacak();
        public abstract void genelOzellikleriGoster();


        static void Main(string[] args)
        {
            Gıda gida1= new Gıda(541686,"Peynir", 1.24f, Arayuz.anaUlke);
            gida1.genelOzellikleriGoster();

            gida1.rafOmru = 130;
            gida1.nasilSatilacak();

            gida1.rafOmru = 3;
            gida1.nasilSatilacak();
            // ----------------------------------------------------------------------
            Console.WriteLine("\n");

            Kozmetik kozmetik1 = new Kozmetik(984988,"Dedorant", 0.452f, "Fransa" );

            kozmetik1.genelOzellikleriGoster();

            kozmetik1.kozmetikTuru = "hijyen";
            kozmetik1.nasilSatilacak();

            kozmetik1.kozmetikTuru = "makyaj";
            kozmetik1.nasilSatilacak();

            kozmetik1.kozmetikTuru = "günlük bakım";
            kozmetik1.nasilSatilacak();
            // ----------------------------------------------------------------------
            Console.WriteLine("\n");

            Oyuncaklar oyuncak1 = new Oyuncaklar(284321, "Spiderman", 0.874f, "ABD");

            oyuncak1.genelOzellikleriGoster();

            Console.WriteLine("Oyuncakta yutulabilir parça var mı ? (var/yok)");
            oyuncak1.yutubabilirParcaVarMi = Console.ReadLine();
            oyuncak1.nasilSatilacak();
            // ----------------------------------------------------------------------
            Console.WriteLine("\n");

            YapıMalzemeleri malzeme1 = new YapıMalzemeleri(257684, "çekiç", 3.421f, Arayuz.anaUlke);

            malzeme1.genelOzellikleriGoster();
            malzeme1.nasilSatilacak();











        }

    }
}