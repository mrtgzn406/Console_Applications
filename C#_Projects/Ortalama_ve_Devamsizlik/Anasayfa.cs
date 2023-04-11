using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ortalama_ve_Devamsizlik
{
    public abstract class Anasayfa : Arayuz
    {
        public int devamsizlik, devamsizlikHakki;
        public double ortalama;

        public abstract void notumuHesapla();
        public abstract void yoklamaDurumumuGoster();


        public static void Main()
        {
            Universite ornek1 = new Universite();
            ornek1.notumuHesapla();
            ornek1.yoklamaDurumumuGoster();

            Lise ornek2 = new Lise();
            ornek2.notumuHesapla();
            ornek2.yoklamaDurumumuGoster();



        }

    }

}
