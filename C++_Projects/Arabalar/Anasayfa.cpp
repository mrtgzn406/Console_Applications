#include <iostream>
using namespace std;

#include "Anasayfa.h";
#include "Alt_Segment.cpp";
#include "Ust_Segment.cpp";

#include <locale>;
// Bu kod da yine evrensel karakterleri C++ diline tan�tmak i�in yaz�lm��t�r.




int main()
{
	// Bu kodu C++ ile console ��kt� ��kard���m�zda b�t�n karakterleri tan�s�n ve ��kt�da d�zg�n g�stersin diye yazd�k.
	// �stesek sadece T�rk�e karakterleri de tan�tabilirdik ama biz bunu yazarak b�t�n evrensel (unicode) karakterleri tan�tt�k.
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

