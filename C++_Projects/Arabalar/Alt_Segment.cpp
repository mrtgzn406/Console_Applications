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
			std::cout << "Bu araç otomatik vites olduðu için daha çok yakýt tüketir.\n";
		}
		else if (vitesTuru == "manuel") {
			cout << "Bu araç manuel vites olduðu için daha az yakýt tüketir.\n";
		}
		else {
			cout << "Lütfen deðer olarak sadece 'otomatik' veya 'manuel' giriniz.\n";
		}
	}

	virtual void vergiliFiyatiHesapla() override
	{
		if (motorHacmi >= 2.0)
		{
			vergiMaliyeti = fiyat * 0.30;
			vergiliFiyat = fiyat + vergiMaliyeti;

			printf("Bu aracýn motor hacmi 2.0 veya onun üstüdür, bundan dolayý araca %30 ÖTV uygulanacaktýr. Vergili fiyat %.2lf TL'dir \n", vergiliFiyat);
		}
		else
		{
			printf("Bu aracýn motor hacmi 2.0'ýn altýnda olduðu için araca ÖTV uygulanmayacaktýr. Aracýn fiyatý hâlâ %.2lf TL'dir \n", fiyat);
		}
	}

};

