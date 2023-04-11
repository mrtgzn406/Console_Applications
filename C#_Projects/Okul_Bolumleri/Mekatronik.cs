using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Okul_Bolumleri
{
    public class Mekatronik : Anasayfa
    {
        double bolumUcreti = 30000;
        int bursOraniLimiti = 50;
        public override void bolumOzellikleriniGetir()
        {
            Console.WriteLine($"Bu bölümün ücreti { bolumUcreti} TL, maksimum verebileceği burs oranı ise % { bursOraniLimiti}");
        }

        public override void bursluFiyatiHesapla()
        {
            bursluFiyat = bolumUcreti - (bolumUcreti * (bursOrani / 100));

            if (bursOrani > 0 && bursOrani <= bursOraniLimiti)
            {
                Console.WriteLine("Bu bölümün %" + bursOrani + " burslu hali = " + bursluFiyat + " TL'dir.");
            }
            else
            {
                Console.WriteLine("Burs oranı 0'dan aşağıda veya % " + bursOraniLimiti + "'den daha yukarıda olamaz");
            }
        }
    }
}
