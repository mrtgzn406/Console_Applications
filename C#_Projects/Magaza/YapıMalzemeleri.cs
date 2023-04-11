using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Magaza
{
    public class YapıMalzemeleri : Anasayfa
    {
        string[] urunler = { "çekiç", "balta", "çivi", "masa", "sunta", "boya", "testere", "metre" };
        string kampanyaliUrun;

        public YapıMalzemeleri(int kodu, string adi, float agirligi, string mensei) : base(kodu, adi, agirligi, mensei)
        {
        }

        public override void genelOzellikleriGoster()
        {
            Console.WriteLine(String.Format("Bu yapı malzemesinin ürün kodu: {0}, ürün adı {1}, ürün ağırlığı: {2} kilogram, urunun menşei ise {3} gözükmektedir", urunAdi, urunKodu, urunAgirligi, urunMensei));
        }

        public override void nasilSatilacak()
        {
            for (int i = 0; i < urunler.Length; i++)
            {

                if (urunler[i] == "çekiç" || urunler[i] == "çivi" || urunler[i] == "sunta")
                {
                    kampanyaliUrun = urunler[i];
                    Console.WriteLine("Yapı malzemesi bölümünün " + kampanyaliUrun + " ürününde 20.01.2023 tarhine kadar kampanya var");
                }
            }
        }
    }
}
