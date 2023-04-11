using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Magaza
{
    public class Kozmetik : Anasayfa
    {
        public string kozmetikTuru;
        public Kozmetik(int kodu, string adi, float agirligi, string mensei) : base(kodu, adi, agirligi, mensei)
        {
        }

        public override void genelOzellikleriGoster()
        {
            Console.WriteLine($"Bu kozmetik ürününün ürün kodu: {urunKodu}, ürün adı {urunAdi}, ürün ağırlığı: {urunAgirligi} kilogram, urunun menşei ise {urunMensei} gözükmektedir");
        }

        public override void nasilSatilacak()
        {
            switch (kozmetikTuru)
            {
                case "hijyen": 
                    Console.WriteLine("Kozmetik bölümünün hijyen reyonunda bu hafta %50 indirim var"); 
                    break;

                case "makyaj":
                    Console.WriteLine("Kozmetik bölümünün makyaj reyonunda bu hafta %20 indirim var"); 
                    break;

                default: Console.WriteLine("Girilen bölümde herhangi bir indirim bulunmamaktadır"); 
                    break;
            }
        }

    }
}
