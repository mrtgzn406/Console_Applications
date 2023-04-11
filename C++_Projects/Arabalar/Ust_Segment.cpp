#include <iostream>;
#include <string>;

using namespace std;

#include "Arayuz.h";
#include "Anasayfa.h";



class Ust_Segment : public Arayuz, public Anasayfa {
public:
	string yakitTuru;

	virtual void benzinTuketiminiHesapla() override {

		cout << "Bu aracýn hangi tür yakýt kullandýðýný giriniz (benzin / dizel / lpg): ";
		cin >> yakitTuru;


		if (yakitTuru == "benzin") {
			cout << "Bu araba benzinli olduðu için en çok yakýt tüketen arabadýr." << endl;

		}
		else if (yakitTuru == "dizel") {
			cout << "Bu araba dizel olduðu için benzinden daha az yakýt, lpgliden daha çok yakýt tüketir." << endl;
		}
		else if (yakitTuru == "lpg") {
			cout << "Bu arada lpgli olduðu için en az yakýt tüketen arabadýr." << endl;
		}
		else
		{
			cout << "Lütfen sadece 'benzin', 'dizel', 'lpg' yazýnýz." << endl;
		}
	}

	virtual void vergiliFiyatiHesapla() override {

		cout << "Bu aracýn fiyatýný ABD dolarý cinsinden sadece sayýlarla giriniz: ";
		cin >> fiyat;

		if (fiyat >= 10000)
		{
			vergiMaliyeti = fiyat * 0.80;
			vergiliFiyat = fiyat + vergiMaliyeti;
			cout << "Bu aracýn fiyatý 10000 dolarý aþtýðý için araca %80 ÖTV eklenmiþtir. Vergili fiyat = " << vergiliFiyat << " dolardýr" << endl;
		}
		else
		{
			cout << "Bu aracýn fiyatý 10000 dolarý aþmadýðý için ÖTV uygulanmayacaktýr." << endl;
		}
	}

};


