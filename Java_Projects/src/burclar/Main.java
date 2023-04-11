package burclar;

import java.util.Scanner;

public abstract class Main implements Metotlar{
	int ay,gun;
	String burc = null;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
	        
			Burclar nesne1 = new Burclar();
			
			Scanner get = new Scanner(System.in);
			
			System.out.println("Burç Hesaplama Programı");
			
			System.out.print("Hangi ayda doğdunuz (1-12): ");
			nesne1.ay = get.nextInt();
			
			System.out.print("O ayın hangi gününde doğdunuz (1-31): ");
			nesne1.gun = get.nextInt();
	        
	        
	        if ((nesne1.ay >= 1 && nesne1.ay <=12) && (nesne1.gun >= 1 && nesne1.gun<=31)){
	        	nesne1.burc_hesapla();

	        }else {
	        	System.out.println("Hatalı giriş yaptınız. Lütfen burcunuzun ayını 1 ile 12 arasında, burcunuzun gününü ise 1 ile 31 arasında  bir sayısal değer olarak giriniz.");
	        }
	        
	        
	}
}

