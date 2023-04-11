#include <stdio.h>
#include <string.h>
#include <locale.h>

	void ATM (){
		int paraCekme = 1;
		int paraYatirma = 2;
		int paraGonderme = 3;
		int faturaOdeme = 4;

		double bakiye = 15320;
		int islem;
		int islemTutari;

		printf("ATM'de hangi i�lemi yapmak istedi�inizi tu�ay�n \n(para �ekme = 1 /para g�nderme = 2 / para yatirma = 3 / fatura �deme = 4): ");
		scanf_s("%d", &islem);

		printf("\n");

		if (islem == 1)
		{
			printf("Ne kadar para �ekmek istiyorsunuz ?: ");
			scanf_s("%d", &islemTutari);

			if (bakiye < islemTutari)
			{
				printf("�ekmek istedi�iniz tutar bakiyenizi a�t��� i�in i�lem yap�lamad�.");
			}
			else if (bakiye >= islemTutari && islemTutari > 10) {
				bakiye = bakiye - islemTutari;
				printf("Bakiyenizden %d lira tutar�nda para �ektiniz, bakiyenizde %.2lf lira kald�.", islemTutari, bakiye);
			}
			else {
				printf("�ekmek istedi�iniz tutar 10 liradan daha a�a��da olamaz");
			}

		

		}
		else if (islem == 2) {
			printf("Ne kadar para yat�rmak istiyorsunuz ?: ");
			scanf_s("%d", &islemTutari);

			if (islemTutari < 10)
			{
				printf("Bakiyenize ancak 10 lira ve �zeri paray� y�kleyebilirsiniz");
			}
			else {
				bakiye = bakiye + islemTutari;
				printf("Bakiyenize %d lira tutar�nda para y�klediniz, yeni bakiyeniz %.2lf lira oldu.", islemTutari, bakiye);
			}
		}
		else if (islem == 3) {
			printf("Ne kadar para g�ndermek istiyorsunuz ?: ");
			scanf_s("%d", &islemTutari);

			if (bakiye < islemTutari)
			{
				printf("G�ndermek istedi�iniz tutar bakiyenizi a�t��� i�in i�lem yap�lamad�.");
			}
			else if (bakiye >= islemTutari && islemTutari >= 1) {
				bakiye = bakiye - islemTutari;
				printf("Bakiyenizden %d lira tutar�nda para g�nderdiniz, bakiyenizde %.2lf lira kald�.", islemTutari, bakiye);
			}
			else {
				printf("G�ndermek istedi�iniz tutar 1 liradan daha a�a��da olamaz");
			}
		}
		else if (islem == 4) {
			int internetFaturasi = 254;
			int suFaturasi = 97;
			int elektrikFaturasi = 460;
			int dogalgazFaturasi = 891;

			int fatura;
			printf("Hangi faturay� �demek istiyorsan�z yaz�n�z  \n(elektrik = 1 / su = 2 / internet = 3 / do�algaz = 4): ");
			scanf_s("%d", &fatura);



			if (fatura == 1)
			{
				if (bakiye < elektrikFaturasi) {
					printf("Fatura tutar� bakiyenizi a�t���ndan dolay� fatura �denemedi");
				}
				else if (bakiye >= elektrikFaturasi) {
					bakiye = bakiye - elektrikFaturasi;
					printf("%d lira tutar�ndaki elektrik faturan�z� �dediniz, bakiyenizde %.2lf lira kald�.", elektrikFaturasi,  bakiye);

				}
			}
			else if (fatura == 2)
			{
				if (bakiye < suFaturasi) {
					printf("Fatura tutar� bakiyenizi a�t���ndan dolay� fatura �denemedi");
				}
				else if (bakiye >= suFaturasi) {
					bakiye = bakiye - suFaturasi;
					printf("%d lira tutar�ndaki su faturan�z� �dediniz, bakiyenizde %.2lf lira kald�.", suFaturasi, bakiye);

				}
			}
			else if (fatura == 3)
			{
				if (bakiye < internetFaturasi) {
					printf("Fatura tutar� bakiyenizi a�t���ndan dolay� fatura �denemedi");
				}
				else if (bakiye >= internetFaturasi) {
					bakiye = bakiye - internetFaturasi;
					printf("%d lira tutar�ndaki internet faturan�z� �dediniz, bakiyenizde %.2lf lira kald�.",internetFaturasi, bakiye);

				}
			}
			else if (fatura == 4)
			{
				if (bakiye < dogalgazFaturasi) {
					printf("Fatura tutar� bakiyenizi a�t���ndan dolay� fatura �denemedi");
				}
				else if (bakiye >= dogalgazFaturasi) {
					bakiye = bakiye - dogalgazFaturasi;
					printf("%d lira tutar�ndaki do�algaz faturan�z� �dediniz, bakiyenizde %.2lf lira kald�.", dogalgazFaturasi, bakiye);

				}
			}
			else {
				printf("l�tfen 1'den 4'e kadar bir say� giriniz");
			}




		}


	};



	int main() {

		setlocale(LC_ALL, "Turkish");
		//setlocale(LC_ALL, "");

		ATM();

		return 0;
	};
