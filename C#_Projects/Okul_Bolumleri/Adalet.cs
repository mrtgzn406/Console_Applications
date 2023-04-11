using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Okul_Bolumleri
{
    public class Adalet : Anasayfa
    {
        double bolumUcreti = 20000;
        int bolumKontenjani = 71;

        public override void bolumOzellikleriniGetir()
        {
            Console.WriteLine($"Bu bölümün ücreti = {bolumUcreti} TL, maksimum öğrenci kontenjanı ise {bolumKontenjani} kişidir.");
        }

        public override void bursluFiyatiHesapla()
        {
            bursluFiyat = bolumUcreti - (bolumUcreti * (bursOrani / 100));

            if (bursOrani > 0 && bursOrani <= 100)
            {
                Console.WriteLine($"Bu bölümün % { bursOrani} burslu hali = { bursluFiyat} TL'dir.");
            }
            else
            {
                Console.WriteLine("Burs oranı limiti aşılıyor.");
            }
        }

    }
}
