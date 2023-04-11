package Ortalama_ve_Devamsizlik;

import java.util.Scanner;

public abstract class anasayfa implements fonksiyonlar{
	
	int devamsızlık, devamsızlıkHakkı;
	double ortalama;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Universite uni = new Universite();
		
		uni.notumuHesapla();
		uni.yoklamaDurumumuGöster();
		
		
		Lise lise = new Lise();
		
		lise.notumuHesapla();
		lise.yoklamaDurumumuGöster();
	}

}
