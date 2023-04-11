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

		printf("ATM'de hangi işlemi yapmak istediğinizi tuşayın \n(para çekme = 1 /para gönderme = 2 / para yatirma = 3 / fatura ödeme = 4): ");
		scanf_s("%d", &islem);

		printf("\n");

		if (islem == 1)
		{
			printf("Ne kadar para çekmek istiyorsunuz ?: ");
			scanf_s("%d", &islemTutari);

			if (bakiye < islemTutari)
			{
				printf("Çekmek istediğiniz tutar bakiyenizi aştığı için işlem yapılamadı.");
			}
			else if (bakiye >= islemTutari && islemTutari > 10) {
				bakiye = bakiye - islemTutari;
				printf("Bakiyenizden %d lira tutarında para çektiniz, bakiyenizde %.2lf lira kaldı.", islemTutari, bakiye);
			}
			else {
				printf("Çekmek istediğiniz tutar 10 liradan daha aşağıda olamaz");
			}

		

		}
		else if (islem == 2) {
			printf("Ne kadar para yatırmak istiyorsunuz ?: ");
			scanf_s("%d", &islemTutari);

			if (islemTutari < 10)
			{
				printf("Bakiyenize ancak 10 lira ve üzeri parayı yükleyebilirsiniz");
			}
			else {
				bakiye = bakiye + islemTutari;
				printf("Bakiyenize %d lira tutarında para yüklediniz, yeni bakiyeniz %.2lf lira oldu.", islemTutari, bakiye);
			}
		}
		else if (islem == 3) {
			printf("Ne kadar para göndermek istiyorsunuz ?: ");
			scanf_s("%d", &islemTutari);

			if (bakiye < islemTutari)
			{
				printf("Göndermek istediğiniz tutar bakiyenizi aştığı için işlem yapılamadı.");
			}
			else if (bakiye >= islemTutari && islemTutari >= 1) {
				bakiye = bakiye - islemTutari;
				printf("Bakiyenizden %d lira tutarında para gönderdiniz, bakiyenizde %.2lf lira kaldı.", islemTutari, bakiye);
			}
			else {
				printf("Göndermek istediğiniz tutar 1 liradan daha aşağıda olamaz");
			}
		}
		else if (islem == 4) {
			int internetFaturasi = 254;
			int suFaturasi = 97;
			int elektrikFaturasi = 460;
			int dogalgazFaturasi = 891;

			int fatura;
			printf("Hangi faturayı ödemek istiyorsanız yazınız  \n(elektrik = 1 / su = 2 / internet = 3 / doğalgaz = 4): ");
			scanf_s("%d", &fatura);



			if (fatura == 1)
			{
				if (bakiye < elektrikFaturasi) {
					printf("Fatura tutarı bakiyenizi aştığından dolayı fatura ödenemedi");
				}
				else if (bakiye >= elektrikFaturasi) {
					bakiye = bakiye - elektrikFaturasi;
					printf("%d lira tutarındaki elektrik faturanızı ödediniz, bakiyenizde %.2lf lira kaldı.", elektrikFaturasi,  bakiye);

				}
			}
			else if (fatura == 2)
			{
				if (bakiye < suFaturasi) {
					printf("Fatura tutarı bakiyenizi aştığından dolayı fatura ödenemedi");
				}
				else if (bakiye >= suFaturasi) {
					bakiye = bakiye - suFaturasi;
					printf("%d lira tutarındaki su faturanızı ödediniz, bakiyenizde %.2lf lira kaldı.", suFaturasi, bakiye);

				}
			}
			else if (fatura == 3)
			{
				if (bakiye < internetFaturasi) {
					printf("Fatura tutarı bakiyenizi aştığından dolayı fatura ödenemedi");
				}
				else if (bakiye >= internetFaturasi) {
					bakiye = bakiye - internetFaturasi;
					printf("%d lira tutarındaki internet faturanızı ödediniz, bakiyenizde %.2lf lira kaldı.",internetFaturasi, bakiye);

				}
			}
			else if (fatura == 4)
			{
				if (bakiye < dogalgazFaturasi) {
					printf("Fatura tutarı bakiyenizi aştığından dolayı fatura ödenemedi");
				}
				else if (bakiye >= dogalgazFaturasi) {
					bakiye = bakiye - dogalgazFaturasi;
					printf("%d lira tutarındaki doğalgaz faturanızı ödediniz, bakiyenizde %.2lf lira kaldı.", dogalgazFaturasi, bakiye);

				}
			}
			else {
				printf("lütfen 1'den 4'e kadar bir sayı giriniz");
			}




		}


	};



	int main() {

		setlocale(LC_ALL, "Turkish");
		//setlocale(LC_ALL, "");

		ATM();

		return 0;
	};
