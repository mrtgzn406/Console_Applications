package Magaza;

public class Kozmetik extends Anasayfa{
	String kozmetik_turu;
	public Kozmetik(int urunKodu, String urunAdi, float urunAgirligi, String urununUlkesi) {
		super(urunKodu, urunAdi, urunAgirligi, urununUlkesi);
	}


	public void genel_ozellikleri_goster() {
		System.out.println(String.format("Bu kozmetik ürününün ürün kodu: %d, ürün adı %s, ürün ağırlığı: %.2f kilogram, urunun menşei ise %s gözükmektedir", UrunKodu, UrunAdi, urunAgirligi, urunMensei  ));
	}

	void nasil_satilacak() {
		
		switch(kozmetik_turu) {
			case "hijyen": 
				System.out.println("Kozmetik bölümünün hijyen reyonunda bu hafta %50 indirim var");
				break;
			case "makyaj":
				System.out.println("Kozmetik bölümünün makyaj reyonunda bu hafta %20 indirim var");
				break;
			default: System.out.println("Bu girilen kozmetik türünde herhangi bir indirim bulunmamaktadır");
		}
		
	}
	


}
