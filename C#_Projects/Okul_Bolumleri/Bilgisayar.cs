using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Okul_Bolumleri
{
    public class Bilgisayar : Anasayfa
    {
        double bolumUcreti = 40000;
        string bolumunEgitimDili = "ingilizce";

        public override void bolumOzellikleriniGetir()
        {
            Console.WriteLine($"Bu bölümün ücreti =  {bolumUcreti} TL, eğitim dili {bolumunEgitimDili} olarak belirlendi.");
            Console.WriteLine("Not: Bu bölümde yalnızca %25, %50, %75 ve %100 burs seçenekleri bulunmaktadır. Diğer burs oranları kabul edilmeyecektir.");

        }

        public override void bursluFiyatiHesapla()
        {
            bursluFiyat = bolumUcreti - (bolumUcreti * (bursOrani / 100));

            if (bursOrani == 25 || bursOrani == 50 || bursOrani == 75 || bursOrani == 100)
            {
                Console.WriteLine($"Bu bölümün % {bursOrani}, burslu hali = {bursluFiyat} TL'dir.");
            }
            else
            {
                Console.WriteLine("Burs oranı limiti aşılıyor.");
            }
        }
    }
}
