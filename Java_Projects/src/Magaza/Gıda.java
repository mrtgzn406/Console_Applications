package Magaza;

public class Gıda extends Anasayfa{
	int RafOmru;

	public Gıda(int urunKodu, String urunAdi, float urunAgirligi, String urununUlkesi) {
		super(urunKodu, urunAdi, urunAgirligi, urununUlkesi);
	}

	public void genel_ozellikleri_goster() {
		System.out.println(String.format("Bu gıdanın ürün kodu: %d, ürün adı %s, ürün ağırlığı: %.3f kilogram, urunun menşei ise %s gözükmektedir", UrunKodu, UrunAdi, urunAgirligi, urunMensei  ));
		
	}

	void nasil_satilacak() {
		if (RafOmru <= 5) {
			System.out.println("Bu gıda ürünü satılamaz, raf ömrü geçmek üzere");
		} else {
			System.out.println("Bu gıda ürünü satılabilir, raf ömrü yeterli.");
		}
	}
	
	

	
	
	
}
