#include <stdio.h>
#include <locale.h>
#include <string.h>



struct ASKER {
	char askerCesidi[25];
	int can;
	int hasar;
	int menzil;
	double hareketHizi;

};

void askerOzellikleri(char askerCesidi[25], int can, int hasar, int menzil, double hareketHizi) {

	printf("Bu askerin çeþidi %s, caný %d puan, vuruþ baþýna verdiði hasar %d puan, \netkili menzili %d karo ve hareket hýzý saniyede %.3lf karo'dur.\n", askerCesidi, can, hasar, menzil, hareketHizi);
}

int main() {
	setlocale(LC_ALL, "Turkish");


	int secim = 1;

	printf("Hangi asker türünün özelliklerini görmek istediðinizi sayýyla giriniz \n( Mýzraklý Asker = 1, Atlý Asker = 2, Okçu Asker = 3): ");
	scanf_s("%d", &secim);

	printf("\n");

	struct ASKER mizrakliAsker = { "Mýzraklý Asker", 200, 30, 2, 1.25 };
	struct ASKER atliAsker = { "Atlý Asker", 250, 40, 2, 1.92 };
	struct ASKER okcuAsker = { "Okçu Asker", 150, 60, 7, 1.25 };

	switch (secim)
	{
	case 1: askerOzellikleri(mizrakliAsker.askerCesidi, mizrakliAsker.can, mizrakliAsker.hasar, mizrakliAsker.menzil, mizrakliAsker.hareketHizi); break;

	case 2: askerOzellikleri(atliAsker.askerCesidi, atliAsker.can, atliAsker.hasar, atliAsker.menzil, atliAsker.hareketHizi); break;

	case 3: askerOzellikleri(okcuAsker.askerCesidi, okcuAsker.can, okcuAsker.hasar, okcuAsker.menzil, okcuAsker.hareketHizi); break;

	default: printf("Lütfen sadece 1 - 3 sayýlarý arasýnda seçim yapýnýz, yalnýzca 3 asker türü vardýr."); break;
	}


	return 0;
}