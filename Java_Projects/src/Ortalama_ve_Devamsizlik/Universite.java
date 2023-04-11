package Ortalama_ve_Devamsizlik;

import java.util.Scanner;

public class Universite extends anasayfa{

	int vize, finall;

	
	@Override
	public void notumuHesapla() {
		// TODO Auto-generated method stub
		
		Scanner not_al = new Scanner(System.in);	
		
		System.out.print("Vize sınavından kaç aldınız: ");	
		vize = not_al.nextInt();	
		
		System.out.print("Final sınavından kaç aldınız: ");
		finall = not_al.nextInt();
		
		ortalama = (vize * 0.40) + (finall * 0.60);
		
		if (ortalama >= 60 && ortalama <= 100) {
			System.out.println("Bu dersi eğer devamsızlık hakkınızı aşmadıysanız geçtiniz.");
		} 
		else if(ortalama >= 45 && ortalama < 60){
			System.out.println("Bu dersten eğer devamsızlık hakkınızı aşmadıysanız ve ağırlıklı genel not ortalamanız 2.0 ve üzerindeyse sorumlu geçebilirsiniz, değilse kalırsınız.");
			
		}
		else if(ortalama >= 0 && ortalama < 45 ){
			System.out.println("Not ortalamanız çok düşük olduğu için bu dersten kaldınız. Dersi tekrar almanız gerek.");
			}
		else {
			System.out.println("Not skalasının dışına çıktınız, lütfen 0 ila 100 arasında bir not giriniz." );
		}
	}

	@Override
	public void yoklamaDurumumuGöster() {
		// TODO Auto-generated method stub
		
		devamsızlıkHakkı = 30;
		
		Scanner yoklama_al = new Scanner(System.in);
		
		System.out.print("Devamsızlığınızı giriniz: ");
		devamsızlık = yoklama_al.nextInt();
		
		
			if(devamsızlık > devamsızlıkHakkı) {
				
				System.out.println("Bu ders için devamsızlık hakkınızı aştığınızdan dolayı dersten kaldınız. ");
			}
			else if(devamsızlık == devamsızlıkHakkı) {
				System.out.println("Bu ders için devamsızlık hakkınızı doldurdunuz, daha fazla devamsızlık dersten kalmanıza sebep olur.");
				
			}
			else if (devamsızlık < devamsızlıkHakkı){
				
				int gun = devamsızlıkHakkı - devamsızlık;
				
				System.out.println("Bu ders için şu an "+gun+" gün devamsızlık hakkınız bulunmaktadır.");
			}
			else {
				System.out.println("Hatalı giriş. Lütfen devamsızlığı 0'dan büyük bir tam sayı olarak giriniz.");
			}
		
		
	}

}
