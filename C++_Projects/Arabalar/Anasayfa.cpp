#include <iostream>
using namespace std;

#include "Anasayfa.h";
#include "Alt_Segment.cpp";
#include "Ust_Segment.cpp";

#include <locale>;
// Bu kod da yine evrensel karakterleri C++ diline tanýtmak için yazýlmýþtýr.




int main()
{
	// Bu kodu C++ ile console çýktý çýkardýðýmýzda bütün karakterleri tanýsýn ve çýktýda düzgün göstersin diye yazdýk.
	// Ýstesek sadece Türkçe karakterleri de tanýtabilirdik ama biz bunu yazarak bütün evrensel (unicode) karakterleri tanýttýk.
	std::locale::global(std::locale(""));

	Alt_Segment araba1;

	araba1.arabaAdi = "Renault Clio";
	araba1.fiyat = 345.741;

	araba1.vitesTuru = "manuel";
	araba1.benzinTuketiminiHesapla();

	araba1.vitesTuru = "otomatik";
	araba1.benzinTuketiminiHesapla();

	araba1.motorHacmi = 1.6;
	araba1.vergiliFiyatiHesapla();

	araba1.motorHacmi = 2.4;
	araba1.vergiliFiyatiHesapla();

	//----------------------------------------------

	Ust_Segment araba2;

	araba2.benzinTuketiminiHesapla();
	araba2.vergiliFiyatiHesapla();



}

