#include <iostream>;


class Arayuz {
public:
    virtual void hangiDerslerVar() = 0;
};


class ilkokul : public Arayuz {
public:
    void Arayuz::hangiDerslerVar() {
        std::cout << "�lkokulda hayat bilgisi, matematik ve t�rk�e dersleri vard�r." << std::endl;
    }
};

class ortaokul : public Arayuz {
public:
    void Arayuz::hangiDerslerVar() {
        std::cout << "Ortaokulda fen,  matematik, sosyal bilgiler, ingilizce, t�rk�e, beden e�itimi dersleri vard�r" << std::endl;
    }
};

class lise : public Arayuz {
public:
    void Arayuz::hangiDerslerVar() {
        std::cout << "Lisede co�rafya, fizik, kimya, biyoloji, ink�lap tarihi, matematik, beden e�itimi, din k�lt�r�, edebiyat dersleri vard�r" << std::endl;
    }
};

int main() {
    std::locale::global(std::locale(""));

    ilkokul ogrenci1;
    ogrenci1.hangiDerslerVar();

    ortaokul ogrenci2;
    ogrenci2.hangiDerslerVar();

    lise ogrenci3;
    ogrenci3.hangiDerslerVar();
}

