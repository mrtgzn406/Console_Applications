using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Magaza
{
    class Gıda : Anasayfa
    {
        public int rafOmru;

        public Gıda(int kodu, string adi, float agirligi, string ulkesi) : base(kodu, adi, agirligi, ulkesi )
        {
        }

        public override void genelOzellikleriGoster()
        {
            Console.WriteLine($"Bu gıdanın ürün kodu: {urunKodu}, ürün adı {urunAdi}, ürün ağırlığı: {urunAgirligi} kilogram, urunun menşei ise {urunMensei} gözükmektedir");
        }

        public override void nasilSatilacak()
        {
            if (rafOmru <= 5)
            {
                Console.WriteLine("Bu gıda ürünü satılamaz, raf ömrü geçmek üzere");
            }
            else
            {
                Console.WriteLine("Bu gıda ürünü satılabilir, raf ömrü yeterli.");
            }
        }
    }
}
