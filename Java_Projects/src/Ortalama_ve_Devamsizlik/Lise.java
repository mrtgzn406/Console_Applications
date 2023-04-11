package Ortalama_ve_Devamsizlik;

import java.util.Scanner;

public class Lise extends anasayfa{
	
	int sınav_1, sınav_2, sözlüNotu;
	
	
	@Override
	public void notumuHesapla() {
		// TODO Auto-generated method stub
		
		Scanner puan_al = new Scanner(System.in);
		
		System.out.print("1. sınav notunuzu giriniz: ");
		sınav_1 = puan_al.nextInt();
		
		System.out.print("2. sınav notunuzu giriniz: ");
		sınav_2 = puan_al.nextInt();
		
		System.out.print("Sözlü notunuzu giriniz: ");
		sözlüNotu = puan_al.nextInt();
		
		
		
		ortalama = (sınav_1 + sınav_2 + sözlüNotu) / 3;
		
		if (ortalama >= 50 && ortalama <= 100) {
			System.out.println("Bu sınıfı eğer devamsızlık hakkınızı aşmadıysanız geçtiniz.");
		} 
		else if(ortalama >= 0 && ortalama < 50){
			System.out.println("Bu sınıfı genel not ortalamanız 50 aşağısında olduğu için geçemediniz, sınıfta kaldınız.");
			
		}
		else {
			System.out.println("Not skalasının dışına çıktınız, lütfen 0 ila 100 arasında bir not giriniz." );
		}
		
	}

	@Override
	public void yoklamaDurumumuGöster() {
		// TODO Auto-generated method stub
			
		devamsızlıkHakkı = 20;
		
		Scanner devamsızlık_al = new Scanner(System.in);
		
		System.out.println("Devamsızlığınızı giriniz: ");
		devamsızlık = devamsızlık_al.nextInt();
		
		if(devamsızlık > devamsızlıkHakkı) {
			
			System.out.println("Bu sınıftaki toplam devamsızlık hakkınızı aştığınızdan dolayı sınıfta kaldınız. ");
		}
		else if(devamsızlık == devamsızlıkHakkı) {
			System.out.println("Bu sınıf için devamsızlık hakkınızı doldurdunuz, daha fazla devamsızlık sınıfta kalmanıza sebep olur.");
			
		}
		else if (devamsızlık < devamsızlıkHakkı){
			
			int gun = devamsızlıkHakkı - devamsızlık;
			
			System.out.println("Bu sınıf için şu an "+gun+" gün devamsızlık hakkınız bulunmaktadır.");
		}
		else {
			System.out.println("Hatalı giriş. Lütfen devamsızlığı 0'dan büyük bir tam sayı olarak giriniz.");
		}
	}

}
