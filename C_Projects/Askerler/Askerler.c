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

	printf("Bu askerin �e�idi %s, can� %d puan, vuru� ba��na verdi�i hasar %d puan, \netkili menzili %d karo ve hareket h�z� saniyede %.3lf karo'dur.\n", askerCesidi, can, hasar, menzil, hareketHizi);
}

int main() {
	setlocale(LC_ALL, "Turkish");


	int secim = 1;

	printf("Hangi asker t�r�n�n �zelliklerini g�rmek istedi�inizi say�yla giriniz \n( M�zrakl� Asker = 1, Atl� Asker = 2, Ok�u Asker = 3): ");
	scanf_s("%d", &secim);

	printf("\n");

	struct ASKER mizrakliAsker = { "M�zrakl� Asker", 200, 30, 2, 1.25 };
	struct ASKER atliAsker = { "Atl� Asker", 250, 40, 2, 1.92 };
	struct ASKER okcuAsker = { "Ok�u Asker", 150, 60, 7, 1.25 };

	switch (secim)
	{
	case 1: askerOzellikleri(mizrakliAsker.askerCesidi, mizrakliAsker.can, mizrakliAsker.hasar, mizrakliAsker.menzil, mizrakliAsker.hareketHizi); break;

	case 2: askerOzellikleri(atliAsker.askerCesidi, atliAsker.can, atliAsker.hasar, atliAsker.menzil, atliAsker.hareketHizi); break;

	case 3: askerOzellikleri(okcuAsker.askerCesidi, okcuAsker.can, okcuAsker.hasar, okcuAsker.menzil, okcuAsker.hareketHizi); break;

	default: printf("L�tfen sadece 1 - 3 say�lar� aras�nda se�im yap�n�z, yaln�zca 3 asker t�r� vard�r."); break;
	}


	return 0;
}