using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ortalama_ve_Devamsizlik
{
    public class Lise : Anasayfa
    {
        int sinav_1, sinav_2, sozluNotu;

        public override void notumuHesapla()
        {

            Console.Write("1. sınav notunuzu giriniz: ");
            sinav_1 = Convert.ToInt32(Console.ReadLine());

            Console.Write("2. sınav notunuzu giriniz: ");
            sinav_2 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Sözlü notunuzu giriniz: ");
            sozluNotu = Convert.ToInt32(Console.ReadLine());



            ortalama = (sinav_1 + sinav_2 + sozluNotu) / 3;

            if (ortalama >= 50 && ortalama <= 100)
            {
                Console.WriteLine("Bu sınıfı eğer devamsızlık hakkınızı aşmadıysanız geçtiniz.");
            }
            else if (ortalama >= 0 && ortalama < 50)
            {
                Console.WriteLine("Bu sınıfı genel not ortalamanız 50 aşağısında olduğu için geçemediniz, sınıfta kaldınız.");

            }
            else
            {
                Console.WriteLine("Not skalasının dışına çıktınız, lütfen 0 ila 100 arasında bir not giriniz.");
            }
        }


        public override void yoklamaDurumumuGoster()
        {
            devamsizlikHakki = 20;
		
		Console.Write("Devamsızlığınızı giriniz: ");
        devamsizlik = Convert.ToInt32(Console.ReadLine());
		
		if(devamsizlik > devamsizlikHakki) {
			
			Console.WriteLine("Bu sınıftaki toplam devamsizlik hakkınızı aştığınızdan dolayı sınıfta kaldınız. ");
		}
		else if(devamsizlik == devamsizlikHakki) {
			Console.WriteLine("Bu sınıf için devamsizlik hakkınızı doldurdunuz, daha fazla devamsizlik sınıfta kalmanıza sebep olur.");
			
		}
		else if (devamsizlik < devamsizlikHakki){
			
			int gun = devamsizlikHakki - devamsizlik;
			
			Console.WriteLine("Bu sınıf için şu an "+gun+" gün devamsizlik hakkınız bulunmaktadır.");
		}
		else {
			Console.WriteLine("Hatalı giriş. Lütfen devamsızlığı 0'dan büyük bir tam sayı olarak giriniz.");
		}
        }
    }
}
