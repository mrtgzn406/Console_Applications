#include <iostream>;
#include <string>;

using namespace std;

#include "Arayuz.h";
#include "Anasayfa.h";



class Ust_Segment : public Arayuz, public Anasayfa {
public:
	string yakitTuru;

	virtual void benzinTuketiminiHesapla() override {

		cout << "Bu arac�n hangi t�r yak�t kulland���n� giriniz (benzin / dizel / lpg): ";
		cin >> yakitTuru;


		if (yakitTuru == "benzin") {
			cout << "Bu araba benzinli oldu�u i�in en �ok yak�t t�keten arabad�r." << endl;

		}
		else if (yakitTuru == "dizel") {
			cout << "Bu araba dizel oldu�u i�in benzinden daha az yak�t, lpgliden daha �ok yak�t t�ketir." << endl;
		}
		else if (yakitTuru == "lpg") {
			cout << "Bu arada lpgli oldu�u i�in en az yak�t t�keten arabad�r." << endl;
		}
		else
		{
			cout << "L�tfen sadece 'benzin', 'dizel', 'lpg' yaz�n�z." << endl;
		}
	}

	virtual void vergiliFiyatiHesapla() override {

		cout << "Bu arac�n fiyat�n� ABD dolar� cinsinden sadece say�larla giriniz: ";
		cin >> fiyat;

		if (fiyat >= 10000)
		{
			vergiMaliyeti = fiyat * 0.80;
			vergiliFiyat = fiyat + vergiMaliyeti;
			cout << "Bu arac�n fiyat� 10000 dolar� a�t��� i�in araca %80 �TV eklenmi�tir. Vergili fiyat = " << vergiliFiyat << " dolard�r" << endl;
		}
		else
		{
			cout << "Bu arac�n fiyat� 10000 dolar� a�mad��� i�in �TV uygulanmayacakt�r." << endl;
		}
	}

};


