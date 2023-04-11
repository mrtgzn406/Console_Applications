package Magaza;
import java.util.Scanner;

public abstract class Anasayfa implements Arayuz{
	int UrunKodu;
	String UrunAdi;
	float urunAgirligi;
	String urununUlkesi;

	public Anasayfa(int urunKodu, String urunAdi, float urunAgirligi, String urununUlkesi) {
		super();
		UrunKodu = urunKodu;
		UrunAdi = urunAdi;
		this.urunAgirligi = urunAgirligi;
		this.urununUlkesi = urunMensei;
	}
	
	abstract void nasil_satilacak();

	public static void main(String[] args) {
		
		
		Gıda gıda1 = new Gıda(5648, "Krem Peynir", 0.5f, urunMensei);
		
		gıda1.genel_ozellikleri_goster();
		gıda1.RafOmru = 90;
		gıda1.nasil_satilacak();
		gıda1.RafOmru = 4;
		gıda1.nasil_satilacak();
		
		/* *********************************************************************************** */
		
		Kozmetik kozmetik1 = new Kozmetik(9875, "deodorant", 1.1f, urunMensei);
		
		kozmetik1.genel_ozellikleri_goster();
		kozmetik1.kozmetik_turu = "hijyen";
		kozmetik1.nasil_satilacak();
		kozmetik1.kozmetik_turu = "makyaj";
		kozmetik1.nasil_satilacak();
		
		/* *********************************************************************************** */
		
		Yapı_Malzemeleri yapı1 = new Yapı_Malzemeleri(6493, "boya", 3.4f, urunMensei );
		
		yapı1.genel_ozellikleri_goster();
		yapı1.nasil_satilacak();
		
		/* *********************************************************************************** */
		
		Oyuncaklar oyuncak1 = new Oyuncaklar(9142, "aküllü araba", 5.0f, urunMensei);
		
		oyuncak1.genel_ozellikleri_goster();
		
		Scanner veri_al = new Scanner(System.in);
		System.out.print("Bu oyuncakta yutulabilir parça var mı ? (true/false) :");
		oyuncak1.veri = veri_al.nextBoolean();
		oyuncak1.nasil_satilacak();
		
		
		
		
		
		 	
		
		
			
		
	}



}
