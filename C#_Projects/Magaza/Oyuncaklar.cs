using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Magaza
{
    public class Oyuncaklar : Anasayfa
    {
        public string yutubabilirParcaVarMi;
        public Oyuncaklar(int kodu, string adi, float agirligi, string mensei) : base(kodu, adi, agirligi, mensei)
        {

        }

        public override void genelOzellikleriGoster()
        {
            Console.WriteLine(String.Format("Bu oyuncağın ürün kodu: {0}, ürün adı {1}, ürün ağırlığı: {2} kilogram, urunun menşei ise {3} gözükmektedir", urunKodu, urunAdi, urunAgirligi, urunMensei)); 
        }

        public override void nasilSatilacak()
        {
            if (yutubabilirParcaVarMi == "var")
            {
                Console.WriteLine("Bu oyuncakta yutulabilir parça vardır, çocuğunuz oyuncakla oynarken dikkatli olun.");

            }
            else if (yutubabilirParcaVarMi == "yok")
            {
                Console.WriteLine("Bu oyuncakta yutulabilir parça yoktur, çocuğunuz oyuncakla rahatlıkla oynayabilir.");

            }
            else
            {
                Console.WriteLine("Lütfen sadece 'var' veya 'yok' cevabını veriniz.");
            }
        }
    }
}
