package Okul_Bolumleri;

public class adalet extends main{
	double bolumUcreti = 20000;
	int bolumKontenjani = 71;
	
	@Override
	public void bolum_ozelliklerini_getir() {
		// TODO Auto-generated method stub
		
		System.out.println("Bu bölümün ücreti = "+bolumUcreti+ " TL, "+
		"maksimum öğrenci kontenjanı ise "+bolumKontenjani+" kişidir.");
	}
	@Override
	public void bursluFiyatiHesapla() {
		// TODO Auto-generated method stub
		
		bursluFiyat = bolumUcreti - (bolumUcreti * (bursOrani / 100));
		
		if(bursOrani > 0 && bursOrani <= 100) {
			System.out.println("Bu bölümün %"+bursOrani+" burslu hali = "+bursluFiyat + " TL'dir.");
		}
		else {
			System.out.println("Burs oranı limiti aşılıyor.");
		}
		
	}


	

}
