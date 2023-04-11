package Magaza;

public class Oyuncaklar extends Anasayfa{

	boolean veri;

	public Oyuncaklar(int urunKodu, String urunAdi, float urunAgirligi, String urununUlkesi) {
		super(urunKodu, urunAdi, urunAgirligi, urununUlkesi);
	}


	public void genel_ozellikleri_goster() {
		System.out.println(String.format("Bu oyuncağın ürün kodu: %d, ürün adı %s, ürün ağırlığı: %5.2f kilogram, urunun menşei ise %s gözükmektedir", UrunKodu, UrunAdi, urunAgirligi, urunMensei  ));
	}


	void nasil_satilacak() {
	
		
		if(veri == true) {
			System.out.println(String.format("Bu oyuncakta yutulabilir parça vardır, çocuğunuz oyuncakla oynarken dikkatli olun.", UrunKodu, UrunAdi));
			
		}else if(veri == false) {
			System.out.println("Bu oyuncakta yutulabilir parça yoktur, çocuğunuz oyuncakla rahatlıkla oynayabilir.");
			
		}else {
			System.out.println("Lütfen sadece 'var' veya 'yok' cevabını veriniz.");
		}
		
		
	}
	
}
