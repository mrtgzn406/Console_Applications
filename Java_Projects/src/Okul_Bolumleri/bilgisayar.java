package Okul_Bolumleri;

public class bilgisayar extends main{
	double bolumUcreti = 40000;
	String bolumunEgitimDili = "ingilizce";
	
	@Override
	public void bolum_ozelliklerini_getir() {
		// TODO Auto-generated method stub
		
		System.out.println("Bu bölümün ücreti = "+bolumUcreti+ " TL, "+ "eğitim dili = "+bolumunEgitimDili + " olarak belirlendi.");
		System.out.println("Not: Bu bölümde yalnızca %25, %50, %75 ve %100 burs seçenekleri bulunmaktadır. Diğer burs oranları kabul edilmeyecektir.");
	}
	@Override
	public void bursluFiyatiHesapla() {
		// TODO Auto-generated method stub
		
		bursluFiyat = bolumUcreti - (bolumUcreti * (bursOrani / 100));
		
		if(bursOrani == 25 || bursOrani == 50 || bursOrani == 75 || bursOrani == 100 ) {
			System.out.println("Bu bölümün %"+bursOrani+" burslu hali = "+bursluFiyat + " TL'dir.");
		}
		else {
			System.out.println("Burs oranı limiti aşılıyor.");
		}
		
	}
	

	

}
