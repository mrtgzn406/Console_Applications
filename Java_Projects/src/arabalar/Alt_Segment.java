package arabalar;

public class Alt_Segment extends Main{
	
	String vites_türü;
	double motor_hacmi;

	@Override
	public void benzin_tüketimini_hesapla() {
		// TODO Auto-generated method stub
		
		if(vites_türü == "otomatik") {
			System.out.println("Bu araç otomatik vites olduğu için daha çok yakıt tüketir.");
		}
		else if(vites_türü == "manuel") {
			System.out.println("Bu araç manuel vites olduğu için daha az yakıt tüketir.");	
		}
		else {
			System.out.println("Lütfen değer olarak sadece 'otomatik' veya 'manuel' giriniz.");
		}
	}

	@Override
	public void vergili_fiyatını_bul() {
		// TODO Auto-generated method stub
		
		if(motor_hacmi >= 2.0) {
			vergi_maliyeti = fiyat * 0.30;
			vergili_fiyat = fiyat + vergi_maliyeti;
			System.out.println("Bu aracın motor hacmi 2.0 veya onun üstüdür, bundan dolayı araca %30 ÖTV uygulanacaktır. Vergili fiyat " +vergili_fiyat);
			
		}
		else {
			System.out.println("Bu aracın motor hacmi 2.0'ın altında olduğu için araca ÖTV uygulanmayacaktır. Aracın fiyatı hâlâ "+fiyat);
		}
		
	}

}
