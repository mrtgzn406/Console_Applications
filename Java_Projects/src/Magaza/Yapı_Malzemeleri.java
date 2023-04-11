package Magaza;

public class Yapı_Malzemeleri extends Anasayfa{
	 String[] urunler = {"çekiç", "balta", "çivi", "masa", "sunta", "boya", "testere","metre"};
	 String KampanyaliUrun;

	public Yapı_Malzemeleri(int urunKodu, String urunAdi, float urunAgirligi, String urununUlkesi) {
		super(urunKodu, urunAdi, urunAgirligi, urununUlkesi);
	}


	public void genel_ozellikleri_goster() {
		System.out.println(String.format("Bu yapı malzemesinin ürün kodu: %d, ürün adı %s, ürün ağırlığı: %.1f kilogram, urunun menşei ise %s gözükmektedir", UrunKodu, UrunAdi, urunAgirligi, urunMensei  ));
		
	}


	void nasil_satilacak() {
		for (int i = 0; i < urunler.length; i++) {
			
			if(urunler[i] == "çekiç" || urunler[i] == "çivi" || urunler[i] == "sunta") {
			KampanyaliUrun = urunler[i];
			System.out.println("Yapı malzemesi bölümünün " +KampanyaliUrun+ " kategorisinde 20.01.2023 tarhine kadar kampanya var");
			}
		}
	}

}
