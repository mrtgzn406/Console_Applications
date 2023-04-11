using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ortalama_ve_Devamsizlik
{
    public class Universite : Anasayfa
    {
        int vize, final;
        public override void notumuHesapla()
        {
            Console.Write("Vize notunuzu giriniz: ");
            vize = Convert.ToInt32(Console.ReadLine());

            Console.Write("Final notunuzu giriniz: ");
            final = Convert.ToInt32( Console.ReadLine());

            ortalama = (vize * 0.40) + (final * 0.60);


            if (ortalama >= 60 && ortalama <= 100) {
			    Console.WriteLine("Bu dersi eğer devamsızlık hakkınızı aşmadıysanız geçtiniz.");
		    } 
		    else if(ortalama >= 45 && ortalama < 60){
			    Console.WriteLine("Bu dersten eğer devamsızlık hakkınızı aşmadıysanız ve ağırlıklı genel not ortalamanız 2.0 ve üzerindeyse sorumlu geçebilirsiniz, değilse kalırsınız.");
			
		    }
		    else if(ortalama >= 0 && ortalama < 45 ){
			    Console.WriteLine("Not ortalamanız çok düşük olduğu için bu dersten kaldınız. Dersi tekrar almanız gerek.");
			    }
		    else {
			    Console.WriteLine("Not skalasının dışına çıktınız, lütfen 0 ila 100 arasında bir not giriniz." );
		    }



        }

        

        public override void yoklamaDurumumuGoster()
        {
            devamsizlikHakki = 30;

            Console.Write("Devamsızlığınızı giriniz: ");
            devamsizlik = Convert.ToInt32(Console.ReadLine());
            


            if (devamsizlik > devamsizlikHakki)
            {

                Console.WriteLine("Bu ders için devamsızlık hakkınızı aştığınızdan dolayı dersten kaldınız. ");
            }
            else if (devamsizlik == devamsizlikHakki)
            {
                Console.WriteLine("Bu ders için devamsızlık hakkınızı doldurdunuz, daha fazla devamsizlik dersten kalmanıza sebep olur.");

            }
            else if (devamsizlik < devamsizlikHakki)
            {

                int gun = devamsizlikHakki - devamsizlik;

                Console.WriteLine("Bu ders için şu an " + gun + " gün devamsızlık hakkınız bulunmaktadır.");
            }
            else
            {
                Console.WriteLine("Hatalı giriş. Lütfen devamsızlığı 0'dan büyük bir tam sayı olarak giriniz.");
            }
        }
    }
}
