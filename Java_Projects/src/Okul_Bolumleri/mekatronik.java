package Okul_Bolumleri;

public class mekatronik extends main{
	double bolumUcreti = 30000;
	int bursOraniLimiti = 50;
	
	@Override
	public void bolum_ozelliklerini_getir() {
		// TODO Auto-generated method stub
		
		System.out.println("Bu bölümün ücreti = "+bolumUcreti+ " TL"+ 
		", maksimum verebileceği burs oranı ise %"+bursOraniLimiti);
		
		
	}
	@Override
	public void bursluFiyatiHesapla() {
		// TODO Auto-generated method stub
		
		bursluFiyat = bolumUcreti - (bolumUcreti * (bursOrani / 100));
		
		if(bursOrani > 0 && bursOrani <= bursOraniLimiti) {
			System.out.println("Bu bölümün %"+bursOrani+" burslu hali = "+bursluFiyat + " TL'dir.");
		}
		else {
			System.out.println("Burs oranı 0'dan aşağıda veya %"+bursOraniLimiti+ "'den daha yukarıda olamaz");
		}
		
	}


	


}
