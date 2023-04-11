#include <iostream>;
using namespace std;

#include "Arayuz.h";
#include "Anasayfa.h";

class Alt_Segment : public Arayuz, public Anasayfa {

public:
	string vitesTuru;
	double motorHacmi;
	// Inherited via Arayuz
	virtual void benzinTuketiminiHesapla() override
	{
		if (vitesTuru == "otomatik") {
			std::cout << "Bu ara� otomatik vites oldu�u i�in daha �ok yak�t t�ketir.\n";
		}
		else if (vitesTuru == "manuel") {
			cout << "Bu ara� manuel vites oldu�u i�in daha az yak�t t�ketir.\n";
		}
		else {
			cout << "L�tfen de�er olarak sadece 'otomatik' veya 'manuel' giriniz.\n";
		}
	}

	virtual void vergiliFiyatiHesapla() override
	{
		if (motorHacmi >= 2.0)
		{
			vergiMaliyeti = fiyat * 0.30;
			vergiliFiyat = fiyat + vergiMaliyeti;

			printf("Bu arac�n motor hacmi 2.0 veya onun �st�d�r, bundan dolay� araca %30 �TV uygulanacakt�r. Vergili fiyat %.2lf TL'dir \n", vergiliFiyat);
		}
		else
		{
			printf("Bu arac�n motor hacmi 2.0'�n alt�nda oldu�u i�in araca �TV uygulanmayacakt�r. Arac�n fiyat� h�l� %.2lf TL'dir \n", fiyat);
		}
	}

};

