package arabalar;

public class Ust_Segment extends Main{
	
	String yakıt_türü;

	@Override
	public void benzin_tüketimini_hesapla() {
		// TODO Auto-generated method stub
		
		if (yakıt_türü == "benzin") {
			System.out.println("Bu araba benzinli olduğu için en çok yakıt tüketen arabadır.");
		} 
		else if (yakıt_türü == "dizel"){
			System.out.println("Bu araba dizel olduğu için benzinden daha az yakıt, lpgliden daha çok yakıt tüketir.");
		}
		else if(yakıt_türü == "lpg") {
			System.out.println("Bu arada lpgli olduğu için en az yakıt tüketen arabadır.");
		} 
		else {
			System.out.println("Lütfen sadece 'benzin', 'dizel', 'lpg' yazınız.");
		}
	}

	@Override
	public void vergili_fiyatını_bul() {
		// TODO Auto-generated method stub
		
		if(fiyat >= 10000) {
			vergi_maliyeti = fiyat * 0.80;
			vergili_fiyat = fiyat + vergi_maliyeti;
			System.out.println("Bu aracın fiyatı 10000 doları aştığı için araca %80 ÖTV eklenmiştir. Vergili fiyat = "+vergili_fiyat);
		}
		else {
			System.out.println("Bu aracın fiyatı 10000 doları aşmadığı için ÖTV uygulanmayacaktır.");
		}
		
	}
	
}
