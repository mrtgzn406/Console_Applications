package Okul_Bolumleri;

public abstract class main implements arayuz{
	double bursOrani;
	double bursluFiyat;


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		mekatronik bolum1 = new mekatronik();
		bolum1.bolum_ozelliklerini_getir();
		bolum1.bursOrani = 33.3;
		bolum1.bursluFiyatiHesapla();
		bolum1.bursOrani = 78;
		bolum1.bursluFiyatiHesapla();
		
		//--------------------------------------------------------
		
		adalet bolum2 = new adalet();
		bolum2.bolum_ozelliklerini_getir();
		bolum2.bursOrani =40;
		bolum2.bursluFiyatiHesapla();
		bolum2.bursOrani = 105;
		bolum2.bursluFiyatiHesapla();
		
		
		//--------------------------------------------------------
		
		bilgisayar bolum3 = new bilgisayar();
		bolum3.bolum_ozelliklerini_getir();
		bolum3.bursOrani =100.0;
		bolum3.bursluFiyatiHesapla();
		bolum3.bursOrani = 45;
		bolum3.bursluFiyatiHesapla();
		
			
	}

}
