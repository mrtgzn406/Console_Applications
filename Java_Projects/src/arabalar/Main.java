package arabalar;

public abstract class Main implements Arayuz{
	
	String araba_adı;
	double fiyat;
	double vergi_maliyeti;
	double vergili_fiyat;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Ust_Segment araba1 = new Ust_Segment();
		
		araba1.araba_adı = "Ford Mustang";
		araba1.fiyat = 10851.45;
		araba1.vergili_fiyatını_bul();
		
		araba1.fiyat = 9875.74;
		araba1.vergili_fiyatını_bul();
		
		araba1.yakıt_türü = "lpg";
		araba1.benzin_tüketimini_hesapla();
		
		araba1.yakıt_türü = "benzin";
		araba1.benzin_tüketimini_hesapla();
		
		//---------------------------------------------
		
		Alt_Segment araba2 = new Alt_Segment();
		
		araba2.araba_adı = "renault clio";
		araba2.fiyat = 3210.80;
		
		araba2.motor_hacmi = 2.5;
		araba2.vergili_fiyatını_bul();
		
		araba2.motor_hacmi = 1.6;
		araba2.vergili_fiyatını_bul();
		
		araba2.vites_türü = "otomatik";
		araba2.benzin_tüketimini_hesapla();
		
		araba2.vites_türü = "manuel";
		araba2.benzin_tüketimini_hesapla();
		
		
		

		
	}

}
