// import {anasayfa} from './anasayfa.js';
import {adalet} from "./adalet.js";
import {bilgisayar} from "./bilgisayar.js";
import {mekatronik} from "./mekatronik.js";

function main(){

        const adalet1 = new adalet(37);
        adalet1.bolum_ozelliklerini_getir();
        adalet1.burslu_fiyati_hesapla();

        const adalet2 = new adalet(113);
        adalet2.burslu_fiyati_hesapla();

        
        const bilgisayar1 = new bilgisayar(100);
        bilgisayar1.bolum_ozelliklerini_getir();
        bilgisayar1.burslu_fiyati_hesapla();
        
        const bilgisayar2 = new bilgisayar(21);
        bilgisayar2.burslu_fiyati_hesapla();
        

        
        const mekatronik1 = new mekatronik(47);
        mekatronik1.bolum_ozelliklerini_getir();
        mekatronik1.burslu_fiyati_hesapla();
        
        const mekatronik2 = new mekatronik(79);
        mekatronik2.burslu_fiyati_hesapla();
}

main();